import Link from 'next/link';
import React from 'react';
import { FaYoutube } from 'react-icons/fa';

const Footer: React.FC = () => {
  const phoneNumber = '6287714625940';
  const message = 'Halo, saya ingin bertanya tentang...';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <footer className="bg-gradient-to-r from-purple-700 to-purple-900 text-white py-10 text-center shadow-lg">
      <div className="container mx-auto px-4 animate-fade-in">
        <p className="mb-2 text-lg font-semibold flex items-center justify-center">
          ✨
          <Link href="/" className="hover:underline transition duration-300 ease-in-out transform hover:scale-105">
            Barizaloka Group
          </Link>
          ✨
        </p>
        <p className="mb-2 flex items-center justify-center">
          📧 Email: <a href="mailto:barizaloka@gmail.com" className="hover:underline ml-2 transition duration-300 ease-in-out transform hover:scale-105">barizaloka@gmail.com</a>
        </p>
        <p className="mb-2 flex items-center justify-center">
          📍 Alamat: RT 01 RW 02, sebuah sudut di Desa Karangasem, Kecamatan Sedan, Rembang, Jawa Tengah.
        </p>
        <p className="mb-2 flex items-center justify-center">
          📱 WhatsApp: 
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:underline ml-2 transition duration-300 ease-in-out transform hover:scale-110"
          >
            {phoneNumber} 
          </a>
        </p>

        {/* Bagian Media Sosial Baru */}
        <div className="flex justify-center items-center mt-4 space-x-4">
          <a 
            href="https://youtube.com/@barizaloka" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-red-500 transition duration-300 ease-in-out transform hover:scale-125"
            aria-label="YouTube"
          >
            <FaYoutube size={30} />
          </a>
        </div>

        <p className="mt-4 text-sm opacity-80">
          © {new Date().getFullYear()} Barizaloka Group. All rights reserved. 🚀
        </p>
      </div>
    </footer>
  );
};

export default Footer;