"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import Cart from "./Cart";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

const Header = () => {
  const [searchActive, setSearchActive] = useState(false);
  const { cartItems } = useCart();
  const [showCart, setShowCart] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [user, setUser] = useState(null);

  const openSearch = () => setSearchActive(true);
  const closeSearch = () => setSearchActive(false);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) setUser(JSON.parse(stored));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
          <Link href="/" className="text-3xl font-extrabold text-sunset">
            Pizza Oregano
          </Link>
          <nav className="hidden md:flex space-x-6">
            {["home", "dishes", "about", "menu", "review", "order"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="text-lg font-medium text-gray-600 hover:text-white hover:bg-jellyBeanBlue transition duration-300 px-3 py-2 rounded-lg"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <button
              onClick={openSearch}
              className="text-2xl text-sunset transition-colors duration-300 hover:text-jellyBeanBlue"
            >
              <i className="fas fa-search"></i>
            </button>

            {user ? (
              <div className="flex items-center gap-3">
                <span className="text-gray-700 text-sm">
                  Hallo, {user.firstName}
                </span>
                <button
                  onClick={handleLogout}
                  className="text-2xl text-sunset transition-colors duration-300 hover:text-jellyBeanBlue"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsLoginOpen(true)}
                className="text-2xl text-sunset transition-colors duration-300 hover:text-jellyBeanBlue"
              >
                Login
              </button>
            )}

            <button
              onClick={() => setShowCart((prev) => !prev)}
              className="relative text-2xl text-sunset transition-colors duration-300 hover:text-jellyBeanBlue"
            >
              <i className="fas fa-shopping-cart"></i>
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </button>
          </div>
        </div>

        {searchActive && (
          <div className="absolute top-20 right-6 bg-white shadow-xl p-3 rounded-lg flex items-center space-x-2 transition duration-300">
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-jellyBeanBlue"
              autoFocus
            />
            <button
              onClick={closeSearch}
              className="text-xl text-gray-600 hover:text-sunset transition-colors duration-300"
            >
              &times;
            </button>
          </div>
        )}

        {showCart && (
          <div className="fixed top-20 right-4 z-50">
            <Cart />
          </div>
        )}
      </header>

      {/* Modals */}
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        openRegisterModal={() => {
          setIsLoginOpen(false);
          setIsRegisterOpen(true);
        }}
      />
      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
      />
    </>
  );
};

export default Header;
