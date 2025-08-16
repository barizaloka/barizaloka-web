import Link from 'next/link';
import React from 'react';
import { FaYoutube } from 'react-icons/fa';
import { Smartphone, Mail, MapPin, MessageCircle, Shield, FileText, HeadphonesIcon } from 'lucide-react';

const Footer: React.FC = () => {
  const phoneNumber = '6287714625940';
  const message = 'Halo, saya ingin bertanya tentang...';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <footer className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white py-16 overflow-hidden">
      {/* Elemen Latar Belakang Animasi */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-pink-400 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Bagian Brand */}
        <div className="text-center mb-12 space-y-6">
          <div className="inline-flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 hover:scale-105">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg animate-pulse">
              <Smartphone className="w-8 h-8 text-white" />
            </div>
            <div className="text-left">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                Barizaloka Universe
              </h2>
              <p className="text-sm text-gray-300">Platform Inovatif</p>
            </div>
          </div>
          
          <p className="text-gray-200 text-lg max-w-2xl mx-auto leading-relaxed">
            🚀 Barizaloka Universe adalah platform bermanfaat yang hadir di mobile, website, dan desktop untuk mendukung aktivitas sehari-hari menjadi lebih mudah, praktis, dan efisien.
          </p>
        </div>

        {/* Grid Informasi Kontak */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-semibold text-lg">Email</h3>
            </div>
            <a
              href="mailto:barizaloka@gmail.com"
              className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline break-all"
            >
              barizaloka@gmail.com
            </a>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-semibold text-lg">WhatsApp</h3>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline"
            >
              +{phoneNumber}
            </a>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-semibold text-lg">Lokasi</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              RT 01 RW 02, Desa Karangasem<br />
              Kecamatan Sedan, Rembang<br />
              Jawa Tengah, Indonesia
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Link href="/">
                  <Smartphone className="w-5 h-5 text-white" />
                </Link>
              </div>
              <h3 className="font-semibold text-lg">Brand</h3>
            </div>
            <Link
              href="/"
              className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline"
            >
              Barizaloka Group
            </Link>
          </div>
        </div>

        {/* Media Sosial */}
        <div className="text-center mb-12">
          <h3 className="text-xl font-semibold mb-6 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
            Ikuti Kami
          </h3>
          <div className="flex justify-center">
            <a
              href="https://youtube.com/@barizaloka"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-red-500/20 transition-all duration-300 hover:scale-110"
              aria-label="YouTube Channel"
            >
              <FaYoutube size={32} className="text-white group-hover:text-red-400 transition-colors duration-300" />
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                YouTube
              </span>
            </a>
          </div>
        </div>

        {/* Link Tambahan */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <a 
            href="#" 
            className="group flex items-center space-x-2 text-gray-300 hover:text-white transition-all duration-300 hover:scale-105"
          >
            <Shield className="w-4 h-4 group-hover:text-blue-400" />
            <span>Kebijakan Privasi</span>
          </a>
          <a 
            href="#" 
            className="group flex items-center space-x-2 text-gray-300 hover:text-white transition-all duration-300 hover:scale-105"
          >
            <FileText className="w-4 h-4 group-hover:text-green-400" />
            <span>Syarat & Ketentuan</span>
          </a>
          <a 
            href="#" 
            className="group flex items-center space-x-2 text-gray-300 hover:text-white transition-all duration-300 hover:scale-105"
          >
            <HeadphonesIcon className="w-4 h-4 group-hover:text-purple-400" />
            <span>Dukungan</span>
          </a>
        </div>

        {/* Garis Pembatas */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"></div>

        {/* Hak Cipta */}
        <div className="text-center">
          <p className="text-gray-300 text-sm flex items-center justify-center space-x-2">
            <span>© {new Date().getFullYear()}</span>
            <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
            <span className="font-semibold">Barizaloka Universe</span>
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
            <span>Hak cipta dilindungi</span>
            <span className="text-lg">🚀</span>
          </p>
          <p className="text-xs text-gray-400 mt-2">
            Dibuat dengan ❤️ di Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
