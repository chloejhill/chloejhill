'use client';

import Image from 'next/image';
import { useId, useMemo, useState } from 'react';
import styles from './page.module.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  OrganizationIcon,
  QuoteIcon,
  TestimonialIcon,
  ArrowLeftIcon,
  ArrowRightIcon
} from '../icons';
import { usePayloadOverrides } from '@/lib/usePayloadOverrides';

// const heroImage =
//   'https://www.figma.com/api/mcp/asset/2e91af2f-fdd2-4bef-9f33-14a693c09484';
const heroImage = '/images/hero.png';
const profileImage = '/images/profile.png';
const startTransImage = '/images/services/starttrans.png';
const newsletterImage = '/images/footer.png';
const dashImage = '/images/home/dash.png';
const complexityImage = '/images/practice/complexity.png';
const workShowsUpImage = '/images/practice/showsup.png';
const contextImage = '/images/practice/context.png';

const supportedOrganisationLogos = [
  'CBD.png',
  'Club or Rome.png',
  'EC.jpg',
  'FFB.png',
  'GAIN.jpg',
  'IUCN.png',
  'Metabolic.png',
  'NDC.jpg',
  'PBL.png',
  'SEEA.png',
  'UNEP.jpg',
  'WB.jpg',
  'WWF.jpg',
  'n4h.png',
  'nesta.png'
];

const PatternIconOne = ({ className = '' }: { className?: string }) => (
  <svg
    viewBox="0 0 83 88"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M39.9418 54.4996L25.2518 50.7214C16.8818 46.9332 5.71181 39.7932 6.36181 29.6485L8.44183 28.7262L73.9918 28.1709C79.1918 31.6715 65.1318 47.429 60.6418 48.7479L45.9418 53.5079H79.4418C85.4118 53.5079 81.7318 63.96 80.1118 67.064C66.0318 94.2058 17.8718 95.1677 3.09179 68.72C1.64179 66.1219 -2.68818 54.4996 2.43182 54.4996H39.9318H39.9418ZM63.9418 35.658H17.9418C28.3918 48.986 53.6718 49.6008 63.9418 35.658ZM71.9318 62.4329L18.4418 61.4313L8.96178 62.9188C14.0818 70.6042 21.7618 76.6831 30.8918 78.835C45.4818 82.2761 65.5318 77.1194 71.9318 62.4329Z"
      fill="#C8BAAD"
    />
    <path
      d="M37.7225 0.19594C41.0725 -0.210642 41.9925 -0.06188 45.0025 1.38595C58.0325 7.67309 52.2125 25.5032 37.5425 23.6686C24.2025 22.0026 23.5825 1.9016 37.7325 0.19594H37.7225ZM38.6425 8.02012C35.4725 8.79361 34.8525 13.8015 37.9325 15.3386C44.6925 18.7202 46.0825 6.20537 38.6425 8.02012Z"
      fill="#C8BAAD"
    />
  </svg>
);

const PatternIconTwo = ({ className = '' }: { className?: string }) => (
  <svg
    viewBox="0 0 68 88"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M34.6895 52.2472L27.3695 44.6898C14.0595 54.0836 -1.32052 63.9678 15.6695 78.7172C18.3695 81.0632 25.9895 83.342 22.7095 87.3803C18.4095 90.1782 8.53951 82.7747 5.69951 79.6402C-8.59049 63.8428 6.71948 47.6801 21.6695 39.7381V38.3247C14.9095 34.9499 0.519459 11.1432 9.64946 6.56649C16.1795 3.28779 14.1795 11.7778 14.8995 15.0277C16.4795 22.1427 22.7795 28.3636 28.3095 32.9692C32.5195 33.6807 49.8795 3.96084 63.1695 16.691C75.4795 28.4886 56.2195 46.5936 45.7895 52.7183C51.8295 60.3622 53.1095 78.5153 40.9495 80.8805C15.0395 85.9284 15.7195 60.718 34.6795 52.2376L34.6895 52.2472ZM33.6895 39.7477C37.3195 39.4689 39.1595 45.9686 41.3195 46.3724C48.6795 44.4687 64.6095 28.8828 59.2495 21.4408C54.1695 14.3931 37.4295 35.8921 33.6995 38.3343V39.7477H33.6895ZM37.4195 58.1892C31.0695 60.1891 22.0795 72.9674 32.4095 75.1596C43.3595 77.4768 45.1995 65.1312 39.7095 58.4584L37.4095 58.1892H37.4195Z"
      fill="#C8BAAD"
    />
    <path
      d="M36.3293 2.61492C46.5293 11.403 32.8592 25.9312 23.0292 16.3643C15.1092 8.65311 26.3693 -5.96163 36.3293 2.61492Z"
      fill="#C8BAAD"
    />
  </svg>
);

