"use client";

import { createContext, useContext, useState } from "react";

// 1. Create the context
const CartContext = createContext();

// 2. Create the provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add a product to the cart with an optional size
  const addToCart = (product, size = "default") => {
    setCartItems((prev) => [
      ...prev,
      { ...product, size, quantity: 1 },
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

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

// 3. Custom hook to use the cart context
export const useCart = () => useContext(CartContext);
