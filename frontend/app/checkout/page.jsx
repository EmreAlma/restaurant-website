"use client";

import { useCart } from "../../context/CartContext";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const CheckoutPage = () => {
  const { cartItems, clearCart } = useCart();
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [comment, setComment] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) setUser(JSON.parse(stored));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const orderPayload = {
      products: cartItems.map((item) => ({
        product: { id: item.id },
        quantity: item.quantity,
      })),
      address: {
        fullName: `${user.firstName} ${user.lastName}`,
        street: user.address?.street,
        postalCode: user.address?.postalCode,
        city: user.address?.city,
      },
      note: comment,
    };

    try {
      const token = user?.token;
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/orders/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(orderPayload),
      });

      if (!response.ok) {
        throw new Error("Fehler beim Senden der Bestellung");
      }

      await response.json();

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
      <h1 className="text-2xl font-bold mb-4 text-sunset">Bestellung überprüfen</h1>
      <p className="mb-6 text-gray-600">Bitte überprüfen Sie Ihre Angaben, bevor Sie die Bestellung abschließen.</p>

      {user && (
        <div className="mb-6 space-y-1">
          <h2 className="text-lg font-semibold">👤 Kundendaten</h2>
          <p>Name: {user.firstName} {user.lastName}</p>
          <p>Telefon: {user.phoneNumber}</p>
          <p>Adresse: {user.address?.street}, {user.address?.postalCode} {user.address?.city}</p>
        </div>
      )}

      <div className="mb-6">
        <h2 className="text-lg font-semibold">🛒 Deine Produkte</h2>
        <ul className="space-y-2">
          {cartItems.map((item, index) => (
            <li key={index} className="border p-2 rounded text-sm flex justify-between items-start">
              <div>
                <div className="font-medium">
                  {item.name} <span className="text-gray-600">x {item.quantity}</span>
                </div>
                {item.note && <div className="text-gray-600 italic">Wunsch: {item.note}</div>}
              </div>
              <div className="font-semibold whitespace-nowrap">
                CHF {((item.totalPrice ?? item.price * item.quantity) || 0).toFixed(2)}
              </div>
            </li>
          ))}
        </ul>
      </div>


      <div className="mb-6 text-right font-bold">
        Gesamt: CHF {cartItems.reduce((total, item) => {
          const price = (item.totalPrice ?? item.price * item.quantity) || 0;
          return total + price;
        }, 0).toFixed(2)}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          name="comment"
          placeholder="Zusätzliche Bemerkungen (optional)"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows="2"
          maxLength={200}
          className="w-full border p-2 rounded"
        />
        <p className="text-sm text-gray-500 text-right">
          {comment.length}/200 Zeichen
        </p>

        <div className="flex justify-between items-center">
          <button
            type="button"
            onClick={() => router.back()}
            className="text-sm text-gray-600 hover:underline"
          >
            🔙 Zurück zum Warenkorb
          </button>

          <button
            type="submit"
            className="bg-sunset text-white py-2 px-4 rounded hover:bg-opacity-90 transition"
          >
            ✅ Bestellung abschicken
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutPage;