'use client';

import React, { useState, ReactNode } from 'react';
import Link from 'next/link';
import {
	FaUser,
	FaTachometerAlt,
	FaCubes,
	FaPalette,
	FaChartLine,
	FaShoppingCart,
	FaEnvelope,
	FaCreditCard,
	FaFile,
	FaWrench,
	FaFacebookF,
	FaTwitter,
	FaLinkedinIn,
	FaGooglePlusG
} from 'react-icons/fa';
import { MdSettings } from 'react-icons/md';

// --- Interfaces untuk komponen props ---

interface MetricCardProps {
	icon: ReactNode;
	value: string;
	label: string;
	subLabel?: string; // subLabel bersifat opsional
}

interface SocialCardProps {
	icon: ReactNode;
	followers: string;
	likes: string;
	color: string;
}

// --- Komponen Card Metrik ---
const MetricCard: React.FC<MetricCardProps> = ({ icon, value, label, subLabel }) => {
	return (
		<div className="bg-white p-6 rounded-xl shadow-lg flex items-center space-x-4">
			<div className={`p-4 rounded-full ${subLabel ? 'bg-orange-100 text-orange-500' : 'bg-green-100 text-green-500'}`}>
				{icon}
			</div>
			<div>
				<p className="text-3xl font-bold text-gray-800">{value}</p>
				<p className="text-sm text-gray-500">{label}</p>
				{subLabel && <p className="text-xs text-gray-400 mt-1">{subLabel}</p>}
			</div>
		</div>
	);
};

// --- Komponen Card Sosial Media ---
const SocialCard: React.FC<SocialCardProps> = ({ icon, followers, likes, color }) => {
	return (
		<div className={`bg-${color}-600 text-white p-6 rounded-xl shadow-lg`}>
			<div className="flex items-center space-x-3 mb-4">
				<div className="text-2xl">{icon}</div>
			</div>
			<div className="flex justify-between">
				<div>
					<p className="text-3xl font-bold">{followers}</p>
					<p className="text-sm">Followers</p>
				</div>
				<div>
					<p className="text-3xl font-bold">{likes}</p>
					<p className="text-sm">Likes</p>
				</div>
			</div>
		</div>
	);
};

