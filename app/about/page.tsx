'use client';

import Image from 'next/image';
import styles from '../page.module.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const aboutHero1Image = '/images/about/hero1.png';
const aboutHero2Image = '/images/about/hero2.png';
const aboutOceanImage = '/images/aboutocean.png';
const aboutProfileImage = '/images/aboutprofile.png';

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
        <div className="w-full max-w-[1448px] mx-auto px-4 md:px-8 lg:px-16 relative z-10 flex flex-col lg:flex-row pt-24 lg:pt-40">
          {/* LEFT COLUMN: Text */}
          <div className="flex-1 max-w-[671px] mb-12 lg:mb-0 pr-8 md:pr-12 lg:pr-16">
            <p className="font-sans font-bold text-[18px] md:text-[20px] text-black mb-4 lg:pt-13">
              Hi! I'm Chloe Hill
            </p>
            <p
              className="font-sans font-bold text-[32px] md:text-[36px] lg:text-[40px] text-black whitespace-pre-wrap"
              style={{ lineHeight: '1.3' }}
            >
              Strategist, Transformation Guide, Futurist, Champion of Human
              Potential
            </p>
          </div>

          {/* RIGHT COLUMN: Images */}
          <div className="flex-1 w-full flex flex-col lg:flex-row justify-center lg:justify-end relative">
            {/* DESKTOP: Overlapping images */}
            <div className="relative w-full max-w-[504px] h-[464px] lg:translate-y-[-40px] lg:-mb-[100px] hidden lg:block">
              {/* 1. HERO 2 (Ocean) */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={aboutHero2Image}
                  alt="Ocean Background"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              {/* 2. HERO 1 (Portrait) */}
              <div
                className="absolute z-10 shadow-2xl"
                style={{
                  width: '299px',
                  height: '300px',
                  left: '-120px',
                  top: '84px'
                }}
              >
                <Image
                  src={aboutHero1Image}
                  alt="Chloe Portrait"
                  fill
                  className="object-cover"
                  priority
                  unoptimized
                />
              </div>
            </div>

            {/* MOBILE: Stacked images in column */}
            <div className="lg:hidden flex flex-col gap-6 w-full mb-8">
              <div className="relative w-full h-[300px] md:h-[400px]">
                <Image
                  src={aboutHero2Image}
                  alt="Ocean"
                  fill
                  className="object-cover rounded-lg"
                  unoptimized
                />
              </div>
              <div className="relative w-full h-[300px] md:h-[400px]">
                <Image
                  src={aboutHero1Image}
                  alt="Portrait"
                  fill
                  className="object-cover rounded-lg"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full max-w-[1448px] mx-auto px-4 md:px-8 lg:px-16 py-16">
        <h2 className="font-sans font-bold text-[36px] leading-normal mb-8 text-black">
          My Journey to the Here and Now
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-16">
          <div>
            <p className="font-sans text-lg leading-[35px] text-black mb-6">
              A deep connection to the natural world has always guided my work —
              a thread of curiosity, purpose, and care running through
              everything I do. What began as academic exploration, with degrees
              in environmental science and sustainable development, evolved into
              two decades of fieldwork, strategy, and storytelling across
              continents and cultures.
            </p>
            <p className="font-sans text-lg leading-[35px] text-black">
              Over the past twenty years, I've lived and worked across
              continents — from Kenya and Tanzania to Costa Rica and Panama,
              from Vietnam, Cambodia, and Myanmar to Switzerland and the
              Netherlands — experiences that shaped how I see systems,
              interdependence, and resilience in both nature and society.
            </p>
          </div>
          <div>
            <p className="font-sans text-lg leading-[35px] text-black mb-6">
              Building on these foundations, I've collaborated with global
              institutions, governments, NGOs, and mission-driven enterprises to
              turn complexity into clarity and vision into action. Along the
              way, I've helped bridge science and story, systems and leadership
              — guiding organisations from awareness to transformation.
            </p>
            <p className="font-sans text-lg leading-[35px] text-black">
              Today, I work at the intersection of systems change, futures
              thinking, and conscious leadership — helping leaders and
              organisations anticipate what's next, adapt with intelligence and
              empathy, and transform how they lead and create impact.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <div className="flex flex-wrap items-center justify-between text-[30px] text-black mb-16 gap-4">
            <span className="font-sans font-normal">2004</span>
            <span className="font-sans font-normal">2008</span>
            <span className="font-sans font-normal">2010</span>
            <span className="font-sans font-normal">2014</span>
            <span className="font-sans font-normal">2017</span>
            <span className="font-sans font-bold">2022</span>
            <span className="font-sans font-normal">2024</span>
            <span className="font-sans font-normal">2025</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="font-sans font-bold text-[50px] leading-tight text-black mb-6">
                2014
              </p>
              <p className="font-sans text-[22px] leading-[38px] text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                commodo id enim id bibendum.
              </p>
            </div>
            <div>
              <p className="font-sans font-bold text-[50px] leading-tight text-black mb-6">
                2022
              </p>
              <p className="font-sans text-[22px] leading-[38px] text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                commodo id enim id bibendum.
              </p>
            </div>
            <div>
              <p className="font-sans font-bold text-[50px] leading-tight text-black mb-6">
                2024
              </p>
              <p className="font-sans text-[22px] leading-[38px] text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                commodo id enim id bibendum.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-4 mt-8 mb-8">
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
      </section>

      <section className="relative w-full h-[400px] lg:h-[600px]">
        <Image
          src={aboutOceanImage}
          alt="Ocean"
          fill
          className="object-cover"
          unoptimized
        />
      </section>

      <section className="w-full max-w-[1448px] mx-auto px-4 md:px-8 lg:px-16 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-[143px]">
          <div>
            <h2 className="font-sans font-bold text-[36px] leading-normal mb-6 text-black">
              How I Work
            </h2>
            <div className="font-sans text-lg leading-[35px] text-black space-y-6">
              <p>
                My approach brings clarity and coherence to transformation.
                Blending transformative communications, deep sustainability
                expertise, strategic foresight, and conscious leadership, I help
                leaders and organisations turn complexity into strategy and
                purpose into action.
              </p>
              <p>
                I partner with mission-driven organisations and leaders
                navigating uncertainty and change — from global institutions and
                public agencies to purpose-led businesses and innovation labs.
                Each collaboration begins with deep listening and sensemaking,
                uncovering patterns and opportunities for renewal, and
                translating insight into meaningful, lasting change.
              </p>
              <p>
                Through foresight, regenerative design, and inner–outer
                integration, we co-create strategies, cultures, and structures
                built for uncertainty — able to adapt, evolve, and lead
                regeneratively. This work cultivates the clarity, resilience,
                and purpose needed to move from anticipation to transformation,
                and toward futures that sustain life.
              </p>
            </div>
          </div>
          <div>
            <h2 className="font-sans font-bold text-[36px] leading-normal mb-6 text-black">
              My Philosophy
            </h2>
            <div className="font-sans text-lg leading-[35px] text-black space-y-6">
              <p>
                My work is grounded in curiosity, compassion, and integrity —
                principles that shape how I think, lead, and collaborate.
              </p>
              <ul className="list-disc ml-6 space-y-6">
                <li>
                  <span className="font-semibold">
                    Lead with honesty and empathy:{' '}
                  </span>
                  Trust is the foundation of transformation. I create
                  environments where people feel safe to speak openly, explore
                  uncertainty, and co-create with courage and care.
                </li>
                <li>
                  <span className="font-semibold">
                    Find clarity in complexity:{' '}
                  </span>
                  I don't shy away from ambiguity — I work with it. Whether
                  guiding a team through foresight, strategy, or transformation,
                  I help uncover coherence in the chaos so alignment and purpose
                  can emerge.
                </li>
                <li>
                  <span className="font-semibold">
                    Stay curious and evolving:{' '}
                  </span>
                  I'm always learning — experimenting with new ideas, refining
                  practices, and deepening my understanding of systems,
                  leadership, and sustainability. Change isn't something to
                  control, but to grow with.
                </li>
                <li>
                  <span className="font-semibold">
                    Align people, purpose, and the planet:{' '}
                  </span>
                  My work is grounded in a belief that regeneration begins
                  within. Every approach I use — from strategic foresight to
                  leadership development — is designed to bring out the best in
                  people and align our actions with the wellbeing of the planet
                  we share.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full max-w-[1448px] mx-auto px-4 md:px-8 lg:px-16 py-16">
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
                  culture — creating transformation that's both structural and
                  soulful.
                </li>
                <li>
                  <span className="font-semibold">
                    Foresight & Adaptability:{' '}
                  </span>
                  Guided by collapse-informed foresight, I help organisations
                  anticipate what's emerging and adapt with intelligence,
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
                  Inspired by living systems, I bring nature's intelligence into
                  the way we work — reconnecting people to themselves, each
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
      </section>

      <Footer />
    </div>
  );
}
