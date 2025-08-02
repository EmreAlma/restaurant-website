"use client";

import { useEffect, useRef, useState } from "react";
import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState("");
  const [mounted, setMounted] = useState(false);
  const stompClientRef = useRef(null);
  const audioRef = useRef(null);
  const prevOrderCountRef = useRef(0);

  useEffect(() => {
    setMounted(true);
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user || !user.token) {
      setError("Bitte zuerst einloggen.");
      return;
    }

    audioRef.current = new Audio("/ding.mp3");

    const token = user.token;
    const socket = new SockJS(`${process.env.NEXT_PUBLIC_API_URL}/ws?token=${token}`);
    const client = new Client({
      webSocketFactory: () => socket,
      reconnectDelay: 5000,
      onConnect: () => {
        console.log("✅ WebSocket verbunden");

        client.subscribe("/topic/orders", (message) => {
          const payload = JSON.parse(message.body);
          setOrders((prev) => {
            if (Array.isArray(payload)) return payload.reverse();
            const exists = prev.some((o) => o.id === payload.id);
            return exists
              ? prev.map((o) => (o.id === payload.id ? payload : o))
              : [payload, ...prev];
          });
        });

        client.publish({ destination: "/app/orders/getAll" });
      },
    });

    client.activate();
    stompClientRef.current = client;

    return () => {
      client.deactivate();
    };
  }, []);

  useEffect(() => {
    if (!mounted || !("Notification" in window)) return;

    if (orders.length > prevOrderCountRef.current) {
      Notification.requestPermission().then((perm) => {
        if (perm === "granted") {
          new Notification("Neue Bestellung!", {
            body: "Ein neuer Auftrag ist eingegangen.",
          });
        }
      });
      audioRef.current?.play().catch(() => {});
    }
    prevOrderCountRef.current = orders.length;
  }, [orders]);

  const adjustDeliveryTime = (orderId, minutes) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) => {
        if (order.id === orderId) {
          const newTime = new Date(order.deliveryTime || Date.now());
          newTime.setMinutes(newTime.getMinutes() + minutes);
          return { ...order, deliveryTime: newTime.toISOString() };
        }
        return order;
      })
    );
  };

  const approveOrder = (order) => {
    stompClientRef.current.publish({
      destination: "/app/orders/updateStatus",
      body: JSON.stringify({ id: order.id, orderStatus: "PREPARING", deliveryTime: order.deliveryTime }),
    });
    handlePrint(order);
  };

  const handlePrint = (order) => {
    const printWindow = window.open("", "_blank");
    if (!printWindow) return;

    const html = `
      <html>
        <head>
          <title>Bestellung</title>
          <style>
            body { font-family: sans-serif; padding: 20px; font-size: 14px; }
            h2 { margin-top: 0; }
            ul { padding-left: 20px; }
          </style>
        </head>
        <body>
          <h2>Bestellung #${order.id}</h2>
          <p><strong>Datum:</strong> ${new Date(order.orderTime).toLocaleString()}</p>
          <p><strong>Lieferzeit:</strong> ${order.deliveryTime ? new Date(order.deliveryTime).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : "Nicht angegeben"}</p>
          <p><strong>Kunde:</strong> ${order.user?.firstName} ${order.user?.lastName}</p>
          <p><strong>Adresse:</strong> ${order.address?.street}, ${order.address?.postalCode} ${order.address?.city}</p>
          <hr />
          <h3>Produkte</h3>
          <ul>
            ${order.orderItems
              .map(
                (item) =>
                  `<li>${item.product?.name} x ${item.quantity} – CHF ${item.product?.price?.toFixed(2)}</li>`
              )
              .join("")}
          </ul>
          <p><strong>Gesamt:</strong> CHF ${order.totalPrice?.toFixed(2)}</p>
          <script>
            window.onload = () => {
              window.print();
              window.onafterprint = () => window.close();
            };
          </script>
        </body>
      </html>
    `;

    printWindow.document.write(html);
    printWindow.document.close();
  };

  if (!mounted) return null;
  if (error) return <p className="p-4 text-red-500">{error}</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Live-Bestellungen</h1>
      {orders.length === 0 ? (
        <p className="text-gray-600">Keine Bestellungen empfangen.</p>
      ) : (
        orders.map((order) => (
          <div
            key={order.id}
            className="mb-6 border border-gray-300 rounded-xl overflow-hidden shadow-sm bg-white p-4 space-y-4"
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold">
                  Bestellung vom {new Date(order.orderTime).toLocaleString()}
                </p>
                <p className="text-sm text-gray-600">
                  Lieferzeit: {order.deliveryTime ? new Date(order.deliveryTime).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : "Nicht angegeben"}
                </p>
              </div>
              <p className="font-semibold text-lg">
                CHF {order.totalPrice?.toFixed(2)}
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-700">Produkte:</h3>
              {order.orderItems?.map((item, idx) => (
                <div
                  key={idx}
                  className="border border-gray-200 p-3 rounded mb-2 bg-gray-50"
                >
                  <p className="font-medium">
                    {item.product?.name} x {item.quantity}
                  </p>
                  <p className="text-sm text-gray-600">
                    {item.product?.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-sm text-gray-600">
              <p><strong>Kunde:</strong> {order.user?.firstName} {order.user?.lastName} ({order.user?.username})</p>
              <p><strong>Adresse:</strong> {order.address?.street}, {order.address?.postalCode} {order.address?.city}</p>
            </div>

            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-2">
                <button onClick={() => adjustDeliveryTime(order.id, -10)} className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">−10 Min</button>
                <button onClick={() => adjustDeliveryTime(order.id, 10)} className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">+10 Min</button>
              </div>
              <button
                onClick={() => approveOrder(order)}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                ✅ Bestätigung
              </button>
              <button
                onClick={() => handlePrint(order)}
                className="bg-gray-200 hover:bg-gray-300 text-sm px-3 py-1 rounded shadow"
              >
                🖨️ Drucken
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default OrdersPage;