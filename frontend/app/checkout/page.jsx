"use client";

import { useCart } from "../../context/CartContext";
import { useState } from "react";
import { useRouter } from "next/navigation";

const CheckoutPage = () => {
  const { cartItems, clearCart } = useCart();
  const router = useRouter();

  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    address: "",
    postalCode: "",
    city: "",
    comment: "",
  });

  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const orderPayload = {
      products: cartItems.map((item) => ({
        product: { id: item.id },
        quantity: item.quantity,
      })),
      address: {
        fullName: customer.name,
        street: customer.address,
        postalCode: customer.postalCode,
        city: customer.city,
      },
    };

    try {
const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/orders/create`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(orderPayload),
});

      if (!response.ok) {
        throw new Error("Fehler beim Senden der Bestellung");
      }

      const savedOrder = await response.json();
      console.log("Bestellung erfolgreich:", savedOrder);

      alert("Vielen Dank für Ihre Bestellung!");
      clearCart();
      router.push("/");
    } catch (error) {
      console.error("Bestellungsfehler:", error);
      alert("Fehler beim Abschließen der Bestellung.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold mb-6 text-sunset">Bestellung abschließen</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={customer.name}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Telefonnummer"
          value={customer.phone}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          name="address"
          placeholder="Adresse"
          value={customer.address}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          name="postalCode"
          placeholder="PLZ"
          value={customer.postalCode}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          name="city"
          placeholder="Stadt"
          value={customer.city}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
        <textarea
          name="comment"
          placeholder="Zusätzliche Bemerkungen (optional)"
          value={customer.comment}
          onChange={handleChange}
          rows="3"
          className="w-full border p-2 rounded"
        />

        <h2 className="text-xl font-semibold mt-6 mb-2">🛒 Deine Produkte</h2>
        <ul className="space-y-2">
          {cartItems.map((item, index) => (
            <li key={index} className="border p-2 rounded text-sm">
              <div className="font-medium">{item.name} ({item.size})</div>
              <div>Menge: {item.quantity}</div>
              {item.note && <div className="text-gray-600 italic">Wunsch: {item.note}</div>}
            </li>
          ))}
        </ul>

        <button
          type="submit"
          className="w-full bg-sunset text-white py-2 rounded hover:bg-opacity-90 transition mt-6"
        >
          Bestellung abschicken
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
