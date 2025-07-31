interface ServiceFeatureProps {
	icon: string; // Bisa berupa SVG path atau nama icon (misal: "🚀")
	title: string;
	description: string;
}


const ServiceFeature: React.FC<ServiceFeatureProps> = ({ icon, title, description }) => (
	<div className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300 ease-in-out">
		<div className="text-5xl mb-4 text-purple-600">{icon}</div> {/* Menggunakan icon sebagai teks/emoji */}
		<h3 className="text-xl font-bold text-purple-700 mb-2">{title}</h3>
		<p className="text-gray-600">{description}</p>
	</div>
);

export default ServiceFeature;