'use client'; // Menandai komponen ini sebagai Client Component untuk Next.js App Router

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// --- Definisi Tipe Data (Interfaces) ---

interface NavItemProps {
  title: string;
  onClick?: () => void; // onClick menjadi opsional karena beberapa NavItem akan menggunakan Link
  href?: string; // Menambahkan prop href untuk navigasi Link
}

interface PortfolioCardProps {
  title: string;
  description: string;
  imageUrl?: string;
}

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  avatarUrl?: string;
}

interface ServiceFeatureProps {
  icon: string; // Bisa berupa SVG path atau nama icon (misal: "🚀")
  title: string;
  description: string;
}

// --- Komponen-komponen ---

// Navigation Item Component
const NavItem: React.FC<NavItemProps> = ({ title, onClick, href }) => {
  // Menggunakan Link dari Next.js jika ada href, jika tidak menggunakan button
  if (href) {
    return (
      <Link href={href} className="block text-gray-700 hover:text-purple-700 font-medium transition duration-300 ease-in-out px-3 py-2 rounded-md hover:bg-purple-100">
        {title}
      </Link>
    );
  }
  return (
    <button
      onClick={onClick}
      className="block text-gray-700 hover:text-purple-700 font-medium transition duration-300 ease-in-out px-3 py-2 rounded-md hover:bg-purple-100 w-full text-left"
    >
      {title}
    </button>
  );
};

// Portfolio Card Component
const PortfolioCard: React.FC<PortfolioCardProps> = ({ title, description, imageUrl }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
    {imageUrl ? (
      <Image src={imageUrl} alt={title} className="w-full h-48 object-cover" width={400} height={300} />  // Menambahkan width dan height untuk optimasi  
    ) : (
      <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
        <span className="text-gray-500">No Image Available</span>
      </div>
    )}
    <div className="p-6">
      <h3 className="text-2xl font-bold text-purple-700 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

// Testimonial Card Component
const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, role, avatarUrl }) => (
  <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300 ease-in-out">
    {avatarUrl ? (
      <Image src={avatarUrl} alt={author} className="w-24 h-24 rounded-full mb-4" width={96} height={96} />
    ) : (
      <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
        <span className="text-gray-500">No Image</span>
      </div>
    )}
    <p className="text-lg italic text-gray-700 mb-6">{quote}</p>
    <p className="font-semibold text-purple-700">{author}</p>
    <p className="text-sm text-gray-500">{role}</p>
  </div>
);

