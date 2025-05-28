import React from "react";

const Header = () => {
  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          {/* Replace with your actual logo, e.g., an SVG or image */}
          <span className="text-2xl font-bold text-gray-800">
            Martı Yazılım
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          <a
            href="#"
            className="text-gray-600 hover:text-primary-blue transition duration-300"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-primary-blue transition duration-300"
          >
            Features
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-primary-blue transition duration-300"
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-primary-blue transition duration-300"
          >
            Contact
          </a>
        </nav>

        {/* Sign In / Sign Up Buttons */}
        <div className="hidden md:flex space-x-4">
          <button className="px-5 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition duration-300">
            Sign In
          </button>
          <button className="px-5 py-2 bg-primary-blue text-white rounded-md hover:bg-blue-700 transition duration-300">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button (Hamburger Icon) */}
        <div className="md:hidden">
          <button className="text-gray-600 focus:outline-none focus:text-gray-900">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu (Hidden by default, will need JS to toggle) */}
      {/*
      <div className="md:hidden">
        <nav className="flex flex-col px-2 pt-2 pb-4 space-y-1 bg-white">
          <a href="#" className="block px-3 py-2 text-base text-gray-700 hover:bg-gray-50 rounded-md">Home</a>
          <a href="#" className="block px-3 py-2 text-base text-gray-700 hover:bg-gray-50 rounded-md">Features</a>
          <a href="#" className="block px-3 py-2 text-base text-gray-700 hover:bg-gray-50 rounded-md">Pricing</a>
          <a href="#" className="block px-3 py-2 text-base text-gray-700 hover:bg-gray-50 rounded-md">Contact</a>
          <button className="block w-full text-left px-3 py-2 text-base text-gray-700 hover:bg-gray-50 rounded-md">Sign In</button>
          <button className="block w-full text-left px-3 py-2 text-base bg-primary-blue text-white hover:bg-blue-700 rounded-md">Sign Up</button>
        </nav>
      </div>
      */}
    </header>
  );
};

export default Header;
