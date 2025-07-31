import Link from 'next/link';
import React from 'react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 to-pink-200 font-sans text-gray-800 flex flex-col justify-between">
      <main className="flex-grow flex items-center justify-center text-center px-4 py-28">
        <div className="max-w-xl mx-auto p-10 bg-white rounded-3xl shadow-xl transform hover:scale-105 transition-transform duration-300">
          <div className="mb-6 text-6xl font-extrabold text-purple-700 animate-pulse-slow">
            404
          </div>
          <h1 className="text-4xl font-extrabold text-purple-800 mb-4">
            Halaman Tidak Ditemukan
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Mohon maaf, halaman yang Anda cari tidak dapat kami temukan. Mungkin tautannya rusak, atau halaman sudah dipindahkan.
          </p>
          <Link href="/" className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-110">
            Kembali ke Halaman Utama
          </Link>
        </div>
      </main>
    </div>
  );
};

export default NotFoundPage;
