'use client'; // Menandai komponen ini sebagai Client Component

import React, { useState, useMemo } from 'react';
import Footer from '@/barizaloka-web/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

// --- Definisi Tipe Data (Interfaces) ---

interface BlogPost {
	id: string;
	imageUrl: string;
	title: string;
	description: string;
	tags: string[];
}

interface BlogCardProps {
	post: BlogPost;
}

interface TagFilterProps {
	tags: string[];
	selectedTags: string[];
	onTagToggle: (tag: string) => void;
}

// --- Komponen-komponen ---

const BlogCard: React.FC<BlogCardProps> = ({ post }) => (
	<div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
		<Image src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
		<div className="p-6">
			<h3 className="text-2xl font-bold text-purple-700 mb-2">{post.title}</h3>
			<p className="text-gray-600 mb-4 line-clamp-3">{post.description}</p>
			<div className="flex flex-wrap gap-2">
				{post.tags.map((tag) => (
					<span key={tag} className="bg-purple-100 text-purple-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">
						{tag}
					</span>
				))}
			</div>
			{/* Menggunakan <a> tag biasa untuk pratinjau. Di Next.js asli, gunakan <Link> */}
			<a href={`/blog/${post.id}`} className="mt-4 inline-block text-purple-600 hover:text-purple-800 font-semibold">
				Baca Selengkapnya &rarr;
			</a>
		</div>
	</div>
);

const TagFilter: React.FC<TagFilterProps> = ({ tags, selectedTags, onTagToggle }) => (
	<div className="flex flex-wrap gap-2">
		{tags.map((tag) => (
			<button
				key={tag}
				onClick={() => onTagToggle(tag)}
				className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200
          ${selectedTags.includes(tag) ? 'bg-purple-600 text-white shadow-md' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`
				}
			>
				{tag}
			</button>
		))}
	</div>
);

// --- Halaman Blog Utama ---

const BlogPage: React.FC = () => {
	// Data dummy untuk artikel blog
	const allBlogPosts: BlogPost[] = useMemo(() => [
		{
			id: 'artikel-1',
			imageUrl: 'https://placehold.co/400x250/A78BFA/FFFFFF?text=Web+Dev',
			title: 'Tren Pengembangan Web di 2025',
			description: 'Menganalisis tren terbaru dalam pengembangan web, termasuk teknologi front-end dan back-end yang sedang naik daun.',
			tags: ['Web Development', 'Frontend', 'Backend', 'Tren'],
		},
		{
			id: 'artikel-2',
			imageUrl: 'https://placehold.co/400x250/8B5CF6/FFFFFF?text=Mobile+App',
			title: 'Membangun Aplikasi Mobile Cross-Platform dengan React Native',
			description: 'Panduan lengkap untuk memulai pengembangan aplikasi mobile lintas platform menggunakan React Native.',
			tags: ['Mobile Development', 'React Native', 'Cross-Platform'],
		},
		{
			id: 'artikel-3',
			imageUrl: 'https://placehold.co/400x250/C084FC/FFFFFF?text=UI/UX',
			title: 'Pentingnya Desain UI/UX dalam Produk Digital',
			description: 'Mengapa desain antarmuka pengguna dan pengalaman pengguna sangat krusial untuk kesuksesan produk Anda.',
			tags: ['UI/UX', 'Desain', 'User Experience'],
		},
		{
			id: 'artikel-4',
			imageUrl: 'https://placehold.co/400x250/DDD6FE/FFFFFF?text=SEO',
			title: 'Strategi SEO untuk Meningkatkan Visibilitas Website',
			description: 'Tips dan trik untuk mengoptimalkan website Anda agar mudah ditemukan di mesin pencari.',
			tags: ['SEO', 'Pemasaran Digital', 'Website'],
		},
		{
			id: 'artikel-5',
			imageUrl: 'https://placehold.co/400x250/E9D5FF/FFFFFF?text=Cloud',
			title: 'Memahami Konsep Cloud Computing untuk Startup',
			description: 'Pengenalan dasar tentang cloud computing dan bagaimana startup dapat memanfaatkannya.',
			tags: ['Cloud Computing', 'Startup', 'Teknologi'],
		},
		{
			id: 'artikel-6',
			imageUrl: 'https://placehold.co/400x250/FBCFE8/FFFFFF?text=AI',
			title: 'Peran AI dalam Transformasi Digital Bisnis',
			description: 'Bagaimana kecerdasan buatan mengubah cara bisnis beroperasi dan berinovasi.',
			tags: ['AI', 'Transformasi Digital', 'Bisnis'],
		},
	], []);

	const availableTags = useMemo(() => {
		const tags = new Set<string>();
		allBlogPosts.forEach(post => {
			post.tags.forEach(tag => tags.add(tag));
		});
		return Array.from(tags).sort();
	}, [allBlogPosts]);

	const [searchQuery, setSearchQuery] = useState<string>('');
	const [selectedTags, setSelectedTags] = useState<string[]>([]);

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
		let filtered = allBlogPosts;

		// Filter berdasarkan query pencarian
		if (searchQuery) {
			const lowerCaseQuery = searchQuery.toLowerCase();
			filtered = filtered.filter(
				(post) =>
					post.title.toLowerCase().includes(lowerCaseQuery) ||
					post.description.toLowerCase().includes(lowerCaseQuery)
			);
		}

		// Filter berdasarkan tag yang dipilih
		if (selectedTags.length > 0) {
			filtered = filtered.filter((post) =>
				selectedTags.every((selectedTag) => post.tags.includes(selectedTag))
			);
		}

		return filtered;
	}, [allBlogPosts, searchQuery, selectedTags]);

	return (
		<div className="min-h-screen bg-gradient-to-br from-purple-200 to-pink-200 font-sans text-gray-800">
			{/* Navbar (sederhana untuk halaman blog, atau bisa dibuat komponen terpisah) */}
			<nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-80 backdrop-blur-md shadow-lg rounded-b-3xl mx-auto mt-4 max-w-6xl p-4 flex items-center justify-between">
				<div className="text-2xl font-bold text-purple-700">Artikel Keren Kami</div>
				<Link href="/" className="text-gray-700 hover:text-purple-700 font-medium transition duration-300 ease-in-out px-3 py-2 rounded-md hover:bg-purple-100">
					&larr; Kembali ke Beranda
				</Link>
			</nav>

			<main className="container mx-auto px-4 py-28">

				{/* Search and Filter Section */}
				 <div className="bg-white rounded-xl shadow-lg p-8 mb-12 flex flex-col gap-6">
          {/* Search Input */}
          <div>
            <label htmlFor="article-search" className="sr-only">Cari Artikel</label>
            <input
              type="text"
              id="article-search"
              placeholder="Cari artikel berdasarkan judul atau deskripsi..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>

          {/* Tag Filter */}
          <div>
            <h3 className="text-xl font-bold text-purple-700 mb-4">Filter Berdasarkan Tag:</h3>
            <TagFilter
              tags={availableTags}
              selectedTags={selectedTags}
              onTagToggle={handleTagToggle}
            />
          </div>
        </div>

				{/* Blog Posts List */}
				{filteredBlogPosts.length > 0 ? (
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
						{filteredBlogPosts.map((post) => (
							<BlogCard key={post.id} post={post} />
						))}
					</div>
				) : (
					<p className="text-center text-gray-600 text-xl py-10">Tidak ada artikel yang ditemukan.</p>
				)}
			</main>

			{/* Footer */}
			<Footer />
		</div>
	);
};

export default BlogPage;
