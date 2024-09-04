// src/components/Footer.tsx

import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';


const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Section 1: Logo dan Deskripsi Singkat */}
          <div>
            <h2 className="text-4xl font-extrabold mb-4 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500">
              Event Management Platform
            </h2>
            <p className="text-gray-300">
              Platform terbaik untuk mengelola dan menemukan berbagai acara. Kami menyediakan layanan untuk promotor dan peserta acara dengan mudah dan cepat.
            </p>
          </div>

          {/* Section 2: Link Navigasi */}
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500">
              Navigasi
            </h2>
            <ul className="space-y-3">
              <li>
                <Link href="/">
                  <a className="hover:text-yellow-300 transition duration-300">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/events">
                  <a className="hover:text-yellow-300 transition duration-300">Events</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="hover:text-yellow-300 transition duration-300">About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="hover:text-yellow-300 transition duration-300">Contact</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Section 3: Kontak dan Sosial Media */}
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500">
              Hubungi Kami
            </h2>
            <p className="text-gray-300 mb-2">
              Email: <a href="mailto:info@eventplatform.com" className="hover:text-yellow-300 transition duration-300">info@eventplatform.com</a>
            </p>
            <p className="text-gray-300 mb-4">
              Telepon: <a href="tel:+620000000000" className="hover:text-yellow-300 transition duration-300">+62 000 0000 0000</a>
            </p>
            <div>
              <h3 className="font-semibold mb-2 text-yellow-300">Ikuti kami:</h3>
              <div className="flex space-x-6">
                <a href="#" className="text-yellow-300 hover:text-yellow-200 transition duration-300">
                  <FaFacebook className="w-8 h-8" />
                </a>
                <a href="#" className="text-yellow-300 hover:text-yellow-200 transition duration-300">
                  <FaTwitter className="w-8 h-8" />
                </a>
                <a href="#" className="text-yellow-300 hover:text-yellow-200 transition duration-300">
                  <FaInstagram className="w-8 h-8" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 text-gray-400">
          <p>&copy; {new Date().getFullYear()} Event Management Platform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
