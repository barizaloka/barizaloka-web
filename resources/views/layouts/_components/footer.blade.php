<!-- Footer -->
<footer class="relative bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 text-white py-16 overflow-hidden">

    <div class="relative container mx-auto px-6 text-center">
        {{-- Main Brand Section --}}
        <div class="mb-12 transform hover:scale-105 transition-all duration-500">
            <div class="inline-block p-8 bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20">
                <div class="flex items-center justify-center mb-4">
                    <div class="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-ping mr-2">
                    </div>
                    <a href="/"
                        class="text-4xl font-bold bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent hover:from-yellow-200 hover:via-pink-200 hover:to-purple-200 transition-all duration-300">
                        🌟 Barizaloka Group 🌟
                    </a>
                    <div class="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-ping ml-2">
                    </div>
                </div>
            </div>
        </div>

        {{-- Services Section --}}
        <div class="grid md:grid-cols-2 gap-8 mb-12">
            <div
                class="group p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div class="flex items-center justify-center mb-3">
                    <i class="fas fa-building text-blue-400 text-2xl mr-3 group-hover:animate-bounce"></i>
                    <h3 class="text-xl font-bold text-blue-300">🏢 Barizaloka Group</h3>
                </div>
                <p class="text-gray-300 text-sm leading-relaxed">
                    Layanan Web Development & Digital Solutions terdepan ✨ untuk transformasi digital bisnis Anda
                </p>
            </div>

            <div
                class="group p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div class="flex items-center justify-center mb-3">
                    <i class="fas fa-mobile-alt text-purple-400 text-2xl mr-3 group-hover:animate-bounce"></i>
                    <h3 class="text-xl font-bold text-purple-300">📱 Barizaloka Universe</h3>
                </div>
                <p class="text-gray-300 text-sm leading-relaxed mb-4">
                    Studio Aplikasi Mobile & Innovation Hub 🚀 untuk solusi teknologi masa depan
                </p>
            </div>
        </div>

        {{-- Contact Information --}}
        <div class="grid md:grid-cols-3 gap-6 mb-12">
            <div class="group p-4 bg-white/5 rounded-xl">
                <div class="flex items-center justify-center mb-2">
                    📧
                </div>
                <p class="text-gray-300 text-sm mb-2">Email</p>
                <a href="mailto:barizaloka@gmail.com"
                    class="text-yellow-300 hover:text-yellow-200 transition-colors duration-300 text-sm font-medium">
                    support@barizaloka.id
                </a>
            </div>

            <div class="group p-4 bg-white/5 rounded-xl">
                <div class="flex items-center justify-center mb-2">
                    📱
                </div>
                <p class="text-gray-300 text-sm mb-2">WhatsApp</p>
                <a href="https://wa.me/6287714625940?text=Halo%2C%20saya%20ingin%20bertanya%20tentang..."
                    target="_blank" rel="noopener noreferrer"
                    class="text-green-300 hover:text-green-200 transition-colors duration-300 text-sm font-medium">
                    6287714625940
                </a>
            </div>

            <div class="group p-4 bg-white/5 rounded-xl">
                <div class="flex items-center justify-center mb-2">
                    📍
                </div>
                <p class="text-gray-300 text-sm mb-2">Lokasi</p>
                <p class="text-red-300 text-xs leading-relaxed">
                    RT 01 RW 02, Desa Karangasem<br>
                    Kecamatan Sedan, Rembang, Jawa Tengah
                </p>
            </div>
        </div>

        {{-- Social Media --}}
        <div class="mb-12">
            <h4 class="text-lg font-semibold mb-6 text-gray-300">📺 Ikuti Kami</h4>
            <div class="flex justify-center">
                <a href="https://youtube.com/@barizaloka" target="_blank"
                    class="p-4 bg-gradient-to-r from-red-500 to-red-600 rounded-full hover:scale-110 shadow-lg">
                    ▶️
                </a>
            </div>
        </div>

        {{-- Copyright --}}
        <p class="text-gray-400 text-sm flex items-center justify-center">
            © {{ date('Y') }} <span class="mx-2 text-purple-300 font-semibold">Barizaloka Group</span> All rights
            reserved. 🚀
        </p>
    </div>
</footer>
