@extends('layouts.app')

@section('content')
<div class="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:bg-gradient-to-br dark:from-gray-900 dark:via-purple-900 dark:to-blue-900 font-sans text-gray-800 dark:text-white">
    <div class="container mx-auto px-4 py-28">

        {{-- Subscribe Header --}}
        <section class="text-center mb-20">
            <div class="text-6xl mb-6">🔔🚀</div>
            <h1 class="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 leading-tight mb-6">
                Subscribe & Follow!
            </h1>
            <p class="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                Jangan sampai ketinggalan konten terbaru! Subscribe sekarang dan nyalain lonceng notifikasi 🔔
            </p>
        </section>

        {{-- Main CTA Section --}}
        <section class="bg-gradient-to-r from-red-500 to-red-600 shadow-2xl rounded-3xl p-12 max-w-4xl mx-auto mb-16 text-white text-center">
            <div class="text-6xl mb-6">▶️</div>
            <h2 class="text-4xl font-bold mb-4">Subscribe YouTube Channel Kami!</h2>
            <p class="text-xl mb-8 opacity-90">
                Dapatkan tutorial, tips & trik, dan konten IT terbaru hampir setiap hari!
            </p>
            <a href="https://youtube.com/@barizaloka" target="_blank" 
                class="inline-flex items-center gap-3 bg-white text-red-600 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-gray-100 transition-all hover:scale-105 shadow-xl">
                <span class="text-3xl">🔔</span>
                Subscribe di YouTube
            </a>
            <p class="mt-6 text-sm opacity-75">
                Sudah <strong>10,000+</strong> subscriber yang belajar bareng kami! 🎉
            </p>
        </section>

        {{-- Social Media & Contact Channels --}}
        <section class="mb-16">
            <h2 class="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
                Ikuti Kami di Sosial Media 📱
            </h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">

                {{-- YouTube --}}
                <a href="https://youtube.com/@barizaloka" target="_blank" 
                    class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all hover:scale-105 text-center group">
                    <div class="text-6xl mb-4 group-hover:scale-110 transition-transform">▶️</div>
                    <h3 class="text-2xl font-bold mb-2 text-red-600 dark:text-red-400">YouTube</h3>
                    <p class="text-gray-600 dark:text-gray-400 mb-3">Video tutorial & konten seru</p>
                    <span class="text-sm font-semibold text-blue-600 dark:text-blue-400">@barizaloka</span>
                </a>

                {{-- Instagram --}}
                <a href="https://instagram.com/barizaloka" target="_blank" 
                    class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all hover:scale-105 text-center group">
                    <div class="text-6xl mb-4 group-hover:scale-110 transition-transform">📸</div>
                    <h3 class="text-2xl font-bold mb-2 text-pink-600 dark:text-pink-400">Instagram</h3>
                    <p class="text-gray-600 dark:text-gray-400 mb-3">Tips singkat & behind the scenes</p>
                    <span class="text-sm font-semibold text-blue-600 dark:text-blue-400">@barizaloka</span>
                </a>

                {{-- Twitter / X --}}
                <a href="https://twitter.com/barizaloka" target="_blank" 
                    class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all hover:scale-105 text-center group">
                    <div class="text-6xl mb-4 group-hover:scale-110 transition-transform">𝕏</div>
                    <h3 class="text-2xl font-bold mb-2 text-blue-600 dark:text-blue-400">Twitter / X</h3>
                    <p class="text-gray-600 dark:text-gray-400 mb-3">Update cepat & diskusi tech</p>
                    <span class="text-sm font-semibold text-blue-600 dark:text-blue-400">@barizaloka</span>
                </a>

                {{-- TikTok --}}
                <a href="https://tiktok.com/@barizaloka" target="_blank" 
                    class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all hover:scale-105 text-center group">
                    <div class="text-6xl mb-4 group-hover:scale-110 transition-transform">🎵</div>
                    <h3 class="text-2xl font-bold mb-2 text-purple-600 dark:text-purple-400">TikTok</h3>
                    <p class="text-gray-600 dark:text-gray-400 mb-3">Konten pendek & menghibur</p>
                    <span class="text-sm font-semibold text-blue-600 dark:text-blue-400">@barizaloka</span>
                </a>

                {{-- GitHub --}}
                <a href="https://github.com/barizaloka" target="_blank" 
                    class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all hover:scale-105 text-center group">
                    <div class="text-6xl mb-4 group-hover:scale-110 transition-transform">🐙</div>
                    <h3 class="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">GitHub</h3>
                    <p class="text-gray-600 dark:text-gray-400 mb-3">Source code & project</p>
                    <span class="text-sm font-semibold text-blue-600 dark:text-blue-400">@barizaloka</span>
                </a>

                {{-- Discord --}}
                <a href="https://discord.gg/barizaloka" target="_blank" 
                    class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all hover:scale-105 text-center group">
                    <div class="text-6xl mb-4 group-hover:scale-110 transition-transform">💬</div>
                    <h3 class="text-2xl font-bold mb-2 text-indigo-600 dark:text-indigo-400">Discord</h3>
                    <p class="text-gray-600 dark:text-gray-400 mb-3">Komunitas & diskusi</p>
                    <span class="text-sm font-semibold text-blue-600 dark:text-blue-400">Join Server</span>
                </a>

            </div>
        </section>

        {{-- Contact Information --}}
        <section class="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-10 max-w-4xl mx-auto mb-16">
            <h2 class="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
                Butuh Bantuan atau Kolaborasi? 🤝
            </h2>
            
            <div class="grid md:grid-cols-2 gap-6">
                {{-- WhatsApp --}}
                <div class="flex items-start gap-4 p-6 bg-green-50 dark:bg-green-900/20 rounded-2xl">
                    <div class="text-4xl">💬</div>
                    <div>
                        <h3 class="text-xl font-bold mb-2 text-green-700 dark:text-green-400">WhatsApp</h3>
                        <a href="https://wa.me/6287714625940" class="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
                            +62 877-1462-5940
                        </a>
                        <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">Chat langsung untuk pertanyaan cepat</p>
                    </div>
                </div>

                {{-- Email --}}
                <div class="flex items-start gap-4 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl">
                    <div class="text-4xl">📧</div>
                    <div>
                        <h3 class="text-xl font-bold mb-2 text-blue-700 dark:text-blue-400">Email</h3>
                        <a href="mailto:support@barizaloka.id" class="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
                            support@barizaloka.id
                        </a>
                        <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">Untuk pertanyaan detail & kolaborasi</p>
                    </div>
                </div>
            </div>

            <div class="mt-8 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-2xl border-l-4 border-yellow-500">
                <p class="text-gray-700 dark:text-gray-300">
                    <strong>💡 Tips:</strong> Untuk respons lebih cepat, hubungi kami via WhatsApp. Kami biasanya merespon dalam 1-2 jam! ⚡
                </p>
            </div>
        </section>

        {{-- Newsletter Signup (Optional) --}}
        <section class="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl shadow-2xl p-12 max-w-3xl mx-auto text-white text-center">
            <h2 class="text-3xl font-bold mb-4">Mau Update Langsung ke Email? 📬</h2>
            <p class="text-lg mb-6 opacity-90">
                Daftar newsletter kami dan dapatkan tips eksklusif, early access konten baru, dan surprise lainnya!
            </p>
            <div class="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                <input type="email" placeholder="email@kamu.com" 
                    class="flex-1 px-6 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/50">
                <button class="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all hover:scale-105 shadow-lg">
                    Subscribe!
                </button>
            </div>
            <p class="text-sm mt-4 opacity-75">
                Gak ada spam, promise! Cuma konten berkualitas aja 😉
            </p>
        </section>

    </div>
</div>
@endsection
