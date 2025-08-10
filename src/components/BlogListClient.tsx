'use client';

import Image from 'next/image';
import React, { useState, useMemo } from 'react';
import Link from 'next/link';

// --- Definisi Tipe Data (Interfaces) ---
// Sesuaikan dengan struktur data dari WordPress REST API
export interface BlogPost {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  // Anda mungkin perlu menyesuaikan ini untuk gambar fitur
  featured_media: number;
  featured_media_url?: string;
  _embedded?: {
    'wp:featuredmedia'?: [{
      source_url: string;
      alt_text: string;
    }];
  };
  tags: number[]; // WordPress tags adalah ID
  _embedded_tags?: {
    id: number;
    name: string;
  }[];
}

interface BlogCardProps {
  post: BlogPost;
}

interface TagFilterProps {
  tags: { id: number; name: string }[];
  selectedTags: number[];
  onTagToggle: (tagId: number) => void;
}

// --- Komponen Pembantu ---
const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  // Gunakan gambar fitur dari embedded data jika ada, atau fallback
  const imageUrl = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'https://placehold.co/400x250/E5E7EB/4B5563?text=Gambar+Tidak+Tersedia';
  const imageAlt = post._embedded?.['wp:featuredmedia']?.[0]?.alt_text || post.title.rendered;

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <Image
        width={400}
        height={250}
        src={imageUrl}
        alt={imageAlt}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-purple-700 mb-2" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
        <p className="text-gray-600 mb-4 line-clamp-3" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
        <div className="flex flex-wrap gap-2 mb-4">
          {/* Tampilkan nama tag dari embedded data jika ada */}
          {post._embedded_tags && post._embedded_tags.map((tag) => (
            <span
              key={tag.id}
              className="bg-purple-100 text-purple-700 text-xs font-semibold px-2.5 py-0.5 rounded-full"
            >
              {tag.name}
            </span>
          ))}
        </div>
        <Link
          href={`/blog/${post.slug}`}
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-full shadow-md transition duration-300"
        >
          Baca Selengkapnya &rarr;
        </Link>
      </div>
    </div>
  );
};

const TagFilter: React.FC<TagFilterProps> = ({
  tags,
  selectedTags,
  onTagToggle,
}) => (
  <div className="flex flex-wrap gap-2">
    {tags.map((tag) => (
      <button
        key={tag.id}
        onClick={() => onTagToggle(tag.id)}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200
          ${selectedTags.includes(tag.id) ? 'bg-purple-600 text-white shadow-md' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
      >
        {tag.name}
      </button>
    ))}
  </div>
);

// --- Komponen Utama Client ---
interface BlogListClientProps {
  initialPosts: BlogPost[];
}

const BlogListClient: React.FC<BlogListClientProps> = ({ initialPosts }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedTags, setSelectedTags] = useState<number[]>([]);

  // Mengambil daftar tag dari semua postingan
  const availableTags = useMemo(() => {
    const tagsMap = new Map<number, { id: number; name: string }>();
    initialPosts.forEach((post) => {
      post._embedded_tags?.forEach((tag) => tagsMap.set(tag.id, tag));
    });
    return Array.from(tagsMap.values()).sort((a, b) => a.name.localeCompare(b.name));
  }, [initialPosts]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleTagToggle = (tagId: number) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tagId)
        ? prevTags.filter((t) => t !== tagId)
        : [...prevTags, tagId]
    );
  };

  const filteredBlogPosts = useMemo(() => {
    let filtered = initialPosts;

    if (searchQuery) {
      const lowerCaseQuery = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (post) =>
          post.title.rendered.toLowerCase().includes(lowerCaseQuery) ||
          post.excerpt.rendered.toLowerCase().includes(lowerCaseQuery)
      );
    }

    if (selectedTags.length > 0) {
      filtered = filtered.filter((post) =>
        selectedTags.every((selectedTagId) =>
          post.tags.includes(selectedTagId)
        )
      );
    }

    return filtered;
  }, [initialPosts, searchQuery, selectedTags]);

  return (
    <main className="flex-grow container mx-auto px-4 py-28">
      <h1 className="text-5xl font-extrabold text-center text-purple-800 mb-16">
        Artikel Terbaru Kami
      </h1>

      {/* Search and Filter Section */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex-grow w-full md:w-auto">
          <label htmlFor="article-search" className="sr-only">
            Cari Artikel
          </label>
          <input
            type="text"
            id="article-search"
            placeholder="Cari artikel berdasarkan judul atau deskripsi..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        <button
          onClick={() => {
            /* Pencarian sudah otomatis via state change */
          }}
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 w-full md:w-auto"
        >
          Cari Artikel
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
        <h3 className="text-xl font-bold text-purple-700 mb-4">
          Filter Berdasarkan Tag:
        </h3>
        <TagFilter
          tags={availableTags}
          selectedTags={selectedTags}
          onTagToggle={handleTagToggle}
        />
      </div>

      {/* Blog Posts List */}
      {filteredBlogPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredBlogPosts.map((post) => (
            // Properti 'key' ini sangat penting untuk performa dan stabilitas React.
            // Pastikan 'post.id' unik untuk setiap postingan.
            <BlogCard key={post.id + "-" + new Date()} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600 text-xl py-10">
          Tidak ada artikel yang ditemukan.
        </p>
      )}
    </main>
  );
};

export default BlogListClient;