// --- Komponen Utama Dashboard ---
const PlutoDashboard: React.FC = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

	const toggleSidebar = (): void => {
		setIsSidebarOpen(!isSidebarOpen);
	};

	return (
		<div className="flex min-h-screen bg-gray-100 font-sans text-gray-800">
			{/* Sidebar */}
			<aside className={`bg-gray-800 text-white w-64 space-y-6 py-7 px-2 fixed inset-y-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition duration-200 ease-in-out z-50`}>
				{/* Header Sidebar */}
				<div className="flex items-center space-x-2 px-4">
					<FaUser className="text-2xl" />
					<span className="text-xl font-bold">John David</span>
				</div>

				{/* Menu Navigasi */}
				<nav>
					<Link href="#" className="flex items-center space-x-2 py-2 px-4 rounded-lg bg-orange-600 text-white">
						<FaTachometerAlt />
						<span>Dashboard</span>
					</Link>
					<Link href="#" className="flex items-center space-x-2 py-2 px-4 text-gray-300 hover:bg-gray-700 rounded-lg mt-2">
						<FaCubes />
						<span>Widgets</span>
					</Link>
					<Link href="#" className="flex items-center space-x-2 py-2 px-4 text-gray-300 hover:bg-gray-700 rounded-lg mt-2">
						<FaPalette />
						<span>UI Elements</span>
					</Link>
					<Link href="#" className="flex items-center space-x-2 py-2 px-4 text-gray-300 hover:bg-gray-700 rounded-lg mt-2">
						<FaChartLine />
						<span>Charts</span>
					</Link>
					<Link href="#" className="flex items-center space-x-2 py-2 px-4 text-gray-300 hover:bg-gray-700 rounded-lg mt-2">
						<FaShoppingCart />
						<span>Sales</span>
					</Link>
					<Link href="#" className="flex items-center space-x-2 py-2 px-4 text-gray-300 hover:bg-gray-700 rounded-lg mt-2">
						<FaEnvelope />
						<span>Apps</span>
					</Link>
					<Link href="#" className="flex items-center space-x-2 py-2 px-4 text-gray-300 hover:bg-gray-700 rounded-lg mt-2">
						<FaCreditCard />
						<span>Pricing Tables</span>
					</Link>
					<Link href="#" className="flex items-center space-x-2 py-2 px-4 text-gray-300 hover:bg-gray-700 rounded-lg mt-2">
						<FaFile />
						<span>Forms</span>
					</Link>
					<Link href="#" className="flex items-center space-x-2 py-2 px-4 text-gray-300 hover:bg-gray-700 rounded-lg mt-2">
						<FaWrench />
						<span>Additional Pages</span>
					</Link>
					<Link href="#" className="flex items-center space-x-2 py-2 px-4 text-gray-300 hover:bg-gray-700 rounded-lg mt-2">
						<MdSettings />
						<span>Settings</span>
					</Link>
				</nav>
			</aside>

			{/* Konten Utama */}
			<div className="flex-1 flex flex-col">
				{/* Header Top Bar */}
				<header className="flex justify-between items-center bg-white shadow-md p-4">
					<div className="flex items-center space-x-4">
						{/* Tombol untuk membuka/menutup sidebar di layar kecil */}
						<button onClick={toggleSidebar} className="md:hidden text-gray-600 focus:outline-none">
							<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
							</svg>
						</button>
						<h1 className="text-2xl font-semibold">Dashboard</h1>
					</div>
					<div className="flex items-center space-x-4">
						<FaEnvelope className="text-gray-600" />
						<FaUser className="text-gray-600" />
						<div className="flex items-center space-x-2">
							{/* <img src="https://via.placeholder.com/40" alt="User" className="w-10 h-10 rounded-full" /> */}
							<span className="font-semibold text-gray-800 hidden md:inline">John David</span>
						</div>
					</div>
				</header>

				{/* Konten Dashboard */}
				<main className="p-8 flex-1">
					{/* Baris Metrik Atas */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
						<MetricCard
							icon={<FaUser className="text-2xl" />}
							value="2500"
							label="New Users"
							subLabel="Updated now"
						/>
						<MetricCard
							icon={<FaChartLine className="text-2xl" />}
							value="123.50"
							label="Views"
							subLabel="Updated now"
						/>
						<MetricCard
							icon={<FaCubes className="text-2xl" />}
							value="1,815"
							label="Item Sold"
							subLabel="Updated now"
						/>
						<MetricCard
							icon={<FaEnvelope className="text-2xl" />}
							value="54"
							label="Comments"
							subLabel="Updated now"
						/>
					</div>

					{/* Baris Sosial Media */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
						<SocialCard
							icon={<FaFacebookF />}
							followers="35k"
							likes="106"
							color="blue"
						/>
						<SocialCard
							icon={<FaTwitter />}
							followers="56k"
							likes="476"
							color="sky"
						/>
						<SocialCard
							icon={<FaLinkedinIn />}
							followers="75M"
							likes="289"
							color="indigo"
						/>
						<SocialCard
							icon={<FaGooglePlusG />}
							followers="489"
							likes="87"
							color="red"
						/>
					</div>

					{/* Bagian Grafik Area Bawah */}
					<div className="bg-white p-6 rounded-xl shadow-lg">
						<h3 className="text-xl font-semibold mb-4">Extra Area Chart</h3>
						{/* Placeholder untuk grafik */}
						<div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
							Placeholder untuk grafik (misalnya Chart.js atau Recharts)
						</div>
					</div>
				</main>
			</div>
		</div>
	);
};

export default PlutoDashboard;
