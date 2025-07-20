@extends('layouts.app')

{{-- Custom CSS untuk halaman ini --}}
<style>
    body {
        font-family: 'Inter', sans-serif;
        color: #333;
        /* Warna teks default yang lebih netral */
    }

    /* Hero Section Background Animation */
    .hero::before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%);
        animation: rotate 20s linear infinite;
    }

    @keyframes rotate {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }

    /* Service Card Shine Effect */
    .service-card::before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: linear-gradient(45deg, transparent, rgba(59, 130, 246, 0.05), transparent);
        transform: rotate(45deg);
        transition: all 0.5s ease;
        opacity: 0;
    }

    .service-card:hover::before {
        opacity: 1;
        animation: shine 0.5s ease forwards;
        /* Use forwards to keep the end state */
    }

    @keyframes shine {
        0% {
            transform: translateX(-100%) translateY(-100%) rotate(45deg);
        }

        100% {
            transform: translateX(100%) translateY(100%) rotate(45deg);
        }
    }

    /* Custom glow animation for interactive elements */
    .glowing {
        animation: glow 2s ease-in-out infinite alternate;
    }

    @keyframes glow {
        from {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
        }

        to {
            box-shadow: 0 0 30px rgba(59, 130, 246, 0.8);
        }
    }

    /* Gradient text for hero title */
    .hero-title-gradient {
        background: linear-gradient(135deg, #ffffff 0%, #3b82f6 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    /* Checkmark for lists */
    .list-checkmark li {
        position: relative;
        padding-left: 1.5rem;
        /* Memberikan ruang untuk checklist */
    }

    .list-checkmark li::before {
        content: '✓';
        position: absolute;
        left: 0;
        color: #10b981;
        /* Hijau */
        font-weight: bold;
    }

    /* Featured pricing card checkmark */
    .pricing-card.featured .list-checkmark li::before {
        color: #93c5fd;
        /* Biru muda untuk featured card */
    }

    /* Pulse animation for button */
    .pulse {
        animation: pulse 2s infinite;
    }

    @keyframes pulse {
        0% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7);
        }

        70% {
            transform: scale(1.03);
            box-shadow: 0 0 0 15px rgba(59, 130, 246, 0);
        }

        100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(59, 130, 246, 0);
        }
    }

    /* Float animation for cards */
    @keyframes float {
        0% {
            transform: translateY(0px);
        }

        50% {
            transform: translateY(-10px);
        }

        100% {
            transform: translateY(0px);
        }
    }

    .animate-float {
        animation: float 3s ease-in-out infinite;
    }

    .animation-delay-1000 {
        animation-delay: 1s;
    }

    .animation-delay-2000 {
        animation-delay: 2s;
    }

    /* Fade-in animations */
    @keyframes fadeInDown {
        from {
            opacity: 0;
            transform: translateY(-20px);
        }

        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }

        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes fadeInRight {
        from {
            opacity: 0;
            transform: translateX(20px);
        }

        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    .animate-fade-in-down {
        animation: fadeInDown 0.8s ease-out forwards;
    }

    .animate-fade-in-up {
        animation: fadeInUp 0.8s ease-out forwards;
    }

    .animate-fade-in-right {
        animation: fadeInRight 0.8s ease-out forwards;
    }

    .animation-delay-200 {
        animation-delay: 0.2s;
    }

    .animation-delay-400 {
        animation-delay: 0.4s;
    }

    .animation-delay-600 {
        animation-delay: 0.6s;
    }
</style>
<div class="font-inter leading-relaxed text-gray-800 overflow-x-hidden">
    <section id="home"
        class="min-h-screen bg-gradient-to-br mt-6 from-slate-900 via-slate-800 to-slate-700 flex items-center relative overflow-hidden pt-20 md:pt-0">
        <div class="container mx-auto px-5 lg:px-20 relative z-10">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center text-center md:text-left">
                <div class="animate-fade-in-up">
                    <h1 class="text-5xl lg:text-6xl font-extrabold mb-6 hero-title-gradient">
                        Wujudkan Impian Digital Anda dengan Solusi Terjangkau
                    </h1>
                    <p class="text-lg text-slate-300 mb-8 animate-fade-in-up animation-delay-200">
                        Kami, Barizaloka, hadir sebagai penyedia jasa pengembangan aplikasi mobile dan website yang
                        inovatif, responsif, dan terjangkau. Berasal dari seorang pemuda di Desa Karangasem,
                        Kecamatan Sedan, Kabupaten Rembang, Jawa Tengah, kami berkomitmen mengakselerasi pertumbuhan
                        bisnis Anda di era digital tanpa memberatkan anggaran.
                    </p>
                    <a href="#contact"
                        class="inline-flex items-center gap-2 bg-gradient-to-br from-blue-500 to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-blue-500/50 pulse animate-fade-in-up animation-delay-400">
                        <i class="fas fa-rocket"></i>
                        Mulai Proyek Anda
                    </a>
                </div>
                <div class="relative animate-fade-in-right animation-delay-600">
                    <div class="space-y-6">
                        <div
                            class="bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 rounded-2xl p-8 shadow-lg transform-gpu animate-float">
                            <i class="fas fa-mobile-alt text-blue-400 text-4xl mb-4"></i>
                            <h3 class="dark:text-white text-xl font-semibold mb-2">Mobile App</h3>
                            <p class="dark:text-slate-300 text-sm">Aplikasi mobile native dan cross-platform</p>
                        </div>
                        <div
                            class="bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 rounded-2xl p-8 shadow-lg transform-gpu animate-float animation-delay-1000">
                            <i class="fas fa-globe text-blue-400 text-4xl mb-4"></i>
                            <h3 class="dark:text-white text-xl font-semibold mb-2">Web Development</h3>
                            <p class="dark:text-slate-300 text-sm">Website modern dan responsif</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    ---

    <section id="about" class="py-24 bg-gradient-to-br from-slate-50 to-slate-200">
        <div class="container mx-auto px-5 lg:px-20">
            <h2 class="text-4xl font-extrabold text-center mb-12 text-slate-800 animate-fade-in-down">Tentang Barizaloka
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div class="text-slate-700 animate-fade-in-up">
                    <h3 class="text-3xl font-bold text-slate-800 mb-4">Membangun Masa Depan Digital dari Rembang</h3>
                    <p class="mb-6 text-lg">
                        Barizaloka adalah inisiatif dari seorang pemuda di Desa Karangasem, Kecamatan Sedan, Kabupaten
                        Rembang, Jawa Tengah, yang berdedikasi untuk memberdayakan UMKM dan bisnis lokal maupun
                        nasional melalui teknologi. Kami percaya bahwa setiap ide hebat berhak memiliki kehadiran
                        digital yang profesional tanpa perlu mengeluarkan biaya fantastis.
                    </p>
                    <p class="mb-6 text-lg">
                        Sebagai tim yang bersemangat dan beradaptasi cepat, kami menggunakan teknologi terkini dan
                        metodologi pengembangan yang efisien untuk memastikan setiap proyek diselesaikan dengan kualitas
                        tinggi, tepat waktu, dan tentunya, dengan harga yang bersahabat. Kami adalah mitra teknologi
                        lokal Anda yang siap membawa bisnis Anda ke level berikutnya.
                    </p>
                </div>
                <div class="grid grid-cols-2 gap-8 animate-fade-in-right animation-delay-400">
                    <div class="bg-white p-6 rounded-2xl shadow-lg text-center glowing">
                        <div class="text-5xl font-bold text-blue-500 mb-2 stat-number" data-number="10">0</div>
                        <div class="text-slate-600 font-semibold">Proyek Sedang Berjalan</div>
                    </div>
                    <div class="bg-white p-6 rounded-2xl shadow-lg text-center glowing">
                        <div class="text-5xl font-bold text-blue-500 mb-2 stat-number" data-number="5">0</div>
                        <div class="text-slate-600 font-semibold">Klien Aktif Awal</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    ---

    <section id="services" class="py-24 bg-white">
        <div class="container mx-auto px-5 lg:px-20">
            <h2 class="text-4xl font-extrabold text-center mb-12 text-slate-800 animate-fade-in-down">Layanan Kami</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div
                    class="service-card bg-gradient-to-br from-white to-slate-50 p-8 rounded-2xl text-center transition-all duration-300 border border-slate-200 relative overflow-hidden hover:translate-y-[-10px] hover:shadow-xl hover:shadow-blue-500/10 animate-fade-in-up">
                    <div
                        class="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-8 text-white text-3xl">
                        <i class="fab fa-android"></i>
                    </div>
                    <h3 class="text-2xl font-semibold text-slate-800 mb-4">Pengembangan Aplikasi Mobile Android</h3>
                    <p class="text-slate-600 mb-6">
                        Pengembangan aplikasi Android yang powerful, responsif, dan user-friendly, dirancang khusus untuk memenuhi kebutuhan bisnis Anda.
                    </p>
                    <ul class="list-none text-left space-y-2 list-checkmark">
                        <li>Pengembangan Native Android</li>
                        <li>UI/UX Design yang Menarik</li>
                        <li>Integrasi API & Database</li>
                        <li>Optimasi Kinerja Aplikasi</li>
                        <li>Publikasi Google Play Store</li>
                    </ul>
                </div>
                <div
                    class="service-card bg-gradient-to-br from-white to-slate-50 p-8 rounded-2xl text-center transition-all duration-300 border border-slate-200 relative overflow-hidden hover:translate-y-[-10px] hover:shadow-xl hover:shadow-blue-500/10 animate-fade-in-up animation-delay-200">
                    <div
                        class="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-8 text-white text-3xl">
                        <i class="fas fa-globe"></i>
                    </div>
                    <h3 class="text-2xl font-semibold text-slate-800 mb-4">Pengembangan Website</h3>
                    <p class="text-slate-600 mb-6">
                        Website modern, responsif, dan SEO-friendly untuk meningkatkan kehadiran online bisnis Anda.
                    </p>
                    <ul class="list-none text-left space-y-2 list-checkmark">
                        <li>Website Responsif & Modern</li>
                        <li>Solusi E-commerce</li>
                        <li>Pengembangan CMS Kustom</li>
                        <li>Optimasi SEO</li>
                        <li>Optimasi Kecepatan Website</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    ---

    <section id="portfolio" class="py-24 bg-gradient-to-br from-slate-800 to-slate-700 text-white">
        <div class="container mx-auto px-5 lg:px-20">
            <h2 class="text-4xl font-extrabold text-center mb-12 text-white animate-fade-in-down">Portfolio Kami</h2>
            <div class="text-center">
                <p class="text-2xl font-semibold text-slate-300">Segera Hadir</p>
            </div>
        </div>
    </section>

    ---
    <section id="pricing" class="py-16 md:py-24">
        <div class="container mx-auto px-5 lg:px-20 max-w-screen-xl">
            <h1 class="text-4xl md:text-5xl font-extrabold text-center mb-6 md:mb-8 text-slate-800">
                Pilihan Harga Aplikasi Mobile & Web Sederhana
            </h1>
            <p class="text-center text-lg md:text-xl text-slate-600 mb-12 max-w-3xl mx-auto">
                Kami memahami bahwa kebutuhan digital tidak harus menguras kantong. Barizaloka menawarkan solusi
                aplikasi mobile dan web sederhana yang **efisien dan terjangkau**, dirancang khusus untuk memenuhi
                kebutuhan dasar Anda tanpa kompromi pada kualitas.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">

                <div class="pricing-card bg-white rounded-2xl p-8 md:p-10 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <h2 class="text-2xl font-bold text-center mb-4 text-blue-600">Paket Starter</h2>
                    <p class="text-center text-lg text-slate-600 mb-2">Web Sederhana</p>
                    <div class="text-4xl font-extrabold text-center mb-6 text-slate-800">Rp 750 Ribu</div>
                    <p class="text-center text-slate-500 mb-8">Cocok untuk kehadiran online dasar.</p>
                    
                    <ul class="list-none space-y-3 mb-8 text-left text-slate-700">
                        <li class="flex items-center"><svg class="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>Desain Responsif</li>
                        <li class="flex items-center"><svg class="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>1 Halaman Utama</li>
                        <li class="flex items-center"><svg class="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>Galeri Foto (hingga 5 foto)</li>
                        <li class="flex items-center"><svg class="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>Integrasi Google Maps</li>
                        <li class="flex items-center"><svg class="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>Formulir Kontak Dasar</li>
                        <li class="flex items-center"><svg class="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>Domain & Hosting (1 tahun pertama)</li>
                        <li class="flex items-center"><svg class="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>Dukungan Email</li>
                        <li class="flex items-center"><svg class="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>Revisi Minor (1x)</li>
                    </ul>
                    <button class="w-full py-3 px-6 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300">Pilih Paket Starter</button>
                </div>

                <div class="pricing-card bg-white rounded-2xl p-8 md:p-10 border border-blue-400 shadow-xl hover:shadow-2xl transition-shadow duration-300 relative">
                    <span class="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-500 text-white px-5 py-2 rounded-full text-sm font-bold shadow-md">Paling Populer</span>
                    <h2 class="text-2xl font-bold text-center mb-4 text-blue-600">Paket Basic</h2>
                    <p class="text-center text-lg text-slate-600 mb-2">Web & Mobile Informasi</p>
                    <div class="text-4xl font-extrabold text-center mb-6 text-slate-800">Rp 2 Juta</div>
                    <p class="text-center text-slate-500 mb-8">Ideal untuk bisnis kecil yang ingin lebih.</p>
                    
                    <ul class="list-none space-y-3 mb-8 text-left text-slate-700">
                        <li class="flex items-center"><svg class="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>Semua fitur Paket Starter</li>
                        <li class="flex items-center"><svg class="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>Hingga 3 Halaman Tambahan</li>
                        <li class="flex items-center"><svg class="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>Aplikasi Mobile (Android Basic)</li>
                        <li class="flex items-center"><svg class="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>Icon Aplikasi Kustom</li>
                        <li class="flex items-center"><svg class="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>Fitur "Tap to Call" atau "Tap to WhatsApp"</li>
                        <li class="flex items-center"><svg class="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>Integrasi Sosial Media</li>
                        <li class="flex items-center"><svg class="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>Dukungan Chat Online (Widget)</li>
                        <li class="flex items-center"><svg class="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>Revisi Minor (2x)</li>
                    </ul>
                    <button class="w-full py-3 px-6 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300">Pilih Paket Basic</button>
                </div>

                <div class="pricing-card bg-white rounded-2xl p-8 md:p-10 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <h2 class="text-2xl font-bold text-center mb-4 text-blue-600">Paket Pro</h2>
                    <p class="text-center text-lg text-slate-600 mb-2">Web & Mobile Interaktif</p>
                    <div class="text-4xl font-extrabold text-center mb-6 text-slate-800">Rp 5 Juta</div>
                    <p class="text-center text-slate-500 mb-8">Website dinamis & aplikasi fungsional.</p>
                    
                    <ul class="list-none space-y-3 mb-8 text-left text-slate-700">
                        <li class="flex items-center"><svg class="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>Semua fitur Paket Basic</li>
                        <li class="flex items-center"><svg class="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>Hingga 5 Halaman Tambahan</li>
                        <li class="flex items-center"><svg class="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>Sistem Admin Panel Sederhana</li>
                        <li class="flex items-center"><svg class="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>Aplikasi Mobile (Android Native Sederhana)</li>
                        <li class="flex items-center"><svg class="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>Notifikasi Push (di Aplikasi)</li>
                        <li class="flex items-center"><svg class="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>Integrasi Database Sederhana</li>
                        <li class="flex items-center"><svg class="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>Optimasi SEO Dasar</li>
                        <li class="flex items-center"><svg class="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>Dukungan Prioritas</li>
                        <li class="flex items-center"><svg class="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>Revisi Mayor (1x)</li>
                    </ul>
                    <button class="w-full py-3 px-6 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300">Pilih Paket Pro</button>
                </div>

            </div>

            <p class="text-center text-sm md:text-base text-slate-500 mt-12 mb-4 max-w-2xl mx-auto">
                **Catatan:** Harga yang tercantum adalah perkiraan dan dapat bervariasi tergantung pada kompleksitas fitur tambahan dan desain kustom yang Anda inginkan. Untuk penawaran yang lebih akurat, silakan hubungi kami.
            </p>
            <div class="text-center">
                <a href="#" class="inline-block py-3 px-8 bg-green-500 text-white rounded-full font-semibold hover:bg-green-600 transition-colors duration-300 shadow-md">Hubungi Kami untuk Penawaran Kustom</a>
            </div>
        </div>
    </section>

    ---

    <section id="contact" class="py-24 bg-gradient-to-br from-slate-800 to-slate-700 text-white">
        <div class="container mx-auto px-5 lg:px-20">
            <h2 class="text-4xl font-extrabold text-center mb-12 text-white animate-fade-in-down">Hubungi Kami</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                <div class="animate-fade-in-up">
                    <h3 class="text-4xl font-bold text-blue-400 mb-6">Mari Bicara Tentang Proyek Anda</h3>
                    <p class="text-slate-300 mb-8 text-lg">
                        Kami siap membantu Anda mewujudkan ide-ide digital. Jangan ragu untuk menghubungi kami untuk
                        konsultasi gratis atau pertanyaan lebih lanjut.
                    </p>
                    <div class="space-y-8">
                        <div class="flex items-center gap-4">
                            <div
                                class="w-14 h-14 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 text-2xl">
                                <i class="fas fa-map-marker-alt"></i>
                            </div>
                            <div>
                                <p class="text-slate-300 text-lg">Karangasem, Rembang, Jawa Tengah, Indonesia</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-4">
                            <div
                                class="w-14 h-14 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 text-2xl">
                                <i class="fas fa-envelope"></i>
                            </div>
                            <div>
                                <p class="text-slate-300 text-lg">info@barizaloka.com</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-4">
                            <div
                                class="w-14 h-14 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 text-2xl">
                                <i class="fas fa-phone"></i>
                            </div>
                            <div>
                                <p class="text-slate-300 text-lg">+62 812 3456 7890</p>
                            </div>
                        </div>
                    </div>
                </div>

                {{-- Bagian informasi kontak sederhana --}}
                <div class="bg-white p-8 rounded-2xl shadow-lg text-slate-700 animate-fade-in-right animation-delay-200">
                    <h3 class="text-2xl font-bold mb-4">Informasi Kontak</h3>
                    <p class="mb-4">Untuk pertanyaan lebih lanjut atau ingin memulai proyek, silakan hubungi kami
                        melalui WhatsApp atau email:</p>
                    <ul class="space-y-3 mb-6">
                        <li class="flex items-center gap-3">
                            <i class="fab fa-whatsapp text-green-500 text-xl"></i>
                            <span class="font-semibold">WhatsApp:</span> +62 812 3456 7890
                        </li>
                        <li class="flex items-center gap-3">
                            <i class="fas fa-envelope text-blue-500 text-xl"></i>
                            <span class="font-semibold">Email:</span> info@barizaloka.com
                        </li>
                    </ul>
                    <p class="mb-6">Atau klik tombol di bawah ini untuk langsung terhubung dengan kami via WhatsApp:
                    </p>
                    <a href="https://wa.me/6281234567890?text=Halo%20Barizaloka,%20saya%20tertarik%20dengan%20layanan%20Anda."
                        target="_blank"
                        class="w-full inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-full focus:outline-none focus:shadow-outline transition-all duration-300 transform hover:scale-105">
                        <i class="fab fa-whatsapp"></i>
                        Kirim Pesan via WhatsApp
                    </a>
                </div>
            </div>
        </div>
    </section>
</div>
{{-- Custom JavaScript untuk halaman ini --}}
<script>
    document.addEventListener('DOMContentLoaded', () => {
        // JavaScript for number counting animation in About section
        const stats = document.querySelectorAll('.stat-number');

        const animateNumber = (obj, start, end, duration) => {
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                obj.innerHTML = Math.floor(progress * (end - start) + start);
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = entry.target;
                    const endNumber = parseInt(target.getAttribute('data-number'));
                    animateNumber(target, 0, endNumber, 2000);
                    observer.unobserve(target); // Stop observing once animated
                }
            });
        }, {
            threshold: 0.5 // Trigger when 50% of the element is visible
        });

        stats.forEach(stat => {
            observer.observe(stat);
        });
    });
</script>