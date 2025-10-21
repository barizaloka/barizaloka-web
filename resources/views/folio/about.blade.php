@extends('layouts.app')

@section('content')
<div class="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:bg-gradient-to-br dark:from-gray-900 dark:via-purple-900 dark:to-blue-900 font-sans text-gray-800 dark:text-white">
    <div class="container mx-auto px-4 py-28">
        {{-- About Us Header --}}
        <section class="text-center mb-20">
            <div class="text-6xl mb-6">💻🚀</div>
            <h1 class="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 leading-tight mb-6">
                Tentang Barizaloka
            </h1>
            <p class="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                Channel konten teknologi dan IT yang bikin kamu makin jago di dunia digital!
            </p>
        </section>

        {{-- Who We Are --}}
        <section class="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-10 mb-20 max-w-4xl mx-auto text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            <h2 class="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6">Apa itu Barizaloka?</h2>
            <p class="mb-4">
                <strong>Barizaloka</strong> adalah channel konten yang fokus memberikan edukasi seputar dunia <span class="text-green-600 dark:text-green-400 font-semibold">teknologi</span>, <span class="text-blue-600 dark:text-blue-400 font-semibold">pemrograman</span>, <span class="text-red-600 dark:text-red-400 font-semibold">cybersecurity</span>, <span class="text-purple-600 dark:text-purple-400 font-semibold">networking</span>, dan berbagai topik IT lainnya.
            </p>
            <p class="mb-4">
                Di sini, kamu akan menemukan tutorial, tips & trik, project seru, sampai pembahasan topik kekinian—semua dibahas dengan <strong>gaya yang santai tapi padat ilmu</strong>! 📚✨
            </p>
            <p class="mb-4">
                Baik kamu <strong>mahasiswa</strong>, <strong>profesional IT</strong>, atau sekadar <strong>penasaran sama dunia informatika</strong>—ini tempat yang tepat buat kamu! 😉
            </p>
        </section>

        {{-- Why Us --}}
        <section class="mb-20">
            <h2 class="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
                Kenapa Harus Subscribe? 🤔
            </h2>
            
            <div class="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                <div class="bg-gradient-to-br from-blue-500 to-blue-600 p-8 rounded-2xl shadow-xl text-white">
                    <div class="text-5xl mb-4">🎥</div>
                    <h3 class="text-2xl font-bold mb-3">Konten Rutin</h3>
                    <p>Hampir setiap hari ada video baru! Kamu gak akan kehabisan materi buat belajar.</p>
                </div>
                
                <div class="bg-gradient-to-br from-purple-500 to-purple-600 p-8 rounded-2xl shadow-xl text-white">
                    <div class="text-5xl mb-4">🎯</div>
                    <h3 class="text-2xl font-bold mb-3">Mudah Dipahami</h3>
                    <p>Gaya penyampaian santai dan to the point. Cocok buat pemula sampai advanced!</p>
                </div>
                
                <div class="bg-gradient-to-br from-pink-500 to-pink-600 p-8 rounded-2xl shadow-xl text-white">
                    <div class="text-5xl mb-4">🔥</div>
                    <h3 class="text-2xl font-bold mb-3">Up-to-Date</h3>
                    <p>Selalu bahas teknologi dan topik terbaru yang relevan dengan industri!</p>
                </div>
            </div>
        </section>

        {{-- Content Types --}}
        <section class="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-10 mb-20 max-w-4xl mx-auto">
            <h2 class="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-6 text-center">
                Jenis Konten yang Kami Hadirkan �
            </h2>
            <div class="grid md:grid-cols-2 gap-6 text-gray-700 dark:text-gray-300">
                <div class="flex items-start gap-3">
                    <span class="text-2xl">💻</span>
                    <div>
                        <h4 class="font-bold text-lg mb-1">Tutorial Programming</h4>
                        <p class="text-sm">Step-by-step dari berbagai bahasa pemrograman</p>
                    </div>
                </div>
                
                <div class="flex items-start gap-3">
                    <span class="text-2xl">💡</span>
                    <div>
                        <h4 class="font-bold text-lg mb-1">Tips & Trik</h4>
                        <p class="text-sm">Hack dan shortcut untuk produktivitas maksimal</p>
                    </div>
                </div>
                
                <div class="flex items-start gap-3">
                    <span class="text-2xl">🚀</span>
                    <div>
                        <h4 class="font-bold text-lg mb-1">Project Build</h4>
                        <p class="text-sm">Buat project nyata dari nol sampai selesai</p>
                    </div>
                </div>
                
                <div class="flex items-start gap-3">
                    <span class="text-2xl">🔒</span>
                    <div>
                        <h4 class="font-bold text-lg mb-1">Cybersecurity</h4>
                        <p class="text-sm">Pelajari ethical hacking dan keamanan sistem</p>
                    </div>
                </div>
                
                <div class="flex items-start gap-3">
                    <span class="text-2xl">🌐</span>
                    <div>
                        <h4 class="font-bold text-lg mb-1">Networking</h4>
                        <p class="text-sm">Konfigurasi dan troubleshooting jaringan</p>
                    </div>
                </div>
                
                <div class="flex items-start gap-3">
                    <span class="text-2xl">📱</span>
                    <div>
                        <h4 class="font-bold text-lg mb-1">Tech Reviews</h4>
                        <p class="text-sm">Review gadget dan software terbaru</p>
                    </div>
                </div>
            </div>
        </section>

        {{-- Creator Info --}}
        <section class="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl shadow-xl py-16 px-6 text-center max-w-5xl mx-auto text-white">
            <h2 class="text-4xl font-extrabold mb-6">Tentang Creator 👨‍💻</h2>
            <div class="max-w-3xl mx-auto">
                <p class="text-lg mb-4">
                    Barizaloka dikelola oleh seorang tech enthusiast asal Rembang, Jawa Tengah yang passionate di dunia teknologi dan programming.
                </p>
                <p class="text-lg mb-4">
                    Dengan pengalaman di berbagai bidang IT, kami berkomitmen untuk berbagi ilmu dan pengalaman dengan cara yang mudah dipahami dan fun! 🎉
                </p>
                <p class="text-lg font-semibold">
                    Mari belajar bareng dan upgrade skill IT kita! 🚀
                </p>
            </div>
        </section>

        {{-- CTA --}}
        <section class="mt-24 text-center">
            <h2 class="text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
                Siap Belajar Bareng? 🎓
            </h2>
            <p class="text-lg text-gray-700 dark:text-gray-300 mb-8">
                Subscribe sekarang dan jangan lupa nyalain notifikasi biar gak ketinggalan konten baru!
            </p>
            <div class="flex flex-wrap justify-center gap-4">
                <a href="/"
                    class="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full shadow-lg hover:from-blue-700 hover:to-purple-700 transition duration-300 font-bold">
                    <span class="text-2xl">🔔</span>
                    Subscribe YouTube
                </a>
                <a href="/contact"
                    class="inline-flex items-center gap-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-4 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300 font-bold border-2 border-gray-200 dark:border-gray-700">
                    <span class="text-2xl">💬</span>
                    Hubungi Kami
                </a>
            </div>
        </section>
    </div>
</div>
@endsection
