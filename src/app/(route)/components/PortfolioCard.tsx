import Image from "next/image";


interface PortfolioCardProps {
	title: string;
	description: string;
	imageUrl?: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ title, description, imageUrl }) => (
	<div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
		{imageUrl ? (
			<Image src={imageUrl} alt={title} className="w-full h-48 object-cover" width={400} height={300} />  // Menambahkan width dan height untuk optimasi  
		) : (
			<div className="w-full h-48 bg-gray-200 flex items-center justify-center">
				<span className="text-gray-500">No Image Available</span>
			</div>
		)}
		<div className="p-6">
			<h3 className="text-2xl font-bold text-purple-700 mb-3">{title}</h3>
			<p className="text-gray-600">{description}</p>
		</div>
	</div>
);

export default PortfolioCard;