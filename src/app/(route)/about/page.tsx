import React from 'react';
import Image from 'next/image';
import Navbar from '@/barizaloka-web/components/Navbar';

const AboutPage: React.FC = () => {
	return (
		<div className="min-h-screen bg-gradient-to-br from-purple-200 to-pink-200 font-sans text-gray-800 flex flex-col justify-between">
			<Navbar title='Tentang Barizaloka' />

			<main className="flex-grow container mx-auto px-4 py-28">
				<h1 className="text-5xl font-extrabold text-center text-purple-800 mb-16">
					Tentang Kami
				</h1>

				<div className="bg-white rounded-3xl shadow-xl p-10 max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed">
					<div className="flex flex-col lg:flex-row items-center gap-10 mb-12">
						<div className="lg:w-1/2">
							<h2 className="text-3xl font-bold text-purple-700 mb-4">
								Sebuah Ide dari Hati, untuk Negeri
							</h2>
							<p className="mb-4">
								Barizaloka Group berawal dari visi seorang pemuda di sebuah desa kecil di Rembang. Melihat begitu banyak potensi lokal, terutama UMKM, yang belum tergarap di dunia digital, ia merasakan adanya peluang besar untuk membuat perubahan.
							</p>
							<p>
								Dengan keyakinan bahwa teknologi dapat menjadi jembatan menuju kemajuan, ia berkomitmen untuk membangun sebuah layanan yang tidak hanya menyediakan website, tetapi juga memberdayakan bisnis-bisnis kecil untuk berkembang dan menjangkau pasar yang lebih luas.
							</p>
						</div>
						<div className="lg:w-1/2 flex justify-center">
							<Image
								width={400}
								height={300}
								src="https://placehold.co/400x300/8B5CF6/FFFFFF?text=Founders+Story"
								alt="Founder of Barizaloka"
								className="rounded-2xl shadow-lg w-full max-w-sm"
							/>
						</div>
					</div>

					<div className="border-t border-gray-200 pt-8 mt-8">
						<h2 className="text-3xl font-bold text-purple-700 mb-4 text-center">
							Visi dan Misi Kami
						</h2>
						<div className="space-y-6">
							<div>
								<h3 className="text-2xl font-semibold text-purple-600 mb-2">
									Visi
								</h3>
								<p>
									Menjadi mitra terpercaya bagi UMKM di Indonesia dalam mewujudkan transformasi digital yang berkelanjutan dan berdaya saing global.
								</p>
							</div>
							<div>
								<h3 className="text-2xl font-semibold text-purple-600 mb-2">
									Misi
								</h3>
								<ul className="list-disc list-inside space-y-2 text-gray-600">
									<li>Menyediakan layanan pengembangan website dan aplikasi yang terjangkau dan berkualitas tinggi.</li>
									<li>Memberikan edukasi dan bimbingan teknologi kepada pelaku UMKM.</li>
									<li>Membangun komunitas digital yang saling mendukung dan berinovasi.</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};

export default AboutPage;
