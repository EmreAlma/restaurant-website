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
  const prevOrderCount = useRef(0);

  useEffect(() => {
    setMounted(true);
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user || !user.token) {
      setError("Bitte zuerst einloggen.");
      return;
    }

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
            let updated;
            if (Array.isArray(payload)) {
              updated = payload.reverse();
            } else {
              const exists = prev.some((o) => o.id === payload.id);
              updated = exists
                ? prev.map((o) => (o.id === payload.id ? payload : o))
                : [payload, ...prev];
            }

            // 🔔 Yeni sipariş bildirimi
            if (updated.length > prevOrderCount.current) {
              if (Notification.permission === "granted") {
                new Notification("Neue Bestellung!", {
                  body: "Ein neuer Auftrag ist eingegangen.",
                });
                new Audio("/ding.mp3").play().catch(() => {});
              } else if (Notification.permission !== "denied") {
                Notification.requestPermission().then((perm) => {
                  if (perm === "granted") {
                    new Notification("Neue Bestellung!", {
                      body: "Ein neuer Auftrag ist eingegangen.",
                    });
                    new Audio("/ding.mp3").play().catch(() => {});
                  }
                });
              }
            }

            prevOrderCount.current = updated.length;
            return updated;
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
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Live-Bestellungen</h1>
      {orders.length === 0 ? (
        <p className="text-gray-600">Keine Bestellungen empfangen.</p>
      ) : (
        orders.map((order) => (
          <div key={order.id} className="mb-6 border border-gray-300 rounded-xl overflow-hidden shadow-sm">
            <div
              className="bg-gradient-to-r from-orange-400 to-orange-500 text-white p-4 cursor-pointer flex justify-between items-center"
              onClick={() => toggleExpand(order.id)}
            >
              <div>
                <p className="font-semibold">Bestellung vom {new Date(order.orderTime).toLocaleString()}</p>
                <p className="text-sm">Status: {order.orderStatus}</p>
              </div>
              <p className="font-semibold text-lg">CHF {order.totalPrice?.toFixed(2)}</p>
            </div>

            {expandedOrderId === order.id && (
              <div className="bg-white p-4 space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-700">Produkte:</h3>
                  {order.orderItems?.map((item, idx) => (
                    <div key={idx} className="border border-gray-200 p-3 rounded mb-2 bg-gray-50">
                      <p className="font-medium">
                        {item.product?.name} x {item.quantity}
                      </p>
                      <p className="text-sm text-gray-600">{item.product?.description}</p>

                      {item.ingredientsToAdd?.length > 0 && (
                        <div className="mt-1 text-sm text-green-600">
                          + Eklenen Malzemeler:
                          <ul className="list-disc list-inside">
                            {item.ingredientsToAdd.map((ing) => (
                              <li key={ing.id}>{ing.name} (+{ing.price} CHF)</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {item.ingredientsToRemove?.length > 0 && (
                        <div className="mt-1 text-sm text-red-600">
                          − Çıkarılan Malzemeler:
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
                  <h3 className="font-semibold text-gray-700">Adres:</h3>
                  <p className="text-sm text-gray-600">
                    {order.address?.street}, {order.address?.postalCode} {order.address?.city}
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-700">Müşteri:</h3>
                  <p className="text-sm text-gray-600">
                    {order.user?.firstName} {order.user?.lastName} ({order.user?.username})
                  </p>
                </div>

                <div className="flex gap-2 mt-2 flex-wrap">
                  {["CREATED", "PREPARING", "ON_WAY", "COMPLETED"].map((status) => (
                    <button
                      key={status}
                      onClick={() => updateOrderStatus(order.id, status)}
                      className={`px-3 py-1 text-xs rounded-full font-semibold ${
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
