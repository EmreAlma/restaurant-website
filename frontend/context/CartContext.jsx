"use client";

import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // (opsiyonel) persist etmek istersen:
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
    // extraPrice, ingredientsToAdd/Remove varsa kullan; yoksa 0 ve boş kabul et
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
        extraPrice, // adet yok: 1 kabul
      },
    ]);
  };

  const removeFromCart = (cartItemIndex) => {
    setCartItems((prev) => prev.filter((_, idx) => idx !== cartItemIndex));
  };

  const clearCart = () => {
    setCartItems([]);
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
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
