"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false); // drawer kontrolü hâlâ burada, ama otomatik açmıyoruz

  useEffect(() => {
    try {
      const stored = localStorage.getItem("cart");
      if (stored) setCartItems(JSON.parse(stored));
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    } catch {}
  }, [cartItems]);

  const addToCart = (product, size = "default") => {
    const extraPrice =
      product.extraPrice ??
      (product.ingredientsToAdd?.reduce((s, i) => s + (i.price ?? 0), 0) ?? 0);

    setCartItems((prev) => [
      ...prev,
      {
        ...product,
        size,
        quantity: 1,
        note: product.note ?? "",
        ingredientsToAdd: product.ingredientsToAdd ?? [],
        ingredientsToRemove: product.ingredientsToRemove ?? [],
        extraPrice,
      },
    ]);

    // ❌ Eskiden: setCartOpen(true);
    // ✅ Artık sadece toast gösteriyoruz:
    toast.success(`${product.name ?? "Produkt"} wurde zum Warenkorb hinzugefügt.`);
  };

  const removeFromCart = (cartItemIndex) => {
    setCartItems((prev) => prev.filter((_, idx) => idx !== cartItemIndex));
  };

  const clearCart = () => {
    setCartItems([]);
    try {
      localStorage.removeItem("cart");
    } catch {}
  };

  const updateQuantity = (cartItemIndex, amount) => {
    setCartItems((prev) =>
      prev.map((item, idx) =>
        idx === cartItemIndex
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  const updateNote = (cartItemIndex, note) => {
    setCartItems((prev) =>
      prev.map((item, idx) => (idx === cartItemIndex ? { ...item, note } : item))
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        updateQuantity,
        updateNote,
        setCartItems, // backward compat
        cartOpen,
        setCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
