'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// --- Definisi Tipe Data (Interfaces) ---

// Enum untuk Platform (tidak di-export untuk menghindari konflik Next.js)
enum AppPlatform {
    MOBILE = 'mobile',
    WEBSITE = 'website',
    DESKTOP = 'desktop',
}

// Interface untuk data mentah dari JSON
interface RawAppData {
    id: string;
    title: string;
    description: string;
    category: string;
    features: string[];
    platforms: string[];
    comingSoon?: boolean;
}

// Interface untuk App yang sudah diproses
interface App {
    id: string;
    title: string;
    description: string;
    category: string;
    features: string[];
    platforms: AppPlatform[];
    comingSoon?: boolean;
}

// Mengimpor data JSON secara langsung
import rawAppsData from './apps.data.json';

// Helper function untuk validasi dan konversi platform
const validatePlatform = (platform: string): AppPlatform => {
    const validPlatforms = Object.values(AppPlatform) as string[];
    if (validPlatforms.includes(platform)) {
        return platform as AppPlatform;
    }
    // Fallback ke mobile jika platform tidak valid
    console.warn(`Invalid platform: ${platform}, falling back to mobile`);
    return AppPlatform.MOBILE;
};

// Konversi data mentah ke format yang sesuai
const appsData: App[] = (rawAppsData as RawAppData[]).map(app => ({
    ...app,
    platforms: app.platforms.map(validatePlatform)
}));

interface AppCardProps {
    app: App;
}

type PlatformType = 'all' | AppPlatform;

// --- Komponen-komponen ---

const AppCard: React.FC<AppCardProps> = ({ app }) => (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out border border-gray-100">
        <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-6 text-white">
            <div className="flex items-center justify-between mb-4">
                <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-medium text-white">
                    {app.category}
                </span>
                <div className="flex flex-wrap gap-2"> 
                    {app.platforms.map((platform, index) => (
                        <span key={index} className="bg-white bg-opacity-20 px-2 py-1 rounded-full text-sm font-medium text-white">
                            {platform.charAt(0).toUpperCase() + platform.slice(1)}
                        </span>
                    ))}
                </div>
            </div>
            <h3 className="text-2xl font-bold mb-2">{app.title}</h3>
        </div>

        <div className="p-6">
            <p className="text-gray-600 mb-4">{app.description}</p>

            <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-2">Fitur Utama:</h4>
                <div className="flex flex-wrap gap-2">
                    {app.features.map((feature, index) => (
                        <span
                            key={index}
                            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
                            {feature}
                        </span>
                    ))}
                </div>
            </div>

            {!app.comingSoon ? (
                <Link href={`/universe/apps/${app.id}`} className="block w-full">
                    <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                        Lihat Selengkapnya
                    </button>
                </Link>
            ) : (
                <div className="w-full bg-gray-100 text-gray-600 font-semibold py-3 px-6 rounded-xl text-center border-2 border-dashed border-gray-300">
                    Segera Hadir
                </div>
            )}
        </div>
    </div>
);

// --- Header Component ---
const StudioHeader: React.FC = () => (
    <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            Barizaloka Universe
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Studio aplikasi mobile, website, dan desktop yang menghadirkan tools berguna untuk kehidupan sehari-hari.
            Solusi praktis dalam genggaman Anda. Kami hadirkan inovasi untuk berbagai platform.
        </p>
    </div>
);

// --- Stats Component ---
const StudioStats: React.FC = () => (
    <div className="bg-white rounded-2xl shadow-xl p-8 mb-16 text-center">
        <div className="max-w-xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Misi Kami</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
                Kami membangun aplikasi yang fungsional, andal, dan menyenangkan. Setiap proyek adalah komitmen kami untuk menghadirkan solusi digital yang inovatif bagi Anda.
            </p>
        </div>
    </div>
);

// Helper function untuk mendapatkan label platform
const getPlatformLabel = (platform: string): string => {
    switch (platform) {
        case 'all':
            return 'Semua';
        case AppPlatform.MOBILE:
            return 'Mobile';
        case AppPlatform.WEBSITE:
            return 'Website';
        case AppPlatform.DESKTOP:
            return 'Desktop';
        default:
            return platform.charAt(0).toUpperCase() + platform.slice(1);
    }
};

// --- Halaman Studio Aplikasi Utama ---
const AppStudioPage: React.FC = () => {
    const [activePlatform, setActivePlatform] = useState<PlatformType>('all');

    const filteredApps: App[] = appsData.filter(app => {
        if (activePlatform === 'all') {
            return true;
        }
        return app.platforms.includes(activePlatform as AppPlatform);
    });

    const platformOptions: PlatformType[] = ['all', AppPlatform.MOBILE, AppPlatform.WEBSITE, AppPlatform.DESKTOP];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 font-sans text-gray-800">
            <main className="container mx-auto px-4 py-16">
                <StudioHeader />
                <StudioStats />

                {/* Apps Section */}
                <section id="apps">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Koleksi Aplikasi</h2>
                        <p className="text-lg text-gray-600 max-w-xl mx-auto">
                            Telusuri koleksi aplikasi kami yang dirancang untuk berbagai platform.
                        </p>
                    </div>

                    {/* Platform Tabs */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {platformOptions.map((platform) => (
                            <button
                                key={platform}
                                onClick={() => setActivePlatform(platform)}
                                className={`
                                    flex items-center px-6 py-2 rounded-full font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                                    ${activePlatform === platform
                                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                    }
                                `}
                            >
                                {getPlatformLabel(platform)}
                            </button>
                        ))}
                    </div>

                    {/* Apps Grid */}
                    {filteredApps.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredApps.map((app) => (
                                <AppCard key={app.id} app={app} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                </svg>
                            </div>
                            <p className="text-gray-500 text-xl">Sedang mengembangkan aplikasi amazing untuk platform ini!</p>
                        </div>
                    )}
                </section>

                {/* CTA Section */}
                <section className="mt-20 text-center">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
                        <h3 className="text-3xl font-bold mb-4">Ingin Tahu Lebih Lanjut?</h3>
                        <p className="text-xl mb-8 opacity-90">
                            Temukan informasi lebih detail tentang setiap aplikasi dan fitur-fitur kami.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-xl hover:bg-gray-100 transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600">
                                Lihat Semua Aplikasi
                            </button>
                            <button className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-xl hover:bg-white hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600">
                                Hubungi Kami
                            </button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default AppStudioPage;