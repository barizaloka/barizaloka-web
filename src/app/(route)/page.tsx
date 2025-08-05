'use client'; // Menandai komponen ini sebagai Client Component untuk Next.js App Router

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import QuotePopup from './components/QuotePopup';

// --- Definisi Tipe Data (Interfaces) ---

interface NavItemProps {
  title: string;
  onClick?: () => void; // onClick menjadi opsional karena beberapa NavItem akan menggunakan Link
  href?: string; // Menambahkan prop href untuk navigasi Link
}

// interface PortfolioCardProps {
//   title: string;
//   description: string;
//   imageUrl?: string;
// }

// interface TestimonialCardProps {
//   quote: string;
//   author: string;
//   role: string;
//   avatarUrl?: string;
// }

interface ServiceFeatureProps {
  icon: string; // Bisa berupa SVG path atau nama icon (misal: "🚀")
  title: string;
  description: string;
}

// Tambahan: Interface untuk komponen PricingCard
interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
}

// --- Komponen-komponen ---

// Navigation Item Component
const NavItem: React.FC<NavItemProps> = ({ title, onClick, href }) => {
  if (href) {
    return (
      <a
        href={href}
        className="inline-flex text-gray-700 hover:text-purple-700 font-medium transition duration-300 ease-in-out px-3 py-2 rounded-md hover:bg-purple-100"
      >
        {title}
      </a>
    );
  }
  return (
    <button
      onClick={onClick}
      className="inline-flex text-gray-700 hover:text-purple-700 font-medium transition duration-300 ease-in-out px-3 py-2 rounded-md hover:bg-purple-100"
    >
      {title}
    </button>
  );
};


// Portfolio Card Component
// const PortfolioCard: React.FC<PortfolioCardProps> = ({ title, description, imageUrl }) => (
//   <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
//     {imageUrl ? (
//       <Image src={imageUrl} alt={title} className="w-full h-48 object-cover" width={400} height={300} />
//     ) : (
//       <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
//         <span className="text-gray-500">No Image Available</span>
//       </div>
//     )}
//     <div className="p-6">
//       <h3 className="text-2xl font-bold text-purple-700 mb-3">{title}</h3>
//       <p className="text-gray-600">{description}</p>
//     </div>
//   </div>
// );

// Testimonial Card Component
// const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, role, avatarUrl }) => (
//   <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300 ease-in-out">
//     {avatarUrl ? (
//       <Image src={avatarUrl} alt={author} className="w-24 h-24 rounded-full mb-4" width={96} height={96} />
//     ) : (
//       <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
//         <span className="text-gray-500">No Image</span>
//       </div>
//     )}
//     <p className="text-lg italic text-gray-700 mb-6">{quote}</p>
//     <p className="font-semibold text-purple-700">{author}</p>
//     <p className="text-sm text-gray-500">{role}</p>
//   </div>
// );

