'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Logika otentikasi login di sini (misalnya, panggil API)
    console.log('Login attempt:', { username, password });
    // Setelah berhasil, arahkan pengguna ke dashboard atau halaman lain
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 to-pink-200 font-sans text-gray-800 flex flex-col justify-between">
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8 transform transition-transform duration-300 hover:scale-105">
          <h1 className="text-4xl font-extrabold text-center text-purple-800 mb-8">Login</h1>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-1" htmlFor="username">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
            >
              Login
            </button>
          </form>
          <p className="text-center text-gray-600 mt-6">
            Belum punya akun?{' '}
            <Link href="/register" className="text-purple-600 hover:text-purple-800 font-semibold">
              Daftar di sini
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
