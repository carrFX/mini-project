// src/components/Navbar.tsx

import React from 'react';
import Link from 'next/link';


const Navbar: React.FC = () => {
  return (
    <nav className="bg-gradient-to-r from-black to-gray-900 p-4 shadow-xl">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 hover:text-yellow-300 transition duration-300">
            Event Management
          </a>
        </Link>

        {/* Navigation Links */}
        <ul className="flex space-x-8">
          <li>
            <Link href="/create-event">
              <a className="text-lg font-semibold text-white hover:text-yellow-300 transition duration-300">
                Create Event
              </a>
            </Link>
          </li>
          <li>
            <Link href="/login">
              <a className="text-lg font-semibold text-white hover:text-yellow-300 transition duration-300">
                Login
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};



export default Navbar;