// Product Feature Component
const ServiceFeature: React.FC<ServiceFeatureProps> = ({ icon, title, description }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300 ease-in-out">
    <div className="text-5xl mb-4 text-purple-600">{icon}</div> {/* Menggunakan icon sebagai teks/emoji */}
    <h3 className="text-xl font-bold text-purple-700 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

// Footer Component
const Footer: React.FC = () => {
  return (
    <footer className="bg-purple-800 text-white py-10 text-center">
      <p>&copy; 2025 Barizaloka Group. All rights reserved.</p>
    </footer>
  );
};


// Main Landing Page Component
const HomePage: React.FC = () => {
  const [, setActiveSection] = useState<string>('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State untuk mengontrol sidebar

  // Function to handle navigation for sections within the same page
  const navigateTo = (section: string) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    setIsSidebarOpen(false); // Tutup sidebar setelah navigasi
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 to-pink-200 font-sans text-gray-800">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-80 backdrop-blur-md shadow-lg rounded-b-3xl mx-auto mt-4 max-w-6xl p-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-purple-700">Barizaloka Group</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <NavItem title="Portfolio" onClick={() => navigateTo('portfolio')} />
          <NavItem title="Tentang" onClick={() => navigateTo('about-us')} />
          <NavItem title="Layanan" onClick={() => navigateTo('services')} />
          <NavItem title="Testimoni" onClick={() => navigateTo('testimonials')} />
          <NavItem title="Blog" href="/blog" />
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

        {/* Contact Button (visible on both, but adjusted for mobile layout) */}
        <button className="bg-purple-500 hover:bg-purple-600 text-white p-2 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105 hidden md:block">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197 2.132A1 1 0 0110 13.132V10.868a1 1 0 011.555-.832l3.197 2.132a1 1 0 010 1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-y-0 right-0 z-40 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out md:hidden
          ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="p-6 pt-24 flex flex-col space-y-4"> {/* pt-24 untuk memberi ruang di bawah navbar fixed */}
          <NavItem title="Layanan Kami" onClick={() => navigateTo('services')} />
          <NavItem title="Portfolio" onClick={() => navigateTo('portfolio')} />
          <NavItem title="Testimoni" onClick={() => navigateTo('testimonials')} />
          <NavItem title="Blog" href="/blog" />
          <button className="bg-purple-500 hover:bg-purple-600 text-white p-3 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105 w-full mt-4">
            <div className="flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197 2.132A1 1 0 0110 13.132V10.868a1 1 0 011.555-.832l3.197 2.132a1 1 0 010 1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Hubungi Kami</span>
            </div>
          </button>
        </div>
      </div>

      {/* Overlay saat sidebar terbuka */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)} // Tutup sidebar saat overlay diklik
        ></div>
      )}

      <main className="container mx-auto px-4 py-28">
        {/* Hero Section */}
        <section id="home" className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-120px)]">
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <h1 className="text-6xl font-extrabold text-purple-800 leading-tight mb-6 animate-fade-in-up">
              Roketkan <br /> Idenu
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto lg:mx-0 animate-fade-in-up delay-200">
              Jasa pembuatan website dan aplikasi mobile guna meroketkan idemu menjadi dalam genggaman dengan cara yang sangat mudah dari tim profesional.
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 animate-fade-in-up delay-400">
              Mulai Sekarang
            </button>
          </div>
          <div className="lg:w-1/2 flex justify-center items-center relative">
            <div className="absolute inset-0 bg-purple-300 opacity-30 rounded-full blur-3xl animate-pulse-slow"></div>
            <Image
              src="/landing_page/computer.png" // Placeholder for the image
              alt="Website Mockup"
              width={600} // Tambahkan width
              height={400} // Tambahkan height
              className="relative z-10 w-full max-w-md lg:max-w-lg rounded-xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 ease-in-out"
            />
          </div>
        </section>

        {/* services Section */}
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
              icon="📊"
              title="Sistem Manajemen (CRM/ERP)"
              description="Solusi sistem terintegrasi untuk mengelola operasional bisnis, meningkatkan efisiensi, dan pengambilan keputusan."
            />
            <ServiceFeature
              icon="🎨"
              title="Desain UI/UX Profesional"
              description="Mendesain antarmuka pengguna yang menarik dan pengalaman pengguna yang mulus untuk semua produk digital Anda."
            />
            <ServiceFeature
              icon="☁️"
              title="Layanan Cloud & Hosting"
              description="Menyediakan solusi hosting yang aman dan skalabel, serta integrasi layanan cloud untuk performa optimal."
            />
            <ServiceFeature
              icon="🔍"
              title="Optimasi SEO & Pemasaran Digital"
              description="Meningkatkan visibilitas online Anda melalui strategi SEO yang efektif dan kampanye pemasaran digital yang terarah."
            />
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

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20 mt-20">
          <h2 className="text-5xl font-extrabold text-center text-purple-800 mb-16">Portfolio Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <PortfolioCard
              title="Aplikasi E-commerce"
              description="Platform belanja online dengan fitur lengkap dan user-friendly."
            // imageUrl="https://placehold.co/400x300/6D28D9/FFFFFF?text=E-commerce"
            />
            <PortfolioCard
              title="Sistem Manajemen Sekolah"
              description="Solusi terintegrasi untuk administrasi dan pembelajaran sekolah."
            // imageUrl="https://placehold.co/400x300/6D28D9/FFFFFF?text=School+System"
            />
            <PortfolioCard
              title="Website Perusahaan"
              description="Situs web profesional untuk meningkatkan citra dan kehadiran online."
            // imageUrl="https://placehold.co/400x300/6D28D9/FFFFFF?text=Company+Website"
            />
            <PortfolioCard
              title="Aplikasi Reservasi Hotel"
              description="Memudahkan pengguna untuk mencari dan memesan kamar hotel."
            // imageUrl="https://placehold.co/400x300/6D28D9/FFFFFF?text=Hotel+App"
            />
            <PortfolioCard
              title="Platform Edukasi Online"
              description="Menyediakan kursus dan materi pembelajaran interaktif."
            // imageUrl="https://placehold.co/400x300/6D28D9/FFFFFF?text=Education+Platform"
            />
            <PortfolioCard
              title="Website Portofolio Fotografer"
              description="Menampilkan karya fotografi dengan desain yang elegan."
            // imageUrl="https://placehold.co/400x300/6D28D9/FFFFFF?text=Photographer"
            />
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-purple-100 rounded-3xl shadow-xl mt-20">
          <h2 className="text-5xl font-extrabold text-center text-purple-800 mb-16">Apa Kata Mereka</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <TestimonialCard
              quote="Pelayanan Barizaloka Group sangat profesional dan hasilnya melebihi ekspektasi kami. Website kami kini terlihat modern dan sangat fungsional!"
              author="Budi Santoso"
              role="CEO, PT Maju Bersama"
            // avatarUrl="https://placehold.co/100x100/9CA3AF/FFFFFF?text=BS"
            />
            <TestimonialCard
              quote="Aplikasi mobile yang dikembangkan sangat membantu bisnis kami. Timnya responsif dan selalu memberikan solusi terbaik."
              author="Siti Aminah"
              role="Pemilik, Kedai Kopi Bahagia"
            // avatarUrl="https://placehold.co/100x100/9CA3AF/FFFFFF?text=SA"
            />
            <TestimonialCard
              quote="Desain website yang dibuat Barizaloka Group sangat inovatif dan menarik. Kami sangat puas dengan hasilnya!"
              author="Joko Susilo"
              role="Founder, Startup Inovasi"
            // avatarUrl="https://placehold.co/100x100/9CA3AF/FFFFFF?text=JS"
            />
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default HomePage;
