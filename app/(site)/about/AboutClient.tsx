'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './AboutClient.module.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { QuoteIcon } from '../icons';
import type { PageOverrides } from '@/lib/payloadContent';

const aboutHero2Image = '/images/about/hero-ocean.png';
const aboutOceanImage = '/images/about/footsteps.png';
const aboutProfileImage = '/images/aboutprofile.png';
const aboutHeroFrameImage = '/images/about/hero-frame.png';
const philosophyImage = '/images/about/philosophy.png';
const affiliationSacredChangemakersImage =
  '/images/about/affiliation-sacred-changemakers.png';
const affiliationApfImage = '/images/about/affiliation-apf.png';

export default function AboutClient({
  overrides
}: {
  overrides: PageOverrides | null;
}) {
  const timelineViewportRef = useRef<HTMLDivElement | null>(null);
  const [activeTimelineIndex, setActiveTimelineIndex] = useState(0);

  const t = (key: string, fallback: string) =>
    overrides?.strings?.[key] || fallback;
  const img = (key: string, fallbackSrc: string) =>
    overrides?.images?.[key]?.src || fallbackSrc;
  const alt = (key: string, fallbackAlt: string) =>
    overrides?.images?.[key]?.alt || fallbackAlt;

  const defaultTimeline = [
    { id: 'tl-1', year: '1998-2002', text: 'Environmental science and sustainable development studies; early fieldwork in East Africa.' },
    { id: 'tl-2', year: '2003-2007', text: 'Applied sustainability and communications roles across international NGOs and multilateral programmes.' },
    { id: 'tl-3', year: '2008-2014', text: 'Strategic communications and systems-oriented work with global institutions on climate and nature.' },
    { id: 'tl-4', year: '2015-2020', text: 'Advisory and research leadership on futures, biodiversity finance, and organisational transition.' },
    { id: 'tl-5', year: '2021-present', text: 'Independent practice integrating systems insight, futures inquiry, and conscious leadership.' },
    { id: 'tl-6', year: '2025-2030', text: 'Continued research and publication on transcendental futures and long-term stewardship.' },
    { id: 'tl-7', year: '2031-2035', text: 'Expanding collaborative inquiry with foundations and mission-driven leaders.' },
    { id: 'tl-8', year: '2036-2040', text: 'Deepening integrative work at the intersection of inner development and systems change.' }
  ];

  const timelineItems =
    overrides?.blocks?.timeline?.length ? overrides.blocks.timeline : defaultTimeline;

  useEffect(() => {
    const viewport = timelineViewportRef.current;
    if (!viewport) return;

    let rafId: number | null = null;

    const updateCenteredTimeline = () => {
      const cards = Array.from(
        viewport.querySelectorAll<HTMLElement>('[data-timeline-card="true"]')
      );
      if (!cards.length) return;

      const viewportRect = viewport.getBoundingClientRect();
      const viewportCenterX = viewportRect.left + viewportRect.width / 2;

      let closestIdx = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      cards.forEach((card, idx) => {
        const rect = card.getBoundingClientRect();
        const cardCenterX = rect.left + rect.width / 2;
        const distance = Math.abs(cardCenterX - viewportCenterX);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIdx = idx;
        }
      });

      setActiveTimelineIndex(closestIdx);
    };

    const onScroll = () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateCenteredTimeline);
    };

    updateCenteredTimeline();
    viewport.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', updateCenteredTimeline);

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      viewport.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', updateCenteredTimeline);
    };
  }, []);

  const scrollTimeline = (direction: 'left' | 'right') => {
    const viewport = timelineViewportRef.current;
    if (!viewport) return;

    const firstCard = viewport.querySelector<HTMLElement>(
      '[data-timeline-card="true"]'
    );
    const track = viewport.firstElementChild as HTMLElement | null;
    const trackStyles = track ? window.getComputedStyle(track) : null;
    const gap = trackStyles
      ? Number.parseFloat(trackStyles.columnGap || trackStyles.gap || '0')
      : 0;
    const amount = (firstCard?.getBoundingClientRect().width ?? 280) + gap;

    viewport.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth'
    });
  };

  return (
    <div className={styles.container}>
      <section
        className="relative w-full overflow-visible pb-0"
        style={{ backgroundColor: '#EFEBE7' }}
      >
        <Navbar />

        <div className="w-full max-w-[1448px] mx-auto px-4 md:px-8 lg:px-[86px] relative z-10 pt-20 md:pt-24 lg:pt-[159px] pb-16 md:pb-24 lg:pb-20">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8 md:gap-12">
            <div className="max-w-[725px] mt-6 md:mt-10 lg:mt-[32px]">
              <p
                className="font-normal text-[16px] md:text-[18.828px] leading-normal text-[#1F1F1F] mb-4 md:mb-6"
                style={{ fontFamily: 'var(--font-lora), serif' }}
              >
                {t('about.hero.kicker', "Hi! I'm Chloe Hill")}
              </p>
              <h1
                className="font-normal text-[28px] md:text-[35px] leading-[1.35] md:leading-[45.188px] text-[#1F1F1F]"
                style={{ fontFamily: 'var(--font-lora), serif' }}
              >
                {t(
                  'about.hero.title',
                  'Researcher, writer, and practitioner shaped by work in uncertainty, systems change, and transformational practice'
                )}
              </h1>
            </div>

            <div className="w-full flex justify-start lg:justify-end">
              <div className="relative hidden lg:block w-[452px] h-[419px] lg:-mb-[140px]">
                <div className="absolute right-0 top-0 w-[362px] h-[419px]">
                  <Image
                    src={img('about.hero.oceanImage', aboutHero2Image)}
                    alt={alt('about.hero.oceanImage', 'Ocean')}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="absolute right-0 top-0 w-[362px] h-[419px]">
                  <Image
                    src={img('about.hero.frameImage', aboutHeroFrameImage)}
                    alt={alt('about.hero.frameImage', '')}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="absolute left-0 top-[50px] w-[275px] h-[319px]">
                  <Image
                    src={img('about.hero.profileImage', aboutProfileImage)}
                    alt={alt('about.hero.profileImage', 'Chloe')}
                    fill
                    className="object-cover"
                    priority
                    unoptimized
                  />
                </div>
              </div>

              <div className="lg:hidden w-full max-w-[520px]">
                <div className="relative w-full h-[360px]">
                  <div className="absolute right-0 top-0 w-[300px] h-[360px]">
                    <Image
                      src={img('about.hero.frameImage', aboutHeroFrameImage)}
                      alt={alt('about.hero.frameImage', '')}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="absolute left-0 top-[40px] w-[240px] h-[280px] overflow-hidden rounded-sm">
                    <Image
                      src={img('about.hero.profileImage', aboutProfileImage)}
                      alt={alt('about.hero.profileImage', 'Chloe')}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="w-full max-w-[1448px] mx-auto px-4 md:px-16 lg:px-32 py-12 md:py-16">
          <div className="flex justify-center mb-12">
            <div className="relative inline-block">
              <div
                className="absolute left-0 right-0 h-[15px] bottom-[6px] hidden md:block"
                style={{ backgroundColor: '#EFEBE7' }}
                aria-hidden="true"
              />
              <h2
                className="relative font-normal text-[30px] md:text-[36.151px] leading-none text-black text-center"
                style={{ fontFamily: 'var(--font-lora), serif' }}
              >
                <span className="px-1 -mx-1 bg-[linear-gradient(180deg,transparent_54%,#EFEBE7_54%)] md:bg-none [box-decoration-break:clone] [-webkit-box-decoration-break:clone]">
                  {t('about.whereComingFrom.title', "Where I'm coming from")}
                </span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-24">
            <div
              className="space-y-4 md:space-y-6"
              style={{
                color: '#000',
                fontFamily: 'Lora',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '35px',
              }}
            >
              <p>
                {t(
                  'about.whereComingFrom.p1',
                  'A deep connection to the natural world has always guided my work — a thread of curiosity, purpose, and care running through everything I do. What began as academic exploration, with degrees in environmental science and sustainable development, evolved into two decades of fieldwork, strategy, and storytelling across continents and cultures.'
                )}
              </p>
              <p>
                {t(
                  'about.whereComingFrom.p2',
                  "Over the past twenty years, I've lived and worked across continents — from Kenya and Tanzania to Costa Rica and Panama, from Vietnam, Cambodia, and Myanmar to Switzerland and the Netherlands — experiences that shaped how I see systems, interdependence, and resilience in both nature and society."
                )}
              </p>
            </div>
            <div
              className="space-y-4 md:space-y-6"
              style={{
                color: '#000',
                fontFamily: 'Lora',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '35px',
              }}
            >
              <p>
                {t(
                  'about.whereComingFrom.p3',
                  "Building on these foundations, I've collaborated with global institutions, governments, NGOs, and mission-driven enterprises to turn complexity into clarity and vision into action. Along the way, I've helped bridge science and story, systems and leadership — guiding organisations from awareness to transformation."
                )}
              </p>
              <p>
                {t(
                  'about.whereComingFrom.p4',
                  "Today, I work at the intersection of systems change, futures thinking, and conscious leadership — helping leaders and organisations anticipate what's next, adapt with intelligence and empathy, and transform how they lead and create impact."
                )}
              </p>
            </div>
          </div>
        </div>

        <div className="w-full" style={{ backgroundColor: '#EFEBE7' }}>
          <div className="w-full max-w-[1448px] mx-auto px-4 md:px-16 lg:px-32 py-10 md:py-14">
            <div
              ref={timelineViewportRef}
              className="overflow-x-auto scroll-smooth snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <div className="grid grid-flow-col gap-6 min-w-full auto-cols-[100%] sm:auto-cols-[calc((100%-24px)/2)] lg:auto-cols-[calc((100%-72px)/4)]">
                {timelineItems.map((item, index) => (
                  <article
                    key={item.year}
                    data-timeline-card="true"
                    className="snap-start"
                  >
                    <p
                      className={
                        activeTimelineIndex === index
                          ? 'font-semibold text-[30.126px] leading-normal text-black mb-4'
                          : 'font-normal text-[30.126px] leading-normal text-black/80 mb-4'
                      }
                      style={{ fontFamily: 'var(--font-lora), serif' }}
                    >
                      {item.year}
                    </p>
                    <p
                      className="max-w-none md:max-w-[226px]"
                      style={{
                        color:
                          activeTimelineIndex === index
                            ? '#000000'
                            : 'rgba(0, 0, 0, 0.80)',
                        fontFamily: 'Lora',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: activeTimelineIndex === index ? 500 : 400,
                        lineHeight: '28.619px'
                      }}
                    >
                      {item.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="flex justify-center items-center gap-4 mt-10">
              {/* arrows unchanged */}
              <button
                type="button"
                onClick={() => scrollTimeline('left')}
                aria-label="Scroll timeline left"
                className="cursor-pointer"
              >
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.5938 17.6987H11.6732"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M16.9453 12.0503L11.2968 17.6988L16.9453 23.3474"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="17.3222"
                    cy="17.3222"
                    r="16.3222"
                    transform="matrix(-1 0 0 1 34.6445 0)"
                    stroke="white"
                    strokeWidth="2"
                  />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => scrollTimeline('right')}
                aria-label="Scroll timeline right"
                className="cursor-pointer"
              >
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.0508 17.6987H22.9713"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M17.6992 12.0503L23.3478 17.6988L17.6992 23.3474"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="17.3222"
                    cy="17.3222"
                    r="16.3222"
                    stroke="white"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* 1. The Parallax Window */}
      <section
        className="relative z-0 w-full h-[280px] md:h-[460px] lg:h-[700px]"
        style={{ clipPath: 'inset(0 0 0 0)' }}
      >
        {/* 2. The Fixed Image Background */}
        <div className="fixed top-0 left-0 w-full h-screen -z-10">
          <Image
            src={img('about.footsteps.image', aboutOceanImage)}
            alt={alt('about.footsteps.image', 'Footsteps')}
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      </section>

      {/* 3. The Content Below (Negative margins removed!) */}
      <section className="relative z-10 w-full max-w-[1448px] mx-auto px-4 md:px-16 lg:px-32 py-12 md:py-16 lg:py-24 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-[143px]">
          <div>
            <div className="relative inline-block mb-4 md:mb-6">
              <div
                className="absolute left-0 right-0 h-[19px] bottom-[6px]"
                style={{ backgroundColor: '#EFEBE7' }}
                aria-hidden="true"
              />
              <h2
                className="relative font-normal text-[30px] md:text-[36.151px] leading-normal text-black"
                style={{ fontFamily: 'var(--font-lora), serif' }}
              >
                {t('about.howIWork.title', 'How I work')}
              </h2>
            </div>
            <div
              className="space-y-4 md:space-y-6"
              style={{
                color: '#000',
                fontFamily: 'Lora',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '35px',
              }}
            >
              <p>
                {t(
                  'about.howIWork.p1',
                  'My work focuses on supporting clarity and coherence in conditions of uncertainty. It draws on systems thinking, futures inquiry, strategic communication, and attention to the inner dimensions of leadership and change.'
                )}
              </p>
              <p>
                {t(
                  'about.howIWork.p2',
                  'I work alongside people and organisations navigating complexity, often in global, public, or mission-driven contexts. Engagements usually begin with careful listening and synthesis — noticing patterns, surfacing assumptions, and making sense of what is unfolding before decisions are made. Rather than offering predefined solutions, I concentrate on strengthening judgement, orientation, and shared understanding, supporting strategies, cultures, and ways of working that can adapt and remain grounded over time.'
                )}
              </p>
              <p>
                {t(
                  'about.howIWork.p3',
                  'I often work collaboratively with futures practitioners, systems thinkers, narrative specialists, and research-adjacent teams, contributing synthesis, framing, and future-oriented perspective to purpose-led, time-bound work.'
                )}
              </p>
            </div>
          </div>
          <div>
            <div className="relative inline-block mb-4 md:mb-6">
              <div
                className="absolute left-0 right-0 h-[19px] bottom-[6px]"
                style={{ backgroundColor: '#EFEBE7' }}
                aria-hidden="true"
              />
              <h2
                className="relative font-normal text-[30px] md:text-[36.151px] leading-normal text-black"
                style={{ fontFamily: 'var(--font-lora), serif' }}
              >
                {t('about.guides.title', 'What Guides My Work')}
              </h2>
            </div>
            <div
              className="space-y-4 md:space-y-6"
              style={{
                color: '#000',
                fontFamily: 'Lora',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '35px',
              }}
            >
              <p>
                {t(
                  'about.guides.p1',
                  'A few consistent orientations shape how I engage with complexity and change.'
                )}
              </p>
              <p>
                {t(
                  'about.guides.p2',
                  'I work from an integrative view of systems, holding together strategy and culture, structure and meaning, inner and outer dimensions. Durable change emerges when these layers are considered together rather than treated separately.'
                )}
              </p>
              <p>
                {t(
                  'about.guides.p3',
                  'I draw on futures-aware thinking to explore what is emerging, anticipate disruption, and strengthen adaptive capacity — without defaulting to prediction or control.'
                )}
              </p>
              <p>
                {t(
                  'about.guides.p4',
                  'I’m attentive to responsibility across time. Decisions made today carry ethical, cultural, and intergenerational consequences, and I’m interested in how leaders and organisations remain accountable to the futures they help shape.'
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full pt-8 md:pt-10 lg:pt-14 pb-8 md:pb-10 lg:pb-14 overflow-hidden bg-white">
        <div
          className="absolute inset-y-0 right-0 w-full md:w-[calc(100%-32px)] lg:w-[calc(100%-72px)] bg-[#114D6F]"
          aria-hidden="true"
        />
        <div className="w-full max-w-[1720px] mx-auto px-0 md:pl-16 md:pr-8 lg:pl-32 lg:pr-16 relative z-10">
          <div className="relative grid grid-cols-1 lg:grid-cols-[340px_minmax(0,1fr)] gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="relative w-full h-[380px] md:max-w-[340px] md:h-[420px] px-1 md:px-0 mx-auto lg:mx-0">
              <Image
                src={img('about.philosophy.image', philosophyImage)}
                alt={alt('about.philosophy.image', 'Chloe')}
                fill
                className="object-contain"
                unoptimized
              />
            </div>

            <div
              className="relative text-white px-4 md:px-0"
              style={{ color: '#FFFFFF' }}
            >
              <h2
                className="font-normal text-[30px] md:text-[40px] leading-normal text-white mb-4 md:mb-6"
                style={{ fontFamily: 'var(--font-lora), serif' }}
              >
                {t('about.philosophy.title', 'My Philosophy & Stance')}
              </h2>
              <div
                className="space-y-3 md:space-y-4 max-w-[721px] whitespace-pre-wrap text-white"
                style={{
                  color: '#FFF',
                  fontFamily: 'Lora',
                  fontSize: '16px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: '35px'
                }}
              >
                <p>
                  {t(
                    'about.philosophy.p1',
                    'My work is grounded in curiosity, care, and integrity.'
                  )}
                </p>
                <p>
                  {t(
                    'about.philosophy.p2',
                    'I’m comfortable working with ambiguity rather than rushing to certainty, trusting that clarity often emerges through attentive inquiry rather than immediate answers. I aim to create conditions where people feel able to speak honestly, explore uncertainty, and think together without defensiveness.'
                  )}
                </p>
                <p>
                  {t(
                    'about.philosophy.p3',
                    'My work has been shaped by long exposure to complex systems — ecological, institutional, and human — and by learning how inner and outer change are inseparable.'
                  )}
                </p>
                <p>
                  {t(
                    'about.philosophy.p4',
                    'I see change not as something to control, but as something to relate to — a process that requires humility, learning, and the capacity to stay present as systems shift.'
                  )}
                </p>
                <p>
                  {t(
                    'about.philosophy.p5',
                    'Underlying this is a belief that inner and outer transformation are inseparable: how we lead internally shapes the systems we influence externally, and regeneration begins with how we pay attention.'
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full max-w-[1448px] mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-16 lg:py-24">
        <div className="text-center">
          <div className="relative inline-block mb-6">
            <div
              className="absolute left-0 right-0 h-[15px] bottom-[6px] bg-[#EFEBE7] hidden md:block"
              aria-hidden="true"
            />
            <h2
              className="relative font-normal text-[30px] md:text-[40px] leading-normal text-black"
              style={{ fontFamily: 'var(--font-lora), serif' }}
            >
              <span className="px-1 -mx-1 bg-[linear-gradient(180deg,transparent_54%,#EFEBE7_54%)] md:bg-none [box-decoration-break:clone] [-webkit-box-decoration-break:clone]">
                {t('about.affiliations.title', 'Affiliations & Communities')}
              </span>
            </h2>
          </div>
          <p
            className="max-w-[560px] mx-auto mb-10"
            style={{
              color: '#000',
              textAlign: 'center',
              fontFamily: 'Lora',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '35px',
            }}
          >
            {t(
              'about.affiliations.intro',
              'I’m part of a small number of professional and practitioner communities that support reflective practice, ethical futures work, and inner–outer transformation, including:'
            )}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-[535px_283px] gap-4 md:gap-6 justify-center items-stretch max-w-[860px] mx-auto">
            <div
              className="rounded-[24px] md:rounded-[40px] h-[118px] md:h-[143px] flex items-center justify-center px-6 md:px-8"
              style={{ backgroundColor: '#EFEBE7', opacity: 1 }}
            >
              <div className="relative w-full max-w-[481px] h-[90px]">
                <Image
                  src={img(
                    'about.affiliations.sacredChangemakers',
                    affiliationSacredChangemakersImage
                  )}
                  alt={alt(
                    'about.affiliations.sacredChangemakers',
                    'Sacred Changemakers'
                  )}
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>
            <div
              className="rounded-[24px] md:rounded-[40px] h-[118px] md:h-[143px] flex items-center justify-center px-6 md:px-8"
              style={{ backgroundColor: '#EFEBE7', opacity: 1 }}
            >
              <div className="relative w-full max-w-[219px] h-[94px]">
                <Image
                  src={img('about.affiliations.apf', affiliationApfImage)}
                  alt={alt('about.affiliations.apf', 'APF')}
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full max-w-[1180px] mx-auto px-4 md:px-8 lg:px-12 pt-8 md:pt-10 pb-0 mb-[55px]">
        <div className="bg-[#343433] p-5 md:p-8 lg:p-10 text-white">
          <div className="flex flex-col gap-8">
            <div style={{ filter: 'brightness(0) invert(1)' }}>
              <QuoteIcon />
            </div>
            <div>
              <p
                className="font-normal text-[30px] md:text-[34px] lg:text-[40px] leading-[1.4] md:leading-[1.7] mb-6 md:mb-8 text-white"
                style={{
                  color: '#FFFFFF',
                  fontFamily: 'var(--font-lora), serif'
                }}
              >
                {t(
                  'about.quote.text',
                  'Do not lose heart, we were made for these times.'
                )}
              </p>
              <p
                className="font-normal text-[18px] md:text-[22px] leading-normal md:leading-[1.7] text-right text-white"
                style={{
                  color: '#FFFFFF',
                  fontFamily: 'var(--font-lora), serif'
                }}
              >
                {t('about.quote.author', '— Clarissa Pinkola Estes')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
