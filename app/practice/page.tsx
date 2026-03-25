'use client';

import Image from 'next/image';
import styles from './page.module.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  ServiceIcon,
  OrganizationIcon,
  QuoteIcon,
  TestimonialIcon,
  ArrowLeftIcon,
  ArrowRightIcon
} from '../icons';
import {
  SensemakingIcon,
  SystemsIcon,
  StrategicIcon,
  DeepAdaptationIcon,
  RegenerativeLeadershipIcon,
  NarrativeTransformationIcon
} from '../serviceIcons';

// const heroImage =
//   'https://www.figma.com/api/mcp/asset/2e91af2f-fdd2-4bef-9f33-14a693c09484';
const heroImage = '/images/hero.png';
const profileImage = '/images/profile.png';
const newsletterImage = '/images/footer.png';
const testimonialAvatar =
  'https://www.figma.com/api/mcp/asset/68e9d432-71ae-4e72-85f3-3c299beb96b3';
const serviceIcon =
  'https://www.figma.com/api/mcp/asset/c70a16bf-cf98-401d-8039-d8483340c995';
const quoteIcon =
  'https://www.figma.com/api/mcp/asset/d5ff8cb6-15b5-43ee-9a81-0a8d234c63ec';

const services = [
  {
    title: 'Sensemaking',
    description:
      'Illuminating where you are by connecting patterns, perspectives, and signals in complexity to uncover meaning and guide wiser action.',
    icon: SensemakingIcon
  },
  {
    title: 'Systems & Future Foresight',
    description:
      "Understanding how change unfolds across interconnected systems — using horizon scanning, trend mapping, and scenario design to anticipate and prepare for what's next.",
    icon: SystemsIcon
  },
  {
    title: 'Strategic Resilience',
    description:
      'Building adaptive strategies and resilient structures that bend, not break, under pressure — enabling organisations to respond with clarity and evolve through change.',
    icon: StrategicIcon
  },
  {
    title: 'Deep Adaptation',
    description:
      'Guiding organisations to face disruption with honesty and courage — letting go of what no longer serves and redesigning for renewal and regeneration.',
    icon: DeepAdaptationIcon
  },
  {
    title: 'Regenerative Leadership',
    description:
      'Aligning inner development and organisational design with the principles of living systems — building cultures that regenerate people, purpose, and planet.',
    icon: RegenerativeLeadershipIcon
  },
  {
    title: 'Narrative transformation',
    description:
      'Rewriting the stories that shape our actions, cultures, and futures — facing collapse with honesty and imagination to seed the narratives of a new system.',
    icon: NarrativeTransformationIcon
  }
];

const testimonials = [
  {
    name: 'Annelies Seawell',
    role: 'Sustainability Analyst, IKEA',
    text: 'Chloe is a creative strategist with deep sustainability expertise and a gift for translating complex systems into compelling stories. A true partner in systems and behaviour change, she inspires better decisions and bold action for a more sustainable future.'
  },
  {
    name: 'Bruce Tonn',
    role: 'President, Three3',
    text: 'Chloe brings remarkable depth and originality to futures work — blending intellectual rigor with insight into the human and spiritual dimensions of transformation.'
  },
  {
    name: 'Anita de Horde',
    role: 'Executive Director, Finance for Biodiversity Foundation',
    text: 'Chloe transforms complexity into clarity, crafting strategies that inspire action and advance a nature-positive, sustainable future.'
  }
];

