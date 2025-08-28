@extends('layouts.app')

@section('content')
<div class="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 font-sans text-gray-800">
    <div class="container mx-auto px-4 py-28">
        {{-- About Us Header --}}
        <section class="text-center mb-20">
            <h1 class="text-6xl font-extrabold text-purple-800 leading-tight mb-6">
                Tentang Barizaloka 🚀
            </h1>
            <p class="text-xl text-gray-700 max-w-3xl mx-auto">
                Kami adalah tim kreatif dan profesional yang berkomitmen membantu Anda mewujudkan ide digital ke dalam realitas berbasis teknologi.
            </p>
        </section>

        {{-- Who We Are --}}
        <section class="bg-white rounded-3xl shadow-xl p-10 mb-20 max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed">
            <h2 class="text-3xl font-bold text-purple-800 mb-6">Siapa Kami?</h2>
            <p class="mb-4">
                <strong>Barizaloka Group</strong> adalah startup digital berbasis di Indonesia yang fokus pada jasa pembuatan website, aplikasi mobile, dan solusi teknologi bisnis.
            </p>
            <p class="mb-4">
                Kami percaya bahwa setiap ide layak untuk diwujudkan. Dengan semangat kolaboratif dan pendekatan yang personal, kami bekerja erat dengan klien untuk menghasilkan produk digital yang impactful dan efisien.
            </p>
        </section>

        {{-- Vision and Mission --}}
        <section class="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto mb-20">
            <div class="bg-purple-100 p-8 rounded-2xl shadow-lg">
                <h3 class="text-2xl font-bold text-purple-800 mb-4">Visi Kami</h3>
                <p>
                    Menjadi mitra digital terpercaya bagi UMKM dan perusahaan di Indonesia dalam transformasi digital menuju masa depan yang lebih cemerlang.
                </p>
            </div>
            <div class="bg-pink-100 p-8 rounded-2xl shadow-lg">
                <h3 class="text-2xl font-bold text-pink-800 mb-4">Misi Kami</h3>
                <ul class="list-disc list-inside space-y-2 text-gray-700">
                    <li>Menghadirkan solusi teknologi yang terjangkau dan berkualitas.</li>
                    <li>Mendukung pertumbuhan bisnis melalui inovasi digital.</li>
                    <li>Memberdayakan talenta lokal di bidang teknologi.</li>
                    <li>Memberikan pelayanan terbaik berbasis nilai-nilai Islami.</li>
                </ul>
            </div>
        </section>

        {{-- Our Team or Founder --}}
        <section class="bg-white rounded-3xl shadow-xl py-20 px-6 text-center max-w-5xl mx-auto">
            <h2 class="text-4xl font-extrabold text-purple-800 mb-10">Pendiri Kami 👨‍💻</h2>
            <div class="flex flex-col md:flex-row items-center justify-center gap-10">
                <img src="{{ asset('images/landing_page/handsome.webp') }}" alt="Founder Barizaloka"
                    class="w-64 h-64 rounded-full border-4 border-purple-300 shadow-xl object-cover" />
                <div class="text-left max-w-lg">
                    <p class="text-lg text-gray-700 mb-4">
                        Barizaloka Group didirikan oleh pemuda asal Rembang, Jawa Tengah. Ia memiliki semangat untuk membangun karya digital yang bermanfaat dan dapat diakses oleh semua orang.
                    </p>
                    <div class="flex items-center gap-4 p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <img src="{{ asset('images/landing_page/Logo_Muhammadiyah.svg') }}" alt="Logo Muhammadiyah"
                            class="w-12 h-12" />
                        <p class="text-green-700 font-medium">
                            Simpatisan Muhammadiyah — menjunjung tinggi nilai-nilai Islam dalam setiap pelayanan.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {{-- Contact Us CTA --}}
        <section class="mt-24 text-center">
            <h2 class="text-4xl font-extrabold text-purple-800 mb-6">Ingin Bekerja Sama?</h2>
            <p class="text-lg text-gray-700 mb-8">
                Jangan ragu untuk menghubungi kami dan mulai perjalanan digital Anda hari ini!
            </p>
            <a href="/contact"
                class="inline-block bg-purple-700 text-white px-8 py-4 rounded-full shadow-lg hover:bg-purple-800 transition duration-300">
                Hubungi Kami
            </a>
        </section>
    </div>
</div>
@endsection