// Product Feature Component
const ServiceFeature: React.FC<ServiceFeatureProps> = ({ icon, title, description }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300 ease-in-out">
    <div className="text-5xl mb-4 text-purple-600">{icon}</div>
    <h3 className="text-xl font-bold text-purple-700 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

// Tambahan: Komponen PricingCard
const PricingCard: React.FC<PricingCardProps> = ({ title, price, description, features }) => (
  <div className="bg-white rounded-xl shadow-lg p-8 text-center flex flex-col transform hover:scale-105 transition-transform duration-300 ease-in-out">
    <h3 className="text-3xl font-extrabold text-purple-700 mb-2">{title}</h3>
    <p className="text-4xl font-bold text-gray-800 mb-4">{price}</p>
    <p className="text-gray-600 mb-6">{description}</p>
    <ul className="text-left text-gray-700 space-y-2 flex-grow">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <svg className="h-6 w-6 text-purple-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  </div>
);

// Main Landing Page Component
const HomePage: React.FC = () => {
  const [, setActiveSection] = useState<string>('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // State untuk mengelola tab yang aktif
  const [activeTab, setActiveTab] = useState<'pelajar' | 'umkm'>('pelajar');

  const navigateTo = (section: string) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    setIsSidebarOpen(false);
  };
  
  // Efek untuk memastikan tab 'pelajar' aktif secara default saat komponen dimuat
  useEffect(() => {
    setActiveTab('pelajar');
  }, []);

  // Fungsi untuk mengubah tab yang aktif
  const handleTabChange = (tabName: 'pelajar' | 'umkm') => {
    setActiveTab(tabName);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 to-pink-200 font-sans text-gray-800">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-80 backdrop-blur-md shadow-lg rounded-b-3xl mx-auto mt-4 max-w-6xl p-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-purple-700">
          <Link href="/" className="hover:text-purple-800 transition-colors duration-300">
            Barizaloka Group
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <NavItem title="Tentang" onClick={() => navigateTo('about-us')} />
          <NavItem title="Layanan" onClick={() => navigateTo('services')} />
          {/* Tambahan: Navigasi ke bagian harga */}
          <NavItem title="Paket Harga" onClick={() => navigateTo('pricing')} />
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
          <NavItem title="Layanan Kami" onClick={() => navigateTo('services')} />
          <NavItem title="Paket Harga" onClick={() => navigateTo('pricing')} />
        </div>
      </div>

      {/* Overlay saat sidebar terbuka */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      <main className="container mx-auto px-4 py-28">
        {/* Hero Section */}
        <section id="home" className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-120px)]">
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <h1 className="text-6xl font-extrabold text-purple-800 leading-tight mb-6 animate-fade-in-up">
              Roketkan <br /> Idemu
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto lg:mx-0 animate-fade-in-up delay-200">
              Jasa pembuatan website dan aplikasi mobile guna meroketkan idemu menjadi dalam genggaman dengan cara yang sangat mudah dari tim profesional.
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

        {/* Services Section */}
        <section id="services" className="py-20 bg-pink-50 rounded-3xl shadow-xl mt-20">
          <h2 className="text-5xl font-extrabold text-center text-purple-800 mb-16">Produk yang Kami Tawarkan</h2>
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

        {/* Tambahan: Pricing Section (dengan tab) */}
        <section id="pricing" className="py-20 bg-purple-100 rounded-3xl shadow-xl mt-20">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-extrabold text-center text-purple-800 mb-4">
              Pilihan Paket Harga 💰✨
            </h2>
            <p className="text-xl text-center text-gray-600 mb-16 max-w-2xl mx-auto">
              Harga Jujur, Fitur Maksimal! Pilih paket yang sesuai dengan kebutuhan website-mu, dari website personal hingga bisnis.
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
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-10 ${activeTab === 'pelajar' ? 'block' : 'hidden'}`}>
                <PricingCard
                    title="Paket Dasar"
                    price="Rp 5.000/bulan"
                    description="Ideal untuk website personal atau landing page sederhana."
                    features={[
                        "Maksimal 1 Halaman",
                        "Hosting & Custom Domain",
                    ]}
                />
                <PricingCard
                    title="Paket Personal"
                    price="Rp 10.000/bulan"
                    description="Tingkatkan website personal Anda dengan fitur revisi."
                    features={[
                        "Maksimal 1 Halaman",
                        "Hosting & Custom Domain",
                        "Revisi 1x per bulan"
                    ]}
                />
            </div>

            {/* Tab Content for UMKM */}
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ${activeTab === 'umkm' ? 'block' : 'hidden'}`}>
                <PricingCard
                    title="Paket Bisnis"
                    price="Rp 20.000/bulan"
                    description="Solusi lengkap untuk bisnis yang membutuhkan lebih banyak halaman."
                    features={[
                        "Maksimal 3 Halaman",
                        "Hosting & Custom Domain",
                        "Revisi 1x per bulan"
                    ]}
                />
                <PricingCard
                    title="Paket Premium"
                    price="Rp 25.000/bulan"
                    description="Untuk bisnis yang berkembang dengan kebutuhan website yang kompleks."
                    features={[
                        "Maksimal 5 Halaman",
                        "Hosting & Custom Domain",
                        "Revisi 1x per bulan"
                    ]}
                />
                <PricingCard
                    title="Paket Usaha"
                    price="Rp 50.000/bulan"
                    description="Solusi terintegrasi untuk UMKM yang ingin menonjolkan produk dan layanan secara online."
                    features={[
                        "Maksimal 10 Halaman",
                        "Hosting & Custom Domain",
                        "Integrasi E-commerce Dasar",
                        "Laporan Analitik Bulanan"
                    ]}
                />
                <PricingCard
                    title="Paket UMKM Pro"
                    price="Rp 100.000/bulan"
                    description="Layanan premium untuk bisnis yang membutuhkan fitur marketing dan dukungan penuh."
                    features={[
                        "Halaman Tidak Terbatas",
                        "Hosting & Custom Domain",
                        "Integrasi Penuh E-commerce",
                        "Dukungan Prioritas 24/7",
                        "SEO & Marketing Tools"
                    ]}
                />
            </div>
          </div>
        </section>


        {/* About Us Section */}
        <section id="about-us" className="py-20 mt-20">
          <h2 className="text-5xl font-extrabold text-center text-purple-800 mb-16">Tentang Kami</h2>
          <div className="bg-white rounded-3xl shadow-xl p-10 max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed">
            <p className="mb-6">
              Barizaloka Group adalah tim profesional yang berdedikasi dalam menyediakan solusi pengembangan website dan aplikasi mobile inovatif. Berdiri sejak [Tahun Berdiri, contoh: 2020], kami telah membantu berbagai klien dari berbagai industri untuk mewujudkan ide-ide digital mereka.
            </p>
            <p className="mb-6">
              Misi kami adalah memberdayakan bisnis dengan teknologi mutakhir, memastikan setiap proyek tidak hanya memenuhi tetapi melampaui ekspektasi. Kami percaya pada kolaborasi yang erat dengan klien, transparansi dalam setiap langkah, dan pengiriman produk berkualitas tinggi yang berorientasi pada hasil.
            </p>
            <p>
              Dengan tim yang berpengalaman dan selalu mengikuti tren teknologi terbaru, kami siap menjadi mitra terpercaya Anda dalam perjalanan digital. Mari bersama-sama meroketkan ide Anda!
            </p>
          </div>
        </section>
      </main>

      <div className="hidden md:block">
        <QuotePopup />
      </div>
    </div>
  );
}

export default HomePage;