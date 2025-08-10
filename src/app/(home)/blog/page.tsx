// src/app/(home)/blog/page.tsx

import React from 'react';
import Link from 'next/link';
import BlogListClient from '@/barizaloka-web/components/BlogListClient';
import { getAllPostsWithMetadata } from '@/barizaloka-web/lib/blog';

// Import the type from BlogListClient if it exports it
// import type { BlogListClientProps } from '@/barizaloka-web/components/BlogListClient';

// Alternative: Use React.ComponentProps to extract the props type
type BlogListClientProps = React.ComponentProps<typeof BlogListClient>;
type BlogPost = BlogListClientProps['initialPosts'][number];

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
    allBlogPosts = await getAllPostsWithMetadata();
  } catch (error) {
    console.error('Gagal mengambil artikel blog di server:', error);
    loadingError = true;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 to-pink-200 font-sans text-gray-800 flex flex-col justify-between">
      <Navbar />
      <div className="flex-grow container mx-auto px-4 py-28">
        {loadingError ? (
          <p className="text-center text-red-600 text-xl py-10">
            Gagal memuat artikel blog. Silakan coba lagi nanti.
          </p>
        ) : (
          <BlogListClient initialPosts={allBlogPosts} />
        )}
      </div>
    </div>
  );
};

export default BlogPage;