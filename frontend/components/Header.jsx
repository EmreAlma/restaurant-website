"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import Cart from "./Cart";
import CartDrawer from "./CartDrawer";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

const Header = () => {
  const [navActive, setNavActive] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const { cartItems, cartOpen, setCartOpen } = useCart();
  const { user, logout } = useAuth();

  const toggleNav = () => setNavActive(!navActive);
  const toggleCart = () => setCartOpen(!cartOpen);

  const handleLogout = () => {
    logout();
    setShowProfileMenu(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
          <Link href="/" className="text-3xl font-extrabold text-sunset">
            Pizza Oregano
          </Link>

          <nav className="hidden md:flex space-x-6">
            {["home", "menu", "dishes", "about", "review"].map((section) => (
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
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setShowProfileMenu((p) => !p)}
                  className="flex items-center gap-2 text-gray-700 hover:text-sunset"
                >
                  <i className="fas fa-user-circle text-2xl"></i>
                  <span>Hallo, {user.firstName}</span>
                </button>
                {showProfileMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-md z-50">
                    <a
                      href="/profile"
                      className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700"
                    >
                      Mein Profil
                    </a>
                    <a
                      href="/orders"
                      className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700"
                    >
                      Meine Bestellungen
                    </a>
                    {user.role === "OWNER" && (
                      <a
                        href="/admin"
                        className="block px-4 py-2 hover:bg-gray-100 text-sm text-blue-600 font-semibold"
                      >
                        Admin Panel
                      </a>
                    )}
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm text-red-600"
                    >
                      Abmelden
                    </button>
                  </div>
                )}
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
              onClick={toggleCart}
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

        {navActive && (
          <div className="md:hidden bg-white shadow-lg">
            <nav className="flex flex-col space-y-2 px-6 py-4">
              {["home", "menu", "dishes", "about", "review"].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className="text-lg font-medium text-gray-600 hover:text-white hover:bg-jellyBeanBlue transition duration-300 px-3 py-2 rounded-lg"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              ))}
            </nav>
          </div>
        )}
        <CartDrawer />
      </header>

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
