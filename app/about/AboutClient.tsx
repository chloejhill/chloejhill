'use client';

import Image from 'next/image';
import styles from '../page.module.css';
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
  const t = (key: string, fallback: string) =>
    overrides?.strings?.[key] || fallback;
  const img = (key: string, fallbackSrc: string) =>
    overrides?.images?.[key]?.src || fallbackSrc;
  const alt = (key: string, fallbackAlt: string) =>
    overrides?.images?.[key]?.alt || fallbackAlt;

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
                className="absolute left-0 right-0 h-[15px] bottom-[6px]"
                style={{ backgroundColor: '#EFEBE7' }}
                aria-hidden="true"
              />
              <h2
                className="relative font-normal text-[30px] md:text-[36.151px] leading-none text-black text-center"
                style={{ fontFamily: 'var(--font-lora), serif' }}
              >
                {t('about.whereComingFrom.title', "Where I'm coming from")}
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-24">
            <div
              className="font-normal text-[16px] leading-[110%] text-black space-y-4 md:space-y-6"
              style={{ fontFamily: 'var(--font-lora), serif' }}
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
              className="font-normal text-[16px] leading-[110%] text-black space-y-4 md:space-y-6"
              style={{ fontFamily: 'var(--font-lora), serif' }}
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
            {/* Timeline remains hardcoded for now (easy to extend later) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              <div>
                <p
                  className="font-normal text-[30.126px] leading-normal text-black/80 mb-4"
                  style={{ fontFamily: 'var(--font-lora), serif' }}
                >
                  2003-2007
                </p>
                <p
                  className="font-normal text-[16px] leading-[110%] text-black/80 max-w-none md:max-w-[226px]"
                  style={{ fontFamily: 'var(--font-lora), serif' }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  commodo id enim id bibendum.
                </p>
              </div>
              <div>
                <p
                  className="font-semibold text-[36px] leading-normal text-black mb-4"
                  style={{ fontFamily: 'var(--font-lora), serif' }}
                >
                  2008-2014
                </p>
                <p
                  className="font-normal text-[20px] leading-[110%] text-black max-w-none md:max-w-[226px]"
                  style={{ fontFamily: 'var(--font-lora), serif' }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  commodo id enim id bibendum.
                </p>
              </div>
              <div>
                <p
                  className="font-normal text-[30.126px] leading-normal text-black/80 mb-4"
                  style={{ fontFamily: 'var(--font-lora), serif' }}
                >
                  2015-2020
                </p>
                <p
                  className="font-normal text-[16px] leading-[110%] text-black/80 max-w-none md:max-w-[226px]"
                  style={{ fontFamily: 'var(--font-lora), serif' }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  commodo id enim id bibendum.
                </p>
              </div>
              <div>
                <p
                  className="font-normal text-[30.126px] leading-normal text-black/80 mb-4"
                  style={{ fontFamily: 'var(--font-lora), serif' }}
                >
                  2021-present
                </p>
                <p
                  className="font-normal text-[16px] leading-[110%] text-black/80 max-w-none md:max-w-[226px]"
                  style={{ fontFamily: 'var(--font-lora), serif' }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  commodo id enim id bibendum.
                </p>
              </div>
            </div>

            <div className="flex justify-center items-center gap-4 mt-10">
              {/* arrows unchanged */}
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.5">
                  <circle
                    cx="19.8561"
                    cy="19.8561"
                    r="19.8561"
                    transform="matrix(-1 0 0 1 39.7124 0)"
                    fill="#ECE8DF"
                  />
                  <path
                    d="M25.8999 20.2878H13.3819"
                    stroke="#1F1F1F"
                    strokeWidth="1.29496"
                  />
                  <path
                    d="M19.4248 13.8132L12.95 20.2881L19.4248 26.7629"
                    stroke="#1F1F1F"
                    strokeWidth="1.29496"
                  />
                </g>
              </svg>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="19.8561"
                  cy="19.8561"
                  r="19.4245"
                  stroke="#343433"
                  strokeWidth="0.863309"
                />
                <path
                  d="M13.8125 20.2878H26.3305"
                  stroke="#343433"
                  strokeWidth="1.29496"
                />
                <path
                  d="M20.2876 13.8132L26.7624 20.2881L20.2876 26.7629"
                  stroke="#343433"
                  strokeWidth="1.29496"
                />
              </svg>
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
              className="font-normal text-[16px] leading-[110%] text-black space-y-4 md:space-y-6"
              style={{ fontFamily: 'var(--font-lora), serif' }}
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
              className="font-normal text-[16px] leading-[110%] text-black space-y-4 md:space-y-6"
              style={{ fontFamily: 'var(--font-lora), serif' }}
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
          className="absolute inset-y-0 right-0 w-[calc(100%-12px)] md:w-[calc(100%-32px)] lg:w-[calc(100%-72px)] bg-[#114D6F]"
          aria-hidden="true"
        />
        <div className="w-full max-w-[1720px] mx-auto px-4 md:pl-16 md:pr-8 lg:pl-32 lg:pr-16 relative z-10">
          <div className="relative grid grid-cols-1 lg:grid-cols-[340px_minmax(0,1fr)] gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="relative w-full max-w-[280px] md:max-w-[340px] h-[340px] md:h-[420px] mx-auto lg:mx-0">
              <Image
                src={img('about.philosophy.image', philosophyImage)}
                alt={alt('about.philosophy.image', 'Chloe')}
                fill
                className="object-contain"
                unoptimized
              />
            </div>

            <div className="relative text-white" style={{ color: '#FFFFFF' }}>
              <h2
                className="font-normal text-[30px] md:text-[40px] leading-normal text-white mb-4 md:mb-6"
                style={{ fontFamily: 'var(--font-lora), serif' }}
              >
                {t('about.philosophy.title', 'My Philosophy & Stance')}
              </h2>
              <div
                className="font-normal text-[16px] leading-[110%] space-y-3 md:space-y-4 max-w-[721px] whitespace-pre-wrap text-white"
                style={{
                  color: '#FFFFFF',
                  fontFamily: 'var(--font-lora), serif'
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
              className="absolute left-0 right-0 h-[15px] bottom-[6px] bg-[#EFEBE7]"
              aria-hidden="true"
            />
            <h2
              className="relative font-normal text-[30px] md:text-[40px] leading-normal text-black"
              style={{ fontFamily: 'var(--font-lora), serif' }}
            >
              {t('about.affiliations.title', 'Affiliations & Communities')}
            </h2>
          </div>
          <p
            className="font-normal text-[16px] leading-[110%] text-black max-w-[560px] mx-auto mb-10"
            style={{ fontFamily: 'var(--font-lora), serif' }}
          >
            {t(
              'about.affiliations.intro',
              'I’m part of a small number of professional and practitioner communities that support reflective practice, ethical futures work, and inner–outer transformation, including:'
            )}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-[535px_283px] gap-4 md:gap-6 justify-center items-stretch max-w-[860px] mx-auto">
            <div className="bg-[#EFEBE7] rounded-[24px] md:rounded-[40px] h-[118px] md:h-[143px] flex items-center justify-center px-6 md:px-8">
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
            <div className="bg-[#EFEBE7] rounded-[24px] md:rounded-[40px] h-[118px] md:h-[143px] flex items-center justify-center px-6 md:px-8">
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

      <section className="w-full max-w-[1180px] mx-auto px-4 md:px-8 lg:px-12 py-8 md:py-10">
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