export default function Home() {
  return (
    <div className={styles.container}>
      <section
        className="relative w-full h-[709px] overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #E7E7E7 41.09%, #DCDCDC 100%)'
        }}
      >
        <Navbar />

        <div className="w-full max-w-[1448px] mx-auto px-4 md:px-8 lg:px-16 h-full">
          <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] h-full items-start gap-0 relative">
            <div className="relative z-10 pt-32 lg:pt-96">
              <h1
                className="font-sans font-bold text-[50px] leading-[60px] text-black whitespace-pre-wrap mb-6 max-w-[750px]"
                style={{
                  fontFeatureSettings: "'liga' off, 'clig' off"
                }}
              >
                Where thinking meets Reality
              </h1>

              <p className="font-sans font-medium text-[15px] lg:text-[22px] leading-normal text-black w-full max-w-[600px]">
                Where my thinking has been tested, applied, and refined in
                practice.
              </p>
            </div>

            <div className="relative h-full hidden lg:block">
              {/* CHANGED: 
            1. Removed 'pb-16' (This eliminates the gap at the bottom).
            2. Increased width to 'w-[160%]' (Scales image up so it reaches higher).
            3. Adjusted right to '-right-40' (Balances the increased width).
            4. Kept 'items-end' so it stays anchored to the bottom.
        */}
              <div className="absolute -right-40 top-0 bottom-0 w-[160%] max-w-none flex items-end">
                <div
                  className="absolute left-0 top-0 bottom-0 w-[400px] pointer-events-none z-10"
                  style={{
                    background:
                      'linear-gradient(180deg, #E7E7E7 41.09%, #DCDCDC 100%)',
                    maskImage:
                      'linear-gradient(to right, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.3) 20%, rgba(0, 0, 0, 0.2) 40%, rgba(0, 0, 0, 0.1) 60%, rgba(0, 0, 0, 0.05) 80%, transparent 100%)',
                    WebkitMaskImage:
                      'linear-gradient(to right, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.3) 20%, rgba(0, 0, 0, 0.2) 40%, rgba(0, 0, 0, 0.1) 60%, rgba(0, 0, 0, 0.05) 80%, transparent 100%)'
                  }}
                />
                <div
                  className="absolute left-0 top-0 right-0 h-[100px] pointer-events-none z-10"
                  style={{
                    background:
                      'linear-gradient(180deg, #E7E7E7 41.09%, #DCDCDC 100%)',
                    maskImage:
                      'linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.3) 30%, rgba(0, 0, 0, 0.2) 60%, rgba(0, 0, 0, 0.1) 80%, transparent 100%)',
                    WebkitMaskImage:
                      'linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.3) 30%, rgba(0, 0, 0, 0.2) 60%, rgba(0, 0, 0, 0.1) 80%, transparent 100%)'
                  }}
                />
                <Image
                  src={heroImage}
                  alt="Hero"
                  width={1204}
                  height={723}
                  className="object-contain w-full h-full relative z-0"
                  priority
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full max-w-[1448px] mx-auto px-4 md:px-8 lg:px-16 py-16">
        <div className="mb-32">
          <h2
            className="font-sans font-bold text-[36px] leading-normal mb-6 text-black max-w-[800px]"
            style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
          >
            The ground is shifting beneath us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-32 items-start">
            <div>
              <p className="font-sans text-lg text-black leading-relaxed max-w-[568px]">
                It can feel as if civilisation&apos;s collapse is speeding
                toward us — faster than our systems, leaders, or imaginations
                can keep up. Climate disruption, technological acceleration,
                social fragmentation, and economic fragility are not separate
                crises, but interconnected forces shaping a single, turbulent
                reality. The ground beneath us — our assumptions, institutions,
                and even our sense of progress — is shifting. What once felt
                solid now feels uncertain. So how do we prepare for what&apos;s
                coming?
              </p>
            </div>
            <div>
              <p className="font-sans text-lg text-black leading-relaxed max-w-[554px]">
                Perhaps by learning to see differently — to recognise that the
                turbulence around us is not just an ending, but a turning. When
                we look beneath the noise, coherence begins to emerge from
                complexity, and possibility reveals itself in the cracks.
                Uncertainty doesn&apos;t have to mean chaos; it can be a
                catalyst for transformation. My work begins here — helping
                people and organisations find steadier footing in shifting
                terrain, strengthen their adaptive capacity, and move toward
                futures that are not only resilient, but regenerative.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full py-16" style={{ backgroundColor: '#EFEBE7' }}>
        <div className="w-full max-w-[1448px] mx-auto pl-6 md:pl-12 lg:pl-24 pr-0 flex flex-col md:flex-row gap-16 lg:gap-32 items-start">
          <div className="relative w-full md:w-[400px] h-[520px] shrink-0 grayscale">
            <Image
              src={profileImage}
              alt="Chloe Hill"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <div className="flex-1 max-w-[674px]">
            <h2 className="font-sans font-bold text-4xl lg:text-5xl leading-tight mb-8 text-black whitespace-pre-wrap">
              Learn from the chaos.{'\n'}Thrive in the change.
            </h2>
            <div className="space-y-6 text-lg text-black leading-[2.5]">
              <p>
                Hi, I&apos;m Chloe — a sustainability transformations strategist
                working at the intersection of systems change, futures thinking,
                and conscious leadership. Over the past two decades, I&apos;ve
                helped leaders and mission-driven organisations — from global
                institutions to emerging innovators — make sense of complexity
                and turn insight into action. My work blends strategic
                communications, deep sustainability expertise, foresight, and
                inner transformation practices to help teams anticipate
                what&apos;s next, adapt with clarity, and transform how they
                lead and create impact. I&apos;ve supported organisations
                shaping the global sustainability movement to craft impact
                narratives, design resilient strategies, and embed regenerative
                principles — building adaptive cultures and futures grounded in
                purpose and possibility
              </p>
            </div>

            <div className="flex flex-row items-center align-center gap-8 mt-8">
              <a href="#" className="text-lg text-black">
                Ready to face the chaos with more clarity?
              </a>
              <button className="px-9 py-4 text-black rounded-[40px] bg-[#FFF] text-lg hover:bg-black hover:text-white transition-colors cursor-pointer">
                Book A Discovery Call
              </button>
            </div>
          </div>
        </div>
      </div>

      <section className="w-full max-w-[1448px] mx-auto px-4 md:px-8 lg:px-16 py-16 text-center">
        <h2 className="font-sans font-bold text-4xl lg:text-[40px] leading-normal text-black mb-12 whitespace-pre-wrap">
          Build the capacity to see clearly, adapt wisely,{'\n'}and lead
          regeneratively.
        </h2>
        <p className="font-sans text-xl leading-relaxed text-black mb-16 max-w-[902px] mx-auto">
          I do this through six interconnected disciplines that help leaders
          navigate complexity and create meaningful, lasting change.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 mb-10">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="p-6 flex flex-col items-center text-center gap-4 h-[340px]"
              >
                <div className="shrink-0">
                  {IconComponent && <IconComponent />}
                </div>
                <h3 className="font-sans font-semibold text-xl text-black capitalize tracking-wide min-w-full">
                  {service.title}
                </h3>
                <p className="font-sans text-base leading-relaxed text-black min-w-full">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
        <a
          href="#"
          className="inline-block text-lg border-b"
          style={{ color: '#4F0E0E', borderColor: '#4F0E0E' }}
        >
          Learn More About My Services
        </a>
      </section>

      <section className="w-full max-w-[1448px] mx-auto px-4 md:px-8 lg:px-16 py-16 text-center">
        <h2 className="font-sans font-bold text-4xl leading-normal text-black mb-12">
          Organisations I have Supported
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-8">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="bg-[#D5D5D5] h-[90px] rounded flex items-center justify-center"
            >
              <div className="relative">
                <OrganizationIcon />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full max-w-[1448px] mx-auto px-4 md:px-8 lg:px-16 py-16">
        <div className="flex flex-col gap-8 mb-12">
          <h2 className="font-sans font-bold text-4xl leading-normal text-black max-w-[400px]">
            Nice things people say
          </h2>
          <div className="flex gap-4 self-end">
            <button className="hover:opacity-75 transition-opacity">
              <ArrowLeftIcon />
            </button>
            <button className="hover:opacity-75 transition-opacity">
              <ArrowRightIcon />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col gap-6">
              <div className="relative w-[102px] h-[112px]">
                <div className="absolute inset-0">
                  <TestimonialIcon />
                </div>
              </div>
              <div>
                <p className="font-sans font-bold text-xl text-black mb-1">
                  {testimonial.name}
                </p>
                <p className="font-sans text-sm text-gray-600 mb-4">
                  {testimonial.role}
                </p>
                <p className="font-sans text-base leading-relaxed text-black">
                  {testimonial.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full max-w-[1448px] mx-auto px-4 md:px-8 lg:px-16 py-16">
        <div className="bg-[#343433] p-16">
          <div className="flex flex-col gap-12">
            <div style={{ filter: 'brightness(0) invert(1)' }}>
              <QuoteIcon />
            </div>
            <div>
              <p
                className="font-sans text-4xl lg:text-5xl leading-tight mb-12"
                style={{ color: 'white' }}
              >
                Do not lose heart, we were made for these times.
              </p>
              <p
                className="font-sans text-3xl lg:text-4xl text-right"
                style={{ color: 'white' }}
              >
                — Clarissa Pinkola Estes
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full  py-16 lg:py-24">
        <div className="w-full max-w-[1448px] mx-auto px-4 md:px-8 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex flex-col justify-center max-w-[600px]">
            <h2
              className="font-sans font-bold text-3xl lg:text-4xl mb-6"
              style={{ color: '#C8B9AF' }}
            >
              Join me where change takes shape
            </h2>
            <p className="font-sans text-lg text-black mb-10 leading-relaxed">
              Subscribe to my monthly newsletter, The Turning Point —
              reflections, tools, and updates from my work and the world around
              it, sent with intention, not noise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-8 py-4 text-black placeholder:text-black/60 focus:outline-none"
                style={{
                  borderRadius: '100px',
                  border: '1px solid rgba(79, 14, 14, 0.40)',
                  background: 'rgba(255, 255, 255, 0.60)'
                }}
              />
              <button
                className="px-10 py-4 bg-transparent text-black font-sans font-medium hover:bg-black hover:text-white transition-colors"
                style={{
                  borderRadius: '40px',
                  border: '1.333px solid #4F0E0E'
                }}
              >
                Subscribe
              </button>
            </div>
          </div>
          <div className="relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] shrink-0 rounded-full overflow-hidden">
            <Image
              src={newsletterImage}
              alt="Newsletter"
              fill
              className="object-cover grayscale"
              unoptimized
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
