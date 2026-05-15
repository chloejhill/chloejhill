'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { NavLinkItem } from '@/lib/navLink';
import { useSiteSettings } from '@/lib/SiteSettingsProvider';
import { LinkedInPlainIcon, LogoIcon } from '../icons';

type NavbarVariant = 'dark' | 'light';

export default function Navbar({
  variant = 'dark'
}: {
  variant?: NavbarVariant;
}) {
  const { navLinks, linkedInUrl } = useSiteSettings();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isLight = variant === 'light';
  const desktopLinkClassName = isLight
    ? 'transition-colors text-white! hover:opacity-80'
    : 'transition-colors text-black hover:opacity-80';

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
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
        <div
          className={`hidden md:flex items-center gap-[36px] text-[17px] ${
            isLight ? 'text-white!' : 'text-black'
          }`}
        >
          {navLinks.map((link) => (
            <NavLinkItem
              key={link.id}
              link={link}
              className={`${desktopLinkClassName} ${
                isActive(link.href) ? 'underline underline-offset-4' : ''
              }`}
            />
          ))}
          <a
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={`inline-flex items-center justify-center m-0 p-0 text-[24px] leading-none hover:opacity-80 transition-opacity ${
              isLight ? 'text-white!' : 'text-black'
            }`}
          >
            <LinkedInPlainIcon />
          </a>
        </div>
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
          {navLinks.map((link) => (
            <NavLinkItem
              key={link.id}
              link={{ ...link, label: link.label.toLowerCase() }}
              className={`text-white! hover:opacity-80 transition-colors py-2 ${
                isActive(link.href) ? 'underline underline-offset-4' : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            />
          ))}
          <a
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex items-center justify-start text-[24px] leading-none text-white! hover:opacity-80 transition-opacity py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            <LinkedInPlainIcon />
          </a>
        </div>
      </div>
    </div>
  );
}
