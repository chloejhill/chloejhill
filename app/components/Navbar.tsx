'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LogoIcon } from '../icons';

type NavbarVariant = 'dark' | 'light';

export default function Navbar({
  variant = 'dark'
}: {
  variant?: NavbarVariant;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isLight = variant === 'light';
  const desktopLinkClassName = isLight
    ? 'transition-colors text-white! hover:opacity-80'
    : 'transition-colors text-black hover:opacity-80';

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  return (
    <div className="absolute top-0 left-0 right-0 z-50">
      <nav className="relative z-[70] w-full max-w-[1448px] mx-auto px-3 md:px-6 lg:px-12 py-[26px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4">
          <span className={isLight ? 'invert' : undefined}>
            <LogoIcon />
          </span>
          <span
            className={`font-sans font-normal text-lg tracking-tight ${
              isLight ? 'text-white!' : 'text-black'
            }`}
          >
            Chloe J. Hill
          </span>
        </Link>
        {/* Desktop Navigation */}
        <div
          className={`hidden md:flex items-center gap-[45px] text-[17px] ${
            isLight ? 'text-white!' : 'text-black'
          }`}
        >
          <Link
            href="/about"
            className={`${desktopLinkClassName} ${
              isActive('/about') ? 'font-semibold' : ''
            }`}
          >
            About
          </Link>
          <Link
            href="/thinking"
            className={`${desktopLinkClassName} ${
              isActive('/thinking') ? 'font-semibold' : ''
            }`}
          >
            Thinking
          </Link>
          <Link
            href="/practice"
            className={`${desktopLinkClassName} ${
              isActive('/practice') ? 'font-semibold' : ''
            }`}
          >
            Practice
          </Link>
          <Link
            href="/articles"
            className={`${desktopLinkClassName} ${
              isActive('/articles') ? 'font-semibold' : ''
            }`}
          >
            Insights
          </Link>
          <Link
            href="/contact"
            className={`${desktopLinkClassName} ${
              isActive('/contact') ? 'font-semibold' : ''
            }`}
          >
            Get in touch
          </Link>
        </div>
        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 z-[80]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 ${
              isLight || isMenuOpen ? 'bg-white' : 'bg-black'
            } transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 ${
              isLight || isMenuOpen ? 'bg-white' : 'bg-black'
            } transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-6 h-0.5 ${
              isLight || isMenuOpen ? 'bg-white' : 'bg-black'
            } transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </nav>
      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 top-0 z-[60] transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        style={{
          backgroundColor: '#343433'
        }}
      >
        <div
          className="flex flex-col px-4 pt-[96px] pb-6 gap-4 text-[17px] text-white! min-h-screen overflow-y-auto"
          style={{ color: '#FFFFFF' }}
        >
          <Link
            href="/about"
            className={`text-white! hover:opacity-80 transition-colors py-2 ${
              isActive('/about') ? 'font-semibold' : ''
            }`}
            style={{ color: '#FFFFFF' }}
            onClick={() => setIsMenuOpen(false)}
          >
            about
          </Link>
          <Link
            href="/thinking"
            className={`text-white! hover:opacity-80 transition-colors py-2 ${
              isActive('/thinking') ? 'font-semibold' : ''
            }`}
            style={{ color: '#FFFFFF' }}
            onClick={() => setIsMenuOpen(false)}
          >
            thinking
          </Link>
          <Link
            href="/practice"
            className={`text-white! hover:opacity-80 transition-colors py-2 ${
              isActive('/practice') ? 'font-semibold' : ''
            }`}
            style={{ color: '#FFFFFF' }}
            onClick={() => setIsMenuOpen(false)}
          >
            practice
          </Link>
          <Link
            href="/articles"
            className={`text-white! hover:opacity-80 transition-colors py-2 ${
              isActive('/articles') ? 'font-semibold' : ''
            }`}
            style={{ color: '#FFFFFF' }}
            onClick={() => setIsMenuOpen(false)}
          >
            insights
          </Link>
          <Link
            href="/contact"
            className="text-white! hover:opacity-80 transition-colors py-2"
            style={{ color: '#FFFFFF' }}
            onClick={() => setIsMenuOpen(false)}
          >
            get in touch
          </Link>
        </div>
      </div>
    </div>
  );
}