const PatternIconThree = ({ className = '' }: { className?: string }) => (
  <svg
    viewBox="0 0 47 88"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M14.4157 12.4815C14.9064 23.9044 8.21459 38.5106 7.80745 50.696C7.67173 54.6715 8.23547 59.254 8.7992 63.222C9.63437 69.1148 13.9772 80.0862 13.8207 84.8241C13.7685 86.4306 12.9437 87.8816 10.9602 88C8.1102 87.7927 6.99315 83.9209 6.10579 81.8481C1.90908 72.0835 -0.700804 56.6185 0.165682 46.2616C1.2514 33.2767 8.07888 22.4534 6.98273 8.5431C6.80525 6.30738 3.23491 -0.00739654 8.26679 6.50361e-06C12.4531 6.50361e-06 14.3113 9.78682 14.4261 12.4815H14.4157Z"
      fill="#C8BAAD"
    />
    <path
      d="M46.6537 10.2088C48.5954 22.7496 41.7784 34.017 40.9014 46.2617C39.9932 58.9727 43.1355 71.891 46.8103 84.0912L43.8976 86.6601C39.9619 86.6749 36.0053 72.1649 35.2432 69.0186C29.3344 44.6034 39.2938 36.275 40.0767 15.9166C40.2124 12.2965 36.4646 1.76197 40.6613 0.836587C44.2526 0.0444607 46.2883 7.90647 46.6432 10.2014L46.6537 10.2088Z"
      fill="#C8BAAD"
    />
    <path
      d="M22.3815 1.61403L25.1062 0.90332C27.3403 1.26607 29.2925 7.58831 29.6892 9.45387C32.6018 23.2309 23.749 37.4003 23.0705 51.4439C22.5067 63.1111 27.476 74.1195 28.9271 85.4165L26.9018 86.6972C23.6029 86.9563 22.3815 81.9149 21.3793 79.6273C16.9633 69.537 15.2303 57.1591 16.41 46.3876C17.3496 37.8223 22.2144 28.7314 23.0809 20.3734C23.7282 14.1178 22.5067 7.83259 22.371 1.62144L22.3815 1.61403Z"
      fill="#C8BAAD"
    />
  </svg>
);

const PatternIconFour = ({ className = '' }: { className?: string }) => (
  <svg
    viewBox="0 0 50 88"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M23.7058 21.7061C28.5858 20.7478 37.5858 31.9997 40.3758 36.0697C47.9558 47.1361 52.3258 60.8609 46.1358 73.782C33.4358 100.284 -4.31415 86.9814 0.405855 56.5436C1.76586 47.7853 15.2258 23.3753 23.6958 21.7061H23.7058ZM40.3758 72C47.1058 59.8105 33.27 37.3565 24.5 29C15.71 37.7995 -0.340001 62.695 11 73.782C20 86 33 82.5 40.3758 72Z"
      fill="#C8BAAD"
    />
    <path
      d="M23.6957 0.0573878C31.2157 -1.04513 34.4157 14.0913 25.3257 15.1217C16.2357 16.1521 15.0557 1.32477 23.6957 0.0573878Z"
      fill="#C8BAAD"
    />
    <path
      d="M22.6956 54.7092C33.9256 52.3496 36.9656 70.8039 25.2056 71.8549C15.3056 72.741 13.8956 56.5639 22.6956 54.7092Z"
      fill="#C8BAAD"
    />
  </svg>
);

const IllustrationPlusIcon = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="15" cy="15" r="14.5" stroke="#4F0E0E" />
    <path d="M15 5.71436V24.2858" stroke="#4F0E0E" />
    <path d="M24.2871 15H5.71568" stroke="#4F0E0E" />
  </svg>
);

