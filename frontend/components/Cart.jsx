"use client";

import { useCart } from "../context/CartContext";
import { useRouter } from "next/navigation";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, updateNote, clearCart } = useCart();
  const router = useRouter();

  const total = cartItems.reduce(
    (sum, item) =>
      sum + (((item.price ?? 0) + (item.extraPrice ?? 0)) * item.quantity),
    0
  );

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg w-80">
      <h2 className="text-lg font-bold mb-4 text-sunset">🛒 Warenkorb</h2>
      {cartItems.length === 0 ? (
        <p className="text-sm text-gray-600">Dein Warenkorb ist leer.</p>
      ) : (
        <ul className="space-y-3 max-h-60 overflow-y-auto">
          {cartItems.map((item, index) => {
            const lineTotal =
              ((item.price ?? 0) + (item.extraPrice ?? 0)) * item.quantity;

            return (
              <li key={index} className="border p-2 rounded text-sm">
                <div className="flex justify-between">
                  <div>
                    <div className="font-medium">{item.name} x {item.quantity}</div>

                    {/* Extra Zutaten */}
                    {item.ingredientsToAdd?.length > 0 && (
                      <p className="text-xs text-gray-600 mt-1">
                        +{" "}
                        {item.ingredientsToAdd
                          .map((i) => `${i.name} (+${(i.price ?? 0).toFixed(2)} CHF)`)
                          .join(", ")}
                      </p>
                    )}
                    {/* Entfernte Zutaten */}
                    {item.ingredientsToRemove?.length > 0 && (
                      <p className="text-xs text-gray-500 italic mt-1">
                        – {item.ingredientsToRemove.map((i) => i.name).join(", ")}
                      </p>
                    )}

                    {/* Notiz */}
                    {item.note && (
                      <p className="text-xs text-gray-500 italic mt-1">
                        Wunsch: {item.note}
                      </p>
                    )}
                  </div>
                  <div className="font-semibold">
                    CHF {lineTotal.toFixed(2)}
                  </div>
                </div>

                {/* Menge ändern */}
                <div className="flex items-center mt-2 gap-2">
                  <button
                    onClick={() => updateQuantity(index, -1)}
                    className="px-2 py-1 border rounded text-xs"
                  >
                    –
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(index, 1)}
                    className="px-2 py-1 border rounded text-xs"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeFromCart(index)}
                    className="ml-auto text-red-500 text-xs hover:underline"
                  >
                    Entfernen
                  </button>
                </div>

                {/* Wunsch-Note */}
                <textarea
                  value={item.note}
                  onChange={(e) => updateNote(index, e.target.value)}
                  placeholder="Wunsch (optional)"
                  rows={1}
                  className="mt-2 w-full border p-1 text-xs rounded"
                />
              </li>
            );
          })}
        </ul>
      )}

      {cartItems.length > 0 && (
        <div className="mt-4 space-y-2">
          <p className="text-right font-bold">
            Gesamt: CHF {total.toFixed(2)}
          </p>
          <button
            onClick={() => router.push("/checkout")}
            className="w-full bg-sunset text-white py-2 rounded hover:bg-opacity-90"
          >
            Zur Kasse
          </button>
          <button
            onClick={clearCart}
            className="w-full text-sm text-gray-500 hover:underline"
          >
            Warenkorb leeren
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
