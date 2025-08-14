import Image from 'next/image';
import Link from 'next/link';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  avatarUrl?: string;
  portfolioUrl?: string; // Menambahkan properti opsional untuk URL portofolio
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  role,
  avatarUrl,
  portfolioUrl,
}) => (
  <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300 ease-in-out">
    {avatarUrl ? (
      <Image
        src={avatarUrl}
        alt={author}
        className="w-24 h-24 rounded-full mb-4 object-cover"
        width={96}
        height={96}
      />
    ) : (
      <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
        <span className="text-gray-500">No Image</span>
      </div>
    )}
    <p className="text-lg italic text-gray-700 mb-6 flex-grow">{`"${quote}"`}</p>
    <p className="font-semibold text-purple-700">{author}</p>
    <p className="text-sm text-gray-500 mb-4">{role}</p>

    {/* Tombol link menuju portofolio hanya akan ditampilkan jika portfolioUrl ada */}
    {portfolioUrl && (
      <Link href={portfolioUrl} passHref target='_blank'>
        <button
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-300"
          aria-label={`Kunjungi portofolio ${author}`}
        >
          Lihat Portofolio
          <svg
            className="ml-2 -mr-1 h-4 w-4"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M11 3a1 1 0 100 2h3.586L10.293 10.293a1 1 0 101.414 1.414l4.293-4.293V11a1 1 0 102 0V4a1 1 0 00-1-1h-7z" />
            <path d="M10 14a1 1 0 01-1 1H6a1 1 0 01-1-1v-4a1 1 0 012 0v2.586l4.293-4.293a1 1 0 111.414 1.414L9.414 13H12a1 1 0 010 2H8a3 3 0 01-3-3v-4a3 3 0 013-3h1a1 1 0 110 2H8a1 1 0 00-1 1v4a1 1 0 001 1h2z" />
          </svg>
        </button>
      </Link>
    )}
  </div>
);

export default TestimonialCard;