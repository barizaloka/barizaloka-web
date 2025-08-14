'use client';

import React from 'react';
import { Zap, Timer, Rocket, Globe } from 'lucide-react';

// --- Halaman Aplikasi Stopwatch Utama ---
const TimekeeperPage: React.FC = () => {
	return (
		<div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-pink-50 font-sans text-gray-800">
			

			<main className="container mx-auto px-4 py-16">
				{/* Hero Section */}
				<section className="text-center mb-20">
					<div className="inline-flex items-center justify-center w-28 h-28 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-3xl mb-6 shadow-xl">
						<Timer className="w-16 h-16 text-white" />
					</div>
					<h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 mb-4 leading-tight">
						Barizaloka Sprint
					</h1>
					<p className="text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
						Stopwatch canggih yang dirancang dengan presisi untuk setiap detik berhargamu.
						Ringan, cepat, dan akurat.
					</p>
					<div className="mt-8 flex justify-center space-x-4">
						<button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-4 px-10 rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-lg">
							Unduh di Play Store
						</button>
						<button className="bg-transparent border-2 border-purple-600 text-purple-600 font-bold py-4 px-10 rounded-xl hover:bg-purple-50 transition-colors shadow-lg text-lg">
							Unduh di App Store
						</button>
					</div>
				</section>

				{/* Features Section */}
				<section className="bg-white rounded-2xl shadow-xl p-12 mb-16">
					<div className="text-center mb-10">
						<h2 className="text-4xl font-bold text-gray-800 mb-4">Kenapa Memilih Sprint?</h2>
						<p className="text-lg text-gray-600 max-w-xl mx-auto">
							Stopwatch kami lebih dari sekadar pengukur waktu.
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
						<div className="flex flex-col items-center">
							<div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-4">
								<Zap className="w-8 h-8" />
							</div>
							<h3 className="text-xl font-bold mb-2">Performa Ultra Cepat</h3>
							<p className="text-gray-600">
								Didesain untuk memberikan respons instan, tanpa jeda.
							</p>
						</div>
						<div className="flex flex-col items-center">
							<div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-4">
								<Globe className="w-8 h-8" />
							</div>
							<h3 className="text-xl font-bold mb-2">Desain Universal</h3>
							<p className="text-gray-600">
								Antarmuka intuitif yang mudah digunakan oleh siapa saja, di mana saja.
							</p>
						</div>
						<div className="flex flex-col items-center">
							<div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-4">
								<Rocket className="w-8 h-8" />
							</div>
							<h3 className="text-xl font-bold mb-2">Fungsional & Ringan</h3>
							<p className="text-gray-600">
								Berjalan di latar belakang, menghemat baterai, dan tidak membebani ponselmu.
							</p>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
};

export default TimekeeperPage;
