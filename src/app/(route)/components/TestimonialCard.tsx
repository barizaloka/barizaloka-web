import Image from "next/image";

interface TestimonialCardProps {
	quote: string;
	author: string;
	role: string;
	avatarUrl?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, role, avatarUrl }) => (
	<div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300 ease-in-out">
		{avatarUrl ? (
			<Image src={avatarUrl} alt={author} className="w-24 h-24 rounded-full mb-4" width={96} height={96} />
		) : (
			<div className="w-24 h-24 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
				<span className="text-gray-500">No Image</span>
			</div>
		)}
		<p className="text-lg italic text-gray-700 mb-6">{quote}</p>
		<p className="font-semibold text-purple-700">{author}</p>
		<p className="text-sm text-gray-500">{role}</p>
	</div>
);

export default TestimonialCard;