// src/components/Header.tsx

import React, { useState } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link href="/">
          <a className="text-4xl font-extrabold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500 hover:text-yellow-300 transition duration-300">
            Event Management Platform
          </a>
        </Link>

        {/* Menu Icon (for mobile view) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-8 h-8 text-yellow-400 hover:text-yellow-300 transition duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className={`md:flex md:items-center space-x-8 ${isOpen ? 'block' : 'hidden'} md:block`}>
          <Link href="/">
            <a className="text-lg font-semibold hover:text-yellow-300 transition duration-300">Home</a>
          </Link>
          <Link href="/events">
            <a className="text-lg font-semibold hover:text-yellow-300 transition duration-300">Events</a>
          </Link>
          <Link href="/about">
            <a className="text-lg font-semibold hover:text-yellow-300 transition duration-300">About Us</a>
          </Link>
          <Link href="/contact">
            <a className="text-lg font-semibold hover:text-yellow-300 transition duration-300">Contact</a>
          </Link>
          <Link href="/login">
            <a className="text-lg font-semibold hover:text-yellow-300 transition duration-300">Login</a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
