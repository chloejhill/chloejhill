'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../page.module.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const heroLeftImage = '/images/services/heroleft.png';
const heroRightImage = '/images/services/heroright.png';

const profileImage = '/images/profile.png';
const approachImage = '/images/home/approach.png';
const compassImage = '/images/home/compass.png';
const thinkingImage = '/images/home/thinking.png';
const dashImage = '/images/home/dash.png';
const evolutionImage = '/images/evolution.png';
const syschangeImage = '/images/syschange.png';
const finqImage = '/images/finq.png';

function AttentionSystemsIcon() {
  return (
    <svg
      width="63"
      height="56"
      viewBox="0 0 63 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M30.6741 0.00515443C35.5496 -0.214113 36.9243 6.62745 32.035 8.08325C24.4102 10.3529 23.5416 0.326676 30.6741 0.00515443Z"
        fill="#D6DCDB"
      />
      <path
        d="M62.041 33.88C61.8608 34.0413 59.8262 35.0269 59.4699 35.0754C56.9019 35.4275 53.2145 34.9437 50.4525 35.0396C43.8113 35.2705 37.0245 36.0136 30.3643 36.1475C20.511 36.3457 10.4753 34.9416 0.966673 32.5444L0 30.921C1.49692 29.3186 3.30587 30.4497 4.83864 30.4097C9.58345 30.2832 13.4575 30.6311 18.1191 30.7576C27.77 31.0179 37.8152 29.4926 47.5778 29.2912C49.6693 29.248 59.5795 28.9834 60.6991 29.4926C62.0336 30.0987 63.3355 32.7173 62.041 33.8811V33.88Z"
        fill="#D6DCDB"
      />
      <path
        d="M56.2744 7.87395C58.3164 8.90072 57.7355 11.2157 56.4104 12.6135C46.8723 22.6724 18.1652 25.2245 7.36836 17.0811C6.2151 16.2114 2.50548 12.5408 4.02348 11.2199C5.60368 9.8442 7.71729 12.4775 9.44613 13.207C19.1729 17.3119 39.0367 17.4532 48.249 11.9947C50.3352 10.7582 53.7718 6.61528 56.2755 7.87395H56.2744Z"
        fill="#D6DCDB"
      />
      <path
        d="M25.7237 41.5455C34.27 41.3294 44.3029 42.7508 52.1838 46.7897C53.6767 47.7109 57.0445 49.512 56.5191 51.4301C55.1421 53.6768 46.1199 51.1516 42.7279 50.676C35.1006 49.4708 26.6385 49.1366 19.3281 50.9077C15.6908 51.7465 11.5714 53.8294 8.29726 54.9344C5.37899 55.9614 2.7534 55.8734 3.81459 52.8336C4.42098 50.8431 7.67613 47.3789 10.6607 45.7059C15.1929 42.9891 20.4156 41.8474 25.5626 41.5533L25.7237 41.5455Z"
        fill="#D6DCDB"
      />
    </svg>
  );
}

function AttentionFuturesIcon() {
  return (
    <svg
      width="64"
      height="48"
      viewBox="0 0 64 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M12.6879 10.3604C9.70545 8.45808 14.822 1.53666 17.968 5.45941C20.8172 9.01166 15.1882 11.9551 12.6879 10.3604Z"
        fill="#DAC9BE"
      />
      <path
        d="M59.2031 19.42C57.0808 17.223 58.2606 12.7597 62.0609 14.6533C65.7583 16.4961 62.1617 22.4815 59.2031 19.42Z"
        fill="#DAC9BE"
      />
      <path
        d="M1.65996 12.8374C5.28154 11.6436 7.44713 16.8999 3.65979 17.9767C-0.281373 19.098 -1.18379 13.7745 1.65996 12.8374Z"
        fill="#DAC9BE"
      />
      <path
        d="M28.3748 13.7201C42.5751 11.7918 53.2384 18.4098 59.6192 30.7804C53.1203 48.4539 26.3089 52.4774 13.3056 39.8284C10.8259 37.4169 5.41248 29.2562 7.03423 25.8946C7.74923 24.4126 16.2523 18.1888 18.1427 17.1933C20.7991 15.7958 25.4411 14.1188 28.3737 13.7201H28.3748ZM26.0738 19.0338C23.6591 19.439 10.6916 25.7223 10.3471 27.7081C18.4027 45.0609 42.2285 46.1616 53.5439 31.4293C47.1403 21.0608 38.2884 16.9853 26.0738 19.0328V19.0338Z"
        fill="#DAC9BE"
      />
      <path
        d="M34.4023 0.0046315C38.7898 -0.192535 40.027 5.96405 35.6265 7.27488C28.7647 9.31805 27.9836 0.293882 34.4023 0.0046315Z"
        fill="#DAC9BE"
      />
      <path
        d="M52.7273 6.85898C56.4821 10.5932 49.0342 14.0155 47.1632 11.2866C44.326 7.14931 49.929 4.0759 52.7273 6.85898Z"
        fill="#DAC9BE"
      />
      <path
        d="M29.8841 25.8281C33.6151 25.1163 36.9355 28.5754 34.6962 32.236C30.0671 39.8042 21.4536 27.4358 29.8841 25.8281Z"
        fill="#DAC9BE"
      />
    </svg>
  );
}

