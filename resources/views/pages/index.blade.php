<?php

use function Laravel\Folio\name;

name('index');

?>

@extends('layouts.app')

@section('content')
    <div class="min-h-screen bg-gradient-to-br from-purple-200 to-pink-200 font-sans text-gray-800 p-6">
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

            {{-- Testimoni Video --}}
            <section id="video-testimonial" class="py-20 mt-20 bg-pink-50 rounded-3xl shadow-xl">
                <h2 class="text-4xl font-extrabold text-center text-purple-800 mb-10">Lihat Apa Kata Mereka 🎥</h2>
                <div class="max-w-3xl mx-auto aspect-video rounded-xl overflow-hidden shadow-xl">
                    <iframe class="w-full h-full" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0"
                        allowfullscreen></iframe>
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
                                <strong>Simpatisan Muhammadiyah</strong> - Menerapkan nilai-nilai Islam berkemajuan dalam setiap karya
                                dan pelayanan
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        {{-- Keunggulan Kami --}}
        <section id="advantages" class="py-20 bg-purple-50 mt-20 rounded-3xl shadow-xl">
            <h2 class="text-4xl font-extrabold text-center text-purple-800 mb-16">Kenapa Memilih Kami?</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
                <div class="bg-white rounded-xl shadow-lg p-6 text-center">
                    <div class="text-5xl mb-4 text-purple-600">⚡</div>
                    <h3 class="text-xl font-bold text-purple-700 mb-2">Cepat & Efisien</h3>
                    <p class="text-gray-600">Proses pengembangan cepat tanpa mengorbankan kualitas.</p>
                </div>
                <div class="bg-white rounded-xl shadow-lg p-6 text-center">
                    <div class="text-5xl mb-4 text-purple-600">🎯</div>
                    <h3 class="text-xl font-bold text-purple-700 mb-2">Fokus pada Hasil</h3>
                    <p class="text-gray-600">Solusi kami dirancang untuk benar-benar berdampak.</p>
                </div>
                <div class="bg-white rounded-xl shadow-lg p-6 text-center">
                    <div class="text-5xl mb-4 text-purple-600">💬</div>
                    <h3 class="text-xl font-bold text-purple-700 mb-2">Support Ramah</h3>
                    <p class="text-gray-600">Kami selalu siap membantu kapan pun Anda butuh.</p>
                </div>
            </div>
        </section>
        
        {{-- Statistik Capaian --}}
        <section id="stats"
            class="py-20 mt-20 bg-gradient-to-r from-purple-400 to-pink-600 rounded-3xl shadow-xl text-white">
            <div class="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
                <div>
                    <h3 class="text-5xl font-bold">Banyak</h3>
                    <p class="text-lg mt-2">Proyek Selesai</p>
                </div>
                <div>
                    <h3 class="text-5xl font-bold">Banyak</h3>
                    <p class="text-lg mt-2">Klien Puas</p>
                </div>
                <div>
                    <h3 class="text-5xl font-bold">2</h3>
                    <p class="text-lg mt-2">Anggota Tim</p>
                </div>
                <div>
                    <h3 class="text-5xl font-bold">Beberapa Bulan</h3>
                    <p class="text-lg mt-2">Pengalaman</p>
                </div>
            </div>
        </section>

        {{-- FAQ --}}
        <section id="faq" class="py-20 mt-20 bg-pink-100 rounded-3xl shadow-xl">
            <h2 class="text-4xl font-extrabold text-center text-purple-800 mb-10">Pertanyaan yang Sering Diajukan ❓</h2>
            <div class="max-w-4xl mx-auto space-y-6">
                <div class="bg-white p-6 rounded-lg shadow">
                    <h3 class="font-bold text-purple-700 mb-2">Berapa lama waktu pengerjaan proyek?</h3>
                    <p class="text-gray-700">Tergantung kompleksitas, rata-rata antara 2 hingga 6 minggu.</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow">
                    <h3 class="font-bold text-purple-700 mb-2">Apakah bisa revisi desain?</h3>
                    <p class="text-gray-700">Tentu, kami memberikan beberapa kali revisi sesuai kesepakatan awal.</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow">
                    <h3 class="font-bold text-purple-700 mb-2">Apakah saya akan mendapatkan training?</h3>
                    <p class="text-gray-700">Ya, kami menyediakan sesi training dan dokumentasi penggunaan.</p>
                </div>
            </div>
        </section>

        {{-- Workflow --}}
        <section id="workflow" class="py-20 bg-purple-50 mt-20 rounded-3xl shadow-xl">
            <h2 class="text-4xl font-extrabold text-center text-purple-800 mb-12">Bagaimana Kami Bekerja?</h2>
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8 px-6 text-center">
                <div>
                    <div class="text-4xl text-purple-600 mb-2">🔍</div>
                    <h4 class="font-bold text-purple-700 mb-2">Analisa</h4>
                    <p class="text-gray-600">Kami mulai dengan memahami kebutuhan Anda secara menyeluruh.</p>
                </div>
                <div>
                    <div class="text-4xl text-purple-600 mb-2">🧩</div>
                    <h4 class="font-bold text-purple-700 mb-2">Perancangan</h4>
                    <p class="text-gray-600">Tim kami merancang solusi digital yang efektif dan efisien.</p>
                </div>
                <div>
                    <div class="text-4xl text-purple-600 mb-2">🛠️</div>
                    <h4 class="font-bold text-purple-700 mb-2">Pengembangan</h4>
                    <p class="text-gray-600">Kami membangun sistem sesuai spesifikasi dan timeline.</p>
                </div>
                <div>
                    <div class="text-4xl text-purple-600 mb-2">🚀</div>
                    <h4 class="font-bold text-purple-700 mb-2">Peluncuran</h4>
                    <p class="text-gray-600">Setelah selesai, kami bantu launching dan maintenance.</p>
                </div>
            </div>
        </section>

        {{-- Lokasi Kantor --}}
        <section id="location" class="py-20 bg-white mt-20 rounded-3xl shadow-xl">
            <h2 class="text-4xl font-extrabold text-center text-purple-800 mb-8">Kunjungi Kami 📍</h2>
            <div class="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg aspect-video">
                <iframe class="w-full h-full"
                    src="https://maps.google.com/maps?q=Jakarta&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"
                    allowfullscreen></iframe>
            </div>
        </section>

        {{-- Blog Section --}}
        <section id="blog" class="py-20 bg-pink-50 mt-20 rounded-3xl shadow-xl">
            <h2 class="text-4xl font-extrabold text-center text-purple-800 mb-12">Artikel Terbaru</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
                <div class="bg-white p-6 rounded-xl shadow-md">
                    <h3 class="font-bold text-purple-700 text-lg mb-2">Tips Membuat Website yang Menjual</h3>
                    <p class="text-gray-600 text-sm mb-3">Pelajari prinsip dasar desain UX/UI yang efektif untuk
                        meningkatkan konversi.</p>
                    <a href="#" class="text-purple-600 font-semibold">Baca Selengkapnya →</a>
                </div>
                <div class="bg-white p-6 rounded-xl shadow-md">
                    <h3 class="font-bold text-purple-700 text-lg mb-2">Kenapa Bisnis Perlu Aplikasi Mobile?</h3>
                    <p class="text-gray-600 text-sm mb-3">Cari tahu kelebihan aplikasi mobile untuk UMKM dan startup.</p>
                    <a href="#" class="text-purple-600 font-semibold">Baca Selengkapnya →</a>
                </div>
                <div class="bg-white p-6 rounded-xl shadow-md">
                    <h3 class="font-bold text-purple-700 text-lg mb-2">Pentingnya SEO untuk Website Bisnis</h3>
                    <p class="text-gray-600 text-sm mb-3">Tingkatkan visibilitas bisnismu dengan strategi SEO yang tepat.
                    </p>
                    <a href="#" class="text-purple-600 font-semibold">Baca Selengkapnya →</a>
                </div>
            </div>
        </section>

    </div>
@endsection
