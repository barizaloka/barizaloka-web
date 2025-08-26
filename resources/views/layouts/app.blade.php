<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Barizaloka Group</title>
    @vite('resources/css/app.css')
</head>

<body class="bg-gray-50 text-gray-800">

    {{-- Navbar --}}
    <nav
        class="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-80 backdrop-blur-md shadow-lg rounded-b-3xl mx-auto mt-4 max-w-6xl p-4 flex items-center justify-between">
        <div class="text-2xl font-bold text-purple-700">
            <a href="{{ url('/') }}" class="hover:text-purple-800 transition-colors duration-300">
                🌐 Barizaloka Group
            </a>
        </div>

        {{-- Desktop Navigation --}}
        <div class="hidden md:flex space-x-6">
            <a href="#about-us"
                class="inline-flex text-gray-700 hover:text-purple-700 font-medium transition duration-300 ease-in-out px-3 py-2 rounded-md hover:bg-purple-100">ℹ️
                Tentang</a>
            <a href="#founder"
                class="inline-flex text-gray-700 hover:text-purple-700 font-medium transition duration-300 ease-in-out px-3 py-2 rounded-md hover:bg-purple-100">👨‍💼
                Pendiri</a>
            <a href="#services"
                class="inline-flex text-gray-700 hover:text-purple-700 font-medium transition duration-300 ease-in-out px-3 py-2 rounded-md hover:bg-purple-100">🛠️
                Layanan</a>
        </div>

        {{-- Mobile Hamburger --}}
        <div class="md:hidden flex items-center">
            <button id="menu-toggle" class="text-gray-700 hover:text-purple-700 focus:outline-none">
                <!-- Hamburger -->
                <svg id="hamburger" class="h-8 w-8 block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <!-- Close -->
                <svg id="close" class="h-8 w-8 hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    </nav>

    <!-- Overlay Background -->
    <div id="overlay" class="fixed inset-0 right-64 z-30 hidden transition-opacity duration-500"></div>

    <!-- Mobile Menu Drawer -->
    <div id="mobile-menu"
        class="fixed top-16 right-0 h-full w-64 bg-white/95 backdrop-blur-lg shadow-lg transform translate-x-full transition-transform duration-500 ease-in-out z-40 flex flex-col items-start p-6 space-y-6 text-lg font-semibold text-gray-700">
        <a href="#about-us" class="hover:text-purple-600">ℹ️ Tentang</a>
        <a href="#founder" class="hover:text-purple-600">👨‍💼 Pendiri</a>
        <a href="#services" class="hover:text-purple-600">🛠️ Layanan</a>
    </div>

    <main>
        @yield('content')
    </main>

    <div class="fixed bottom-4 right-4 space-y-3 z-99">
        <a href="https://wa.me/6287714625940?text=Halo%2C%20saya%20ingin%20bertanya%20tentang..." target="_blank"
            rel="noopener noreferrer"
            class="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full shadow-lg transition transform hover:scale-105 flex items-center space-x-2">
            <span>💬</span>
            <span>Chat via WA</span>
        </a>
    </div>

    @include('layouts._components.footer')
    <script>
        document.addEventListener("DOMContentLoaded", () => {
            const toggleBtn = document.getElementById("menu-toggle");
            const hamburger = document.getElementById("hamburger");
            const closeBtn = document.getElementById("close");
            const mobileMenu = document.getElementById("mobile-menu");
            const overlay = document.getElementById("overlay");

            function openMenu() {
                mobileMenu.classList.remove("translate-x-full");
                mobileMenu.classList.add("translate-x-0");
                overlay.classList.remove("hidden");
                hamburger.classList.add("hidden");
                closeBtn.classList.remove("hidden");
            }

            function closeMenu() {
                mobileMenu.classList.add("translate-x-full");
                mobileMenu.classList.remove("translate-x-0");
                overlay.classList.add("hidden");
                hamburger.classList.remove("hidden");
                closeBtn.classList.add("hidden");
            }

            toggleBtn.addEventListener("click", () => {
                if (mobileMenu.classList.contains("translate-x-full")) {
                    openMenu();
                } else {
                    closeMenu();
                }
            });

            overlay.addEventListener("click", closeMenu);

            document.querySelectorAll("#mobile-menu a").forEach(link => {
                link.addEventListener("click", closeMenu);
            });
        });
    </script>
</body>

</html>