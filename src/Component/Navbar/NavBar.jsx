import React, { useState } from 'react';
import { HiShoppingBag } from "react-icons/hi2";

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="container mx-auto px-4 bg-white shadow-lg">
      <div className="flex items-center justify-between py-4">
        {/* Hamburger Menu (for mobile) */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="flex items-center px-3 py-2 border rounded text-gray-600 border-gray-600 hover:text-gray-800 hover:border-gray-800"
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 110-2h12a1 1 0 110 2H4z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="https://i.ibb.co/6bRxxjY/Orange-E-commerce-Online-Store-Logo.png"
            alt="Logo"
            className="h-10 w-auto mr-2"
          />
        </div>
        {/* Menu Items For Desktop */}
        <div className="hidden md:flex flex-grow justify-center">
          <ul className="flex items-center font-semibold uppercase ">
            <li className="mx-4 text-gray-500 hover:text-gray-300">
              Home
            </li>
            <li className="mx-4 text-gray-500 hover:text-gray-300">
              Shop
            </li>
            <li className="mx-4 text-gray-500 hover:text-gray-300">
              Blog
            </li>
            <li className="mx-4 text-gray-500 hover:text-gray-300">
              Contact
            </li>
          </ul>
        </div>
        {/* Shopping Cart (for mobile) */}
        <div className="md:hidden">
          <div>
            <HiShoppingBag />
          </div>
        </div>
        {/* Mobile menu (hidden by default, shown when isMenuOpen is true) */}
        {isMenuOpen && (
          <div className="md:hidden">
            <ul className="flex flex-col items-center font-semibold">
              <li className="my-2">
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Home
                </a>
              </li>
              <li className="my-2">
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Shop
                </a>
              </li>
              <li className="my-2">
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Blog
                </a>
              </li>
              <li className="my-2">
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
        {/* Right side login and cart (for desktop) */}
        <div className="hidden md:flex items-center uppercase font-semibold">
          <div className="mr-2 text-gray-500 hover:text-gray-300">
            Login
          </div>
          <div className="mr-2">
            |
          </div>
          <div className='text-gray-500 hover:text-gray-300'>
            <HiShoppingBag/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
