'use client';

import Image from 'next/image';
import React, { useState, useMemo } from 'react';
// import Link from 'next/link'; // Gunakan ini di proyek Next.js asli

// --- Definisi Tipe Data (Interfaces) ---
// Pastikan BlogPost interface sama dengan yang ada di src/lib/blog.ts
interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  tags: string[];
  contentHtml?: string;
}

interface BlogCardProps {
  post: BlogPost;
}

interface TagFilterProps {
  tags: string[];
  selectedTags: string[];
  onTagToggle: (tag: string) => void;
}

// --- Komponen Pembantu (dipindahkan dari BlogPage) ---
const BlogCard: React.FC<BlogCardProps> = ({ post }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
    <Image
      width={400}
      height={250}
      src={post.imageUrl}
      alt={post.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <h3 className="text-2xl font-bold text-purple-700 mb-2">{post.title}</h3>
      <p className="text-gray-600 mb-4 line-clamp-3">{post.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="bg-purple-100 text-purple-700 text-xs font-semibold px-2.5 py-0.5 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      {/* Menggunakan <a> tag biasa untuk pratinjau. Di Next.js asli, gunakan <Link> */}
      <a
        href={`/blog/${post.slug}`}
        className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-full shadow-md transition duration-300"
      >
        Baca Selengkapnya &rarr;
      </a>
    </div>
  </div>
);

const TagFilter: React.FC<TagFilterProps> = ({
  tags,
  selectedTags,
  onTagToggle,
}) => (
  <div className="flex flex-wrap gap-2">
    {tags.map((tag) => (
      <button
        key={tag}
        onClick={() => onTagToggle(tag)}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200
          ${selectedTags.includes(tag) ? 'bg-purple-600 text-white shadow-md' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
      >
        {tag}
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
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const availableTags = useMemo(() => {
    const tags = new Set<string>();
    initialPosts.forEach((post) => {
      post.tags.forEach((tag) => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, [initialPosts]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleTagToggle = (tag: string) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag)
        ? prevTags.filter((t) => t !== tag)
        : [...prevTags, tag]
    );
  };

  const filteredBlogPosts = useMemo(() => {
    let filtered = initialPosts;

    if (searchQuery) {
      const lowerCaseQuery = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(lowerCaseQuery) ||
          post.description.toLowerCase().includes(lowerCaseQuery)
      );
    }

    if (selectedTags.length > 0) {
      filtered = filtered.filter((post) =>
        selectedTags.every((selectedTag) => post.tags.includes(selectedTag))
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
            <BlogCard key={post.slug} post={post} />
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
