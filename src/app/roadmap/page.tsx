'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// --- Definisi Tipe Data (Interfaces) ---

interface Roadmap {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

interface RoadmapCardProps {
  roadmap: Roadmap;
}

interface CategoryFilterProps {
  categories: string[];
  selectedCategories: string[];
  onCategoryToggle: (category: string) => void;
}

// --- Komponen-komponen ---

const RoadmapCard: React.FC<RoadmapCardProps> = ({ roadmap }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
    <Image src={roadmap.imageUrl} alt={roadmap.title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <div className="text-sm font-semibold text-white bg-purple-600 rounded-full px-3 py-1 inline-block mb-3">
        {roadmap.category}
      </div>
      <h3 className="text-2xl font-bold text-purple-700 mb-2">{roadmap.title}</h3>
      <p className="text-gray-600 mb-4 line-clamp-3">{roadmap.description}</p>
      <Link href={`/roadmap/${roadmap.id}`} className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-full shadow-md transition duration-300">
        Lihat Roadmap
      </Link>
    </div>
  </div>
);

const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories, selectedCategories, onCategoryToggle }) => (
  <div className="flex flex-wrap gap-2">
    {categories.map((category) => (
      <button
        key={category}
        onClick={() => onCategoryToggle(category)}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200
          ${selectedCategories.includes(category) ? 'bg-purple-600 text-white shadow-md' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`
        }
      >
        {category}
      </button>
    ))}
  </div>
);

// --- Halaman Daftar Roadmap Utama ---

const RoadmapPage: React.FC = () => {
  // Data dummy untuk roadmap
  const allRoadmaps: Roadmap[] = useMemo(() => [
    {
      id: 'html-dasar',
      title: 'Roadmap HTML Dasar',
      description: 'Pelajari dasar-dasar HTML, struktur dokumen, elemen, dan atribut untuk membangun halaman web.',
      imageUrl: 'https://placehold.co/400x250/A78BFA/FFFFFF?text=HTML+Dasar+Roadmap',
      category: 'Web Development',
    }
  ], []);

  const availableCategories = useMemo(() => {
    const categories = new Set<string>();
    allRoadmaps.forEach(roadmap => {
      categories.add(roadmap.category);
    });
    return Array.from(categories).sort();
  }, [allRoadmaps]);

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((c) => c !== category)
        : [...prevCategories, category]
    );
  };

  const filteredRoadmaps = useMemo(() => {
    let filtered = allRoadmaps;

    // Filter berdasarkan query pencarian
    if (searchQuery) {
      const lowerCaseQuery = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (roadmap) =>
          roadmap.title.toLowerCase().includes(lowerCaseQuery) ||
          roadmap.description.toLowerCase().includes(lowerCaseQuery)
      );
    }

    // Filter berdasarkan kategori yang dipilih
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((roadmap) =>
        selectedCategories.every((selectedCategory) => roadmap.category.includes(selectedCategory))
      );
    }

    return filtered;
  }, [allRoadmaps, searchQuery, selectedCategories]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 to-pink-200 font-sans text-gray-800 flex flex-col justify-between">
      {/* Navbar (sederhana untuk halaman ini) */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-80 backdrop-blur-md shadow-lg rounded-b-3xl mx-auto mt-4 max-w-6xl p-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-purple-700">Roadmap Pembelajaran</div>
        <Link href="/" className="text-gray-700 hover:text-purple-700 font-medium transition duration-300 ease-in-out px-3 py-2 rounded-md hover:bg-purple-100">
          &larr; Kembali ke Beranda
        </Link>
      </nav>

      <main className="flex-grow container mx-auto px-4 py-28">
        <h1 className="text-5xl font-extrabold text-center text-purple-800 mb-16">
          Jalur Karir di Dunia Digital
        </h1>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-grow w-full md:w-auto">
            <label htmlFor="roadmap-search" className="sr-only">Cari Roadmap</label>
            <input
              type="text"
              id="roadmap-search"
              placeholder="Cari roadmap berdasarkan judul atau deskripsi..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
          <button
            onClick={() => { /* Pencarian sudah otomatis via state change */ }}
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 w-full md:w-auto"
          >
            Cari
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h3 className="text-xl font-bold text-purple-700 mb-4">Filter Berdasarkan Kategori:</h3>
          <CategoryFilter
            categories={availableCategories}
            selectedCategories={selectedCategories}
            onCategoryToggle={handleCategoryToggle}
          />
        </div>

        {/* Roadmap List */}
        {filteredRoadmaps.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredRoadmaps.map((roadmap) => (
              <RoadmapCard key={roadmap.id} roadmap={roadmap} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 text-xl py-10">Tidak ada roadmap yang ditemukan.</p>
        )}
      </main>
    </div>
  );
};

export default RoadmapPage;
