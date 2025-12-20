'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LogoIcon } from '../icons';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  return (
    <div className="absolute top-0 left-0 right-0 z-20">
      <nav className="w-full max-w-[1448px] mx-auto px-4 md:px-8 lg:px-16 py-[26px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4">
          <LogoIcon />
          <span className="font-sans font-bold text-lg tracking-tight text-black">
            Chloe Hill
          </span>
        </Link>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-[45px] text-[17px] text-black">
          <Link
            href="/about"
            className={`hover:text-black transition-colors ${
              isActive('/about') ? 'font-semibold' : ''
            }`}
          >
            about
          </Link>
          <Link
            href="/services"
            className={`hover:text-black transition-colors ${
              isActive('/services') ? 'font-semibold' : ''
            }`}
          >
            services
          </Link>
          <Link
            href="/articles"
            className={`hover:text-black transition-colors ${
              isActive('/articles') ? 'font-semibold' : ''
            }`}
          >
            articles
          </Link>
          <Link href="#" className="hover:text-black transition-colors">
            get in touch
          </Link>
        </div>
        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 z-30"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </nav>
      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        style={{
          maxHeight: isMenuOpen ? '400px' : '0',
          overflow: 'hidden'
        }}
      >
        <div className="flex flex-col px-4 py-6 gap-4 text-[17px] text-black">
          <Link
            href="/about"
            className={`hover:text-black transition-colors py-2 ${
              isActive('/about') ? 'font-semibold' : ''
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            about
          </Link>
          <Link
            href="/services"
            className={`hover:text-black transition-colors py-2 ${
              isActive('/services') ? 'font-semibold' : ''
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            services
          </Link>
          <Link
            href="/articles"
            className={`hover:text-black transition-colors py-2 ${
              isActive('/articles') ? 'font-semibold' : ''
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            articles
          </Link>
          <Link
            href="/contact"
            className="hover:text-black transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            get in touch
          </Link>
        </div>
      </div>
    </div>
  );
}
