"use client";

import { useEffect, useState } from "react";

const SparislerPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) return;

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/orders/user/${user.id}`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Sipariş verisi alınamadı:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Meine Bestellungen</h1>
      {loading ? (
        <p>Wird geladen...</p>
      ) : orders.length === 0 ? (
        <p>Keine Bestellungen gefunden.</p>
      ) : (
        <ul className="space-y-4">
          {orders.map((order) => (
            <li key={order.id} className="border p-4 rounded shadow-sm">
              <p><strong>Bestellnummer:</strong> {order.id}</p>
              <p><strong>Status:</strong> {order.status}</p>
              <p><strong>Gesamtpreis:</strong> CHF {order.totalPrice.toFixed(2)}</p>
              {/* Daha fazla bilgi gerekiyorsa buraya eklenebilir */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SparislerPage;