const patternCards = [
  {
    title: 'Clarity in Complexity',
    description:
      'Supporting shared understanding of what is unfolding so leaders can orient priorities and make grounded decisions under uncertainty.',
    icon: PatternIconOne,
    iconSize: 'w-[64px] h-[64px]'
  },
  {
    title: 'Resilience in Motion',
    description:
      'Strengthening adaptive capacity across strategy, culture, and ways of working so organisations can respond without losing coherence or purpose.',
    icon: PatternIconTwo,
    iconSize: 'w-[64px] h-[64px]'
  },
  {
    title: 'From Stuck to Movement',
    description:
      'Helping organisations move out of fragmentation and reactivity through clearer narratives, aligned priorities, and renewed focus.',
    icon: PatternIconThree,
    iconSize: 'w-[56px] h-[56px]'
  },
  {
    title: 'Beyond Short-Term Fixes',
    description:
      'Contributing to transformation that is strategic, cultural, and human, rather than temporary or superficial.',
    icon: PatternIconFour,
    iconSize: 'w-[56px] h-[56px]'
  }
];

const illustrations = [
  {
    title: 'Nature-positive programme positioning (2025)',
    description:
      'Supported the development of strategic framing and narrative coherence for a forthcoming programme operating at the intersection of finance, biodiversity, and global policy.'
  },
  {
    title: 'UN natural capital accounting communications (2020–2021)',
    description:
      'Contributed to analysis, synthesis, and editorial development across reports, briefs, and communication assets supporting the integration of ecosystem values into decision-making.'
  },
  {
    title: 'Futures and trends research for sustainability transitions (2021)',
    description:
      'Conducted medium- to long-term trends research to inform strategic repositioning and future-facing inquiry within an innovation and policy context.'
  },
  {
    title:
      'Systems change narrative for multilateral collaboration (2019–2020)',
    description:
      'Supported the development of shared language and strategic framing across a multi-stakeholder initiative, helping align diverse actors around systems-level change rather than fragmented interventions.'
  },
  {
    title:
      'Strategic synthesis for climate and biodiversity finance initiatives (2022–2023)',
    description:
      'Contributed analytical synthesis and narrative alignment to initiatives working across climate, biodiversity, and finance, supporting clearer decision-making and coherence under conditions of complexity and uncertainty.'
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
  },
  {
    name: 'Rebecca Clements',
    role: 'Testimonial',
    text: 'Replace this text with Rebecca’s testimonial.'
  }
];

const testimonialHeadshots: Record<string, string> = {
  'Annelies Seawell': 'Annelies.jpeg',
  'Bruce Tonn': 'Bruce.jpg',
  'Anita de Horde': 'Anita.jpeg',
  'Rebecca Clements': 'rebecca-clements.jpg'
};

