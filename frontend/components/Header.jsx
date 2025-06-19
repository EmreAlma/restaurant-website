import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [navActive, setNavActive] = useState(false);
  const [searchActive, setSearchActive] = useState(false);

  const toggleNav = () => setNavActive(!navActive);
  const openSearch = () => setSearchActive(true);
  const closeSearch = () => setSearchActive(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
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
          <a
            href="#"
            className="text-2xl text-sunset transition-colors duration-300 hover:text-jellyBeanBlue"
          >
            <i className="fas fa-heart"></i>
          </a>
          <a
            href="#"
            className="text-2xl text-sunset transition-colors duration-300 hover:text-jellyBeanBlue"
          >
            <i className="fas fa-shopping-cart"></i>
          </a>
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
    </header>
  );
};

export default Header;
