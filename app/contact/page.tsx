'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '../components/Footer';

const heroImage = '/images/contact/hero.png';

export default function Contact() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div style={{ backgroundColor: '#343433', minHeight: '100vh' }}>
      <section
        className="relative w-full min-h-screen"
        style={{ backgroundColor: 'transparent' }}
      >
        <div
          className="absolute inset-0 z-0 hidden lg:block"
          style={{ height: '100%' }}
        >
          <Image
            src={heroImage}
            alt="Contact Hero"
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>

        <div className="absolute top-0 left-0 right-0 z-20">
          <nav className="w-full max-w-[1448px] mx-auto px-4 md:px-8 lg:px-16 py-[26px] flex items-center justify-between">
            <Link href="/" className="flex items-center gap-4">
              <div>
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M29.5227 9.65376C32.1885 9.65376 34.3496 7.49269 34.3496 4.82688C34.3496 2.16107 32.1885 0 29.5227 0C26.8569 0 24.6958 2.16107 24.6958 4.82688C24.6958 7.49269 26.8569 9.65376 29.5227 9.65376Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M29.5227 21.7765C32.1885 21.7765 34.3496 19.6155 34.3496 16.9498C34.3496 14.284 32.1885 12.123 29.5227 12.123C26.8569 12.123 24.6958 14.284 24.6958 16.9498C24.6958 19.6155 26.8569 21.7765 29.5227 21.7765Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M29.5227 34.3496C32.1885 34.3496 34.3496 32.1885 34.3496 29.5227C34.3496 26.8569 32.1885 24.6958 29.5227 24.6958C26.8569 24.6958 24.6958 26.8569 24.6958 29.5227C24.6958 32.1885 26.8569 34.3496 29.5227 34.3496Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.9508 21.7765C19.6165 21.7765 21.7775 19.6155 21.7775 16.9498C21.7775 14.284 19.6165 12.123 16.9508 12.123C14.285 12.123 12.124 14.284 12.124 16.9498C12.124 19.6155 14.285 21.7765 16.9508 21.7765Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.9503 34.3496C19.616 34.3496 21.777 32.1885 21.777 29.5227C21.777 26.8569 19.616 24.6958 16.9503 24.6958C14.2845 24.6958 12.1235 26.8569 12.1235 29.5227C12.1235 32.1885 14.2845 34.3496 16.9503 34.3496Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.82688 34.3496C7.49269 34.3496 9.65376 32.1885 9.65376 29.5227C9.65376 26.8569 7.49269 24.6958 4.82688 24.6958C2.16107 24.6958 0 26.8569 0 29.5227C0 32.1885 2.16107 34.3496 4.82688 34.3496Z"
                    fill="white"
                  />
                </svg>
              </div>
              <span
                className="font-sans font-normal text-lg"
                style={{ color: 'white' }}
              >
                Chloe J. Hill
              </span>
            </Link>
            <div className="hidden lg:flex items-center gap-[45px] text-[17px] lowercase">
              <Link
                href="/about"
                className="transition-colors"
                style={{ color: 'white' }}
              >
                about
              </Link>
              <Link
                href="/services"
                className="transition-colors"
                style={{ color: 'white' }}
              >
                services
              </Link>
              <Link
                href="/articles"
                className="transition-colors"
                style={{ color: 'white' }}
              >
                articles
              </Link>
              <Link
                href="/contact"
                className="transition-colors"
                style={{ color: 'white' }}
              >
                get in touch
              </Link>
            </div>
            <button
              className="lg:hidden flex flex-col gap-1.5 z-30"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-0.5 transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
                style={{ backgroundColor: 'white' }}
              />
              <span
                className={`block w-6 h-0.5 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
                style={{ backgroundColor: 'white' }}
              />
              <span
                className={`block w-6 h-0.5 transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
                style={{ backgroundColor: 'white' }}
              />
            </button>
          </nav>

          <div
            className={`lg:hidden absolute top-full left-0 right-0 bg-[#343433] border-t border-gray-200 transition-all duration-300 ${
              isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
            style={{
              maxHeight: isMenuOpen ? '400px' : '0',
              overflow: 'hidden'
            }}
          >
            <div className="flex flex-col px-4 py-6 gap-4 text-[17px] lowercase">
              <Link
                href="/about"
                className="transition-colors py-2"
                style={{ color: 'white' }}
                onClick={() => setIsMenuOpen(false)}
              >
                about
              </Link>
              <Link
                href="/services"
                className="transition-colors py-2"
                style={{ color: 'white' }}
                onClick={() => setIsMenuOpen(false)}
              >
                services
              </Link>
              <Link
                href="/articles"
                className="transition-colors py-2"
                style={{ color: 'white' }}
                onClick={() => setIsMenuOpen(false)}
              >
                articles
              </Link>
              <Link
                href="/contact"
                className="transition-colors py-2"
                style={{ color: 'white' }}
                onClick={() => setIsMenuOpen(false)}
              >
                get in touch
              </Link>
            </div>
          </div>
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row min-h-screen pt-20 lg:pt-0 w-full max-w-[1448px] mx-auto items-start">
          {/* TEXT COLUMN CHANGES:
             1. Removed 'justify-center'.
             2. Added 'justify-start' (this prevents it from floating in the middle on zoom out).
             3. Added 'lg:mt-32' to the inner div to match the Form's top margin.
          */}
          <div className="w-full lg:w-1/2 flex flex-col justify-start px-4 md:px-8 lg:px-16 py-16 lg:py-0 lg:min-h-screen">
            <div className="w-full max-w-[500px] mx-auto lg:mx-0 lg:mt-62">
              <h1
                className="font-sans font-normal text-[40px] md:text-[50px] lg:text-[60px] leading-[1.2] mb-8 whitespace-pre-wrap text-center lg:text-left"
                style={{ color: 'white' }}
              >
                {"Let's\nConnect"}
              </h1>
              <div className="mt-8 text-center lg:text-left">
                <p
                  className="font-sans font-normal text-[16px] md:text-[18px] leading-[35px] mb-0"
                  style={{ color: 'white' }}
                >
                  chloehill@mail.com
                </p>
                <p
                  className="font-sans font-normal text-[16px] md:text-[18px] leading-[35px]"
                  style={{ color: 'white' }}
                >
                  010 010 0110
                </p>
              </div>
            </div>
          </div>

          {/* FORM COLUMN CHANGES:
             1. Standardized margin to 'lg:mt-32' to match the Text Column exactly.
          */}
          <div
            className="w-full lg:w-1/2 flex items-start justify-center lg:justify-start px-4 md:px-8 lg:pl-0 lg:pr-16 py-16 lg:py-0 lg:min-h-screen"
            style={{ backgroundColor: 'transparent' }}
          >
            <div
              className="w-full max-w-[627px] mx-auto lg:mx-0 lg:mt-32 lg:mb-15 lg:-ml-20"
              style={{
                backgroundColor: 'transparent'
              }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <label
                      htmlFor="firstName"
                      className="block font-sans font-normal text-[18px] leading-[35px] mb-2"
                      style={{ color: 'white' }}
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full h-[53px] px-4 border border-[#a8a8a8] bg-transparent text-white font-sans font-normal text-[18px] focus:outline-none focus:border-white"
                    />
                  </div>
                  <div className="flex-1">
                    <label
                      htmlFor="lastName"
                      className="block font-sans font-normal text-[18px] leading-[35px] mb-2"
                      style={{ color: 'white' }}
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full h-[53px] px-4 border border-[#a8a8a8] bg-transparent text-white font-sans font-normal text-[18px] focus:outline-none focus:border-white"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block font-sans font-normal text-[18px] leading-[35px] mb-2"
                    style={{ color: 'white' }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full h-[53px] px-4 border border-[#a8a8a8] bg-transparent text-white font-sans font-normal text-[18px] focus:outline-none focus:border-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-sans font-normal text-[18px] leading-[35px] mb-2"
                    style={{ color: 'white' }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full h-[147px] px-4 py-4 border border-[#a8a8a8] bg-transparent text-white font-sans font-normal text-[18px] resize-none focus:outline-none focus:border-white"
                  />
                </div>

                <div className="flex justify-start">
                  <button
                    type="submit"
                    className="bg-white border-[1.333px] border-white px-[36px] rounded-[40px] font-sans font-normal text-[15px] leading-[18px] text-[#343433] hover:bg-transparent hover:text-white transition-colors"
                    style={{ paddingTop: '7px', paddingBottom: '7px' }}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
