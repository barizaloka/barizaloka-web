@extends('layouts.app')

@section('content')
    <div class="min-h-screen bg-gradient-to-br from-purple-200 to-pink-200 font-sans text-gray-800">
        <div class="container mx-auto px-4 py-28">
            {{-- Hero Section --}}
            <section id="home" class="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-120px)]">
                <div class="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
                    <h1 class="text-6xl font-extrabold text-purple-800 leading-tight mb-6">
                        Roketkan <br> Idemu
                    </h1>
                    <p class="text-lg text-gray-600 mb-8 max-w-md mx-auto lg:mx-0">
                        Jasa pembuatan website dan aplikasi mobile guna meroketkan idemu
                        menjadi dalam genggaman dengan cara yang sangat mudah dari tim profesional.
                    </p>
                </div>
                <div class="lg:w-1/2 flex justify-center items-center relative">
                    <div class="absolute inset-0 bg-purple-300 opacity-30 rounded-full blur-3xl animate-pulse"></div>
                    <img src="{{ asset('images/landing_page/computer.webp') }}" alt="Website Mockup"
                        class="relative z-10 w-full max-w-md lg:max-w-lg rounded-xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 ease-in-out">
                </div>
            </section>

            {{-- Video Embed --}}
            <section class="py-20 mt-20">
                <h2 class="text-4xl font-extrabold text-center text-purple-800 mb-10">
                    Kenali Barizaloka Lebih Dekat!
                </h2>
                <div class="relative aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl">
                    <iframe src="https://www.youtube.com/embed/wpRl32uR_so" class="absolute top-0 left-0 w-full h-full"
                        frameborder="0" allowfullscreen></iframe>
                </div>
            </section>

            {{-- Founder Section --}}
            <section id="founder" class="py-20 mt-20 bg-white rounded-3xl shadow-xl">
                <div class="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-12">
                    <div class="md:w-1/3 flex justify-center">
                        <div class="relative">
                            <img src="{{ asset('images/landing_page/handsome.webp') }}" alt="Foto Pendiri Barizaloka Group"
                                class="rounded-full shadow-2xl border-4 border-purple-300 object-cover w-64 h-64 md:w-80 md:h-80 transform transition-transform duration-500 hover:scale-105" />
                        </div>
                    </div>

                    <div class="md:w-2/3 text-center md:text-left">
                        <h2 class="text-4xl font-extrabold text-purple-800 mb-4">
                            Mengenal Sang Pendiri
                        </h2>
                        <p class="text-lg text-gray-700 mb-4 leading-relaxed">
                            Barizaloka Group didirikan oleh seorang pemuda yang lahir dan besar di sebuah desa di Kabupaten
                            Rembang, Jawa Tengah.
                            Berbekal semangat dan keahlian di bidang pengembangan web, ia memulai perjalanan digital ini
                            untuk membantu mewujudkan berbagai ide inovatif.
                        </p>

                        {{-- Informasi Muhammadiyah --}}
                        <div
                            class="flex items-center justify-center md:justify-start gap-4 mb-6 p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                            <img src="{{ asset('images/landing_page/Logo_Muhammadiyah.svg') }}" alt="Logo Muhammadiyah"
                                class="w-16 h-16" />
                            <p class="text-green-700 font-medium">
                                <strong>Simpatisan Muhammadiyah</strong> - Menerapkan nilai-nilai Islam dalam setiap karya
                                dan pelayanan
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        {{-- Services Section --}}
        <section id="services" class="py-20 bg-pink-50 rounded-3xl shadow-xl mt-20">
            <h2 class="text-5xl font-extrabold text-center text-purple-800 mb-16">Produk yang Kami Tawarkan</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-8">
                <div class="bg-white rounded-xl shadow-lg p-6 text-center">
                    <div class="text-5xl mb-4 text-purple-600">💻</div>
                    <h3 class="text-xl font-bold text-purple-700 mb-2">Pengembangan Website</h3>
                    <p class="text-gray-600">Membangun website yang unik dan responsif sesuai kebutuhan bisnis Anda.</p>
                </div>
                <div class="bg-white rounded-xl shadow-lg p-6 text-center">
                    <div class="text-5xl mb-4 text-purple-600">📱</div>
                    <h3 class="text-xl font-bold text-purple-700 mb-2">Aplikasi Mobile</h3>
                    <p class="text-gray-600">Menciptakan aplikasi Android & iOS dengan performa tinggi dan UX yang
                        intuitif.</p>
                </div>
                <div class="bg-white rounded-xl shadow-lg p-6 text-center">
                    <div class="text-5xl mb-4 text-purple-600">🤖</div>
                    <h3 class="text-xl font-bold text-purple-700 mb-2">Bot WhatsApp</h3>
                    <p class="text-gray-600">Otomatisasi komunikasi bisnis Anda dengan bot WhatsApp yang cerdas.</p>
                </div>
            </div>
        </section>

        {{-- About Us --}}
        <section id="about-us" class="py-20 mt-20">
            <h2 class="text-5xl font-extrabold text-center text-purple-800 mb-16">Tentang Kami 🚀</h2>
            <div class="bg-white rounded-3xl shadow-xl p-10 max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed">
                <p class="mb-6">
                    Kami adalah <strong class="text-purple-700">Barizaloka Group</strong>, tim ahli yang siap membantu
                    Anda mewujudkan ide digital.
                </p>
                <p class="mb-6">
                    Tujuan kami sederhana: membuat bisnis Anda maju dengan teknologi canggih. Kami bekerja sama dengan
                    Anda dari awal sampai akhir, transparan, dan memastikan hasilnya benar-benar memuaskan. 🤝
                </p>
                <p class="mb-6">
                    Bersama tim kami yang selalu up-to-date dengan teknologi, kami siap menjadi partner Anda dalam
                    meraih kesuksesan digital.
                </p>
            </div>
        </section>
    </div>
@endsection