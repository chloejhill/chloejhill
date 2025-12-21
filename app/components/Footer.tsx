'use client';

import Link from 'next/link';
import { LinkedInIcon, FacebookIcon, InstagramIcon } from '../icons';

export default function Footer() {
  return (
    // Replaced styles.footer with Tailwind classes
    <footer className="w-full bg-[#EFEBE7] py-12 px-4 md:px-8 lg:px-16 text-[#343433]">
      <div className="max-w-[1448px] mx-auto flex flex-col items-center">
        {/* Title */}
        <h3
          className="mb-8"
          style={{
            color: '#000',
            fontFeatureSettings: "'liga' off, 'clig' off",
            fontFamily: 'Lora',
            fontSize: '68.956px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '68.956px'
          }}
        >
          Chloe J. Hill
        </h3>

        {/* Navigation Links 
            Mobile: Stack vertically (flex-col)
            Desktop: Row (md:flex-row) 
        */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 mb-10 font-sans text-[16px]">
          <Link href="/about" className="hover:opacity-60 transition-opacity">
            About
          </Link>
          <Link
            href="/projects"
            className="hover:opacity-60 transition-opacity"
          >
            Projects
          </Link>
          <Link
            href="/articles"
            className="hover:opacity-60 transition-opacity"
          >
            Latest Insights
          </Link>
          <Link href="/contact" className="hover:opacity-60 transition-opacity">
            Get in Touch
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center items-center gap-6 mb-12">
          {/* Added hover effects for better UX */}
          <a href="#" className="hover:scale-110 transition-transform">
            <LinkedInIcon />
          </a>
          <a href="#" className="hover:scale-110 transition-transform">
            <FacebookIcon />
          </a>
          <a href="#" className="hover:scale-110 transition-transform">
            <InstagramIcon />
          </a>
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-[#343433]/20 mb-8" />

        {/* Bottom Section: Copyright & Legal
            Mobile: Stacked (flex-col-reverse)
            Desktop: Spread apart (md:flex-row)
        */}
        <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between gap-4 text-sm opacity-70 font-sans">
          <p className="mt-4 md:mt-0">© Chloe Hill 2025</p>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a
              href="https://www.moderndaystrategy.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black border-b border-transparent hover:border-[#343433] transition-colors"
            >
              Website by Modern Day Strategy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
