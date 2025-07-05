"use client";

import { useCart } from "../../context/CartContext";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import LoginModal from "../../components/LoginModal";

const CheckoutPage = () => {
  const { cartItems, clearCart } = useCart();
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [comment, setComment] = useState("");
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      const parsedUser = JSON.parse(stored);
      if (parsedUser?.token) {
        setUser(parsedUser);
      } else {
        setShowLogin(true);
      }
    } else {
      setShowLogin(true);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const totalPrice = cartItems.reduce(
        (total, item) => total + (item.totalPrice ?? item.price * item.quantity),
        0
    );

    const orderPayload = {
      totalPrice: parseFloat(totalPrice.toFixed(2)),
      address: {
        fullName: `${user.firstName} ${user.lastName}`,
        street: user.address?.[0]?.street,
        postalCode: user.address?.[0]?.postalCode,
        city: user.address?.[0]?.city,
      },
      orderItems: cartItems.map((item) => ({
        product: { id: item.id },
        quantity: item.quantity,
      })),
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

  if (showLogin) {
    return (
      <LoginModal
        isOpen={true}
        onClose={() => router.push("/")}
        openRegisterModal={() => router.push("/")} // optional yönlendirme
      />
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold mb-4 text-sunset">Bestellung abschliessen</h1>
      <p className="mb-6 text-gray-600">Bitte überprüfen Sie Ihre Angaben, bevor Sie die Bestellung abschliessen.</p>

      {user && (
        <div className="mb-6 space-y-1">
          <h2 className="text-lg font-semibold">👤 Kundendaten</h2>
          <p>Name: {user.firstName} {user.lastName}</p>
          <p>Telefon: {user.phoneNumber}</p>
          <p>Adresse: {user.address[0].street}, {user.address[0].postalCode} {user.address[0].city}</p>
        </div>
      )}

      <div className="mb-6">
        <h2 className="text-lg font-semibold">🛒 Deine Produkte</h2>
        <ul className="space-y-2">
          {cartItems.map((item, index) => (
            <li key={index} className="border p-2 rounded text-sm flex justify-between items-center">
              <div>
                <div className="font-medium">{item.name} x {item.quantity}</div>
                {item.note && <div className="text-gray-600 italic">Wunsch: {item.note}</div>}
              </div>
              <div className="font-semibold">CHF {((item.totalPrice ?? item.price * item.quantity) || 0).toFixed(2)}</div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6 text-right font-bold">
        Gesamt: CHF {cartItems.reduce((total, item) => total + (item.totalPrice ?? item.price * item.quantity), 0).toFixed(2)}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          name="comment"
          placeholder="Zusätzliche Bemerkungen (optional)"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          maxLength={200}
          rows="2"
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
            Bestellung abschicken
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutPage;
