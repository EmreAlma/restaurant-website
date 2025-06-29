"use client";

import { useEffect, useRef, useState } from "react";
import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [expandedOrderId, setExpandedOrderId] = useState(null);
  const [error, setError] = useState("");
  const [mounted, setMounted] = useState(false);
  const stompClientRef = useRef(null); // 🔁 WebSocket client ref

  useEffect(() => {
    setMounted(true);

    const user = JSON.parse(localStorage.getItem("user"));
    if (!user || !user.token) {
      setError("Bitte zuerst einloggen.");
      return;
    }

    const socket = new SockJS(`${process.env.NEXT_PUBLIC_API_URL}/ws`);
    const client = new Client({
      webSocketFactory: () => socket,
      connectHeaders: {
        Authorization: `Bearer ${user.token}`,
      },
      reconnectDelay: 5000,
      onConnect: () => {
        console.log("✅ WebSocket bağlantısı kuruldu");

        client.subscribe("/topic/orders", (message) => {
          const payload = JSON.parse(message.body);
          console.log("Gelen mesaj: ", JSON.parse(message.body));

          setOrders((prev) => {
            if (Array.isArray(payload)) {
              return payload.reverse();
            } else {
              const exists = prev.some((order) => order.id === payload.id);
              if (exists) {
                return prev.map((order) =>
                    order.id === payload.id ? payload : order
                );
              } else {
                return [payload, ...prev];
              }
            }
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

  const toggleExpand = (orderId) => {
    setExpandedOrderId((prev) => (prev === orderId ? null : orderId));
  };

  const updateOrderStatus = (orderId, status) => {
    stompClientRef.current.publish({
      destination: "/app/orders/updateStatus",
      body: JSON.stringify({ id: orderId, orderStatus: status }),
    });
  };

  if (!mounted) return null;
  if (error) return <p className="p-4 text-red-500">{error}</p>;

  return (
      <div className="max-w-3xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6">Live-Bestellungen</h1>
        {orders.length === 0 ? (
            <p>Keine Bestellungen empfangen.</p>
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
                    <div className="text-sm font-semibold">
                      CHF {order.totalPrice?.toFixed(2)}
                    </div>
                  </div>

                  {expandedOrderId === order.id && (
                      <div className="p-4 bg-gray-50 space-y-2">
                        {order.orderItems?.map((item, idx) => (
                            <div key={idx} className="text-sm">
                              • {item.name} ({item.size}) x {item.quantity} – CHF{" "}
                              {item.totalPrice?.toFixed(2)}
                            </div>
                        ))}
                        {order.note && (
                            <p className="text-sm italic mt-2">Notiz: {order.note}</p>
                        )}

                        <div className="flex gap-2 mt-4 flex-wrap">
                          {["CREATED", "PREPARING", "ON_WAY", "COMPLETED"].map((status) => (
                              <button
                                  key={status}
                                  onClick={() => updateOrderStatus(order.id, status)}
                                  className={`px-2 py-1 text-xs rounded ${
                                      order.orderStatus === status
                                          ? "bg-green-600 text-white"
                                          : "bg-blue-500 text-white hover:bg-blue-600"
                                  }`}
                              >
                                {status}
                              </button>
                          ))}
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
