"use client";

import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  // İlk yüklemede localStorage'tan oku
  useEffect(() => {
    try {
      const stored = localStorage.getItem("cart");
      if (stored) setCartItems(JSON.parse(stored));
    } catch {
      /* ignore */
    }
  }, []);

  // Her değişimde localStorage'a yaz
  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    } catch {
      /* ignore */
    }
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
    setCartOpen(true); // ekleyince otomatik açmak istersen (opsiyonel)
  };

  const removeFromCart = (cartItemIndex) => {
    setCartItems((prev) => prev.filter((_, idx) => idx !== cartItemIndex));
  };

  const clearCart = () => {
    setCartItems([]);
    try {
      localStorage.removeItem("cart");
    } catch {
      /* ignore */
    }
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
        setCartItems,
        cartOpen,
        setCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
