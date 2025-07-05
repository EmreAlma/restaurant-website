"use client";

import { createContext, useContext, useState, useEffect } from "react";

// 1. Create the context
const CartContext = createContext();

// 2. Create the provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add cart from the localstorage
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  // when chart change add to  localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Add a product to the cart with an optional size
  const addToCart = (product) => {
    setCartItems((prev) => [
      ...prev,
      { ...product, quantity: 1, note: "" },
    ]);
  };

  // Remove a product from the cart by its ID
  const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  // Clear all items from the cart
  const clearCart = () => {
    setCartItems([]);
  };
  const updateQuantity = (productId, amount) => {
  setCartItems((prev) =>
    prev.map((item) =>
      item.id === productId
        ? { ...item, quantity: Math.max(1, item.quantity + amount) }
        : item
    )
  );
};

  const updateNote = (productId, note) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, note } : item
      )
    );
  };


  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart, updateQuantity, updateNote, setCartItems}}
    >
      {children}
    </CartContext.Provider>
  );
};

// 3. Custom hook to use the cart context
export const useCart = () => useContext(CartContext);
