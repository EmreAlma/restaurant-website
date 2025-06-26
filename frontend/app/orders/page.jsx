"use client";

import { useEffect, useState } from "react";

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
        const sorted = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setOrders(sorted);
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
                <p className="font-semibold">Bestellung vom {new Date(order.createdAt).toLocaleDateString()}</p>
                <p className="text-sm">Status: {order.status}</p>
              </div>
              <div className="text-sm font-semibold">CHF {order.totalPrice.toFixed(2)}</div>
            </div>
            {expandedOrderId === order.id && (
              <div className="p-4 bg-gray-50 space-y-2">
                {order.items.map((item, idx) => (
                  <div key={idx} className="text-sm">
                    • {item.name} ({item.size}) x {item.quantity} – CHF {item.totalPrice.toFixed(2)}
                  </div>
                ))}
                {order.note && <p className="text-sm italic mt-2">Notiz: {order.note}</p>}
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default OrdersPage;
