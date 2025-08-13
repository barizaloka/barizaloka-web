// src/app/(home)/blog/page.tsx

import React from 'react';
import BlogListClient from '@/barizaloka-web/components/BlogListClient';
import { getAllPostsWithMetadata } from '@/barizaloka-web/lib/blog';
import Navbar from '@/barizaloka-web/components/Navbar';

// Import the type from BlogListClient if it exports it
// import type { BlogListClientProps } from '@/barizaloka-web/components/BlogListClient';

// Alternative: Use React.ComponentProps to extract the props type
type BlogListClientProps = React.ComponentProps<typeof BlogListClient>;
type BlogPost = BlogListClientProps['initialPosts'][number];


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
      <Navbar link='/blog' />
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