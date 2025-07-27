"use client";

import { useEffect, useCallback } from "react";
import { useCart } from "../context/CartContext";
import Cart from "./Cart";

const CartDrawer = () => {
  const { cartOpen, setCartOpen } = useCart();

  useLockBodyScroll(cartOpen);

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") setCartOpen(false);
    },
    [setCartOpen]
  );

  useEffect(() => {
    if (cartOpen) {
      document.addEventListener("keydown", onKeyDown);
      return () => document.removeEventListener("keydown", onKeyDown);
    }
  }, [cartOpen, onKeyDown]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300 z-40 ${
          cartOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setCartOpen(false)}
        aria-hidden={!cartOpen}
      />

      {/* Drawer */}
      <aside
        className={`fixed inset-y-0 right-0 w-full sm:w-96 bg-white shadow-xl z-50 transform transition-transform duration-300 ${
          cartOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Warenkorb</h2>
          <button
            onClick={() => setCartOpen(false)}
            aria-label="Close cart"
            className="text-gray-500 hover:text-gray-700 text-2xl leading-none"
          >
            &times;
          </button>
        </div>

        <div className="h-[calc(100vh-64px)] overflow-y-auto p-4">
          <Cart />
        </div>
      </aside>
    </>
  );
};

export default CartDrawer;

function useLockBodyScroll(locked) {
  useEffect(() => {
    if (!locked) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [locked]);
}