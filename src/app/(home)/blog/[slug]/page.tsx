// src/app/blog/[slug]/page.tsx
// Ini adalah Server Component

import React from 'react';
import { getPostData, getPostSlugs, BlogPost } from '@/barizaloka-web/lib/blog'; // Import dari utility blog
import Link from 'next/link'; // Gunakan ini di proyek Next.js asli
import Image from 'next/image';

// Fungsi ini diperlukan oleh Next.js App Router untuk Static Params
// Ini akan membuat halaman statis untuk setiap slug blog post
export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

// Komponen Halaman Detail Blog (Server Component)
/* eslint-disable */
const BlogPostPage: React.FC<{ params: any }> = async props => {
  const params = await props.params;
  // Mengatasi error "params should be awaited" dengan memastikan akses yang jelas
  // Meskipun params secara default sudah object, ini bisa membantu linter/compiler
  console.log(params)
  const { slug } = params;

  let post: BlogPost | null = null;
  let loadingError: boolean = false;

  try {
    post = await getPostData(slug); // Menggunakan slug yang sudah didefinisikan
  } catch (error) {
    console.error(`Failed to fetch blog post for slug: ${slug}`, error);
    loadingError = true;
  }

  if (loadingError || !post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-200 to-pink-200 flex items-center justify-center font-sans text-gray-800">
        <div className="text-center p-8 bg-white rounded-xl shadow-lg">
          <h1 className="text-4xl font-extrabold text-purple-800 mb-4">
            Artikel Tidak Ditemukan
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Maaf, artikel yang Anda cari tidak ada atau terjadi kesalahan saat
            memuatnya.
          </p>
          <Link
            href="/blog"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-full shadow-md transition duration-300"
          >
            &larr; Kembali ke Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 to-pink-200 font-sans text-gray-800 flex flex-col justify-between">
      {/* Navbar sederhana untuk halaman blog */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-80 backdrop-blur-md shadow-lg rounded-b-3xl mx-auto mt-4 max-w-6xl p-4 flex items-center justify-between">
        <Link
          href="/blog"
          className="text-gray-700 hover:text-purple-700 font-medium transition duration-300 ease-in-out px-3 py-2 rounded-md hover:bg-purple-100"
        >
          &larr; Kembali ke Daftar Blog
        </Link>
      </nav>

      <main className="flex-grow container mx-auto px-4 py-28">
        <article className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mx-auto">
          {' '}
          {/* Perubahan ada di sini: max-w-3xl dihapus */}
          <Image
            width={800}
            height={450}
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-auto rounded-lg mb-8"
          />
          <h1 className="text-4xl font-extrabold text-purple-800 mb-4">
            {post.title}
          </h1>
          <p className="text-gray-500 text-sm mb-4">
            Dipublikasikan pada{' '}
            {new Date(post.date).toLocaleDateString('id-ID', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="bg-purple-100 text-purple-700 text-xs font-semibold px-2.5 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <div
            className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.contentHtml || '' }}
          />
        </article>
      </main>
    </div>
  );
};

export default BlogPostPage;
