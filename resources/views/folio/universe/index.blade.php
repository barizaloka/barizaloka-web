<?php

use App\Models\Universe;
use Illuminate\View\View;

use function Laravel\Folio\render;

render(function (View $view, Universe $universe) {
    return $view->with('universes', $universe->get());
});


?>



@extends('layouts.app')

@section('content')
    <div class="min-h-screen bg-gradient-to-br from-purple-200 to-pink-200 font-sans text-gray-800">
        <div class="container mx-auto px-4 py-28">

            {{-- Header --}}
            <div class="text-center mb-16">
                <h1
                    class="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
                    Barizaloka Universe
                </h1>
                <p class="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    Studio aplikasi mobile, website, dan desktop yang menghadirkan tools berguna untuk kehidupan
                    sehari-hari.
                    Solusi praktis dalam genggaman Anda. Kami hadirkan inovasi untuk berbagai platform.
                </p>
            </div>

            {{-- Stats / Misi --}}
            <div class="bg-white rounded-2xl shadow-xl p-8 mb-16 text-center">
                <div class="max-w-xl mx-auto">
                    <h3 class="text-2xl font-bold text-gray-800 mb-4">Misi Kami</h3>
                    <p class="text-lg text-gray-600 leading-relaxed">
                        Kami membangun aplikasi yang fungsional, andal, dan menyenangkan. Setiap proyek adalah komitmen kami
                        untuk menghadirkan solusi digital yang inovatif bagi Anda.
                    </p>
                </div>
            </div>

            {{-- Filter Platform --}}
            <div class="text-center mb-12">
                <h2 class="text-4xl font-bold text-gray-800 mb-4">Koleksi Aplikasi</h2>
                <p class="text-lg text-gray-600 max-w-xl mx-auto">
                    Telusuri koleksi aplikasi kami yang dirancang untuk berbagai platform.
                </p>
            </div>

            <div class="flex flex-wrap justify-center gap-4 mb-12">
                @php
                    $activePlatform = request('platform', 'all');
                    $platforms = ['all' => 'Semua', 'mobile' => 'Mobile', 'website' => 'Website', 'desktop' => 'Desktop'];
                @endphp

                @foreach ($platforms as $key => $label)
                    <a href="/"
                        class="flex items-center px-6 py-2 rounded-full font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 {{ $activePlatform === $key ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' : 'bg-gray-200 text-gray-700 hover:bg-gray-300' }}">
                        {{ $label }}
                    </a>
                @endforeach
            </div>

            {{-- Grid App Card --}}
            @if($universes->count())
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    @foreach($universes as $app)
                        @include('universe.apps._card', ['app' => $app])
                    @endforeach
                </div>
            @else
                <div class="text-center py-16">
                    <div class="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                        <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                    </div>
                    <p class="text-gray-500 text-xl">Sedang mengembangkan aplikasi amazing untuk platform ini!</p>
                </div>
            @endif

            {{-- CTA --}}
            <section class="mt-20 text-center">
                <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
                    <h3 class="text-3xl font-bold mb-4">Ingin Tahu Lebih Lanjut?</h3>
                    <p class="text-xl mb-8 opacity-90">
                        Temukan informasi lebih detail tentang setiap aplikasi dan fitur-fitur kami.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="/"
                            class="bg-white text-blue-600 font-bold py-3 px-8 rounded-xl hover:bg-gray-100 transition-colors shadow-lg">
                            Lihat Semua Aplikasi
                        </a>
                        <a href="/"
                            class="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-xl hover:bg-white hover:text-blue-600 transition-colors">
                            Hubungi Kami
                        </a>
                    </div>
                </div>
            </section>
        </div>
    </div>
@endsection