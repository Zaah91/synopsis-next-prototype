'use client';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex items-center px-10 py-4 bg-[#FAF0E6] text-[18px]">
      <Link href="/" className="mr-4 text-black">Home</Link>
      <Link href="/subpage1" className="mr-4 text-black">Subpage 1</Link>
      <Link href="/subpage2" className="text-black ml-auto">Subpage 2</Link>
    </nav>
  );
};

export default Navbar;