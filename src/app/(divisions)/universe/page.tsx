'use client';

import React from 'react';
import { Smartphone, Zap, Calculator } from 'lucide-react';
import Link from 'next/link';

// --- Definisi Tipe Data (Interfaces) ---

interface MobileApp {
	id: string;
	title: string;
	description: string;
	category: string;
	icon: React.ReactNode;
	features: string[];
	comingSoon?: boolean;
}

interface MobileAppCardProps {
	app: MobileApp;
}

// --- Komponen-komponen ---

const MobileAppCard: React.FC<MobileAppCardProps> = ({ app }) => (
	<div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out border border-gray-100">
		<div className="bg-gradient-to-br from-blue-500 to-purple-600 p-6 text-white">
			<div className="flex items-center justify-between mb-4">
				<div className="bg-white bg-opacity-20 p-3 rounded-xl">
					{app.icon}
				</div>
				<span className="bg-white dark:text-black bg-opacity-20 px-3 py-1 rounded-full text-sm font-medium">
					{app.category}
				</span>
			</div>
			<h3 className="text-2xl font-bold mb-2">{app.title}</h3>
		</div>

		<div className="p-6">
			<p className="text-gray-600 mb-4 line-clamp-3">{app.description}</p>

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

			{!app.comingSoon && (
				<Link href={`/universe/apps/${app.id}`}>
					<button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-1">
						Download Sekarang
					</button>
				</Link>
			)}

			{app.comingSoon && (
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
		<div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6 shadow-lg">
			<Smartphone className="w-10 h-10 text-white" />
		</div>
		<h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
			Barizaloka Universe
		</h1>
		<p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
			Studio aplikasi mobile yang menghadirkan tools berguna untuk kehidupan sehari-hari.
			Solusi praktis dalam genggaman Anda.
		</p>
	</div>
);

// --- Stats Component ---
const StudioStats: React.FC = () => (
	<div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
		<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
			<div>
				<div className="text-3xl font-bold text-blue-600 mb-2">12+</div>
				<div className="text-gray-600 font-medium">Apps Published</div>
			</div>
			<div>
				<div className="text-3xl font-bold text-purple-600 mb-2">50K+</div>
				<div className="text-gray-600 font-medium">Downloads</div>
			</div>
			<div>
				<div className="text-3xl font-bold text-green-600 mb-2">4.8★</div>
				<div className="text-gray-600 font-medium">Average Rating</div>
			</div>
			<div>
				<div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
				<div className="text-gray-600 font-medium">Support</div>
			</div>
		</div>
	</div>
);

// --- Halaman Studio Aplikasi Mobile Utama ---

const MobileAppStudioPage: React.FC = () => {
	const mobileApps: MobileApp[] = [
		{
			id: 'timekeeper',
			title: 'Barizaloka Timekeeper',
			description: 'Stopwatch canggih yang dirancang dengan presisi untuk setiap detik berhargamu. Ringan, cepat, dan akurat.',
			category: 'Produktivitas',
			icon: <Calculator className="w-8 h-8" />,
			features: ['Stopwatch']
		},
		{
			id: 'barizone',
			title: 'Barizone',
			description: 'Aplikasi fokus yang membantu Anda menaklukkan tugas sambil bertualang bersama teman hewan yang menggemaskan. Selamatkan dan kumpulkan mereka semua!',
			category: 'Produktivitas',
			icon: <Zap className="w-8 h-8" />,
			features: ['Sesi Fokus & Penyelamatan']
		}
	];

	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 font-sans text-gray-800">
			<main className="container mx-auto px-4 py-16">
				<StudioHeader />
				<StudioStats />

				{/* Apps Section */}
				<section id="apps">
					<div className="text-center mb-12">
						<h2 className="text-4xl font-bold text-gray-800 mb-4">Tools Collection</h2>
						<p className="text-lg text-gray-600 max-w-xl mx-auto">
							Kumpulan aplikasi mobile yang dirancang untuk meningkatkan produktivitas dan mempermudah aktivitas harian Anda.
						</p>
					</div>

					{mobileApps.length > 0 ? (
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
							{mobileApps.map((app) => (
								<MobileAppCard key={app.id} app={app} />
							))}
						</div>
					) : (
						<div className="text-center py-16">
							<div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
								<Zap className="w-8 h-8 text-gray-400" />
							</div>
							<p className="text-gray-500 text-xl">Sedang mengembangkan aplikasi amazing!</p>
						</div>
					)}
				</section>

				{/* CTA Section */}
				<section className="mt-20 text-center">
					<div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
						<h3 className="text-3xl font-bold mb-4">Ready to Boost Your Mobile Experience?</h3>
						<p className="text-xl mb-8 opacity-90">
							Download aplikasi kami dan rasakan perbedaannya dalam aktivitas sehari-hari.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-xl hover:bg-gray-100 transition-colors shadow-lg">
								Lihat di Play Store
							</button>
							<button className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-xl hover:bg-white hover:text-blue-600 transition-colors">
								Lihat di App Store
							</button>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
};

export default MobileAppStudioPage;
