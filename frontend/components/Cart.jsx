"use client";

import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const getTotal = () => {
    return cartItems.reduce((total, item) => {
      const price =
        item.size === "large" && item.priceLarge ? item.priceLarge : item.price;
      return total + price * item.quantity;
    }, 0);
  };

  return (
    <div className="w-80 bg-white shadow-lg rounded-lg p-4 z-50">
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cartItems.map((item, index) => (
              <li key={index} className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-600">Size: {item.size}</p>
                  <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
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
                    className="text-red-500 text-sm"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4 border-t pt-4">
            <p className="font-bold text-lg">Total: CHF {getTotal().toFixed(2)}</p>
            <button
              onClick={clearCart}
              className="mt-2 text-sm text-red-600 hover:underline"
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
