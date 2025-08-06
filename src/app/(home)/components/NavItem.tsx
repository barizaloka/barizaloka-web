import Link from 'next/link';

interface NavItemProps {
  title: string;
  onClick?: () => void; // onClick menjadi opsional karena beberapa NavItem akan menggunakan Link
  href?: string; // Menambahkan prop href untuk navigasi Link
}

// Navigation Item Component
const NavItem: React.FC<NavItemProps> = ({ title, onClick, href }) => {
  // Menggunakan Link dari Next.js jika ada href, jika tidak menggunakan button
  if (href) {
    return (
      <Link
        href={href}
        className="block text-gray-700 hover:text-purple-700 font-medium transition duration-300 ease-in-out px-3 py-2 rounded-md hover:bg-purple-100"
      >
        {title}
      </Link>
    );
  }
  return (
    <button
      onClick={onClick}
      className="block text-gray-700 hover:text-purple-700 font-medium transition duration-300 ease-in-out px-3 py-2 rounded-md hover:bg-purple-100 w-full text-left"
    >
      {title}
    </button>
  );
};

export default NavItem;
