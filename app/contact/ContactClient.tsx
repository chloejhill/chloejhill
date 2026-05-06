'use client';

import { useState } from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import type { PageOverrides } from '@/lib/payloadContent';

const heroImage = '/images/contact/hero.png';
const heroMobileImage = '/images/contact/heromobile.png';

export default function ContactClient({
  overrides
}: {
  overrides: PageOverrides | null;
}) {
  const t = (key: string, fallback: string) =>
    overrides?.strings?.[key] || fallback;
  const img = (key: string, fallbackSrc: string) =>
    overrides?.images?.[key]?.src || fallbackSrc;
  const alt = (key: string, fallbackAlt: string) =>
    overrides?.images?.[key]?.alt || fallbackAlt;
  const heroSrc = img('contact.hero.image', heroImage);
  const heroMobileSrc = img('contact.hero.mobileImage', heroMobileImage);

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
            src={heroSrc}
            alt={alt('contact.hero.image', 'Contact Hero')}
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>

        <div className="relative z-20 lg:absolute lg:top-0 lg:left-0 lg:right-0">
          <Navbar variant="light" />
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row min-h-screen pt-0 lg:pt-0 w-full max-w-[1448px] mx-auto items-start">
          <div className="relative w-full lg:w-1/2 flex flex-col justify-end lg:justify-start px-4 md:px-8 lg:px-16 pt-16 pb-32 lg:py-0 min-h-[60vh] lg:min-h-screen">
            <div
              className="absolute inset-0 z-0 lg:hidden"
              style={{
                backgroundImage: `url(${heroMobileSrc})`,
                backgroundSize: 'cover',
                backgroundPosition: 'top center',
                backgroundRepeat: 'no-repeat'
              }}
            />
            <div className="relative z-10 w-full max-w-[500px] mx-auto lg:mx-0 lg:ml-16 lg:mt-62">
              <h1
                className="font-normal text-[40px] md:text-[50px] lg:text-[60px] leading-[1.2] mb-8 whitespace-pre-wrap text-center lg:text-left"
                style={{
                  color: 'white',
                  fontFamily: 'var(--font-serif), serif',
                  fontFeatureSettings: "'liga' off, 'clig' off"
                }}
              >
                {t('contact.hero.title', "Let's\nConnect")}
              </h1>
              {/* <div className="mt-8 text-center lg:text-left">
                <p
                  className="font-sans font-normal text-[16px] md:text-[18px] leading-[35px] mb-0"
                  style={{ color: 'white' }}
                >
                  {t('contact.details.email', 'chloehill@mail.com')}
                </p>
                <p className="font-sans font-normal text-[16px] md:text-[18px] leading-[35px]" style={{ color: 'white' }}>
                  {t('contact.details.phone', '010 010 0110')}
                </p>
              </div> */}
            </div>
          </div>

          <div
            className="relative w-full lg:w-1/2 flex items-start justify-center lg:justify-start px-4 md:px-8 lg:pl-0 lg:pr-16 py-16 lg:py-0 lg:min-h-screen"
            style={{ backgroundColor: 'transparent' }}
          >
            <div
              className="relative z-10 w-full max-w-[627px] mx-auto lg:mx-0 lg:mt-32 lg:mb-15 lg:-ml-20"
              style={{ backgroundColor: 'transparent' }}
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
