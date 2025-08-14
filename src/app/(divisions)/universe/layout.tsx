import Link from "next/link";
import Footer from "./components/Footer";
import { Smartphone } from "lucide-react";

export default function HomeLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			{/* Navigation */}
			<nav className="bg-white bg-opacity-90 backdrop-blur-md shadow-lg sticky top-0 z-50">
				<div className="container mx-auto px-4 py-4">
					<div className="flex items-center justify-between">
						<div className="flex items-center space-x-3">
							<div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
								<Smartphone className="w-6 h-6 text-white" />
							</div>
							<span className="text-xl font-bold text-gray-800">Barizaloka Universe</span>
						</div>
						<div className="hidden md:flex space-x-6">
							<Link href="/universe" className="text-gray-600 hover:text-purple-600 font-medium transition-colors">Aplikasi</Link>
						</div>
					</div>
				</div>
			</nav>
			{children}
			<Footer />
		</>
	);
}
