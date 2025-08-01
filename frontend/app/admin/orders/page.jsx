"use client";

import { useEffect, useRef, useState } from "react";
import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [expandedOrderId, setExpandedOrderId] = useState(null);
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

  const toggleExpand = (orderId) => {
    setExpandedOrderId((prev) => (prev === orderId ? null : orderId));
  };

  const updateOrderStatus = (order, status) => {
    stompClientRef.current.publish({
      destination: "/app/orders/updateStatus",
      body: JSON.stringify({ id: order.id, orderStatus: status }),
    });

    if (status === "PREPARING") {
      handlePrint(order);
    }
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
            className="mb-6 border border-gray-300 rounded-xl overflow-hidden shadow-sm"
          >
            <div
              className="bg-gradient-to-r from-orange-400 to-orange-500 text-white p-4 cursor-pointer flex justify-between items-center"
              onClick={() => toggleExpand(order.id)}
            >
              <div>
                <p className="font-semibold">
                  Bestellung vom {new Date(order.orderTime).toLocaleString()}
                </p>
                <p className="text-sm">Status: {order.orderStatus}</p>
              </div>
              <p className="font-semibold text-lg">
                CHF {order.totalPrice?.toFixed(2)}
              </p>
            </div>

            {expandedOrderId === order.id && (
              <div className="bg-white p-4 space-y-4">
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

                      {item.ingredientsToAdd?.length > 0 && (
                        <div className="mt-1 text-sm text-green-600">
                          + Extra Zutaten:
                          <ul className="list-disc list-inside">
                            {item.ingredientsToAdd.map((ing) => (
                              <li key={ing.id}>
                                {ing.name} (+{ing.price} CHF)
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {item.ingredientsToRemove?.length > 0 && (
                        <div className="mt-1 text-sm text-red-600">
                          − Ohne:
                          <ul className="list-disc list-inside">
                            {item.ingredientsToRemove.map((ing) => (
                              <li key={ing.id}>{ing.name}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div>
                  <h3 className="font-semibold text-gray-700">Adresse:</h3>
                  <p className="text-sm text-gray-600">
                    {order.address?.street}, {order.address?.postalCode}{" "}
                    {order.address?.city}
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-700">Kunde:</h3>
                  <p className="text-sm text-gray-600">
                    {order.user?.firstName} {order.user?.lastName} (
                    {order.user?.username})
                  </p>
                </div>

                <div className="flex gap-2 mt-2 flex-wrap">
                  {["CREATED", "PREPARING", "ON_WAY", "COMPLETED"].map(
                    (status) => (
                      <button
                        key={status}
                        onClick={() => updateOrderStatus(order, status)}
                        className={`px-3 py-1 text-xs rounded-full font-semibold ${
                          order.orderStatus === status
                            ? "bg-green-600 text-white"
                            : "bg-blue-500 text-white hover:bg-blue-600"
                        }`}
                      >
                        {status}
                      </button>
                    )
                  )}

                  <button
                    onClick={() => handlePrint(order)}
                    className="bg-gray-200 hover:bg-gray-300 text-sm px-3 py-1 rounded shadow"
                  >
                    🖨️ Drucken
                  </button>
                </div>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default OrdersPage;