export default function Home() {
  const overrides = usePayloadOverrides('practice');
  const t = (key: string, fallback: string) =>
    overrides?.strings?.[key] || fallback;
  const img = (key: string, fallbackSrc: string) =>
    overrides?.images?.[key]?.src || fallbackSrc;
  const alt = (key: string, fallbackAlt: string) =>
    overrides?.images?.[key]?.alt || fallbackAlt;

  const accordionBaseId = useId();
  const [openIllustrationIndex, setOpenIllustrationIndex] = useState<
    number | null
  >(null);
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
    <div className={styles.container}>
      <section
        className="relative w-full h-[520px] md:h-[600px] overflow-hidden bg-[#E9E9E9] md:bg-[#E2E2E2]"
      >
        <Navbar />

        <div className="w-full max-w-[1448px] mx-auto px-4 md:px-8 lg:px-16 h-full">
          <div className="grid h-full grid-cols-1 grid-rows-[minmax(0,1fr)] gap-0 md:grid-cols-[60%_40%] relative">
            <div className="relative z-10 pt-28 md:pt-40">
              <h1
                className="font-normal text-[32px] md:text-[50px] leading-[1.15] md:leading-[1.2] text-[#4b3e43] whitespace-pre-wrap mb-6 max-w-[750px]"
                style={{
                  fontFamily: 'var(--font-lora), serif',
                  fontFeatureSettings: "'liga' off, 'clig' off"
                }}
              >
                {t('practice.hero.title', 'Where thinking meets Reality')}
              </h1>

              <p
                className="font-medium text-[18px] md:text-[25px] leading-[1.35] md:leading-normal text-[#4b3e43] w-full max-w-[460px]"
                style={{ fontFamily: 'var(--font-lora), serif' }}
              >
                {t(
                  'practice.hero.subtitle',
                  'Where my thinking has been tested, applied, and refined in practice.'
                )}
              </p>

              <div className="relative md:hidden mt-2 -mb-8 translate-y-0 -mx-4 h-[270px] w-[calc(100%+2rem)] max-w-none isolate">
                <Image
                  src={img('practice.hero.image', heroImage)}
                  alt={alt('practice.hero.image', 'Hero')}
                  fill
                  className="z-0 object-contain object-top"
                  priority
                  unoptimized
                />
                {/* Mobile: match desktop-style edge blend into hero bg (#E9E9E9); contained to image box so subtitle text above is unaffected. */}
                <div
                  className="pointer-events-none absolute left-0 top-0 bottom-0 z-1 w-[min(140px,32%)]"
                  style={{
                    backgroundColor: '#E9E9E9',
                    maskImage:
                      'linear-gradient(to right, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.55) 45%, transparent 100%)',
                    WebkitMaskImage:
                      'linear-gradient(to right, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.55) 45%, transparent 100%)'
                  }}
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute right-0 top-0 bottom-0 z-1 w-[min(140px,32%)]"
                  style={{
                    backgroundColor: '#E9E9E9',
                    maskImage:
                      'linear-gradient(to left, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.55) 45%, transparent 100%)',
                    WebkitMaskImage:
                      'linear-gradient(to left, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.55) 45%, transparent 100%)'
                  }}
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute left-0 right-0 top-0 z-1 h-[min(72px,22%)]"
                  style={{
                    backgroundColor: '#E9E9E9',
                    maskImage:
                      'linear-gradient(to bottom, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.55) 45%, transparent 100%)',
                    WebkitMaskImage:
                      'linear-gradient(to bottom, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.55) 45%, transparent 100%)'
                  }}
                  aria-hidden
                />
              </div>
            </div>

            <div className="relative z-0 hidden min-h-0 h-full md:block overflow-visible">
              {/* Row fills hero height; image uses object-bottom so the bitmap sits on the hero baseline. */}
              <div className="absolute -right-40 top-0 bottom-0 flex w-[160%] max-w-none items-stretch -translate-x-2">
                <Image
                  src={img('practice.hero.image', heroImage)}
                  alt={alt('practice.hero.image', 'Hero')}
                  width={1204}
                  height={723}
                  className="relative z-0 h-full w-full object-contain object-bottom"
                  priority
                  unoptimized
                />
                {/* Desktop: feather only the seam — solid hero bg at the true edge, then transparent (no dark mask over the photo). */}
                <div
                  className="pointer-events-none absolute left-0 top-0 bottom-0 z-1 w-[clamp(72px,11vw,120px)]"
                  style={{
                    background:
                      'linear-gradient(90deg, #E2E2E2 0%, rgba(226, 226, 226, 0.55) 38%, rgba(226, 226, 226, 0) 100%)'
                  }}
                  aria-hidden
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full max-w-[1448px] mx-auto px-4 md:px-12 lg:px-24 py-14 md:py-24 space-y-10 md:space-y-16 [&_p]:leading-[35px]! [&_ul]:leading-[35px]! [&_li]:leading-[35px]!">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
          <div className="w-full max-w-[460px] lg:justify-self-end">
            <h2
              className="font-normal text-[30px] md:text-[36px] lg:text-[40px] leading-normal text-[#1f1f1f] mb-4 md:whitespace-nowrap"
              style={{ fontFamily: 'var(--font-lora), serif' }}
            >
              <span className={styles.brushHighlight}>
                Working inside Complexity
              </span>
            </h2>
            <p
              className="text-[16px] font-normal leading-[110%] text-black max-w-[460px]"
              style={{
                color: '#000',
                fontFamily: 'Lora',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '35px'
              }}
            >
              My work is not about delivery against fixed methods or predefined
              solutions. It is about working inside complexity supporting
              understanding, alignment, and responsible action in contexts
              shaped by uncertainty, constraint, and long-term risk.
            </p>
            <p
              className="text-[16px] font-normal leading-[110%] text-black max-w-[460px] mt-4"
              style={{
                color: '#000',
                fontFamily: 'Lora',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '35px'
              }}
            >
              I engage through applied research, collaboration, advisory work,
              and strategic synthesis, often alongside organisations navigating
              systemic change.
            </p>
          </div>
          <div className="relative bg-[#EFEBE7] h-[300px] md:h-[360px] lg:h-[420px] max-w-[460px] w-full overflow-hidden lg:justify-self-start">
            <Image
              src={complexityImage}
              alt="Complexity visual"
              fill
              className="object-contain p-8"
              unoptimized
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
          <div className="relative bg-[#EFEBE7] h-[300px] md:h-[360px] lg:h-[420px] max-w-[460px] w-full overflow-hidden order-2 lg:order-1 lg:justify-self-end">
            <Image
              src={workShowsUpImage}
              alt="Work in practice visual"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <div className="order-1 lg:order-2 w-full max-w-[460px] lg:justify-self-start">
            <h2
              className="font-normal text-[30px] md:text-[40px] leading-normal text-[#1f1f1f] mb-4"
              style={{ fontFamily: 'var(--font-lora), serif' }}
            >
              <span className={styles.brushHighlight}>
                How My Work Shows Up
              </span>
            </h2>
            <p
              className="text-[16px] font-normal leading-[110%] text-black max-w-[460px] mb-2"
              style={{
                color: '#000',
                fontFamily: 'Lora',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '35px'
              }}
            >
              Rather than offering a single methodology, my practice takes
              different forms depending on context, timing, and need.
            </p>
            <p
              className="text-[16px] font-normal leading-[110%] text-black max-w-[460px] mb-2"
              style={{
                color: '#000',
                fontFamily: 'Lora',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '35px'
              }}
            >
              Typical contributions include:
            </p>
            <ul
              className="list-disc pl-5 text-[16px] font-normal leading-[110%] text-black max-w-[460px] space-y-1"
              style={{
                color: '#000',
                fontFamily: 'Lora',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '35px'
              }}
            >
              <li>
                Analysis and synthesis of complex social, ecological, and
                organisational dynamics
              </li>
              <li>
                Futures-oriented research to explore emerging risks, signals,
                and long-term implications
              </li>
              <li>
                Narrative and strategic communications to support coherence,
                legitimacy, and shared understanding
              </li>
              <li>
                Resilience and adaptation framing for organisations operating
                under pressure
              </li>
              <li>
                Judgement and advisory support in moments of transition,
                ambiguity, or decision-making
              </li>
            </ul>
            <p
              className="text-[16px] font-normal leading-[110%] text-black max-w-[460px] mt-3"
              style={{
                color: '#000',
                fontFamily: 'Lora',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '35px'
              }}
            >
              This work is shaped by inquiry rather than prescription, and by
              discernment rather than speed.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
          <div className="w-full max-w-[460px] lg:justify-self-end">
            <h2
              className="font-normal text-[30px] md:text-[40px] leading-normal text-[#1f1f1f] mb-4"
              style={{ fontFamily: 'var(--font-lora), serif' }}
            >
              <span className={styles.brushHighlight}>Context of practice</span>
            </h2>
            <p
              className="text-[16px] font-normal leading-[110%] text-black max-w-[460px] mb-2"
              style={{
                color: '#000',
                fontFamily: 'Lora',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '35px'
              }}
            >
              My applied work has taken place across a range of systems and
              domains, including:
            </p>
            <ul
              className="list-disc pl-5 text-[16px] font-normal leading-[110%] text-black max-w-[460px] space-y-1"
              style={{
                color: '#000',
                fontFamily: 'Lora',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '35px'
              }}
            >
              <li>Multilateral and UN systems</li>
              <li>International development and the impact sector</li>
              <li>Biodiversity, climate, and nature-positive finance</li>
              <li>Circular economy and producer responsibility</li>
              <li>Nature-based solutions and ecosystem governance</li>
              <li>Futures and trends research</li>
              <li>Strategic communications and policy-facing narratives</li>
            </ul>
            <p
              className="text-[16px] font-normal leading-[110%] text-black max-w-[460px] mt-3"
              style={{
                color: '#000',
                fontFamily: 'Lora',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '35px'
              }}
            >
              These contexts are where many of the questions explored on the
              Thinking page first emerged.
            </p>
          </div>
          <div className="relative bg-[#EFEBE7] h-[300px] md:h-[360px] lg:h-[420px] max-w-[460px] w-full overflow-hidden lg:justify-self-start">
            <Image
              src={contextImage}
              alt="Context visual"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </div>
      </section>

      <section
        className="w-full py-14 md:py-24 bg-[#EFEBE7] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/background.png')" }}
      >
        <div className="w-full max-w-[1448px] mx-auto px-4 md:px-8 lg:px-16">
          <h2
            className="font-normal text-[30px] md:text-[40px] leading-[1.2] text-black mb-10 md:mb-16"
            style={{ fontFamily: 'var(--font-lora), serif' }}
          >
            Patterns I see Emerge from my Practice
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {patternCards.map((item) => (
              <div key={item.title}>
                <div
                  className={`${item.iconSize} mb-8 flex items-center justify-center`}
                >
                  <item.icon className="w-full h-full" />
                </div>
                <h3
                  className="font-medium text-[17.283px] tracking-[0.5185px] leading-normal text-black mb-3"
                  style={{ fontFamily: 'var(--font-lora), serif' }}
                >
                  {item.title}
                </h3>
                <p
                  className="font-normal text-[13.827px] leading-[110%] text-black"
                  style={{
                    color: '#000',
                    fontFamily: 'Lora',
                    fontSize: '16px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: '35px'
                  }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full max-w-[1448px] mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-16 text-center">
        <h2
          className="font-normal text-[30px] md:text-[40px] leading-normal text-[#1f1f1f] mb-8 md:mb-12"
          style={{ fontFamily: 'var(--font-lora), serif' }}
        >
          <span className={styles.brushHighlight}>
            Organisations I have Supported
          </span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-8">
          {supportedOrganisationLogos.map((fileName) => (
            <div
              key={fileName}
              className="bg-[#F8F6F4] h-[90px] rounded flex items-center justify-center px-4"
            >
              <Image
                src={`/images/Logos/${encodeURIComponent(fileName)}`}
                alt={fileName.replace(/\.(png|jpg|jpeg|webp|svg)$/i, '')}
                width={160}
                height={60}
                className="h-[46px] w-auto object-contain grayscale contrast-125 opacity-70 mix-blend-multiply"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="w-full py-6 md:py-24 bg-[#EFEBE7] px-4 md:px-0">
        <div className="relative w-full max-w-[1448px] mx-auto min-h-[700px] sm:min-h-[760px] lg:min-h-0 pl-0 pr-4 md:pr-8 lg:pr-16 lg:grid lg:grid-cols-[35%_65%] gap-8 md:gap-10 items-start">
          <div className="absolute z-0 -ml-4 w-[calc(100%+1rem)] max-w-[640px] h-[640px] sm:h-[700px] top-6 sm:top-8 md:-ml-10 md:w-[calc(100%+2.5rem)] lg:relative lg:max-w-none lg:-ml-16 lg:w-[calc(100%+4rem)] lg:h-[820px] lg:top-auto lg:-mt-48 xl:-ml-20 xl:w-[calc(100%+5rem)] 2xl:-ml-24 2xl:w-[calc(100%+6rem)]">
            <Image
              src="/images/illustrations.png"
              alt="Decorative pattern"
              fill
              className="object-contain object-left"
              unoptimized
            />
          </div>
          <div className="relative z-10 pt-[16px] sm:pt-[32px] lg:pt-0 lg:col-start-2">
            <h2
              className="font-normal text-[30px] md:text-[40px] leading-tight md:leading-[35px] text-black mb-8 md:mb-10"
              style={{ fontFamily: 'var(--font-lora), serif' }}
            >
              Illustrations of Practice
            </h2>
            <div className="border-b border-[#C8BAAD] mb-0" />
            <div>
              {illustrations.map((item, index) => {
                const isOpen = openIllustrationIndex === index;
                const panelId = `${accordionBaseId}-illustration-${index}`;

                return (
                  <div
                    key={item.title}
                    className="py-6 border-b border-[#C8BAAD]"
                  >
                    <div className="flex items-center justify-between">
                      <p
                        className="font-medium text-[18px] leading-[35px] text-black pr-6"
                        style={{ fontFamily: 'var(--font-lora), serif' }}
                      >
                        {item.title}
                      </p>
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        aria-label={`${isOpen ? 'Collapse' : 'Expand'} ${item.title}`}
                        className="shrink-0 transition-transform duration-200"
                        onClick={() =>
                          setOpenIllustrationIndex((current) =>
                            current === index ? null : index
                          )
                        }
                      >
                        <span
                          className={[
                            'inline-block transition-transform duration-200',
                            isOpen ? 'rotate-45' : 'rotate-0'
                          ].join(' ')}
                        >
                          <IllustrationPlusIcon />
                        </span>
                      </button>
                    </div>
                    <div
                      id={panelId}
                      role="region"
                      aria-label={item.title}
                      className={[
                        'grid transition-[grid-template-rows,opacity] duration-300 ease-out',
                        isOpen
                          ? 'grid-rows-[1fr] opacity-100 mt-2'
                          : 'grid-rows-[0fr] opacity-0'
                      ].join(' ')}
                    >
                      <div className="overflow-hidden">
                        <p
                          className="font-normal text-[16px] leading-[110%] text-black max-w-[760px]"
                          style={{
                            color: '#000',
                            fontFamily: 'Lora',
                            fontSize: '16px',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            lineHeight: '35px'
                          }}
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full max-w-[1448px] mx-auto px-4 md:px-8 lg:px-16 pt-12 pb-0 -mb-56 md:pt-16 md:pb-2 md:-mb-28">
        <div className="flex flex-col gap-8 mb-12">
          <h2
            className="font-normal text-[30px] md:text-[40px] leading-[1.2] text-[#1f1f1f] max-w-[520px]"
            style={{ fontFamily: 'var(--font-lora), serif' }}
          >
            <span className={styles.brushHighlight}>
              Nice things people say
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
              <div key={testimonial.name} className="w-full shrink-0">
                <div className="flex flex-col gap-6">
                  <div className="relative w-[102px] h-[112px]">
                    {testimonialHeadshots[testimonial.name] ? (
                      <Image
                        src={`/images/Testimony%20Headshots/${encodeURIComponent(testimonialHeadshots[testimonial.name])}`}
                        alt={testimonial.name}
                        fill
                        className="object-cover rounded-[18px] grayscale contrast-125 opacity-90 mix-blend-multiply"
                      />
                    ) : (
                      <div className="absolute inset-0">
                        <TestimonialIcon />
                      </div>
                    )}
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
                      className="font-normal text-[16px] leading-[110%] text-black"
                      style={{
                        color: '#000',
                        fontFamily: 'Lora',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        lineHeight: '35px'
                      }}
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
            <div key={testimonial.name} className="flex flex-col gap-6">
              <div className="relative w-[102px] h-[112px]">
                {testimonialHeadshots[testimonial.name] ? (
                  <Image
                    src={`/images/Testimony%20Headshots/${encodeURIComponent(testimonialHeadshots[testimonial.name])}`}
                    alt={testimonial.name}
                    fill
                    className="object-cover rounded-[18px] grayscale contrast-125 opacity-90 mix-blend-multiply"
                  />
                ) : (
                  <div className="absolute inset-0">
                    <TestimonialIcon />
                  </div>
                )}
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
                  className="font-normal text-[16px] leading-[110%] text-black"
                  style={{
                    color: '#000',
                    fontFamily: 'Lora',
                    fontSize: '16px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: '35px'
                  }}
                >
                  {testimonial.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative w-full overflow-hidden lg:overflow-visible">
        <div className="relative w-full h-[1120px] md:h-[760px] lg:h-[900px]">
          <Image
            src="/images/backround2.png"
            alt=""
            fill
            className="object-fill object-top"
            unoptimized
          />
          <div className="absolute inset-0 z-10">
            <div className="w-full max-w-[1448px] mx-auto px-4 md:px-8 lg:px-16 pt-72 md:pt-56 lg:pt-84">
              <div className="pl-4 md:pl-10 lg:pl-20 pr-2 md:pr-4 lg:pr-8">
                <h2
                  className="pt-12 md:pt-0 font-normal text-[30px] md:text-[40px] lg:text-[45px] leading-[1.2] md:leading-[46px] text-black mb-6 md:mb-8"
                  style={{ fontFamily: 'var(--font-lora), serif' }}
                >
                  Connecting back to Thinking
                </h2>
                <div
                  className="font-normal text-[16px] md:text-[18px] leading-[110%] text-black max-w-[920px] mb-6 md:mb-8"
                  style={{
                    color: '#000',
                    fontFamily: 'Lora',
                    fontSize: '16px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: '35px'
                  }}
                >
                  <p>
                    Practice is not separate from inquiry. It is where questions
                    are sharpened, assumptions tested, and frameworks revised.
                  </p>
                  <p className="mt-4">
                    Much of the thinking described elsewhere on this site -
                    including AATT, futures inquiry, and attention to the inner
                    dimension - has been shaped through engagement with real
                    systems under pressure.
                  </p>
                  <p className="mt-4">
                    Practice, for me, is not about implementation for its own
                    sake. It is about staying close to reality - learning from
                    systems as they move, strain, adapt, and sometimes fail.
                  </p>
                </div>
                <div
                  className="space-y-2 font-normal text-[17px] md:text-[24px] leading-[26px] md:leading-[35px] text-[#979797]"
                  style={{
                    fontFamily: 'var(--font-lora), serif',
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontStyle: 'normal'
                  }}
                >
                  <a
                    href="/thinking"
                    className="flex items-start gap-3 text-[#979797]!"
                    style={{ color: '#979797' }}
                  >
                    <span
                      className="relative w-[29px] h-[8px] shrink-0 mt-[13px]"
                      aria-hidden="true"
                    >
                      <Image
                        src={dashImage}
                        alt=""
                        fill
                        className="object-contain"
                        unoptimized
                      />
                    </span>
                    <span>
                      <span className="underline" style={{ color: '#979797' }}>
                        Thinking
                      </span>
                      {' — inquiry, frameworks, and research'}
                    </span>
                  </a>
                  <a
                    href="/about"
                    className="flex items-start gap-3 text-[#979797]!"
                    style={{ color: '#979797' }}
                  >
                    <span
                      className="relative w-[29px] h-[8px] shrink-0 mt-[13px]"
                      aria-hidden="true"
                    >
                      <Image
                        src={dashImage}
                        alt=""
                        fill
                        className="object-contain"
                        unoptimized
                      />
                    </span>
                    <span>
                      <span className="underline" style={{ color: '#979797' }}>
                        About
                      </span>
                      {' — background, philosophy, and learning stance'}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-0 bottom-[-72px] md:bottom-[-140px] lg:bottom-[-180px] w-[140px] md:w-[280px] lg:w-[360px] h-[220px] md:h-[360px] lg:h-[560px] z-20 pointer-events-none">
          <Image
            src="/images/leaf2.png"
            alt="Decorative leaf"
            fill
            className="object-contain object-bottom-right"
            unoptimized
          />
        </div>
      </section>

      <section className="w-full px-0 pt-0 pb-0 md:pt-0 md:pb-0 mb-[55px]">
        <div className="bg-[#343433] w-full md:w-[80%] mr-auto px-6 md:px-10 lg:px-16 py-12 md:py-16 lg:py-20 min-h-[320px] md:min-h-[360px] lg:min-h-[420px] flex flex-col md:flex-row gap-8 lg:gap-14 items-center text-white!">
          <div className="relative w-[168px] h-[168px] rounded-full overflow-hidden shrink-0">
            <Image
              src={startTransImage}
              alt="Chloe profile"
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
              If this resonates{' '}
            </p>
            <p
              className="text-[18px] leading-[35px] mt-4 max-w-[640px] text-white!"
              style={{ color: '#FFFFFF' }}
            >
              If you’re navigating complexity or transition and need a space for
              clear thinking, honest advice, or simply a sounding board, as well
              as support in putting your thinking into practice, I’d love to
              hear from you. I offer{' '}
              <strong>Strategic Coherence Conversations</strong> for leaders
              working in impact-driven contexts.
            </p>
            <a
              href="/contact"
              className="inline-block mt-4 text-[18px] leading-[35px] underline text-white!"
              style={{ color: '#FFFFFF' }}
            >
              → Request a conversation
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
