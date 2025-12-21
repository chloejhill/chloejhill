'use client';

import Image from 'next/image';
import styles from '../page.module.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  ClarityIcon,
  ResillienceIcon,
  StuckIcon,
  LastingIcon
} from '../icons';

const heroLeftImage = '/images/services/heroleft.png';
const heroRightImage = '/images/services/heroright.png';
const anticipateImage = '/images/services/anticipate.png';
const adaptImage = '/images/services/adapt.png';
const transformImage = '/images/services/transform.png';
const transcendImage = '/images/services/transcend.png';
const innerDimensionImage = '/images/exploreservices/inner.png';
const profileImage = '/images/services/starttrans.png';

const services = [
  {
    title: 'Anticipate',
    subtitle: 'Sensing the Horizon',
    description:
      "Transformation begins with awareness — the ability to see beyond the immediate. In this phase, we explore the broader landscape shaping your organisation: the signals, trends, and disruptions emerging across social, environmental, and technological systems. Using horizon scanning, trend mapping, and scenario exploration, we uncover both risks and opportunities, helping you see clearly amid uncertainty. This process builds a shared understanding of what's ahead and equips your team to act with confidence and strategic focus — creating a grounded, future-ready perspective",
    image: '/images/exploreservices/anticipate.png'
  },
  {
    title: 'Adapt',
    subtitle: 'Build Strategic Resilience',
    description:
      "Resilience is more than survival — it's the ability to evolve without losing your centre. In this phase, we strengthen your organisation's capacity to adapt — across strategy, structure, and culture — using resilience mapping, adaptive foresight, and regenerative leadership practices. Together, we build coherence and agility so your organisation can bend without breaking, maintaining clarity and purpose even under pressure. The result is an organisation that responds with wisdom rather than reactivity, thriving in complexity while staying anchored to its mission.",
    image: '/images/exploreservices/adapt.png'
  },
  {
    title: 'Transform',
    subtitle: 'Align Purpose, Culture & Impact',
    description:
      'Transformation is both systemic and human — an inner and outer process that reshapes how people think, collaborate, and create. Here, we bring your purpose, narrative, and culture into alignment, turning vision into momentum. Through participatory dialogue, story, and collective sensemaking, we help teams rediscover their shared mission, strengthen trust, and co-create new ways of working that inspire creativity and impact. This alignment allows purpose to flow through practice, uniting vision and action — shifting your organisation from fragmentation to flow.',
    image: '/images/exploreservices/transform.png'
  },
  {
    title: 'Transcend',
    subtitle: 'Lead from Meaning & Renewal',
    description:
      'Beyond transformation lies renewal — a reorientation toward purpose, stewardship, and meaning. In this phase, we explore the deeper dimensions of leadership and culture through transcendental futures, reflective practice, and regenerative design. Drawing on my research in Transcendental Futures (Futures Journal, Elsevier, 2025), this work explores how consciousness, ethics, and metaphysics can inform long-term leadership and sustainability. Together, we move beyond adaptation to cultivate deeper meaning, regenerative purpose, and futures rooted in renewal and systemic flourishing. You emerge with renewed direction and purpose — ready to lead not just for organisational success, but for systemic wellbeing and the flourishing of life itself.',
    image: '/images/exploreservices/transcend.png'
  }
];

const benefits = [
  {
    title: 'Clarity in Complexity',
    description:
      "See what's emerging and make confident, future-ready decisions amid uncertainty.",
    icon: ClarityIcon
  },
  {
    title: 'Resilience in Motion',
    description:
      'Build adaptive strategies, cultures, and systems that bend, not break, under pressure.',
    icon: ResillienceIcon
  },
  {
    title: 'From Stuck to Thriving',
    description:
      'Unlock momentum and creative flow — helping your organisation evolve with purpose and renewed energy.',
    icon: StuckIcon
  },
  {
    title: 'Lasting Transformation',
    description:
      'Move beyond short-term fixes to create meaningful, lasting transformation — for your organisation, your people, and the planet.',
    icon: LastingIcon
  }
];

function DummyIcon() {
  return (
    <div
      style={{
        width: '110px',
        height: '110px',
        backgroundColor: '#DAC9BE',
        borderRadius: '50%'
      }}
    />
  );
}

