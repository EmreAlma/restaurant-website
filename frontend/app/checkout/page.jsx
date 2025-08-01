"use client";

import { useCart } from "../../context/CartContext";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import LoginModal from "../../components/LoginModal";

const openingHours = {
  0: [], // Sonntag
  1: [], // Montag geschlossen
  2: [
    { start: "11:30", end: "13:30" },
    { start: "17:00", end: "22:00" },
  ],
  3: [
    { start: "11:30", end: "13:30" },
    { start: "17:00", end: "22:00" },
  ],
  4: [
    { start: "11:30", end: "13:30" },
    { start: "17:00", end: "22:00" },
  ],
  5: [
    { start: "11:30", end: "13:30" },
    { start: "17:00", end: "23:00" },
  ],
  6: [
    { start: "11:30", end: "14:00" },
    { start: "16:00", end: "23:00" },
  ],
  7: [
    { start: "11:30", end: "14:00" },
    { start: "16:00", end: "22:00" },
  ],
};

const isWithinOpeningHours = (date) => {
  const day = date.getDay();
  const timeStr = date.toTimeString().slice(0, 5);
  const hours = openingHours[day] || [];

  return hours.some(({ start, end }) => start <= timeStr && timeStr <= end);
};

const CheckoutPage = () => {
  const { cartItems, clearCart } = useCart();
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [comment, setComment] = useState("");
  const [showLogin, setShowLogin] = useState(false);
  const [deliveryOption, setDeliveryOption] = useState("asap");
  const [customTime, setCustomTime] = useState("");

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

    const now = new Date();
    let deliveryTime;

    if (deliveryOption === "asap") {
      deliveryTime = new Date(now.getTime() + 45 * 60000);
    } else if (customTime) {
      const [hours, minutes] = customTime.split(":");
      const customDate = new Date(now);
      customDate.setHours(Number(hours));
      customDate.setMinutes(Number(minutes));
      customDate.setSeconds(0);
      deliveryTime = customDate;

      if (!isWithinOpeningHours(customDate)) {
        alert("Die gewählte Zeit liegt außerhalb unserer Öffnungszeiten.");
        return;
      }
    }

    const totalPrice = cartItems.reduce(
      (total, item) =>
        total + ((item.price ?? 0) + (item.extraPrice ?? 0)) * item.quantity,
      0
    );

    const orderPayload = {
      totalPrice: parseFloat(totalPrice.toFixed(2)),
      address: {
        street: user.address?.[0]?.street,
        postalCode: user.address?.[0]?.postalCode,
        city: user.address?.[0]?.city,
      },
      orderItems: cartItems.map((item) => ({
        productId: item.id,
        quantity: item.quantity,
        ingredientsToAdd: item.ingredientsToAdd?.map((i) => i.id) ?? [],
        ingredientsToRemove: item.ingredientsToRemove?.map((i) => i.id) ?? [],
      })),
      note: comment,
      deliveryTime: deliveryTime?.toISOString(),
    };

    try {
      const token = user?.token;
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/orders/create`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(orderPayload),
        }
      );

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
        openRegisterModal={() => router.push("/")}
      />
    );
  }

  const total = cartItems.reduce(
    (sum, item) =>
      sum + ((item.price ?? 0) + (item.extraPrice ?? 0)) * item.quantity,
    0
  );

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold mb-4 text-sunset">
        Bestellung abschliessen
      </h1>
      <p className="mb-6 text-gray-600">
        Bitte überprüfen Sie Ihre Angaben, bevor Sie die Bestellung abschliessen.
      </p>

      {user && (
        <div className="mb-6 space-y-1">
          <h2 className="text-lg font-semibold">👤 Kundendaten</h2>
          <p>Name: {user.firstName} {user.lastName}</p>
          <p>Telefon: {user.phoneNumber}</p>
          {user.address && user.address.length > 0 ? (
            <p>Adresse: {user.address[0].street}, {user.address[0].postalCode} {user.address[0].city}</p>
          ) : (
            <p className="text-sm text-gray-500 italic">Keine Adresse vorhanden.</p>
          )}
        </div>
      )}

      <div className="mb-6">
        <h2 className="text-lg font-semibold">🛒 Deine Produkte</h2>
        <ul className="space-y-2">
          {cartItems.map((item, index) => (
            <li
              key={index}
              className="border p-2 rounded text-sm flex justify-between items-center"
            >
              <div>
                <div className="font-medium">
                  {item.name} x {item.quantity}
                </div>
                {item.ingredientsToAdd?.length > 0 && (
                  <p className="text-xs text-gray-600 mt-1">
                    + {item.ingredientsToAdd.map(
                      (i) => `${i.name} (+${(i.price ?? 0).toFixed(2)} CHF)`
                    ).join(", ")}
                  </p>
                )}
                {item.ingredientsToRemove?.length > 0 && (
                  <p className="text-xs text-gray-500 italic mt-1">
                    – {item.ingredientsToRemove.map((i) => i.name).join(", ")}
                  </p>
                )}
                {item.note && (
                  <p className="text-xs italic mt-1">Wunsch: {item.note}</p>
                )}
              </div>
              <div className="font-semibold">
                CHF {(((item.price ?? 0) + (item.extraPrice ?? 0)) * item.quantity).toFixed(2)}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6 text-right font-bold">
        Gesamt: CHF {total.toFixed(2)}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="font-medium block mb-2">Lieferzeit:</label>
          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="delivery"
                value="asap"
                checked={deliveryOption === "asap"}
                onChange={() => setDeliveryOption("asap")}
              />
              Schnellstmöglich (in ca. 45 Min)
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="delivery"
                value="custom"
                checked={deliveryOption === "custom"}
                onChange={() => setDeliveryOption("custom")}
              />
              Gewünschte Lieferzeit:
              <input
                type="time"
                value={customTime}
                onChange={(e) => setCustomTime(e.target.value)}
                className="ml-2 border px-2 py-1 rounded"
                disabled={deliveryOption !== "custom"}
              />
            </label>
          </div>
        </div>

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
