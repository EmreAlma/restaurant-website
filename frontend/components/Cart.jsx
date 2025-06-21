"use client";

import { useCart } from "../context/CartContext";
import { useRouter } from "next/navigation";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart, updateQuantity, updateNote } = useCart();
  const router = useRouter();

  const getTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = item.size === "large" && item.priceLarge ? item.priceLarge : item.price;
      return total + price * item.quantity;
    }, 0);
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Dein Warenkorb ist leer.");
      return;
    }
    router.push("/checkout");
  };

  return (
    <div className="w-80 bg-white shadow-lg rounded-lg p-4 z-50">
      <h2 className="text-xl font-bold mb-4">Dein Warenkorb</h2>

      {cartItems.length === 0 ? (
        <div className="text-center text-gray-500 py-6">
          <p className="text-lg font-medium">🛒 Dein Warenkorb ist leer.</p>
          <p className="text-sm mt-2">Füge Artikel hinzu, um deine Bestellung zu starten.</p>
        </div>
      ) : (
        <>
          <ul className="space-y-4">
            {cartItems.map((item, index) => (
              <li key={index} className="border rounded p-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-600">Größe: {item.size}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">
                      CHF{" "}
                      {(
                        (item.size === "large" && item.priceLarge
                          ? item.priceLarge
                          : item.price) * item.quantity
                      ).toFixed(2)}
                    </p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 text-sm mt-1"
                    >
                      Entfernen
                    </button>
                  </div>
                </div>

                {/* Yorum kutusu */}
                <div className="mt-2">
                  <input
                    type="text"
                    maxLength={100}
                    placeholder="Sonderwunsch (optional)"
                    className="w-full border border-gray-300 rounded p-1 text-sm mt-2 focus:outline-none focus:ring-2 focus:ring-jellyBeanBlue"
                    value={item.note || ""}
                    onChange={(e) => updateNote(item.id, e.target.value)}
                  />
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-4 border-t pt-4">
            <p className="font-bold text-lg">
              Gesamt: CHF {getTotal().toFixed(2)}
            </p>
            <button
              onClick={clearCart}
              className="mt-2 text-sm text-red-600 hover:underline"
            >
              Warenkorb leeren
            </button>

            <button
              onClick={handleCheckout}
              className="mt-4 w-full bg-sunset text-white py-2 rounded hover:bg-opacity-90 transition"
            >
              Zur Kasse
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
