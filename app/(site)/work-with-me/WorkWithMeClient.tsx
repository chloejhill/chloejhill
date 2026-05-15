'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowLeftIcon, ArrowRightIcon, TestimonialIcon } from '../icons';
import { defaultTestimonials } from '@/lib/defaultContent';
import type { CmsTestimonial, PageOverrides } from '@/lib/payloadContent';
import practiceStyles from '../practice/page.module.css';

/** Same as testimonial quote body in "Nice things people say". */
const testimonialQuoteTextClassName =
  'font-normal text-[16px] leading-[110%] text-black';
const testimonialQuoteTextStyle = {
  color: '#000',
  fontFamily: 'var(--font-lora), serif',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '35px'
} as const;

const heroImage = '/images/workWithMe/hero.png';
const heroOverlayImage = '/images/workWithMe/overlay.png';
const ctaProfileImage = '/images/services/starttrans.png';

function TestimonialPhoto({ testimonial }: { testimonial: CmsTestimonial }) {
  if (!testimonial.photoSrc) {
    return (
      <div className="absolute inset-0">
        <TestimonialIcon />
      </div>
    );
  }

  return (
    <Image
      src={testimonial.photoSrc}
      alt={testimonial.photoAlt || testimonial.name}
      fill
      className="object-cover rounded-[18px] grayscale contrast-125 opacity-90 mix-blend-multiply"
      unoptimized
    />
  );
}

const engagementCards = [
  {
    title: '1. Systems Insight & Landscape Synthesis',
    variant: 'cool' as const,
    body: (
      <>
        <p>
          For those seeking a clearer understanding of a complex issue area,
          emerging field, or systemic challenge. I synthesize fragmented
          landscapes into a clearer view of key actors, dynamics, patterns, and
          leverage points.
        </p>
        <p className="mt-4">
          <strong>Outcome:</strong> A clearer understanding of how a field
          works, where meaningful change may be possible, and where capital or
          influence could be most effectively directed.
        </p>
      </>
    )
  },
  {
    title: '2. Strategic Sensemaking',
    variant: 'warm' as const,
    body: (
      <>
        <p>
          For philanthropists, foundations, or leaders deciding where to focus,
          how to act, or how to navigate competing priorities. Through focused
          strategic reflection, systems insight, and clear synthesis, I help
          turn complexity into more coherent direction.
        </p>
        <p className="mt-4">
          <strong>Outcome:</strong> Greater clarity on priorities, stronger
          confidence in decision-making, and a more grounded approach to where
          and how to act.
        </p>
      </>
    )
  },
  {
    title: '3. Research Advisory & Collaboration',
    variant: 'warm' as const,
    body: (
      <>
        <p>
          For foundations, advisors, or research partners working in complex
          thematic areas who need deeper synthesis and strategic clarity. I
          connect science, policy, and practice into clearer strategic insight,
          stronger framing, and more usable understanding.
        </p>
        <p className="mt-4">
          <strong>Outcome:</strong> Decision-relevant insight, clearer strategic
          framing, and work that connects detailed analysis to broader
          system-level understanding.
        </p>
      </>
    )
  },
  {
    title: '4. Futures & Strategic Foresight',
    variant: 'cool' as const,
    body: (
      <>
        <p>
          For those seeking to anticipate long-term shifts, emerging risks, and
          future strategic possibilities. Through futures inquiry, horizon
          scanning, and reflection, I help leaders think beyond immediate
          pressures toward longer-term stewardship.
        </p>
        <p className="mt-4">
          <strong>Outcome:</strong> Stronger future orientation, greater
          preparedness, and clearer long-term thinking in uncertain conditions.
        </p>
      </>
    )
  }
];

