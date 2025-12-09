import Link from 'next/link';

const Navbar = () => {
  return (
    // Add 'border-b' and 'border-gray-200'
<nav className="flex justify-between items-center px-8 py-4 bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="text-xl font-bold text-black">
        Portfolio.
      </div>
      
      <div className="flex gap-6">
        <Link href="/" className="text-gray-600 hover:text-black transition">
          Home
        </Link>
        <Link href="#about" className="text-gray-600 hover:text-black transition">
          About
        </Link>
        <Link href="#projects" className="text-gray-600 hover:text-black transition">
          Projects
        </Link>
        <Link href="#contact" className="text-gray-600 hover:text-black transition">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;