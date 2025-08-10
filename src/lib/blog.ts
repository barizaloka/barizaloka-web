// src/lib/blog.ts

import { BlogPost } from '@/barizaloka-web/components/BlogListClient';

const WORDPRESS_API_URL = process.env.WORDPRESS_API_URL;

/**
 * Mengambil semua postingan blog dari WordPress REST API.
 * Menggunakan parameter '_embed' untuk menyertakan data gambar dan tag.
 */
export async function getAllPostsWithMetadata(): Promise<BlogPost[]> {
  if (!WORDPRESS_API_URL) {
    throw new Error('Variabel lingkungan WORDPRESS_API_URL tidak didefinisikan');
  }

  const res = await fetch(`${WORDPRESS_API_URL}/posts?_embed`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error(`Gagal mengambil data dari API: ${res.statusText}`);
  }

  const posts = await res.json();
  return posts;
}

/**
 * Mengambil satu postingan blog berdasarkan slug-nya.
 * Menggunakan parameter '_embed' untuk menyertakan data gambar dan tag.
 */
export async function getPostBySlug(slug: string): Promise<BlogPost> {
  if (!WORDPRESS_API_URL) {
    throw new Error('Variabel lingkungan WORDPRESS_API_URL tidak didefinisikan');
  }

  const res = await fetch(`${WORDPRESS_API_URL}/posts?slug=${slug}&_embed`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error(`Gagal mengambil postingan dengan slug: ${slug}`);
  }

  const posts = await res.json();
  if (posts.length === 0) {
    throw new Error('Postingan tidak ditemukan');
  }

  return posts[0];
}
