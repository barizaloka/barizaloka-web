'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// --- Definisi Tipe Data (Interfaces) ---

interface WebsiteProject {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  caseStudyLink?: string; // Opsional: tautan ke studi kasus detail
}

interface WebsiteProjectCardProps {
  project: WebsiteProject;
}

// --- Komponen-komponen ---

const WebsiteProjectCard: React.FC<WebsiteProjectCardProps> = ({ project }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
    <Image
      src={project.imageUrl}
      alt={project.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <h3 className="text-2xl font-bold text-purple-700 mb-2">
        {project.title}
      </h3>
      <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
      {project.caseStudyLink && (
        <Link
          href={project.caseStudyLink}
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-full shadow-md transition duration-300"
        >
          Lihat Studi Kasus
        </Link>
      )}
      {!project.caseStudyLink && (
        <span className="inline-block text-gray-500 font-semibold py-2 px-6 rounded-full border border-gray-300">
          Detail Segera Hadir
        </span>
      )}
    </div>
  </div>
);

// --- Halaman Portofolio Website Utama ---

const WebsitePortfolioPage: React.FC = () => {
  // Data dummy untuk proyek website
  const websiteProjects: WebsiteProject[] = [
    {
      id: 'web-proj-1',
      title: 'Website E-commerce Fesyen',
      description:
        'Pengembangan platform e-commerce modern dengan fitur katalog produk, keranjang belanja, dan sistem pembayaran terintegrasi.',
      imageUrl:
        'https://placehold.co/400x250/A78BFA/FFFFFF?text=E-commerce+Fashion',
      caseStudyLink: '#', // Ganti dengan tautan studi kasus nyata
    },
    {
      id: 'web-proj-2',
      title: 'Situs Web Perusahaan Konsultan',
      description:
        'Desain ulang dan pengembangan situs web profesional untuk perusahaan konsultan, menonjolkan layanan dan testimoni klien.',
      imageUrl:
        'https://placehold.co/400x250/8B5CF6/FFFFFF?text=Consulting+Website',
      caseStudyLink: '#',
    },
    {
      id: 'web-proj-3',
      title: 'Portal Berita Lokal Interaktif',
      description:
        'Pembangunan portal berita dengan sistem manajemen konten yang kuat, fitur komentar, dan integrasi media sosial.',
      imageUrl: 'https://placehold.co/400x250/C084FC/FFFFFF?text=News+Portal',
    },
    {
      id: 'web-proj-4',
      title: 'Landing Page Produk SaaS',
      description:
        'Pembuatan landing page yang menarik dan konvertif untuk memperkenalkan produk Software as a Service (SaaS) baru.',
      imageUrl:
        'https://placehold.co/400x250/FBCFE8/FFFFFF?text=SaaS+Landing+Page',
      caseStudyLink: '#',
    },
    {
      id: 'web-proj-5',
      title: 'Website Portofolio Fotografer Profesional',
      description:
        'Desain website galeri yang elegan untuk menampilkan karya fotografi dengan fitur filter dan tampilan responsif.',
      imageUrl:
        'https://placehold.co/400x250/DDD6FE/FFFFFF?text=Photographer+Portfolio',
    },
    {
      id: 'web-proj-6',
      title: 'Sistem Reservasi Online Restoran',
      description:
        'Pengembangan sistem reservasi meja online yang mudah digunakan, terintegrasi dengan jadwal dan notifikasi.',
      imageUrl:
        'https://placehold.co/400x250/E9D5FF/FFFFFF?text=Restaurant+Booking',
      caseStudyLink: '#',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 to-pink-200 font-sans text-gray-800 flex flex-col justify-between">
      {/* Navbar sederhana untuk halaman ini */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-80 backdrop-blur-md shadow-lg rounded-b-3xl mx-auto mt-4 max-w-6xl p-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-purple-700">
          Portofolio Website
        </div>
        <Link
          href="/"
          className="text-gray-700 hover:text-purple-700 font-medium transition duration-300 ease-in-out px-3 py-2 rounded-md hover:bg-purple-100"
        >
          &larr; Kembali ke Beranda
        </Link>
      </nav>

      <main className="flex-grow container mx-auto px-4 py-28">
        <h1 className="text-5xl font-extrabold text-center text-purple-800 mb-16">
          Portofolio Jasa Pembuatan Website
        </h1>

        {websiteProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {websiteProjects.map((project) => (
              <WebsiteProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 text-xl py-10">
            Belum ada proyek website yang ditampilkan.
          </p>
        )}
      </main>
    </div>
  );
};

export default WebsitePortfolioPage;
