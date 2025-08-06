'use client'; // Menandai komponen ini sebagai Client Component untuk Next.js App Router

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import QuotePopup from './components/QuotePopup'; // Pastikan path ini benar

// --- Definisi Tipe Data (Interfaces) ---

/**
 * @interface NavItemProps
 * @description Props untuk komponen NavItem.
 * @property {string} title - Teks yang akan ditampilkan pada item navigasi.
 * @property {() => void} [onClick] - Fungsi callback yang dipanggil saat item diklik (opsional, untuk tombol).
 * @property {string} [href] - URL tujuan navigasi (opsional, untuk tautan).
 */
interface NavItemProps {
  title: string;
  onClick?: () => void;
  href?: string;
}

/**
 * @interface ServiceFeatureProps
 * @description Props untuk komponen ServiceFeature.
 * @property {string} icon - Representasi ikon (bisa berupa emoji, path SVG, atau nama ikon).
 * @property {string} title - Judul fitur layanan.
 * @property {string} description - Deskripsi singkat fitur layanan.
 */
interface ServiceFeatureProps {
  icon: string;
  title: string;
  description: string;
}

/**
 * @interface PricingCardProps
 * @description Props untuk komponen PricingCard.
 * @property {string} title - Judul paket harga.
 * @property {string} price - Harga paket.
 * @property {string} description - Deskripsi singkat paket.
 * @property {string[]} features - Daftar fitur yang termasuk dalam paket.
 */
interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
}

/**
 * @interface TechCardProps
 * @description Props untuk komponen TechCard.
 * @property {string} icon - Representasi ikon teknologi (bisa berupa emoji, path SVG, atau nama ikon).
 * @property {string} title - Nama teknologi.
 * @property {string} description - Deskripsi singkat teknologi.
 */
interface TechCardProps {
  icon: string;
  title: string;
  description: string;
}

// --- Komponen-komponen Reusable ---

/**
 * @component NavItem
 * @description Komponen untuk item navigasi di header atau sidebar.
 * Mendukung navigasi internal dengan `onClick` atau eksternal/internal dengan `href`.
 * @param {NavItemProps} props - Properti untuk komponen NavItem.
 */
const NavItem: React.FC<NavItemProps> = ({ title, onClick, href }) => {
  const commonClasses =
    'inline-flex text-gray-700 hover:text-purple-700 font-medium transition duration-300 ease-in-out px-3 py-2 rounded-md hover:bg-purple-100';
  if (href) {
    return (
      <a href={href} className={commonClasses}>
        {title}
      </a>
    );
  }
  return (
    <button onClick={onClick} className={commonClasses}>
      {title}
    </button>
  );
};

/**
 * @component ServiceFeature
 * @description Menampilkan fitur layanan dengan ikon, judul, dan deskripsi.
 * @param {ServiceFeatureProps} props - Properti untuk komponen ServiceFeature.
 */
const ServiceFeature: React.FC<ServiceFeatureProps> = ({
  icon,
  title,
  description,
}) => (
  <div className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300 ease-in-out">
    <div className="text-5xl mb-4 text-purple-600">{icon}</div>
    <h3 className="text-xl font-bold text-purple-700 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

/**
 * @component PricingCard
 * @description Menampilkan kartu paket harga dengan judul, harga, deskripsi, dan daftar fitur.
 * @param {PricingCardProps} props - Properti untuk komponen PricingCard.
 */
const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  description,
  features,
}) => (
  <div className="bg-white rounded-xl shadow-lg p-8 text-center flex flex-col transform hover:scale-105 transition-transform duration-300 ease-in-out">
    <h3 className="text-3xl font-extrabold text-purple-700 mb-2">{title}</h3>
    <p className="text-4xl font-bold text-gray-800 mb-4">{price}</p>
    <p className="text-gray-600 mb-6">{description}</p>
    <ul className="text-left text-gray-700 space-y-2 flex-grow">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <svg
            className="h-6 w-6 text-purple-500 mr-2 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    {/* Tombol "Pilih Paket" bisa ditambahkan di sini */}
  </div>
);

/**
 * @component TechCard
 * @description Menampilkan kartu teknologi dengan ikon, judul, dan deskripsi.
 * @param {TechCardProps} props - Properti untuk komponen TechCard.
 */