function AttentionInnerIcon() {
  return (
    <svg
      width="63"
      height="63"
      viewBox="0 0 63 63"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <g clipPath="url(#clip0_1054_945)">
        <path
          d="M26.758 20.4877C49.1157 17.4396 61.1613 32.8011 62.4223 53.6656C62.7552 59.1708 58.6896 62.116 56.9424 58.2825C55.6162 55.3719 55.5259 47.1378 54.015 42.627C46.1799 19.2246 13.4073 22.4386 7.91787 46.4164C6.78912 51.3451 8.70327 63.418 1.15482 59.1834C-2.32383 42.795 9.89187 22.7872 26.758 20.4877Z"
          fill="#EFEBE7"
        />
        <path
          d="M30.4034 31.3786C42.6695 29.0487 52.0177 41.6581 46.0558 52.5834C43.2995 57.6097 37.1161 61.1787 31.6267 61.5472C26.6654 62.0166 22.3657 58.5841 20.7172 54.0261C17.4097 45.7006 20.3402 33.1899 30.2848 31.4007L30.4034 31.3776V31.3786ZM28.2026 40.6984C24.4237 44.0385 26.2108 51.0997 30.374 53.4328C35.6366 56.2122 42.3997 49.5982 40.1495 44.1844C38.5157 39.6421 32.0656 37.3941 28.2845 40.627L28.2026 40.6984Z"
          fill="#EFEBE7"
        />
        <path
          d="M30.0922 1.86648C41.4353 -1.46412 40.4851 14.5946 29.9536 12.6573C25.2905 11.7995 25.9793 3.07503 30.0922 1.86648Z"
          fill="#EFEBE7"
        />
      </g>
      <defs>
        <clipPath id="clip0_1054_945">
          <rect width="63" height="63" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function PlaceholderImageIcon() {
  return (
    <svg
      width="104"
      height="91"
      viewBox="0 0 104 91"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M52.2783 90.9286C37.0541 90.9286 21.8298 90.9286 6.60557 90.9286C5.86188 90.9286 5.10858 90.9286 4.36168 90.8522C0.550277 90.4989 -0.981978 87.9492 0.643238 84.5017C2.05368 81.5255 3.59235 78.6255 5.08614 75.6811C12.1384 61.8172 19.1906 47.9554 26.2428 34.0957C26.4608 33.6723 26.6884 33.249 26.9416 32.8447C28.7175 30.018 31.6025 29.6201 33.8752 32.0584C35.478 33.7646 36.834 35.6809 38.2636 37.5304C45.5296 46.959 52.7955 56.3919 60.0614 65.8291C63.2349 69.9354 67.2322 70.1582 70.9603 66.4657C72.8099 64.6322 74.6178 62.7509 76.4899 60.9333C79.8653 57.6546 83.696 57.8519 86.4528 61.675C91.9855 69.3465 97.3805 77.1199 102.801 84.8678C103.225 85.4757 103.549 86.146 103.763 86.8541C104.288 88.6336 103.545 90.066 101.727 90.5403C100.588 90.8112 99.4176 90.9364 98.246 90.9127C82.932 90.9382 67.6094 90.9435 52.2783 90.9286Z"
        fill="white"
      />
      <path
        d="M86.4207 14.9615C86.4168 17.9206 85.5281 20.812 83.8674 23.269C82.2067 25.7261 79.8488 27.6381 77.0924 28.7627C74.3361 29.8874 71.3056 30.174 68.385 29.5862C65.4644 28.9984 62.7854 27.5627 60.6875 25.4611C58.5897 23.3596 57.1674 20.6867 56.6011 17.7815C56.0348 14.8763 56.35 11.8695 57.5066 9.14233C58.6633 6.41517 60.6093 4.09047 63.098 2.46294C65.5868 0.835415 68.5061 -0.0216464 71.486 0.000415453C75.454 0.0504883 79.2432 1.64691 82.0369 4.44555C84.8306 7.24418 86.405 11.0209 86.4207 14.9615Z"
        fill="white"
      />
    </svg>
  );
}

function TransformationSpiralIcon() {
  return (
    <svg
      width="250"
      height="150"
      viewBox="0 0 250 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M233.657 174.937C236.918 166.269 240.801 157.814 242.833 148.703C247.978 125.583 245.029 97.7924 241.096 74.4753C236.525 47.3896 229.659 35.8703 205.949 21.7785C164.869 -2.61998 113.828 -6.06102 71.2901 16.8464C68.5209 18.3375 65.8008 22.1718 62.6875 21.4672C103.046 -8.3878 162.444 -5.19249 204.654 19.2879C229.856 33.9041 237.721 45.9968 242.505 74.6884C246.307 97.4483 249.224 123.223 244.701 145.852C242.784 155.454 239.736 167.219 233.657 174.937Z"
        fill="white"
      />
      <path
        d="M55.1367 27.6117C43.1587 39.6225 32.2621 49.3885 22.8075 63.7588C-9.52171 112.867 -6.4084 161.123 41.0285 198.024C60.5277 213.197 83.2712 227.207 108.456 228.813C138.786 230.747 165.675 224.455 192.941 212.165C194.514 211.461 195.973 211.346 193.957 213.181C178.637 221.014 162.038 225.864 145.029 228.485C118.107 232.631 92.3981 231.5 68.4256 217.835C45.9771 205.037 21.7752 186.62 9.28921 163.63C-16.2563 116.57 15.1553 60.4162 51.8104 29.4961C52.8755 28.5949 53.3507 27.2021 55.1203 27.6117H55.1367Z"
        fill="white"
      />
      <path
        d="M212.867 199.516C209.082 204.415 202.626 208.544 196.809 210.838L212.867 199.516Z"
        fill="white"
      />
      <path
        d="M214.75 197.599L227.023 184.392C225.761 188.603 221.37 192.945 218.06 195.731C216.995 196.632 216.52 198.025 214.75 197.615V197.599Z"
        fill="white"
      />
      <path
        d="M187.974 197.271C179.584 205.971 164.231 215.786 152.433 218.867C126.527 225.651 99.9657 215.475 78.7461 200.892C79.4835 199.483 81.0237 201.105 81.843 201.564C86.9882 204.398 91.527 207.512 96.9835 210.035C137.293 228.715 168.36 219.293 195.823 185.751C218.992 157.469 225.678 136.61 220.27 99.9551C216.19 72.3122 202.426 45.2756 179.781 28.5293C185.942 30.725 192.087 36.8697 196.331 41.7363C219.041 67.7897 230.872 119.372 218.681 151.947C213.749 165.138 197.822 187.029 187.958 197.254L187.974 197.271Z"
        fill="white"
      />
      <path
        d="M174.149 24.7607C164.727 21.3524 156.289 17.6984 146.162 16.3875C130.039 14.3065 89.9754 16.8463 75.2609 22.696C70.1485 24.7279 66.1012 29.1521 60.8086 30.4302C69.0834 20.058 86.4852 18.0097 99.1842 16.3875C116.062 14.241 138.019 12.7498 154.503 16.5514C160.778 17.9933 169.25 20.7461 174.149 24.7607Z"
        fill="white"
      />
      <path
        d="M56.085 182.491C51.3167 174.97 45.0901 168.383 40.5512 160.698C19.3152 124.665 25.7056 76.1632 48.9735 42.7197C50.3827 43.4571 48.7605 44.9974 48.3017 45.8167C38.3227 63.71 32.2108 77.2446 29.7202 98.071C26.017 129.106 35.5699 158.371 57.4941 180.59L56.0686 182.474L56.085 182.491Z"
        fill="white"
      />
      <path
        d="M70.2452 193.829C68.7869 195.189 59.8239 184.358 58.9062 182.507C60.5776 180.999 68.7869 192.617 70.2452 193.829Z"
        fill="white"
      />
      <path
        d="M190.202 163.614L202.966 144.738C227.316 99.6606 213.765 65.2996 174.455 37.2143C154.776 23.1553 142.47 23.1061 119.808 31.3646C69.7005 49.602 43.8437 102.446 58.4271 154.176C71.2244 199.581 109.436 202.957 149.598 191.487C160.347 188.423 166.524 185.326 175.078 178.247C175.831 177.624 176.962 175.756 177.912 177.297C172.21 183.72 164.443 187.849 156.431 190.749C103.488 209.904 58.0994 195.993 53.2655 134.775C50.2669 96.9406 64.5554 64.4639 95.459 42.8837C111.828 31.4464 139.193 19.3537 159.036 26.1866C168.835 29.5621 191.513 48.291 198.739 56.3856C227.512 88.6329 218.156 134.382 190.218 163.598L190.202 163.614Z"
        fill="white"
      />
      <path
        d="M156.909 61.9405C159.334 63.4152 166.79 69.5107 169.297 71.6901C169.854 72.1652 173.279 74.7542 171.788 75.7701C153.19 59.7612 129.332 46.587 104.262 56.4349C92.1034 61.2031 67.0003 89.7964 65.5256 102.692C62.0846 132.58 89.1703 165.614 117.059 173.954C140.638 181 176.294 174.659 188.501 151.047C196.973 134.661 190.238 96.3835 178.424 82.3736C176.572 80.1779 172.164 78.523 173.672 76.7369C189.484 88.1742 195.531 118.242 193.974 136.693C191.09 170.857 149.978 182.95 121.041 176.592C95.8394 171.054 72.719 147.13 65.9844 123.027C59.8233 100.988 67.0167 90.1404 81.0921 73.8857C103.213 48.373 124.482 45.2925 153.993 61.5636C155.123 62.1863 156.5 61.6947 156.909 61.9405Z"
        fill="white"
      />
      <path
        d="M161.857 76.7038C157.498 75.2619 154.073 70.2151 150.469 67.79C139.801 60.6621 129.593 61.3831 117.681 65.1027C77.8957 77.5395 72.4229 136.676 104.211 159.387C117.091 168.596 148.666 165.236 160.431 155.077C177.161 140.609 187.074 113.375 175.26 93.0733C174.408 91.5985 168.853 84.9131 169.443 84.2577C187.222 99.4801 184.141 127.516 171.328 145.164C160.48 160.108 147.699 165.564 129.298 166.4C73.5371 168.94 65.0984 81.9146 116.337 63.7263C135.754 56.8443 148.961 61.3339 161.889 76.6874L161.857 76.7038Z"
        fill="white"
      />
      <path
        d="M105.199 90.8936C101.791 96.4811 92.0904 104.936 91.0908 111.245C89.6489 120.372 93.5979 130.154 99.0543 137.167C99.6278 137.921 101.594 138.986 100.021 139.986C93.5487 134.218 88.0922 121.748 89.2392 113.146C89.9766 107.591 97.8582 96.7269 101.889 92.7452C102.905 91.7456 103.511 90.5168 105.215 90.8773L105.199 90.8936Z"
        fill="white"
      />
      <path
        d="M105.198 146.589C105.198 146.589 104.854 144.59 105.657 144.721C120.568 157.813 152.553 153.602 162.483 136.364C168.382 126.139 166.022 104.903 158.092 96.0712C159.206 94.58 161.287 97.1689 161.877 97.9555C165.383 102.675 167.661 119.224 167.481 125.205C166.776 147.31 135.43 158.55 116.98 152.307C115.603 151.848 105.657 147.064 105.215 146.589H105.198Z"
        fill="white"
      />
      <path
        d="M156.924 91.9915C157.252 92.5651 157.563 94.515 156.662 94.646C146.454 82.7172 130.232 76.5889 115.272 83.4873C113.6 84.2574 111.47 86.6662 110.356 87.0922C108.701 87.7312 108.472 85.7158 108.963 85.2242C109.471 84.7162 119.647 80.0299 120.99 79.7677C131.018 77.8342 140.834 80.6033 149.289 85.9779C150.239 86.5842 156.679 91.5819 156.924 91.9915Z"
        fill="white"
      />
    </svg>
  );
}

export default function Thinking() {
  const writingsTrackRef = useRef<HTMLDivElement | null>(null);
  const evolutionInnerRef = useRef<HTMLDivElement | null>(null);
  const evolutionCopyRef = useRef<HTMLDivElement | null>(null);
  const WRITING_CARD_WIDTH = 314.121;
  const WRITING_CARD_GAP = 40;
  const WRITING_PEEK = 72;

  useEffect(() => {
    const el = writingsTrackRef.current;
    if (!el) return;
    // Keep 3 cards fully visible and show neighbor peeks on both sides.
    const initialOffset = WRITING_CARD_WIDTH + WRITING_CARD_GAP - WRITING_PEEK;
    el.scrollLeft = initialOffset;
  }, []);

  useEffect(() => {
    const inner = evolutionInnerRef.current;
    const copy = evolutionCopyRef.current;
    if (!inner || !copy) return;

    const sync = () => {
      const h = copy.getBoundingClientRect().height;
      if (h > 0) {
        inner.style.setProperty(
          '--evolution-copy-h',
          `${Math.round(h * 1.42)}px`
        );
      }
    };

    sync();
    const ro = new ResizeObserver(sync);
    ro.observe(copy);
    window.addEventListener('resize', sync);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', sync);
    };
  }, []);

  const scrollWritings = (direction: 'left' | 'right') => {
    const el = writingsTrackRef.current;
    if (!el) return;
    const amount = WRITING_CARD_WIDTH + WRITING_CARD_GAP;
    el.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth'
    });
  };

  const selectedWritings = Array.from({ length: 8 }).map((_, i) => ({
    id: String(i + 1),
    title: `Publication ${i + 1}`
  }));

  const aattItems = [
    {
      title: 'Anticipate',
      subtitle: 'Sensing the Horizon',
      description:
        'Transformation begins with awareness. This dimension explores how organisations and leaders learn to see beyond the immediate - noticing emerging signals, trends, and disruptions across social, ecological, technological, and economic systems.',
      iconSrc: '/images/anticipate.png',
      iconLeft: false
    },
    {
      title: 'Adapt',
      subtitle: 'Building Strategic Resilience',
      description:
        'Resilience is more than survival; it is the capacity to evolve without losing coherence. This dimension examines how organisations adapt under pressure - across strategy, structure, stories and culture - and what enables them to respond with discernment rather than reactivity.',
      iconSrc: '/images/adapt.png',
      iconLeft: true
    },
    {
      title: 'Transform',
      subtitle: 'Aligning Purpose, Culture & Action',
      description:
        'Transformation is both systemic and human. This dimension explores how deeper shifts take place - in narratives, ways of working, leadership culture, and collective identity. It asks how purpose moves from aspiration into practice, and how fragmentation gives way to alignment.',
      iconSrc: '/images/transform.png',
      iconLeft: false
    },
    {
      title: 'Transcend',
      subtitle: 'Meaning, Renewal and Stewardship',
      description:
        'Beyond transformation lies renewal. This dimension engages with longer-term questions of meaning, ethics, and stewardship. Here, the inquiry moves beyond adaptation toward renewal - asking what kinds of futures are worth sustaining, and what it means to lead in service of systemic flourishing.',
      iconSrc: '/images/transcend.png',
      iconLeft: true
    }
  ];

  return (
    <div className={styles.container}>
      <section className="relative w-full h-[520px] md:h-[600px] overflow-hidden">
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
        <div className="relative z-10 w-full max-w-[1448px] mx-auto px-4 md:px-8 lg:px-16 h-full block pt-28 md:flex md:items-start md:pt-40">
          <div className="max-w-[800px]">
            <h1
              className="font-normal text-[34px] md:text-[50px] leading-[1.15] md:leading-[normal] text-[#4b3e43] mb-4 md:mb-6"
              style={{ fontFamily: 'var(--font-lora), serif', fontFeatureSettings: "'liga' off, 'clig' off" }}
            >
              Thinking into the uncertainty
            </h1>
            <p
              className="font-normal text-[18px] md:text-[25px] leading-[1.35] md:leading-[normal] text-[#4b3e43] max-w-full md:max-w-[607.712px]"
              style={{ fontFamily: 'var(--font-lora), serif' }}
            >
              Research and inquiry into how we understand, anticipate, and
              respond to profound change.
            </p>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionHeroPad}`}>
        <div className={styles.sectionHeadingCentered}>
          <span className={styles.sectionHeadingHighlightCentered} />
          <h2 className={styles.sectionTitleCentered}>
            Where my Inquiry Begins
          </h2>
        </div>
        <div className={styles.inquiryIntro}>
          <p>
            Rather than offering fixed solutions or proprietary methods, my work
            is shaped by sustained inquiry into a small number of interrelated
            questions. I am interested in how we learn to see what is emerging,
            how we respond under pressure, how transformation actually unfolds
            in practice, and how deeper questions of meaning and responsibility
            shape the futures we create.
          </p>
          <p>
            These questions show up repeatedly across my research, writing, and
            applied work. They are not services, and they are not linear stages.
            They are lenses through which I explore how individuals,
            organisations, and systems respond to profound change.
          </p>
        </div>

        <div className={styles.inquiryBanner}>
          <div className={styles.inquiryBannerIcon} aria-hidden="true">
            <Image
              src={syschangeImage}
              alt=""
              width={300}
              height={300}
              className={styles.inquiryBannerImg}
              unoptimized
            />
          </div>
          <div className={styles.inquiryBannerLabel}>Systems Change</div>
        </div>
      </section>

      <section className={styles.empiricalSection}>
        <div className={styles.empiricalInner}>
          <h3 className={styles.empiricalTitle}>Empirical Grounding</h3>
          <div className={styles.empiricalBody}>
            <p>
              Much of my thinking has been shaped through long-term work inside
              complex social, ecological, and institutional systems.
            </p>
            <p>
              Over more than two decades, I’ve worked across sustainability,
              international development, and the impact sector, collaborating
              with multilateral institutions, governments, NGOs, and
              mission-driven organisations across regions including Latin
              America, Europe, and Southeast Asia.
            </p>
            <p>
              These contexts exposed me to systems under pressure — grappling
              with climate risk, biodiversity loss, economic transition, and
              institutional constraint — and to the limits of linear planning,
              technical fixes, and fragmented responses. Across this work, I
              became increasingly interested not only in what organisations were
              trying to change, but how change actually unfolded: how strategy,
              narrative, culture, and leadership interacted; how uncertainty was
              handled; and how meaning, power, and values shaped decisions —
              making over time. This lived engagement with systems change is
              what gave rise to the questions, frameworks, and research threads
              that follow. Below are some selected technical and strategic
              publications which showcase some of work on some of my empirical
              grounding in systems change where nature has been my source of
              inspiration and enabling a better stewardship, my vocation.
            </p>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.writingsSection}`}>
        <div className={styles.sectionHeadingCentered}>
          <span className={styles.sectionHeadingHighlightCentered} />
          <h2 className={styles.sectionTitleCentered}>
            Selected Writings &amp; Publications
          </h2>
        </div>

        <div className={styles.writingsCarousel}>
          <button
            type="button"
            className={styles.writingsArrowLeft}
            onClick={() => scrollWritings('left')}
            aria-label="Scroll left"
          >
            <span className={styles.writingsArrowInner} aria-hidden="true">
              ‹
            </span>
          </button>

          <div ref={writingsTrackRef} className={styles.writingsTrack}>
            {selectedWritings.map((w) => (
              <div
                key={w.id}
                className={styles.writingsCard}
                aria-label={w.title}
              >
                <div className={styles.writingsCardIcon} aria-hidden="true">
                  <PlaceholderImageIcon />
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            className={styles.writingsArrowRight}
            onClick={() => scrollWritings('right')}
            aria-label="Scroll right"
          >
            <span className={styles.writingsArrowInner} aria-hidden="true">
              ›
            </span>
          </button>
        </div>
      </section>

      <section className={styles.futureSection}>
        <div className={styles.futureBanner}>
          <div className={styles.futureBannerLabel}>Future Inquiry</div>
          <div className={styles.futureBannerWaves} aria-hidden="true">
            <Image
              src={finqImage}
              alt=""
              width={360}
              height={120}
              className={styles.futureBannerImg}
              unoptimized
            />
          </div>
        </div>
      </section>

      <section className={styles.transcendentalSection}>
        <div className={styles.transcendentalLeaf} aria-hidden="true">
          <Image
            src="/images/leaf.png"
            alt=""
            width={520}
            height={760}
            className={styles.transcendentalLeafImg}
            unoptimized
          />
        </div>
        <div className={styles.transcendentalContent}>
          <h2 className={styles.transcendentalTitle}>Transcendental Futures</h2>
          <p>
            Alongside AATT, my work includes sustained inquiry at the
            intersection of futures studies, philosophy, and systems thinking.
          </p>
          <p>
            This research explores long-term responsibility, ethics, and
            uncertainty — including how societies imagine the future, how values
            and power shape foresight, and how leads make decisions when
            outcomes cannot be fully known.
          </p>
          <p>
            A central contribution to this inquiry is my co-authored paper
            Transcendental Futures, published in Futures (Elsevier, 2025), which
            examines how consciousness, ethics, and metaphysical assumptions
            influence futures thinking, leadership, and long-term stewardship.
          </p>
          <p className={styles.transcendentalLink}>
            — View publication (Futures, Elsevier)
          </p>
          <p>
            This work informs both my academic writing and applied practice,
            grounding anticipation and judgement in deeper reflection on meaning
            responsibility, and consequence.
          </p>
        </div>
      </section>

      <section className={styles.transformationSection}>
        <div className={styles.transformationBanner}>
          <div className={styles.transformationIcon} aria-hidden="true">
            <TransformationSpiralIcon />
          </div>
          <div className={styles.transformationLabel}>Transformation</div>
        </div>
      </section>

      <section className={styles.aattSection}>
        <div className={styles.aattIntro}>
          <h2 className={styles.aattTitle}>
            Anticipate. Adapt. Transform. Transcend.
            <br />A Framework for Transformation
          </h2>
          <p className={styles.aattLead}>
            AATT is a structured yet fluid framework that has emerged from my
            work across sustainability, futures research, and organisational
            change. It reflects how transformation tends to unfold in real
            conditions — not as a neat sequence, but as a set of interrelated
            capacities that deepen over time. Rather than prescribing action,
            AATT helps organise inquiry across four recurring dimensions. The
            framework continues to evolve as a thinking framework. It informs my
            research, writing, and collaborative work, but is not offered as a
            fixed methodology or packaged approach.
          </p>
        </div>

        <div className={styles.aattList}>
          {aattItems.map((item) => {
            return (
              <article key={item.title} className={styles.aattItem}>
                <div className={styles.aattItemInner}>
                  {item.iconLeft && (
                    <div className={styles.aattIconWrap} aria-hidden="true">
                      <Image
                        src={item.iconSrc}
                        alt=""
                        width={420}
                        height={220}
                        className={styles.aattIconImg}
                        unoptimized
                      />
                    </div>
                  )}
                  <div className={styles.aattCopy}>
                    <h3 className={styles.aattItemTitle}>{item.title}</h3>
                    <p className={styles.aattItemSubtitle}>{item.subtitle}</p>
                    <p className={styles.aattItemBody}>{item.description}</p>
                  </div>
                  {!item.iconLeft && (
                    <div className={styles.aattIconWrap} aria-hidden="true">
                      <Image
                        src={item.iconSrc}
                        alt=""
                        width={420}
                        height={220}
                        className={styles.aattIconImg}
                        unoptimized
                      />
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className={styles.innerDimensionSection}>
        <div className={styles.innerBanner}>
          <div className={styles.innerBannerIcon} aria-hidden="true">
            <Image
              src="/images/innerd.png"
              alt=""
              width={220}
              height={160}
              className={styles.innerBannerImg}
              unoptimized
            />
          </div>
          <div className={styles.innerBannerLabel}>The Inner Dimension</div>
        </div>

        <div className={styles.innerDimensionInner}>
          <h2 className={styles.innerDimensionHeading}>
            Cultivating The Capacities That Make Transformation Possible
          </h2>
          <div className={styles.innerDimensionBody}>
            <p>
              Transformation is not only systemic — it is also personal.
              Organizations that thrive in complexity develop inner capacities
              alongside strategic ones : adaptability, discernment, emotional
              resilience, and the ability to stay grounded amid uncertainty.
            </p>
            <p>
              This dimension reflects my long-standing interest in how inner
              development shapes outer change. Alongside The Dots Directory, I
              explore how individuals strengthen the awareness, empathy, and
              purpose that make meaningful transformation possible — not as a
              substitute for systems change, but as its human foundation.
            </p>
          </div>
          <div className={styles.innerDotsCard}>
            <Image
              src="/images/dots.png"
              alt="The Dots Directory"
              width={320}
              height={120}
              className={styles.innerDotsImg}
              unoptimized
            />
          </div>
        </div>
      </section>

      <section className={styles.booksSection} aria-label="Current books">
        <div className={styles.booksGrid}>
          {[1, 2, 3].map((i) => (
            <div key={i} className={styles.booksCard}>
              <div className={styles.booksPlaceholderIcon} aria-hidden="true">
                <PlaceholderImageIcon />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        className={styles.evolutionSection}
        aria-labelledby="evolution-heading"
      >
        <div ref={evolutionInnerRef} className={styles.evolutionInner}>
          <div ref={evolutionCopyRef} className={styles.evolutionCopy}>
            <h2 id="evolution-heading" className={styles.evolutionTitle}>
              Evolution of my Thinking
            </h2>
            <div className={styles.evolutionBody}>
              <p>
                The ideas on this page are not presented as conclusions, but as
                working questions — shaped through research, reflection, and
                engagement with real-world complexity.
              </p>
              <p>
                They continue to evolve as conditions change, new perspectives
                emerge, and deeper layers of uncertainty come into view. What
                matters most is not having definitive answers, but developing
                the capacity to stay in inquiry — to see clearly, judge wisely,
                and act with responsibility over time. If this orientation
                resonates, you may wish to explore how these questions show up
                in practice, or the personal journey and stance that inform how
                I work.
              </p>
            </div>
            <div className={styles.evolutionLinks}>
              <Link href="/practice" className={styles.evolutionLink}>
                <span className={styles.evolutionDash} aria-hidden="true">
                  <Image
                    src={dashImage}
                    alt=""
                    fill
                    className={styles.evolutionDashImg}
                  />
                </span>
                <span className={styles.evolutionLinkLabel}>
                  <span className={styles.evolutionLinkWord}>Practice</span>
                  {' — where this thinking is tested in real conditions'}
                </span>
              </Link>
              <Link href="/about" className={styles.evolutionLink}>
                <span className={styles.evolutionDash} aria-hidden="true">
                  <Image
                    src={dashImage}
                    alt=""
                    fill
                    className={styles.evolutionDashImg}
                  />
                </span>
                <span className={styles.evolutionLinkLabel}>
                  <span className={styles.evolutionLinkWord}>About</span>
                  {' — background, philosophy, and learning stance'}
                </span>
              </Link>
            </div>
          </div>
          <div className={styles.evolutionFigure} aria-hidden="true">
            <Image
              src={evolutionImage}
              alt=""
              width={720}
              height={720}
              className={styles.evolutionFigureImg}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
