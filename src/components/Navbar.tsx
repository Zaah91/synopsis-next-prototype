'use client';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex items-center px-10 py-4 bg-[#FAF0E6] text-[18px]">
      <Link href="/" className="mr-4 text-black">Home</Link>
      <Link href="/subpage1" className="mr-4 text-black">robots.ts</Link>
      <Link href="/subpage2" className="mr-4 text-black">sitemap.ts</Link>
      <Link href="/metadataPage" className="mr-4 text-black">metadata</Link>
      <Link href="/honorary" className="text-black">Honorary mentions</Link>
    </nav>
  );
};

export default Navbar;