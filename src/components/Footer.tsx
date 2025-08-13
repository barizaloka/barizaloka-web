import Link from 'next/link';
import React from 'react';
import { FaYoutube, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaBuilding, FaMobile } from 'react-icons/fa';

const Footer: React.FC = () => {
  const phoneNumber = '6287714625940';
  const message = 'Halo, saya ingin bertanya tentang...';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <footer className="relative bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 text-white py-16 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-pink-300 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-purple-300 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative container mx-auto px-6 text-center">
        {/* Main Brand Section */}
        <div className="mb-12 transform hover:scale-105 transition-all duration-500">
          <div className="inline-block p-8 bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20">
            <div className="flex items-center justify-center mb-4">
              <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-ping mr-2"></div>
              <Link
                href="/"
                className="text-4xl font-bold bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent hover:from-yellow-200 hover:via-pink-200 hover:to-purple-200 transition-all duration-300"
              >
                Barizaloka Group
              </Link>
              <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-ping ml-2"></div>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full mx-auto animate-pulse"></div>
          </div>
        </div>
        
        {/* Services Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="group p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center justify-center mb-3">
              <FaBuilding className="text-blue-400 text-2xl mr-3 group-hover:animate-bounce" />
              <h3 className="text-xl font-bold text-blue-300">Barizaloka Group</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Layanan Web Development & Digital Solutions terdepan untuk transformasi digital bisnis Anda
            </p>
            <div className="mt-4 flex justify-center">
              <div className="w-16 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full group-hover:w-24 transition-all duration-300"></div>
            </div>
          </div>

          <div className="group p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center justify-center mb-3">
              <FaMobile className="text-purple-400 text-2xl mr-3 group-hover:animate-bounce" />
              <h3 className="text-xl font-bold text-purple-300">Barizaloka Universe</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Studio Aplikasi Mobile & Innovation Hub untuk solusi teknologi masa depan
            </p>
            <Link
              href="/universe"
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white text-xs font-medium rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50"
            >
              <span className="mr-2">Explore Universe</span>
              <svg className="w-3 h-3 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <div className="mt-4 flex justify-center">
              <div className="w-16 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full group-hover:w-24 transition-all duration-300"></div>
            </div>
          </div>
        </div>
        
        {/* Contact Information */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="group p-4 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-center mb-2">
              <FaEnvelope className="text-yellow-400 text-xl mr-3 group-hover:animate-pulse" />
            </div>
            <p className="text-gray-300 text-sm mb-2">Email</p>
            <a
              href="mailto:barizaloka@gmail.com"
              className="text-yellow-300 hover:text-yellow-200 transition-colors duration-300 text-sm font-medium"
            >
              barizaloka@gmail.com
            </a>
          </div>

          <div className="group p-4 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-center mb-2">
              <FaWhatsapp className="text-green-400 text-xl mr-3 group-hover:animate-pulse" />
            </div>
            <p className="text-gray-300 text-sm mb-2">WhatsApp</p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-300 hover:text-green-200 transition-colors duration-300 text-sm font-medium"
            >
              {phoneNumber}
            </a>
          </div>

          <div className="group p-4 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-center mb-2">
              <FaMapMarkerAlt className="text-red-400 text-xl mr-3 group-hover:animate-pulse" />
            </div>
            <p className="text-gray-300 text-sm mb-2">Lokasi</p>
            <p className="text-red-300 text-xs leading-relaxed">
              RT 01 RW 02, Desa Karangasem<br />
              Kecamatan Sedan, Rembang, Jawa Tengah
            </p>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mb-12">
          <h4 className="text-lg font-semibold mb-6 text-gray-300">Ikuti Kami</h4>
          <div className="flex justify-center">
            <a
              href="https://youtube.com/@barizaloka"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 bg-gradient-to-r from-red-500 to-red-600 rounded-full hover:from-red-400 hover:to-red-500 transition-all duration-300 transform hover:scale-110 hover:rotate-12 shadow-lg hover:shadow-red-500/50"
              aria-label="YouTube"
            >
              <FaYoutube size={32} className="group-hover:animate-pulse" />
              <div className="absolute -inset-1 bg-gradient-to-r from-red-400 to-red-600 rounded-full blur opacity-30 group-hover:opacity-60 transition-opacity duration-300 -z-10"></div>
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="pt-8 border-t border-white/20">
          <div className="flex items-center justify-center mb-4">
            <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-purple-400 rounded-full"></div>
            <div className="mx-4 p-2 bg-white/10 backdrop-blur-sm rounded-full">
              <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
            </div>
            <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-purple-400 rounded-full"></div>
          </div>
          <p className="text-gray-400 text-sm flex items-center justify-center">
            <span className="mr-2">©</span>
            {new Date().getFullYear()}
            <span className="mx-2 text-purple-300 font-semibold">Barizaloka Group</span>
            <span className="ml-2">All rights reserved.</span>
            <span className="ml-2 text-yellow-400 animate-bounce">🚀</span>
          </p>
          <p className="text-gray-500 text-xs mt-2 italic">
            Innovating the future, one pixel at a time
          </p>
        </div>
      </div>

      {/* Additional decorative wave */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-60"></div>
    </footer>
  );
};

export default Footer;