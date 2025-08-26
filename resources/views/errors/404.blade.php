@extends('layouts.errors')

@section('content')
    <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-200 to-pink-200">
        <div class="bg-white p-10 rounded-3xl shadow-xl text-center max-w-md">
            <h1 class="text-6xl font-extrabold text-purple-800 mb-4">404 🚧</h1>
            <p class="text-lg text-gray-600 mb-8">😔 Maaf, halaman yang Anda cari tidak ditemukan 🔍</p>
            <a href="{{ url('/') }}"
                class="inline-block bg-purple-600 text-gray-200 px-6 py-3 rounded-full shadow-lg hover:bg-purple-700 transition transform hover:scale-105">
                🏠 Kembali ke Beranda
            </a>
        </div>
    </div>
@endsection