const TechCard: React.FC<TechCardProps> = ({ icon, title, description }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300 ease-in-out">
    <div className="text-5xl mb-4 text-purple-600">{icon}</div>
    <h3 className="text-xl font-bold text-purple-700 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

// --- Main Landing Page Component ---

/**
 * @component HomePage
 * @description Komponen utama halaman landing page.
 * Mengandung berbagai bagian seperti Hero, Video, Pendiri, Layanan, Harga, Tentang Kami, dan Tech Stack.
 */
const HomePage: React.FC = () => {
  // State untuk mengelola bagian yang aktif saat navigasi smooth scroll
  const [, setActiveSection] = useState<string>('home');
  // State untuk mengelola status buka/tutup sidebar mobile
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // State untuk mengelola tab aktif di bagian harga ('pelajar' atau 'umkm')
  const [activeTab, setActiveTab] = useState<'pelajar' | 'umkm'>('pelajar');

  /**
   * @function navigateTo
   * @description Melakukan scroll halus ke bagian tertentu di halaman.
   * @param {string} section - ID dari elemen bagian yang akan dituju.
   */
  const navigateTo = (section: string) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    setIsSidebarOpen(false); // Tutup sidebar setelah navigasi di mobile
  };

  // Efek untuk memastikan tab 'pelajar' aktif secara default saat komponen dimuat
  useEffect(() => {
    setActiveTab('pelajar');
  }, []);

  /**
   * @function handleTabChange
   * @description Mengubah tab yang aktif di bagian harga.
   * @param {'pelajar' | 'umkm'} tabName - Nama tab yang akan diaktifkan.
   */
  const handleTabChange = (tabName: 'pelajar' | 'umkm') => {
    setActiveTab(tabName);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 to-pink-200 font-sans text-gray-800">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-80 backdrop-blur-md shadow-lg rounded-b-3xl mx-auto mt-4 max-w-6xl p-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-purple-700">
          <Link
            href="/"
            className="hover:text-purple-800 transition-colors duration-300"
          >
            Barizaloka Group
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <NavItem title="Tentang" onClick={() => navigateTo('about-us')} />
          <NavItem title="Pendiri" onClick={() => navigateTo('founder')} />
          <NavItem title="Layanan" onClick={() => navigateTo('services')} />
          <NavItem title="Paket Harga" onClick={() => navigateTo('pricing')} />
          <NavItem title="Blog" onClick={() => navigateTo('blog')} />{' '}
          {/* Added Blog Nav Item */}
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-gray-700 hover:text-purple-700 focus:outline-none"
            aria-label="Toggle navigation"
          >
            <svg
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isSidebarOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-y-0 right-0 z-40 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out md:hidden
          ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="p-6 pt-24 flex flex-col space-y-4">
          <NavItem title="Tentang" onClick={() => navigateTo('about-us')} />
          <NavItem title="Pendiri" onClick={() => navigateTo('founder')} />
          <NavItem
            title="Layanan Kami"
            onClick={() => navigateTo('services')}
          />
          <NavItem title="Paket Harga" onClick={() => navigateTo('pricing')} />
          <NavItem title="Blog" onClick={() => navigateTo('blog')} />{' '}
          {/* Added Blog Nav Item */}
        </div>
      </div>

      {/* Overlay saat sidebar terbuka */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
          aria-hidden="true" // Menandai elemen ini sebagai dekoratif untuk screen reader
        ></div>
      )}

      <main className="container mx-auto px-4 py-28">
        {/* Hero Section */}
        <section
          id="home"
          className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-120px)]"
        >
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <h1 className="text-6xl font-extrabold text-purple-800 leading-tight mb-6 animate-fade-in-up">
              Roketkan <br /> Idemu
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto lg:mx-0 animate-fade-in-up delay-200">
              Jasa pembuatan website dan aplikasi mobile guna meroketkan idemu
              menjadi dalam genggaman dengan cara yang sangat mudah dari tim
              profesional.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center items-center relative">
            <div className="absolute inset-0 bg-purple-300 opacity-30 rounded-full blur-3xl animate-pulse-slow"></div>
            <Image
              src="/landing_page/computer.png"
              alt="Website Mockup"
              width={600}
              height={400}
              className="relative z-10 w-full max-w-md lg:max-w-lg rounded-xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 ease-in-out"
            />
          </div>
        </section>

        {/* Video Embed Section */}
        <section className="py-20 mt-20">
          <h2 className="text-4xl font-extrabold text-center text-purple-800 mb-10">
            Kenali Barizaloka Lebih Dekat!
          </h2>
          <div className="relative aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.youtube.com/embed/wpRl32uR_so"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
        </section>

        {/* Profil Pendiri Section */}
        <section
          id="founder"
          className="py-20 mt-20 bg-white rounded-3xl shadow-xl"
        >
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-12">
            <div className="md:w-1/3 flex justify-center">
              <Image
                src="/landing_page/founder-photo.jpg" // Pastikan path ini benar
                alt="Foto Pendiri Barizaloka Group"
                width={300}
                height={300}
                className="rounded-full shadow-2xl border-4 border-purple-300 object-cover w-64 h-64 md:w-80 md:h-80 transform transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="md:w-2/3 text-center md:text-left">
              <h2 className="text-4xl font-extrabold text-purple-800 mb-4">
                Mengenal Sang Pendiri
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Barizaloka Group didirikan oleh seorang pemuda yang lahir dan
                besar di sebuah desa di Kabupaten Rembang, Jawa Tengah. Berbekal
                semangat dan keahlian di bidang pengembangan web, ia memulai
                perjalanan digital ini untuk membantu mewujudkan berbagai ide
                inovatif.
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                {/* Tombol Kunjungi Website Portfolioku */}
                <a
                  href="https://github.com/ahlaiptek"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-300"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.974 6.974 0 0111.336 0l.138.627-.001.006a.5.5 0 01-.408.349H4.603a.5.5 0 01-.408-.349l-.001-.006.138-.627zM10 2.5a.5.5 0 01.5.5v2a.5.5 0 01-1 0v-2a.5.5 0 01.5-.5zm0 13a.5.5 0 01.5.5v2a.5.5 0 01-1 0v-2a.5.5 0 01.5-.5zM2.5 10a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5zm15 0a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5zM5.184 14.816a.5.5 0 01.707 0l1.414 1.414a.5.5 0 01-.707.707L5.184 15.523a.5.5 0 010-.707zm9.632 0a.5.5 0 010 .707l-1.414 1.414a.5.5 0 01-.707-.707l1.414-1.414a.5.5 0 01.707 0zM14.816 5.184a.5.5 0 01-.707 0l-1.414-1.414a.5.5 0 01.707-.707l1.414 1.414a.5.5 0 010 .707zM5.184 5.184a.5.5 0 010 .707l1.414 1.414a.5.5 0 01.707-.707L5.891 5.184a.5.5 0 01-.707 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Kunjungi Website Portfolioku
                </a>
                {/* Tombol LinkedIn */}
                <a
                  href="https://linkedin.com/in/ahlaiptek"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M16.3 0H3.7C1.6 0 0 1.6 0 3.7v12.6C0 18.4 1.6 20 3.7 20h12.6c2.1 0 3.7-1.6 3.7-3.7V3.7C20 1.6 18.4 0 16.3 0zM6 17H3V7h3v10zM4.5 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM17 17h-3V11c0-1.5-.7-2.5-1.9-2.5S10 10.5 10 12v5h-3V7h3v1.5c.6-.8 1.8-1.7 4-1.7 2.9 0 5 1.9 5 5.5V17z" />
                  </svg>
                  Lihat Profil LinkedIn
                </a>
                {/* Tombol Baru untuk Instagram */}
                <a
                  href="https://instagram.com/namaku.ahla"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-colors duration-300"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M11 0H9a9 9 0 0 0-9 9v2a9 9 0 0 0 9 9h2a9 9 0 0 0 9-9V9a9 9 0 0 0-9-9zm7.3 11c0 3.9-3.2 7.1-7.1 7.1h-2.4c-3.9 0-7.1-3.2-7.1-7.1V9c0-3.9 3.2-7.1 7.1-7.1h2.4c3.9 0 7.1 3.2 7.1 7.1v2z" />
                    <path d="M10 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                    <circle cx="15" cy="5" r="1.5" />
                  </svg>
                  Ikuti Instagram
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="services"
          className="py-20 bg-pink-50 rounded-3xl shadow-xl mt-20"
        >
          <h2 className="text-5xl font-extrabold text-center text-purple-800 mb-16">
            Produk yang Kami Tawarkan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-8">
            <ServiceFeature
              icon="💻"
              title="Pengembangan Website Kustom"
              description="Membangun website yang unik dan responsif sesuai kebutuhan bisnis Anda, dari landing page hingga platform kompleks."
            />
            <ServiceFeature
              icon="📱"
              title="Pengembangan Aplikasi Mobile"
              description="Menciptakan aplikasi Android dan iOS yang inovatif, dengan performa tinggi dan user experience yang intuitif."
            />
            <ServiceFeature
              icon="🤖"
              title="Pembuatan Bot WhatsApp Kustom"
              description="Otomatisasi komunikasi bisnis Anda dengan bot WhatsApp yang cerdas, mulai dari balasan otomatis hingga integrasi e-commerce."
            />
          </div>
        </section>

        {/* Pricing Section (dengan tab) */}
        <section
          id="pricing"
          className="py-20 bg-purple-100 rounded-3xl shadow-xl mt-20"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-extrabold text-center text-purple-800 mb-4">
              Pilihan Paket Harga 💰✨
            </h2>
            <p className="text-xl text-center text-gray-600 mb-16 max-w-2xl mx-auto">
              Harga Jujur, Fitur Maksimal! Pilih paket yang sesuai dengan
              kebutuhan website-mu, dari website personal hingga bisnis.
            </p>

            {/* Tab Controls */}
            <div className="flex justify-center mb-10">
              <button
                onClick={() => handleTabChange('pelajar')}
                className={`px-8 py-3 mx-2 text-lg font-semibold rounded-full focus:outline-none transition-all duration-300 ${activeTab === 'pelajar' ? 'bg-purple-600 text-white shadow-lg' : 'bg-gray-300 text-gray-700 hover:bg-gray-400'}`}
              >
                Untuk Pelajar
              </button>
              <button
                onClick={() => handleTabChange('umkm')}
                className={`px-8 py-3 mx-2 text-lg font-semibold rounded-full focus:outline-none transition-all duration-300 ${activeTab === 'umkm' ? 'bg-purple-600 text-white shadow-lg' : 'bg-gray-300 text-gray-700 hover:bg-gray-400'}`}
              >
                Untuk UMKM
              </button>
            </div>

            {/* Tab Content for Pelajar */}
            <div
              className={`grid grid-cols-1 md:grid-cols-2 gap-10 ${activeTab === 'pelajar' ? 'block' : 'hidden'}`}
            >
              <PricingCard
                title="Paket Dasar"
                price="Rp 5.000/bulan"
                description="Ideal untuk website personal atau landing page sederhana."
                features={['Maksimal 1 Halaman', 'Hosting & Custom Domain']}
              />
              <PricingCard
                title="Paket Personal"
                price="Rp 10.000/bulan"
                description="Tingkatkan website personal Anda dengan fitur revisi."
                features={[
                  'Maksimal 1 Halaman',
                  'Hosting & Custom Domain',
                  'Revisi 1x per bulan',
                ]}
              />
            </div>

            {/* Tab Content for UMKM */}
            <div
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ${activeTab === 'umkm' ? 'block' : 'hidden'}`}
            >
              <PricingCard
                title="Paket Bisnis"
                price="Rp 20.000/bulan"
                description="Solusi lengkap untuk bisnis yang membutuhkan lebih banyak halaman."
                features={[
                  'Maksimal 3 Halaman',
                  'Hosting & Custom Domain',
                  'Revisi 1x per bulan',
                ]}
              />
              <PricingCard
                title="Paket Premium"
                price="Rp 25.000/bulan"
                description="Untuk bisnis yang berkembang dengan kebutuhan website yang kompleks."
                features={[
                  'Maksimal 5 Halaman',
                  'Hosting & Custom Domain',
                  'Revisi 1x per bulan',
                ]}
              />
              <PricingCard
                title="Paket Usaha"
                price="Rp 50.000/bulan"
                description="Solusi terintegrasi untuk UMKM yang ingin menonjolkan produk dan layanan secara online."
                features={[
                  'Maksimal 10 Halaman',
                  'Hosting & Custom Domain',
                  'Integrasi E-commerce Dasar',
                  'Laporan Analitik Bulanan',
                ]}
              />
              <PricingCard
                title="Paket UMKM Pro"
                price="Rp 100.000/bulan"
                description="Layanan premium untuk bisnis yang membutuhkan fitur marketing dan dukungan penuh."
                features={[
                  'Halaman Tidak Terbatas',
                  'Hosting & Custom Domain',
                  'Integrasi Penuh E-commerce',
                  'Dukungan Prioritas 24/7',
                  'SEO & Marketing Tools',
                ]}
              />
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about-us" className="py-20 mt-20">
          <h2 className="text-5xl font-extrabold text-center text-purple-800 mb-16">
            Tentang Kami 🚀
          </h2>
          <div className="bg-white rounded-3xl shadow-xl p-10 max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed">
            <p className="mb-6">
              Kami adalah{' '}
              <strong className="text-purple-700">Barizaloka Group</strong>, tim
              ahli yang siap membantu Anda mewujudkan ide digital. Sejak 2025,
              kami fokus membuat website dan aplikasi mobile yang inovatif.
            </p>
            <p className="mb-6">
              Tujuan kami sederhana: membuat bisnis Anda maju dengan teknologi
              canggih. Kami bekerja sama dengan Anda dari awal sampai akhir,
              transparan, dan memastikan hasilnya benar-benar memuaskan. 🤝
            </p>
            <p>
              Bersama tim kami yang selalu up-to-date dengan teknologi, kami
              siap menjadi partner Anda dalam meraih kesuksesan digital.
            </p>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section
          id="tech-stack"
          className="py-20 bg-pink-50 rounded-3xl shadow-xl mt-20"
        >
          <h2 className="text-5xl font-extrabold text-center text-purple-800 mb-16">
            Teknologi yang Kami Gunakan ⚙️
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 px-8">
            <TechCard
              icon="HTML5"
              title="HTML, JS, & Tailwind"
              description="Dasar dari setiap website modern. Kami menggunakannya untuk membuat website yang ringan, cepat, dan punya desain responsif."
            />
            <TechCard
              icon="🚀"
              title="Next.js"
              description="Kami membangun website yang super cepat, SEO-friendly, dan dinamis menggunakan framework React terpopuler, Next.js."
            />
            <TechCard
              icon="🌐"
              title="WordPress"
              description="Solusi CMS (Content Management System) yang fleksibel dan kuat. Cocok untuk blog, e-commerce, atau website perusahaan yang mudah dikelola."
            />
            <TechCard
              icon="📱"
              title="Flutter"
              description="Pengembangan aplikasi mobile lintas platform yang cantik dan berperforma tinggi. Satu kode untuk Android dan iOS."
            />
            <TechCard
              icon="🐘"
              title="Laravel"
              description="Framework PHP yang elegan dan solid untuk membangun aplikasi web yang kompleks dan skalabel, mulai dari API hingga e-commerce."
            />
          </div>
        </section>

        {/* Blog Section - NEW */}
        <section
          id="blog"
          className="py-20 bg-purple-50 rounded-3xl shadow-xl mt-20"
        >
          <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-center gap-12">
            <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
              <h2 className="text-5xl font-extrabold text-purple-800 mb-6">
                Baca Artikel Terbaru Kami! 📚
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-md mx-auto lg:mx-0">
                Temukan wawasan terbaru tentang pengembangan web, tips & trik,
                dan berita teknologi dari tim ahli Barizaloka Group. Tingkatkan
                pengetahuan digital Anda bersama kami!
              </p>
              <Link href="/blog">
                <button className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-semibold rounded-full shadow-lg text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-300 transform hover:scale-105">
                  Menuju Halaman Blog
                  <svg
                    className="ml-3 -mr-1 h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </Link>
            </div>
            <div className="lg:w-1/2 flex justify-center items-center relative">
              <div className="absolute inset-0 bg-pink-300 opacity-30 rounded-full blur-3xl animate-pulse-slow"></div>
              <Image
                src="https://placehold.co/600x400/8B5CF6/FFFFFF?text=Blog+Article" // Placeholder image for laptop article
                alt="Laptop showing blog article"
                width={600}
                height={400}
                className="relative z-10 w-full max-w-md lg:max-w-lg rounded-xl shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500 ease-in-out"
              />
            </div>
          </div>
        </section>
      </main>

      {/* QuotePopup - Hanya tampil di desktop */}
      <div className="hidden md:block">
        <QuotePopup />
      </div>
    </div>
  );
};

export default HomePage;
