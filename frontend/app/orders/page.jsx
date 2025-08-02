"use client";

import { useEffect, useState } from "react";
import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";
import { toast } from "react-hot-toast";

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [expandedOrderId, setExpandedOrderId] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user"));
        if (!user || !user.token) {
          setError("Bitte zuerst einloggen.");
          return;
        }

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/orders/my-orders`, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });

        if (!res.ok) throw new Error("Fehler beim Laden der Bestellungen");

        const data = await res.json();
        const sorted = data.sort((a, b) => new Date(b.orderTime) - new Date(a.orderTime));
        setOrders(sorted);

        // WebSocket listener
        const socket = new SockJS(`${process.env.NEXT_PUBLIC_API_URL}/ws?token=${user.token}`);
        const client = new Client({
          webSocketFactory: () => socket,
          reconnectDelay: 5000,
          onConnect: () => {
            client.subscribe("/queue/order-confirmed", (msg) => {
              const updated = JSON.parse(msg.body);
              setOrders((prev) =>
                prev.map((o) => (o.id === updated.id ? { ...o, ...updated } : o))
              );
              toast.success(
                `✅ Ihre Bestellung wurde bestätigt. Geplante Lieferzeit: ${
                  new Date(updated.deliveryTime).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })
                }`
              );
            });
          },
        });
        client.activate();

      } catch (err) {
        setError("Fehler beim Laden der Bestellungen.");
      }
    };

    fetchOrders();
  }, []);

  const toggleExpand = (orderId) => {
    setExpandedOrderId((prev) => (prev === orderId ? null : orderId));
  };

  if (error) return <p className="p-4 text-red-500">{error}</p>;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Meine Bestellungen</h1>
      {orders.length === 0 ? (
        <p>Keine Bestellungen gefunden.</p>
      ) : (
        orders.map((order) => (
          <div key={order.id} className="mb-4 border rounded-lg">
            <div
              onClick={() => toggleExpand(order.id)}
              className="cursor-pointer bg-sunset text-white p-4 flex justify-between items-center rounded-t-lg"
            >
              <div>
                <p className="font-semibold">
                  Bestellung vom {new Date(order.orderTime).toLocaleDateString()}
                </p>
                <p className="text-sm">Status: {order.orderStatus}</p>
              </div>
              <div className="text-sm font-semibold">CHF {order.totalPrice.toFixed(2)}</div>
            </div>
            {expandedOrderId === order.id && (
              <div className="p-4 bg-gray-50 space-y-2">
                {order.orderItems.map((item, idx) => (
                  <div key={idx} className="text-sm">
                    • {item.product?.name} x {item.quantity} – CHF {(item.product?.price * item.quantity).toFixed(2)}
                  </div>
                ))}
                {order.note && <p className="text-sm italic mt-2">Notiz: {order.note}</p>}
                {order.deliveryTime && (
                  <p className="text-sm mt-2">
                    <strong>Geplante Lieferzeit:</strong> {new Date(order.deliveryTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                )}
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default OrdersPage;
