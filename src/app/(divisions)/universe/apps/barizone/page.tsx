'use client';

import React from 'react';
import { PawPrint, Sparkles, HeartHandshake, ShieldCheck } from 'lucide-react';

// --- Halaman Aplikasi Fokus & Produktivitas Berbasis Maskot ---
const BarizonePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 font-sans text-gray-800">
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-28 h-28 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl mb-6 shadow-xl">
            {/* Menggunakan ikon cakar untuk merepresentasikan tema hewan */}
            <PawPrint className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-4 leading-tight">
            Barizone
          </h1>
          <p className="text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Aplikasi fokus yang membantu Anda menaklukkan tugas sambil bertualang
            bersama teman hewan yang menggemaskan. Selamatkan dan kumpulkan
            mereka semua!
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-lg">
              Unduh di Play Store
            </button>
            <button className="bg-transparent border-2 border-indigo-600 text-indigo-600 font-bold py-4 px-10 rounded-xl hover:bg-indigo-50 transition-colors shadow-lg text-lg">
              Unduh di App Store
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-white rounded-2xl shadow-xl p-12 mb-16">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Bertualang Bersama Barizone Anda</h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Setiap sesi fokus Anda adalah petualangan untuk menyelamatkan teman
              hewan baru. Bangun tim Anda dan taklukkan setiap tugas!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Fitur yang disesuaikan dengan konsep hewan dan petualangan */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-4">
                <Sparkles className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Sesi Fokus & Penyelamatan</h3>
              <p className="text-gray-600">
                Atur pengatur waktu fokus Anda dan saksikan Barizone
                muncul dan tumbuh. Jika Anda berhasil fokus, Anda berhasil
                menyelamatkan mereka!
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-4">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Koleksi Tim Unik</h3>
              <p className="text-gray-600">
                Setiap sesi fokus yang berhasil akan membuka dan menambahkan
                maskot hewan baru ke tim Anda, masing-masing dengan keunikan
                masing-masing.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-4">
                <HeartHandshake className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Misi Komunitas</h3>
              <p className="text-gray-600">
                Bergabunglah dengan teman-teman Anda dalam misi untuk
                menyelamatkan hewan langka dan membuka hadiah kolaborasi
                eksklusif.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BarizonePage;