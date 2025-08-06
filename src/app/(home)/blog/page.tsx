// src/app/blog/page.tsx
// Ini adalah Server Component

import React from 'react';
import { getAllPostsMetadata, BlogPost } from '@/barizaloka-web/lib/blog';
import BlogListClient from '@/barizaloka-web/components/BlogListClient';
import Link from 'next/link';

// Navbar sederhana (bisa dipindahkan ke komponen terpisah jika diperlukan)
const Navbar: React.FC = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-80 backdrop-blur-md shadow-lg rounded-b-3xl mx-auto mt-4 max-w-6xl p-4 flex items-center justify-between">
    <div className="text-2xl font-bold text-purple-700">
      Barizaloka Group Blog
    </div>
    <Link
      href="/"
      className="text-gray-700 hover:text-purple-700 font-medium transition duration-300 ease-in-out px-3 py-2 rounded-md hover:bg-purple-100"
    >
      &larr; Kembali ke Beranda
    </Link>
  </nav>
);

const BlogPage: React.FC = async () => {
  let allBlogPosts: BlogPost[] = [];
  let loadingError: boolean = false;

  try {
    // Panggil fungsi server-side untuk mendapatkan data blog
    allBlogPosts = await getAllPostsMetadata();
  } catch (error) {
    console.error('Failed to fetch blog posts on server:', error);
    loadingError = true;
    // Fallback ke data dummy jika terjadi error saat build/runtime di server
    allBlogPosts = [];
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 to-pink-200 font-sans text-gray-800 flex flex-col justify-between">
      <Navbar />
      {loadingError ? (
        <p className="text-center text-red-600 text-xl py-10">
          Gagal memuat artikel blog. Silakan coba lagi nanti.
        </p>
      ) : (
        <BlogListClient initialPosts={allBlogPosts} />
      )}
    </div>
  );
};

export default BlogPage;
