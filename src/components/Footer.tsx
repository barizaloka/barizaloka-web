import React from 'react';

const Footer: React.FC = () => {
  const phoneNumber = '6287714625940';
  const message = 'Halo, saya ingin bertanya tentang...';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <footer className="bg-gradient-to-r from-purple-700 to-purple-900 text-white py-10 text-center shadow-lg">
      <div className="container mx-auto px-4 animate-fade-in"> {/* Animasi fade-in */}
        <p className="mb-2 text-lg font-semibold flex items-center justify-center">
          ✨ Barizaloka Group ✨
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
        <p className="mt-4 text-sm opacity-80">
          © {new Date().getFullYear()} Barizaloka Group. All rights reserved. 🚀
        </p>
      </div>
    </footer>
  );
};

export default Footer;