import { useEffect, useState } from "react";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import Cart from "./Cart";
import LoginModal from "./LoginModal";


const Header = () => {
  const [navActive, setNavActive] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const { cartItems } = useCart();
  const [showCart, setShowCart] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [user, setUser] = useState(null);

  const toggleNav = () => setNavActive(!navActive);
  const openSearch = () => setSearchActive(true);
  const closeSearch = () => setSearchActive(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <><header className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        <Link href="/" className="text-3xl font-extrabold text-sunset">
          Bite&Dine
        </Link>
        <nav className="hidden md:flex space-x-6">
          <a
            href="#home"
            className="text-lg font-medium text-gray-600 hover:text-white hover:bg-jellyBeanBlue transition duration-300 px-3 py-2 rounded-lg"
          >
            Home
          </a>
          <a
            href="#dishes"
            className="text-lg font-medium text-gray-600 hover:text-white hover:bg-jellyBeanBlue transition duration-300 px-3 py-2 rounded-lg"
          >
            Dishes
          </a>
          <a
            href="#about"
            className="text-lg font-medium text-gray-600 hover:text-white hover:bg-jellyBeanBlue transition duration-300 px-3 py-2 rounded-lg"
          >
            About
          </a>
          <a
            href="#menu"
            className="text-lg font-medium text-gray-600 hover:text-white hover:bg-jellyBeanBlue transition duration-300 px-3 py-2 rounded-lg"
          >
            Menu
          </a>
          <a
            href="#review"
            className="text-lg font-medium text-gray-600 hover:text-white hover:bg-jellyBeanBlue transition duration-300 px-3 py-2 rounded-lg"
          >
            Review
          </a>
          <a
            href="#order"
            className="text-lg font-medium text-gray-600 hover:text-white hover:bg-jellyBeanBlue transition duration-300 px-3 py-2 rounded-lg"
          >
            Order
          </a>
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
            onClick={() => setShowCart(!showCart)}
            className="relative text-2xl text-sunset transition-colors duration-300 hover:text-jellyBeanBlue"
          >
            <i className="fas fa-shopping-cart"></i>
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </button>

          <button
            onClick={toggleNav}
            className="md:hidden text-2xl text-sunset transition-colors duration-300 hover:text-jellyBeanBlue"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
      {navActive && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col space-y-2 px-6 py-4">
            <a
              href="#home"
              className="text-lg font-medium text-gray-600 hover:text-white hover:bg-jellyBeanBlue transition duration-300 px-3 py-2 rounded-lg"
            >
              Home
            </a>
            <a
              href="#dishes"
              className="text-lg font-medium text-gray-600 hover:text-white hover:bg-jellyBeanBlue transition duration-300 px-3 py-2 rounded-lg"
            >
              Dishes
            </a>
            <a
              href="#about"
              className="text-lg font-medium text-gray-600 hover:text-white hover:bg-jellyBeanBlue transition duration-300 px-3 py-2 rounded-lg"
            >
              About
            </a>
            <a
              href="#menu"
              className="text-lg font-medium text-gray-600 hover:text-white hover:bg-jellyBeanBlue transition duration-300 px-3 py-2 rounded-lg"
            >
              Menu
            </a>
            <a
              href="#review"
              className="text-lg font-medium text-gray-600 hover:text-white hover:bg-jellyBeanBlue transition duration-300 px-3 py-2 rounded-lg"
            >
              Review
            </a>
            <a
              href="#order"
              className="text-lg font-medium text-gray-600 hover:text-white hover:bg-jellyBeanBlue transition duration-300 px-3 py-2 rounded-lg"
            >
              Order
            </a>
          </nav>
        </div>
      )}

      {searchActive && (
        <div className="absolute top-20 right-6 bg-white shadow-xl p-3 rounded-lg flex items-center space-x-2 transition duration-300">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-jellyBeanBlue"
            autoFocus />
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
    </header><LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} /></>
  );
};

export default Header;