export default function Services() {
  return (
    <div className={styles.container}>
      <section className="relative w-full h-[600px] overflow-hidden">
        {/* MOBILE BACKGROUND - heroLeftImage */}
        <div className="absolute inset-0 w-full h-full md:hidden z-0">
          <Image
            src={heroLeftImage}
            alt="Hero Left"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
        {/* DESKTOP BACKGROUND IMAGES */}
        <div className="absolute inset-0 w-full h-full hidden md:flex z-0">
          {/* Left Image (20%) */}
          <div className="relative w-[20%] h-full">
            <Image
              src={heroLeftImage}
              alt="Hero Left"
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          {/* Right Image (80%) 
        ADDED: '-ml-[1px]' 
        This pulls the right image left by 1 pixel to overlap the seam 
        and permanently hide the gap.
    */}
          <div className="relative w-[80%] h-full -ml-px">
            <Image
              src={heroRightImage}
              alt="Hero Right"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </div>

        <Navbar />

        {/* CONTENT */}
        {/* MOBILE: 'block pt-32' -> Pushes text down the page.
      DESKTOP: 'md:flex md:items-center md:pt-16' -> Restores your original vertical alignment.
  */}
        <div className="relative z-10 w-full max-w-[1448px] mx-auto px-4 md:px-8 lg:px-16 h-full block pt-32 md:flex md:items-center md:pt-16">
          <div className="max-w-[800px]">
            <h1
              className="font-sans font-bold text-[36px] leading-tight text-black mb-6"
              style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
            >
              See what&apos;s Emerging, Build
              <br />
              Resilience in the Present, and
              <br />
              Shape the Future with Purpose.
            </h1>
          </div>
        </div>
      </section>

      <section className="w-full max-w-[1448px] mx-auto px-4 md:px-8 lg:px-16 py-16 text-center">
        <h2
          className="font-sans font-bold text-[40px] leading-normal mb-6 text-black"
          style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
        >
          Discover How We Can Work Together
        </h2>
        <div className="max-w-[1028px] mx-auto text-left">
          <p className="font-sans text-[18px] leading-[27.75px] text-black mb-6">
            The challenges we face today demand new ways of seeing, thinking,
            and leading. Addressing symptoms without shifting systems is no
            longer enough — organisations need to anticipate what&apos;s
            emerging, adapt with agility, and transform for long-term resilience
            and renewal, and ultimately transcend outdated ways of operating
            altogether.
          </p>
          <p className="font-sans text-[18px] leading-[27.75px] text-black mb-6">
            I call this the AATT framework — a structured yet fluid approach
            that guides leaders and organisations through four stages:
            Anticipate, Adapt, Transform, and Transcend. It&apos;s designed to
            help you move from reactivity to resilience, from fragmentation to
            coherence, and from surviving disruption to shaping the future with
            purpose.
          </p>
          <p className="font-sans text-[18px] leading-[27.75px] text-black">
            Every engagement is bespoke — shaped around your context,
            challenges, and readiness for change. Whether a focused strategic
            exploration or a deeper transformation journey, we begin with
            sensemaking: understanding where you are, why you might feel stuck,
            and how to move forward toward a more resilient, regenerative
            future.
          </p>
        </div>
      </section>

      <section className="w-full max-w-[1448px] mx-auto px-4 md:px-8 lg:px-16 py-8 text-center">
        <h2
          className="font-sans font-bold text-[40px] leading-normal mb-12 text-black"
          style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
        >
          Explore Services
        </h2>
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 flex flex-col items-center text-center gap-4 w-[250px] min-h-[250px]"
            >
              <div className="relative w-[200px] h-[200px] shrink-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full max-w-[1448px] mx-auto px-4 md:px-8 lg:px-16 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-24 mb-24">
          <div className="flex-1 max-w-[480px]">
            <h3
              className="font-sans font-bold text-[40px] leading-normal mb-4 text-black"
              style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
            >
              {services[0].title}
            </h3>
            <p className="font-sans font-normal text-[18px] leading-[27.75px] text-black mb-6">
              {services[0].subtitle}
            </p>
            <p className="font-sans text-[16px] leading-[1.4] text-black">
              {services[0].description}
            </p>
          </div>
          <div className="relative w-full lg:w-[473px] h-[483px] shrink-0">
            <Image
              src={anticipateImage}
              alt="Anticipate"
              fill
              className="object-cover grayscale"
              unoptimized
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-24 mb-24">
          <div className="relative w-full lg:w-[473px] h-[483px] shrink-0 order-2 lg:order-1">
            <Image
              src={adaptImage}
              alt="Adapt"
              fill
              className="object-cover grayscale"
              unoptimized
            />
          </div>
          <div className="flex-1 max-w-[480px] order-1 lg:order-2">
            <h3
              className="font-sans font-bold text-[40px] leading-normal mb-4 text-black"
              style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
            >
              {services[1].title}
            </h3>
            <p className="font-sans font-normal text-[18px] leading-[27.75px] text-black mb-6">
              {services[1].subtitle}
            </p>
            <p className="font-sans text-[16px] leading-[1.4] text-black">
              {services[1].description}
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-24 mb-24">
          <div className="flex-1 max-w-[480px]">
            <h3
              className="font-sans font-bold text-[40px] leading-normal mb-4 text-black"
              style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
            >
              {services[2].title}
            </h3>
            <p className="font-sans font-normal text-[18px] leading-[27.75px] text-black mb-6">
              {services[2].subtitle}
            </p>
            <p className="font-sans text-[16px] leading-[1.4] text-black">
              {services[2].description}
            </p>
          </div>
          <div className="relative w-full lg:w-[473px] h-[483px] shrink-0">
            <Image
              src={transformImage}
              alt="Transform"
              fill
              className="object-cover grayscale"
              unoptimized
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-24 mb-24">
          <div className="relative w-full lg:w-[473px] h-[483px] shrink-0 order-2 lg:order-1">
            <Image
              src={transcendImage}
              alt="Transcend"
              fill
              className="object-cover grayscale"
              unoptimized
            />
          </div>
          <div className="flex-1 max-w-[480px] order-1 lg:order-2">
            <h3
              className="font-sans font-bold text-[31.72px] leading-normal mb-4 text-black"
              style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
            >
              {services[3].title}
            </h3>
            <p className="font-sans font-normal text-[18px] leading-[27.75px] text-black mb-6">
              {services[3].subtitle}
            </p>
            <p className="font-sans text-[16px] leading-[1.4] text-black">
              {services[3].description}
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-16" style={{ backgroundColor: '#EFEBE7' }}>
        <div className="w-full max-w-[1448px] mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1 max-w-[708px]">
              <h2
                className="font-sans font-bold text-[36px] leading-[36.48px] mb-6 text-black"
                style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
              >
                The Inner Dimension
              </h2>
              <p className="font-sans font-normal text-[16px] leading-[1.7] text-black mb-6">
                Every transformation starts from within
              </p>
              <div className="font-sans text-[18px] leading-[27.75px] text-black space-y-4 mb-8">
                <p>
                  The AATT framework guides organizations through systemic
                  change — but lasting transformation also depends on the inner
                  work of awareness, empathy, and purpose.
                </p>
                <p>
                  Through my sister platform,{' '}
                  <a
                    href="https://www.dotsdirectory.com"
                    className="underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    The Dots Directory
                  </a>
                  , I curate resources to help individuals strengthen the inner
                  capacities that make outer change possible.
                </p>
              </div>
              <button
                className="px-8 py-5 text-black rounded-[40px] border border-black bg-[#EFEBE7] text-[15px] hover:bg-black hover:text-white transition-colors cursor-pointer flex items-center gap-2"
                style={{ height: '62.64px' }}
              >
                Explore The Dots Directory
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 5.5H10M10 5.5L6 1.5M10 5.5L6 9.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="relative w-[252px] h-[248px] shrink-0">
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <Image
                  src={innerDimensionImage}
                  alt="Inner Dimension"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full max-w-[1448px] mx-auto px-4 md:px-8 lg:px-16 py-16 text-center">
        <h2
          className="font-sans font-bold text-[36px] leading-normal mb-16 text-black"
          style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
        >
          The Change I Can Bring About For You
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-6">{IconComponent && <IconComponent />}</div>
                <h3
                  className="font-sans text-[16px] text-black mb-4 capitalize tracking-wide"
                  style={{ fontWeight: 700 }}
                >
                  {benefit.title}
                </h3>
                <p className="font-sans text-[13px] leading-[1.7] text-black">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="w-full py-16" style={{ backgroundColor: '#343433' }}>
        <div className="w-full max-w-[1448px] mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="relative w-[248px] h-[248px] shrink-0">
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <Image
                  src={profileImage}
                  alt="Profile"
                  fill
                  className="object-cover grayscale"
                  unoptimized
                />
              </div>
            </div>
            <div className="flex-1 max-w-[708px]">
              <h2
                className="font-sans font-bold text-[36px] leading-[36.48px] mb-6"
                style={{
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  color: 'white'
                }}
              >
                Are you ready to start your transformation journey?
              </h2>
              <div
                className="font-sans text-[18px] leading-[27.75px] space-y-4 mb-8"
                style={{ color: 'white' }}
              >
                <p style={{ color: 'white' }}>
                  Each engagement is tailored to your unique context — combining
                  foresight, sustainability strategy, communication, and
                  leadership development to create the conditions for
                  meaningful, lasting transformation.
                </p>
                <p style={{ color: 'white' }}>
                  Every journey begins with a conversation. Let&apos;s explore
                  where you are now, what&apos;s shifting around you, and how we
                  can shape a resilient, regenerative future — together.
                </p>
              </div>
              <button
                className="px-8 py-5 text-[#343433] rounded-[40px] border border-white bg-white text-[14px] hover:bg-transparent hover:text-white transition-colors cursor-pointer flex items-center gap-2"
                style={{ height: '62.64px' }}
              >
                Book a Discovery Call
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 5.5H10M10 5.5L6 1.5M10 5.5L6 9.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