export default function WorkWithMeClient({
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

  const testimonials: CmsTestimonial[] =
    overrides?.blocks?.testimonials?.length
      ? overrides.blocks.testimonials
      : defaultTestimonials;

  const [testimonialStartIndex, setTestimonialStartIndex] = useState(0);
  const totalTestimonials = testimonials.length;
  const normalizedTestimonialIndex =
    totalTestimonials > 0
      ? ((testimonialStartIndex % totalTestimonials) + totalTestimonials) %
        totalTestimonials
      : 0;

  const visibleTestimonials = useMemo(() => {
    const perView = 3;
    const total = totalTestimonials;
    if (total === 0) return [];
    const safeStart = normalizedTestimonialIndex;
    return Array.from({ length: Math.min(perView, total) }).map((_, i) => {
      const idx = (safeStart + i) % total;
      return testimonials[idx];
    });
  }, [normalizedTestimonialIndex, totalTestimonials]);

  return (
    <div className="min-h-screen bg-white">
      <section className="relative w-full min-h-[420px] md:min-h-[500px] lg:min-h-[560px] overflow-hidden">
        <Image
          src={img('workWithMe.hero.overlay', heroOverlayImage)}
          alt=""
          fill
          className="object-cover pointer-events-none"
          aria-hidden
          unoptimized
        />
        <Image
          src={img('workWithMe.hero.image', heroImage)}
          alt={alt('workWithMe.hero.image', 'Mountains')}
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="relative z-20">
          <Navbar variant="light" />
        </div>
        <div className="relative z-10 w-full max-w-[1448px] mx-auto pl-3 pr-4 pt-36 pb-16 md:pl-5 md:pr-8 md:pt-44 md:pb-20 lg:pl-[72px] lg:pr-[106px] lg:pt-52">
          <h1
            className="font-normal text-[40px] md:text-[46px] lg:text-[50px] leading-[1.1] text-white max-w-[640px] mb-6"
            style={{ fontFamily: 'var(--font-lora), serif' }}
          >
            {t('workWithMe.hero.title', 'Work with me')}
          </h1>
          <p
            className="font-normal text-[18px] md:text-[22px] lg:text-[25px] leading-normal text-white max-w-[800px]"
            style={{ fontFamily: 'var(--font-lora), serif' }}
          >
            {t(
              'workWithMe.hero.subtitle',
              'Helping philanthropists, foundations, advisors, and mission-driven leaders navigate complexity, long-term transitions, and strategic uncertainty with greater clarity.'
            )}
          </p>
        </div>
      </section>

      <section className="w-full bg-white py-12 md:py-16 lg:py-20">
        <div className="w-full max-w-[1448px] mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex justify-center mb-8 md:mb-10">
            <div className="relative inline-block">
              <div
                className="absolute left-0 right-0 h-[19px] bottom-[6px] bg-[#EFEBE7] hidden md:block"
                aria-hidden="true"
              />
              <h2
                className="relative font-normal text-[30px] md:text-[36px] lg:text-[40px] leading-none text-black text-center px-2"
                style={{ fontFamily: 'var(--font-lora), serif' }}
              >
                <span className="px-1 -mx-1 bg-[linear-gradient(180deg,transparent_54%,#EFEBE7_54%)] md:bg-none [box-decoration-break:clone] [-webkit-box-decoration-break:clone]">
                  {t('workWithMe.ways.title', 'Ways I Typically Support')}
                </span>
              </h2>
            </div>
          </div>
          <p
            className={`max-w-[1060px] mx-auto text-center ${testimonialQuoteTextClassName}`}
            style={testimonialQuoteTextStyle}
          >
            {t(
              'workWithMe.ways.intro',
              'I support those seeking to better understand complex systems, identify where meaningful change may be possible, and act with greater clarity in uncertain conditions. While each context is different, my work typically takes shape through four recurring pathways.'
            )}
          </p>
        </div>
      </section>

      <section className="w-full bg-[#F7F7F7] py-12 md:py-16 lg:py-20">
        <div className="w-full max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex justify-center mb-8 md:mb-10">
            <h2
              className="font-normal text-[30px] md:text-[36px] lg:text-[40px] leading-[1.2] text-[#1f1f1f] text-center max-w-[900px] px-2"
              style={{ fontFamily: 'var(--font-lora), serif' }}
            >
              <span className={practiceStyles.brushHighlight}>
                {t('workWithMe.engagement.title', 'Common Forms of Engagement')}
              </span>
            </h2>
          </div>
          <p
            className={`max-w-[1060px] mx-auto text-center mb-10 md:mb-14 ${testimonialQuoteTextClassName}`}
            style={testimonialQuoteTextStyle}
          >
            {t(
              'workWithMe.engagement.intro',
              'I support philanthropists, foundations, advisors, and mission-driven leaders navigating complexity, uncertainty, and long-term change.'
            )}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {engagementCards.map((card) => {
              const isCool = card.variant === 'cool';
              return (
                <article
                  key={card.title}
                  className={[
                    'rounded-[32px] md:rounded-[40px] p-6 md:p-8 min-h-[280px] md:min-h-[320px]',
                    'border shadow-[0px_4px_2px_rgba(214,220,219,0.25)]',
                    isCool
                      ? 'bg-[rgba(214,220,219,0.5)] border-[rgba(214,220,219,0.5)]'
                      : 'bg-[rgba(218,201,190,0.5)] border-[rgba(218,201,190,0.5)]'
                  ].join(' ')}
                >
                  <h3
                    className="font-bold text-[18px] md:text-[22px] leading-snug text-black mb-4 md:mb-5"
                    style={{ fontFamily: 'var(--font-lora), serif' }}
                  >
                    {card.title}
                  </h3>
                  <div
                    className={`${testimonialQuoteTextClassName} [&_strong]:font-normal [&_p+p]:mt-4`}
                    style={testimonialQuoteTextStyle}
                  >
                    {card.body}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="w-full max-w-[1448px] mx-auto px-4 md:px-8 lg:px-16 pt-12 pb-12 md:pt-16 md:pb-20">
        <div className="flex flex-col gap-8 mb-12">
          <h2
            className="font-normal text-[30px] md:text-[40px] leading-[1.2] text-[#1f1f1f] max-w-[520px]"
            style={{ fontFamily: 'var(--font-lora), serif' }}
          >
            <span className={practiceStyles.brushHighlight}>
              {t('workWithMe.testimonials.title', 'Nice things people say')}
            </span>
          </h2>
          <div className="flex gap-4 self-end">
            <button
              type="button"
              aria-label="Previous testimonials"
              className="hover:opacity-75 transition-opacity"
              onClick={() => setTestimonialStartIndex((current) => current - 1)}
            >
              <ArrowLeftIcon />
            </button>
            <button
              type="button"
              aria-label="Next testimonials"
              className="hover:opacity-75 transition-opacity"
              onClick={() => setTestimonialStartIndex((current) => current + 1)}
            >
              <ArrowRightIcon />
            </button>
          </div>
        </div>
        <div className="md:hidden overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-out"
            style={{
              transform: `translateX(-${normalizedTestimonialIndex * 100}%)`
            }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-full shrink-0">
                <div className="flex flex-col gap-6">
                  <div className="relative w-[102px] h-[112px]">
                    <TestimonialPhoto testimonial={testimonial} />
                  </div>
                  <div>
                    <p
                      className="font-normal text-[20px] text-black mb-1"
                      style={{ fontFamily: 'var(--font-lora), serif' }}
                    >
                      {testimonial.name}
                    </p>
                    <p
                      className="font-normal text-[14px] leading-normal text-black mb-4"
                      style={{ fontFamily: 'var(--font-lora), serif' }}
                    >
                      {testimonial.role}
                    </p>
                    <p
                      className={testimonialQuoteTextClassName}
                      style={testimonialQuoteTextStyle}
                    >
                      {testimonial.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:grid grid-cols-3 gap-8">
          {visibleTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex flex-col gap-6">
              <div className="relative w-[102px] h-[112px]">
                <TestimonialPhoto testimonial={testimonial} />
              </div>
              <div>
                <p
                  className="font-normal text-[20px] text-black mb-1"
                  style={{ fontFamily: 'var(--font-lora), serif' }}
                >
                  {testimonial.name}
                </p>
                <p
                  className="font-normal text-[14px] leading-normal text-black mb-4"
                  style={{ fontFamily: 'var(--font-lora), serif' }}
                >
                  {testimonial.role}
                </p>
                <p
                  className={testimonialQuoteTextClassName}
                  style={testimonialQuoteTextStyle}
                >
                  {testimonial.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full px-0 pt-0 pb-0 md:pt-0 md:pb-0 mb-[55px]">
        <div className="bg-[#343433] w-full md:w-[80%] mr-auto px-6 md:px-10 lg:px-16 py-12 md:py-16 lg:py-20 min-h-[320px] md:min-h-[360px] lg:min-h-[420px] flex flex-col md:flex-row gap-8 lg:gap-14 items-center text-white!">
          <div className="relative w-[168px] h-[168px] rounded-full overflow-hidden shrink-0">
            <Image
              src={img('workWithMe.cta.image', ctaProfileImage)}
              alt={alt('workWithMe.cta.image', 'Chloe profile')}
              fill
              className="object-cover grayscale"
              unoptimized
            />
          </div>
          <div
            className="text-white! flex flex-col justify-center"
            style={{ color: '#FFFFFF' }}
          >
            <p
              className="font-normal text-[36px] leading-[36.476px] text-white!"
              style={{ fontFamily: 'var(--font-lora), serif' }}
            >
              {t('workWithMe.cta.title', 'If this resonates')}{' '}
            </p>
            <p
              className="text-[18px] leading-[35px] mt-4 max-w-[640px] text-white!"
              style={{
                color: '#FFFFFF',
                fontFamily: 'var(--font-lora), serif'
              }}
            >
              {t(
                'workWithMe.cta.body',
                'If you are exploring complex systems, seeking clearer strategic orientation, or considering where meaningful long-term action may be possible, I’d be glad to explore whether this work may be useful.'
              )}
            </p>
            <Link
              href="/contact"
              className="inline-block mt-4 text-[18px] leading-[35px] underline text-white!"
              style={{
                color: '#FFFFFF',
                fontFamily: 'var(--font-lora), serif'
              }}
            >
              {t('workWithMe.cta.link', '→ Request a conversation')}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
