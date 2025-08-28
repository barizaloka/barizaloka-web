@extends('layouts.app')

@section('content')
<div class="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 font-sans text-gray-800">
    <div class="container mx-auto px-4 py-28">

        {{-- Contact Header --}}
        <section class="text-center mb-20">
            <h1 class="text-6xl font-extrabold text-purple-800 leading-tight mb-6">
                Hubungi Kami <span role="img" aria-label="telephone">📞</span>
            </h1>
            <p class="text-xl text-gray-700 max-w-3xl mx-auto">
                Kami siap membantu Anda! Silakan hubungi kami melalui formulir di bawah ini, atau gunakan informasi kontak yang tersedia.
            </p>
        </section>

        {{-- Contact Form (Placeholder) --}}
        <section class="bg-white shadow-xl rounded-xl p-10 max-w-3xl mx-auto mb-24">
            <h2 class="text-2xl font-semibold text-purple-800 mb-6">Formulir Kontak</h2>
            {{-- Tambahkan formulir kontak di sini --}}
            <p class="text-gray-600">Formulir kontak akan segera tersedia.</p>
        </section>

        {{-- Contact Info --}}
        <section class="text-center">
            <h2 class="text-3xl font-bold text-purple-800 mb-8">Atau Hubungi Kami di:</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left max-w-5xl mx-auto">

                {{-- Email --}}
                <div class="bg-white rounded-lg shadow-md p-6 flex items-start space-x-4">
                    <div class="text-purple-600 text-3xl">
                        📧
                    </div>
                    <div>
                        <h3 class="text-xl font-semibold">Email</h3>
                        <p class="text-gray-700">support@barizaloka.id</p>
                    </div>
                </div>

                {{-- WhatsApp --}}
                <div class="bg-white rounded-lg shadow-md p-6 flex items-start space-x-4">
                    <div class="text-green-500 text-3xl">
                        💬
                    </div>
                    <div>
                        <h3 class="text-xl font-semibold">WhatsApp</h3>
                        <a href="https://wa.me/6287714625940" class="text-purple-700 hover:underline">
                            +62 877-1462-5940
                        </a>
                    </div>
                </div>

                {{-- YouTube --}}
                <div class="bg-white rounded-lg shadow-md p-6 flex items-start space-x-4">
                    <div class="text-red-500 text-3xl">
                        ▶️
                    </div>
                    <div>
                        <h3 class="text-xl font-semibold">YouTube</h3>
                        <a href="https://youtube.com/@barizaloka" target="_blank" class="text-purple-700 hover:underline">
                            @barizaloka
                        </a>
                    </div>
                </div>

                {{-- Lokasi --}}
                <div class="bg-white rounded-lg shadow-md p-6 flex items-start space-x-4">
                    <div class="text-blue-500 text-3xl">
                        📍
                    </div>
                    <div>
                        <h3 class="text-xl font-semibold">Alamat</h3>
                        <p class="text-gray-700">RT 01 RW 02, Desa Karangasem Kecamatan Sedan, Rembang, Jawa Tengah</p>
                    </div>
                </div>

                {{-- Jam Operasional --}}
                <div class="bg-white rounded-lg shadow-md p-6 flex items-start space-x-4">
                    <div class="text-yellow-500 text-3xl">
                        ⏰
                    </div>
                    <div>
                        <h3 class="text-xl font-semibold">Jam Operasional</h3>
                        <p class="text-gray-700">Formulir kontak akan segera tersedia.</p>
                    </div>
                </div>

                {{-- CTA Button --}}
                <div class="bg-white rounded-lg shadow-md p-6 flex flex-col justify-center items-start space-y-4">
                    <h3 class="text-xl font-semibold text-purple-800">Butuh bantuan cepat?</h3>
                    <a href="https://wa.me/6287714625940" class="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition">
                        Chat WhatsApp Sekarang
                    </a>
                </div>

            </div>
        </section>

    </div>
</div>
@endsection
