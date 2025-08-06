'use client';

import React from 'react';
import Link from 'next/link';

interface NavbarProps {
  title?: string;
  link?: string;
}

const Navbar: React.FC<NavbarProps> = ({
  // Destructuring props, dan berikan nilai default langsung.
  // Jika `title` tidak ada, gunakan 'Barizaloka Group'.
  // Jika `link` tidak ada, gunakan '/'.
  title = 'Barizaloka Group',
  link = '/',
}) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-80 backdrop-blur-md shadow-lg rounded-b-3xl mx-auto mt-4 max-w-6xl p-4 flex items-center justify-between">
      <div className="text-2xl font-bold text-purple-700">
        <Link
          href={link}
          className="hover:text-purple-900 transition duration-300"
        >
          {title}
        </Link>
      </div>
      <button
        onClick={() => window.history.back()}
        className="text-gray-700 hover:text-purple-700 transition duration-300 ease-in-out cursor-pointer focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
