'use client';

import Image from 'next/image';
import styles from '../page.module.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { QuoteIcon } from '../icons';

const aboutHero2Image = '/images/about/hero-ocean.png';
const aboutOceanImage = '/images/about/footsteps.png';
const aboutProfileImage = '/images/aboutprofile.png';
const aboutHeroFrameImage = '/images/about/hero-frame.png';
const philosophyImage = '/images/about/philosophy.png';
const affiliationSacredChangemakersImage =
  '/images/about/affiliation-sacred-changemakers.png';
const affiliationApfImage = '/images/about/affiliation-apf.png';

export default function About() {
  return (
    <div className={styles.container}>
      <section
        // 1. REMOVED 'min-h-screen' to fix the zoom issue.
        // 2. KEEP 'overflow-visible' so images can hang out.
        // 3. REMOVED bottom padding (pb-0) so the background stops tighter to the content.
        className="relative w-full overflow-visible pb-0"
        style={{ backgroundColor: '#EFEBE7' }}
      >
        <Navbar />

        {/* ---------------- MAIN CONTENT ---------------- */}
        <div className="w-full max-w-[1448px] mx-auto px-4 md:px-8 lg:px-[86px] relative z-10 pt-24 lg:pt-[159px] pb-32 lg:pb-20">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
            {/* LEFT: Text */}
            <div className="max-w-[725px] mt-10 lg:mt-[140px]">
              <p className="font-serif font-normal text-[19px] text-[#1F1F1F] mb-6">
                Hi! I&apos;m Chloe Hill
              </p>
              <h1 className="font-serif font-normal text-[32px] md:text-[35px] leading-[45px] text-[#1F1F1F]">
                Researcher, writer, and practitioner shaped by work in
                uncertainty, systems change, and transformational practice
              </h1>
            </div>

            {/* RIGHT: Hero imagery */}
            <div className="w-full flex justify-start lg:justify-end">
              {/* Desktop composition */}
              <div className="relative hidden lg:block w-[452px] h-[419px] lg:-mb-[140px]">
                <div className="absolute right-0 top-0 w-[362px] h-[419px]">
                  <Image
                    src={aboutHero2Image}
                    alt="Ocean"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="absolute right-0 top-0 w-[362px] h-[419px]">
                  <Image
                    src={aboutHeroFrameImage}
                    alt=""
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="absolute left-0 top-[50px] w-[275px] h-[319px]">
                  <Image
                    src={aboutProfileImage}
                    alt="Chloe"
                    fill
                    className="object-cover"
                    priority
                    unoptimized
                  />
                </div>
              </div>

              {/* Mobile composition */}
              <div className="lg:hidden w-full max-w-[520px]">
                <div className="relative w-full h-[260px] mb-6 overflow-hidden rounded-lg">
                  <Image
                    src={aboutHero2Image}
                    alt="Ocean"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="relative w-full h-[360px]">
                  <div className="absolute right-0 top-0 w-[300px] h-[360px]">
                    <Image
                      src={aboutHeroFrameImage}
                      alt=""
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="absolute left-0 top-[40px] w-[240px] h-[280px] overflow-hidden rounded-sm">
                    <Image
                      src={aboutProfileImage}
                      alt="Chloe"
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
        {/* Where I'm coming from */}
        <div className="w-full max-w-[1448px] mx-auto px-12 md:px-16 lg:px-32 py-16">
          <div className="flex justify-center mb-12">
            <div className="relative inline-block">
              <div
                className="absolute left-0 right-0 h-[19px] bottom-[6px]"
                style={{ backgroundColor: '#EFEBE7' }}
                aria-hidden="true"
              />
              <h2 className="relative font-serif font-normal text-[32px] md:text-[36px] leading-none text-black text-center">
                Where I&apos;m coming from
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            <div className="font-serif font-normal text-[16px] leading-[35px] text-black space-y-6">
              <p>
                A deep connection to the natural world has always guided my work
                — a thread of curiosity, purpose, and care running through
                everything I do. What began as academic exploration, with
                degrees in environmental science and sustainable development,
                evolved into two decades of fieldwork, strategy, and
                storytelling across continents and cultures.
              </p>
              <p>
                Over the past twenty years, I&apos;ve lived and worked across
                continents — from Kenya and Tanzania to Costa Rica and Panama,
                from Vietnam, Cambodia, and Myanmar to Switzerland and the
                Netherlands — experiences that shaped how I see systems,
                interdependence, and resilience in both nature and society.
              </p>
            </div>
            <div className="font-serif font-normal text-[16px] leading-[35px] text-black space-y-6">
              <p>
                Building on these foundations, I&apos;ve collaborated with
                global institutions, governments, NGOs, and mission-driven
                enterprises to turn complexity into clarity and vision into
                action. Along the way, I&apos;ve helped bridge science and
                story, systems and leadership — guiding organisations from
                awareness to transformation.
              </p>
              <p>
                Today, I work at the intersection of systems change, futures
                thinking, and conscious leadership — helping leaders and
                organisations anticipate what&apos;s next, adapt with
                intelligence and empathy, and transform how they lead and create
                impact.
              </p>
            </div>
          </div>
        </div>

        {/* Timeline strip */}
        <div className="w-full" style={{ backgroundColor: '#EFEBE7' }}>
          <div className="w-full max-w-[1448px] mx-auto px-12 md:px-16 lg:px-32 py-14">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
              <div>
                <p className="font-serif font-normal text-[26px] md:text-[30px] leading-tight text-black/80 mb-4">
                  2003-2007
                </p>
                <p className="font-serif font-normal text-[16px] leading-[28.6px] text-black/80 max-w-[226px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  commodo id enim id bibendum.
                </p>
              </div>
              <div>
                <p className="font-serif font-semibold text-[30px] md:text-[36px] leading-tight text-black mb-4">
                  2008-2014
                </p>
                <p className="font-serif font-normal text-[20px] leading-[28.6px] text-black max-w-[226px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  commodo id enim id bibendum.
                </p>
              </div>
              <div>
                <p className="font-serif font-normal text-[26px] md:text-[30px] leading-tight text-black/80 mb-4">
                  2015-2020
                </p>
                <p className="font-serif font-normal text-[16px] leading-[28.6px] text-black/80 max-w-[226px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  commodo id enim id bibendum.
                </p>
              </div>
              <div>
                <p className="font-serif font-normal text-[26px] md:text-[30px] leading-tight text-black/80 mb-4">
                  2021-present
                </p>
                <p className="font-serif font-normal text-[16px] leading-[28.6px] text-black/80 max-w-[226px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  commodo id enim id bibendum.
                </p>
              </div>
            </div>

            <div className="flex justify-center items-center gap-4 mt-10">
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

      <section className="relative w-full h-[460px] lg:h-[700px]">
        <Image
          src={aboutOceanImage}
          alt="Footsteps"
          fill
          className="object-cover"
          unoptimized
        />
      </section>

      <section className="w-full max-w-[1448px] mx-auto px-12 md:px-16 lg:px-32 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-[143px]">
          <div>
            <h2 className="font-sans font-bold text-[36px] leading-normal mb-6 text-black">
              How I work
            </h2>
            <div className="font-sans text-lg leading-[35px] text-black space-y-6">
              <p>
                My work focuses on supporting clarity and coherence in
                conditions of uncertainty. It draws on systems thinking, futures
                inquiry, strategic communication, and attention to the inner
                dimensions of leadership and change.
              </p>
              <p>
                I work alongside people and organisations navigating complexity,
                often in global, public, or mission-driven contexts. Engagements
                usually begin with careful listening and synthesis — noticing
                patterns, surfacing assumptions, and making sense of what is
                unfolding before decisions are made. Rather than offering
                predefined solutions, I concentrate on strengthening judgement,
                orientation, and shared understanding, supporting strategies,
                cultures, and ways of working that can adapt and remain grounded
                over time.
              </p>
              <p>
                I often work collaboratively with futures practitioners, systems
                thinkers, narrative specialists, and research-adjacent teams,
                contributing synthesis, framing, and future-oriented perspective
                to purpose-led, time-bound work.
              </p>
            </div>
          </div>
          <div>
            <h2 className="font-sans font-bold text-[36px] leading-normal mb-6 text-black">
              What Guides My Work
            </h2>
            <div className="font-sans text-lg leading-[35px] text-black space-y-6">
              <p>
                A few consistent orientations shape how I engage with complexity
                and change.
              </p>
              <p>
                I work from an integrative view of systems, holding together
                strategy and culture, structure and meaning, inner and outer
                dimensions. Durable change emerges when these layers are
                considered together rather than treated separately.
              </p>
              <p>
                I draw on futures-aware thinking to explore what is emerging,
                anticipate disruption, and strengthen adaptive capacity —
                without defaulting to prediction or control.
              </p>
              <p>
                I’m attentive to responsibility across time. Decisions made
                today carry ethical, cultural, and intergenerational
                consequences, and I’m interested in how leaders and
                organisations remain accountable to the futures they help shape.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full py-16 lg:py-24 overflow-hidden">
        <div
          className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[1354px] max-w-[1354px] bg-[#114D6F]"
          aria-hidden="true"
        />
        <div className="w-full max-w-[1448px] mx-auto pl-10 pr-4 md:pl-16 md:pr-8 lg:pl-32 lg:pr-16 relative z-10">
          <div className="relative grid grid-cols-1 lg:grid-cols-[340px_minmax(0,1fr)] gap-12 lg:gap-16 items-start">
            <div className="relative w-full max-w-[340px] h-[510px]">
              <Image
                src={philosophyImage}
                alt="Chloe"
                fill
                className="object-cover"
                unoptimized
              />
            </div>

            <div className="relative text-white" style={{ color: '#FFFFFF' }}>
              <h2 className="font-sans font-bold text-[36px] lg:text-[40px] leading-tight text-white mb-6">
                My Philosophy &amp; Stance
              </h2>
              <div
                className="font-sans text-[16px] leading-[35px] space-y-6 max-w-[721px] whitespace-pre-wrap text-white"
                style={{ color: '#FFFFFF' }}
              >
                <p>My work is grounded in curiosity, care, and integrity.</p>
                <p>
                  I’m comfortable working with ambiguity rather than rushing to
                  certainty, trusting that clarity often emerges through
                  attentive inquiry rather than immediate answers. I aim to
                  create conditions where people feel able to speak honestly,
                  explore uncertainty, and think together without defensiveness.
                </p>
                <p>
                  My work has been shaped by long exposure to complex systems —
                  ecological, institutional, and human — and by learning how
                  inner and outer change are inseparable.
                </p>
                <p>
                  I see change not as something to control, but as something to
                  relate to — a process that requires humility, learning, and
                  the capacity to stay present as systems shift.
                </p>
                <p>
                  Underlying this is a belief that inner and outer
                  transformation are inseparable: how we lead internally shapes
                  the systems we influence externally, and regeneration begins
                  with how we pay attention.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full max-w-[1448px] mx-auto px-4 md:px-8 lg:px-16 py-16 lg:py-24">
        <div className="text-center">
          <div className="relative inline-block mb-6">
            <div
              className="absolute left-0 right-0 h-[19px] bottom-[6px] bg-[#D6DCDB]"
              aria-hidden="true"
            />
            <h2 className="relative font-sans font-bold text-[36px] lg:text-[40px] leading-tight text-black">
              Affiliations &amp; Communities
            </h2>
          </div>
          <p className="font-sans text-[16px] leading-[35px] text-black max-w-[560px] mx-auto mb-10">
            I’m part of a small number of professional and practitioner
            communities that support reflective practice, ethical futures work,
            and inner–outer transformation, including:
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-[535px_283px] gap-6 justify-center items-stretch max-w-[860px] mx-auto">
            <div className="bg-[#D6DCDB] rounded-[40px] h-[143px] flex items-center justify-center px-8">
              <div className="relative w-full max-w-[481px] h-[90px]">
                <Image
                  src={affiliationSacredChangemakersImage}
                  alt="Sacred Changemakers"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>
            <div className="bg-[#D6DCDB] rounded-[40px] h-[143px] flex items-center justify-center px-8">
              <div className="relative w-full max-w-[219px] h-[94px]">
                <Image
                  src={affiliationApfImage}
                  alt="APF"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full max-w-[1448px] mx-auto px-4 md:px-8 lg:px-16 py-16">
        <div className="bg-[#343433] p-10 md:p-16 text-white">
          <div className="flex flex-col gap-12">
            <div style={{ filter: 'brightness(0) invert(1)' }}>
              <QuoteIcon />
            </div>
            <div>
              <p
                className="font-sans text-3xl md:text-4xl lg:text-5xl leading-tight mb-8 text-white"
                style={{ color: '#FFFFFF' }}
              >
                Do not lose heart, we were made for these times.
              </p>
              <p
                className="font-sans text-xl md:text-2xl lg:text-[25px] text-right text-white"
                style={{ color: '#FFFFFF' }}
              >
                — Clarissa Pinkola Estes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="w-full max-w-[1448px] mx-auto px-4 md:px-8 lg:px-16 py-16">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-[179px] items-center">
          <div className="flex-1 max-w-[673px]">
            <h2 className="font-sans font-bold text-[40px] leading-normal mb-6 text-black">
              Why work with me
            </h2>
            <div className="font-sans text-lg leading-[35px] text-black space-y-6">
              <p>
                Because navigating the chaos and shaping the future we want
                requires both foresight and heart.
              </p>
              <ul className="list-disc ml-6 space-y-6">
                <li>
                  <span className="font-semibold">Integrative Approach: </span>I
                  work with the whole system — inner and outer, strategy and
                  culture — creating transformation that&apos;s both structural
                  and soulful.
                </li>
                <li>
                  <span className="font-semibold">
                    Foresight & Adaptability:{' '}
                  </span>
                  Guided by collapse-informed foresight, I help organisations
                  anticipate what&apos;s emerging and adapt with intelligence,
                  creativity, and care — at any scale or stage.
                </li>
                <li>
                  <span className="font-semibold">
                    Meaning-Centred Leadership:{' '}
                  </span>
                  Inner clarity, cultural resilience, and deep purpose guide
                  every engagement, aligning who we are with how we lead and
                  create impact.
                </li>
                <li>
                  <span className="font-semibold">Regenerative Practice: </span>
                  Inspired by living systems, I bring nature&apos;s intelligence
                  into the way we work — reconnecting people to themselves, each
                  other, and the world they serve.
                </li>
              </ul>
              <p>
                Together, we can move from stuck to thriving — and shape the
                future we all want to live in.
              </p>
            </div>
            <div className="mt-8 relative inline-block">
              <a href="#" className="font-sans text-lg  text-black relative">
                Check Out My Services
              </a>
            </div>
          </div>
          <div className="relative w-full lg:w-[584px] h-[676px] shrink-0">
            <Image
              src={aboutProfileImage}
              alt="Profile"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
}
