'use client';

import Image from 'next/image';
import styles from '../page.module.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import type { PageOverrides } from '@/lib/payloadContent';

const profileImage = '/images/profile.png';
const approachImage = '/images/home/approach.png';
const compassImage = '/images/home/compass.png';
const thinkingImage = '/images/home/thinking.png';
const dashImage = '/images/home/dash.png';

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

export default function HomeClient({ overrides }: { overrides: PageOverrides | null }) {
  const t = (key: string, fallback: string) => overrides?.strings?.[key] || fallback;
  const img = (key: string, fallbackSrc: string) => overrides?.images?.[key]?.src || fallbackSrc;
  const alt = (key: string, fallbackAlt: string) => overrides?.images?.[key]?.alt || fallbackAlt;

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <Navbar variant="light" />

        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              {t(
                'home.hero.title',
                'Systems Change Researcher,\nWriter, Advisor. Publisher Futurist.'
              )
                .split('\n')
                .map((line, idx) => (
                  <span key={idx} className={styles.heroTitleLine}>
                    {line}
                  </span>
                ))}
            </h1>
            <p className={styles.heroSubtitle}>
              {t(
                'home.hero.subtitle',
                'Thinking about uncertainty, transformation, and how we meet what’s coming.'
              )}
            </p>
          </div>
          <div className={styles.heroProfile}>
            <Image
              src={img('home.hero.profileImage', profileImage)}
              alt={alt('home.hero.profileImage', 'Chloe Hill')}
              fill
              className={styles.heroProfileImg}
              priority
            />
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionHeroPad}`}>
        <div className={styles.sectionHeading}>
          <span className={styles.sectionHeadingHighlight} />
          <h2 className={styles.sectionTitle}>
            {t('home.pickle.title', 'We’re in a bit of pickle')}
          </h2>
        </div>
        <p className={styles.bodyLong} style={{ lineHeight: '110%' }}>
          {t(
            'home.pickle.body',
            'It can feel as if civilisation’s collapse is speeding toward us — faster than our systems, leaders, or imaginations can keep up. Climate disruption, technological acceleration, social fragmentation, and economic fragility are not separate crises, but interconnected forces shaping a single, turbulent reality. The ground beneath us — our assumptions, institutions, and even our sense of progress — is shifting. What once felt solid now feels uncertain. So how do we prepare for what’s coming? Perhaps by learning to see differently — to recognise that the turbulence around us is not just an ending, but a turning. When we look beneath the noise, coherence begins to emerge from complexity, and possibility reveals itself in the cracks. Uncertainty doesn’t have to mean chaos; it can be a catalyst for transformation. My work begins here — helping people and organisations find steadier footing in shifting terrain, strengthen their adaptive capacity, and move toward futures that are not only resilient, but regenerative.'
          )}
        </p>
      </section>

      <section className={`${styles.section} ${styles.compassDrawerSection}`}>
        <div className={styles.approachGrid}>
          <div className={styles.approachCard}>
            <Image
              src={img('home.approach.image', approachImage)}
              alt={alt('home.approach.image', '')}
              fill
              className={styles.approachImg}
              priority
            />
          </div>
          <div className={styles.approachText}>

            <div className={styles.sectionHeading}>
              <h2 className={styles.sectionTitle}>
                <span className={styles.sectionHeadingHighlightSub}>
                  {t('home.approach.title', 'How I’m approaching this moment of change')}
                </span>
              </h2>
            </div>
            <p className={styles.bodyLong} style={{ lineHeight: '110%' }}>
              {t(
                'home.approach.body',
                'Hi, I’m Chloe — a sustainability transformations strategist working at the intersection of systems change, futures thinking, and conscious leadership.\n\nOver the past two decades, I’ve helped leaders and mission-driven organisations — from global institutions to emerging innovators — make sense of complexity and turn insight into action. My work blends strategic communications, deep sustainability expertise, foresight, and inner transformation practices to help teams anticipate what’s next, adapt with clarity, and transform how they lead and create impact. I’ve supported organisations shaping the global sustainability movement to craft impact narratives, design resilient strategies, and embed regenerative principles — building adaptive cultures and futures grounded in purpose and possibility.'
              )
                .split('\n')
                .map((line, idx) =>
                  line === '' ? <br key={idx} /> : <span key={idx}>{idx ? `\n${line}` : line}</span>
                )}
            </p>
          </div>
        </div>
      </section>

      <section
        className={styles.compassSection}
        style={{ position: 'relative', zIndex: 0, height: '1100px', paddingTop: 0 }}
        aria-hidden="true"
      >
        <div className={styles.compassWrap} style={{ position: 'sticky', top: 0 }}>
          <Image
            src={img('home.compass.image', compassImage)}
            alt={alt('home.compass.image', '')}
            fill
            className={styles.compassImg}
            priority
          />
        </div>
      </section>

      <section
        className={styles.section}
        style={{
          position: 'relative',
          zIndex: 10,
          marginTop: '-560px',
          background: '#ffffff'
        }}
      >
        <div className={styles.sectionHeadingCentered}>
          <span className={styles.sectionHeadingHighlightCentered} />
          <h2 className={styles.sectionTitleCentered}>
            {t('home.attention.title', 'Where I am placing my attention')}
          </h2>
        </div>
        <p className={styles.centerIntro} style={{ lineHeight: '110%' }}>
          {t(
            'home.attention.intro',
            'My work is guided by sustained attention to a small number of interrelated areas. These are not services or stages, but enduring lines of inquiry that shape how I research, write, and engage with complexity in practice.'
          )}
        </p>

        <div className={styles.attentionGrid}>
          <div className={`${styles.attentionFlipCard} ${styles.attentionCardMuted}`} tabIndex={0}>
            <div className={styles.attentionCardInner}>
              <div className={styles.attentionCardFace}>
                <div className={styles.attentionIconCircle} aria-hidden="true">
                  <AttentionSystemsIcon />
                </div>
                <h3 className={styles.attentionTitle}>{t('home.attention.systems.title', 'Systems Change & Transformation')}</h3>
              </div>
              <div className={`${styles.attentionCardFace} ${styles.attentionCardBack}`}>
                <h3 className={styles.attentionTitle}>{t('home.attention.systems.title', 'Systems Change & Transformation')}</h3>
                <p className={styles.attentionBackText}>
                  {t(
                    'home.attention.systems.body',
                    'How complex, economic, and ecological systems can move from extractive patterns into conditions that support life.'
                  )}
                </p>
              </div>
            </div>
          </div>

          <div className={`${styles.attentionFlipCard} ${styles.attentionCardWarm}`} tabIndex={0}>
            <div className={styles.attentionCardInner}>
              <div className={styles.attentionCardFace}>
                <div className={styles.attentionIconCircle} aria-hidden="true">
                  <AttentionFuturesIcon />
                </div>
                <h3 className={styles.attentionTitle}>{t('home.attention.futures.title', 'Futures Inquiry')}</h3>
              </div>
              <div className={`${styles.attentionCardFace} ${styles.attentionCardBack}`}>
                <h3 className={styles.attentionTitle}>{t('home.attention.futures.title', 'Futures Inquiry')}</h3>
                <p className={styles.attentionBackText}>
                  {t(
                    'home.attention.futures.body',
                    'Researching diverse future possibilities and helping leaders orient with foresight, imagination, and decisive action.'
                  )}
                </p>
              </div>
            </div>
          </div>

          <div className={`${styles.attentionFlipCard} ${styles.attentionCardBase}`} tabIndex={0}>
            <div className={styles.attentionCardInner}>
              <div className={styles.attentionCardFace}>
                <div className={styles.attentionIconCircle} aria-hidden="true">
                  <AttentionInnerIcon />
                </div>
                <h3 className={styles.attentionTitle}>{t('home.attention.inner.title', 'The Inner Dimension')}</h3>
              </div>
              <div className={`${styles.attentionCardFace} ${styles.attentionCardBack}`}>
                <h3 className={styles.attentionTitle}>{t('home.attention.inner.title', 'The Inner Dimension')}</h3>
                <p className={styles.attentionBackText}>
                  {t(
                    'home.attention.inner.body',
                    'An inquiry into the inner capacities required to meet complexity with courage, coherence, and purpose.'
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section} style={{ background: '#ffffff' }}>
        <div className={styles.sectionHeadingCentered}>
          <span className={styles.sectionHeadingHighlightCentered} />
          <h2 className={styles.sectionTitleCentered}>{t('home.why.title', 'Why this thinking matters')}</h2>
        </div>
        <div className={styles.whyText} style={{ textAlign: 'left', lineHeight: '110%' }}>
          <p style={{ margin: 0 }}>
            {t(
              'home.why.p1',
              'How we meet uncertainty shapes more than outcomes — it shapes cultures, values, and the futures we make possible.'
            )}
          </p>
          <p style={{ margin: 0 }}>
            {t(
              'home.why.p2',
              'In moments of disruption, it is easy to default to speed, certainty, or control. Yet the challenges we face today ask for something different: deeper understanding, ethical discernment, and the capacity to hold complexity without fragmenting.'
            )}
          </p>
          <p style={{ margin: 0 }}>
            {t(
              'home.why.p3',
              'This work is ultimately about learning how to stay present to what is unfolding — and to respond in ways that are not only effective, but meaningful, responsible, and regenerative over the long term.'
            )}
          </p>
          <p style={{ margin: 0 }}>
            {t(
              'home.why.p4',
              'This work remains an ongoing inquiry into how we meet uncertainty — and what becomes possible when we do so with care, clarity, and responsibility.'
            )}
          </p>
        </div>
      </section>

      <section className={styles.exploreSection}>
        <div className={styles.exploreInner}>
          <div className={styles.exploreGrid}>
            <div className={styles.exploreMedia} aria-hidden="true">
              <Image
                src={img('home.explore.image', thinkingImage)}
                alt={alt('home.explore.image', '')}
                fill
                className={styles.exploreImg}
                priority
              />
            </div>
            <div className={styles.exploreContent}>
              <h2 className={styles.exploreTitle}>
                {t('home.explore.title', 'If this way of seeing resonates, you can explore further:')}
              </h2>
              <div className={styles.exploreLinks}>
                <a href="/thinking" className={styles.exploreLink}>
                  <span className={styles.exploreDash} aria-hidden="true">
                    <Image src={img('home.explore.dash', dashImage)} alt="" fill className={styles.exploreDashImg} />
                  </span>
                  <span className={styles.exploreLinkLabel}>
                    <span className={styles.exploreLinkUnderline}>{t('home.explore.linkThinking', 'Thinking')}</span>{' '}
                    — {t('home.explore.linkThinkingSuffix', 'research and inquiry')}
                  </span>
                </a>
                <a href="/practice" className={styles.exploreLink}>
                  <span className={styles.exploreDash} aria-hidden="true">
                    <Image src={img('home.explore.dash', dashImage)} alt="" fill className={styles.exploreDashImg} />
                  </span>
                  <span className={styles.exploreLinkLabel}>
                    <span className={styles.exploreLinkUnderline}>{t('home.explore.linkPractice', 'Practice')}</span>{' '}
                    — {t('home.explore.linkPracticeSuffix', 'where this thinking meets reality')}
                  </span>
                </a>
                <a href="/about" className={styles.exploreLink}>
                  <span className={styles.exploreDash} aria-hidden="true">
                    <Image src={img('home.explore.dash', dashImage)} alt="" fill className={styles.exploreDashImg} />
                  </span>
                  <span className={styles.exploreLinkLabel}>
                    <span className={styles.exploreLinkUnderline}>{t('home.explore.linkAbout', 'About')}</span> —{' '}
                    {t('home.explore.linkAboutSuffix', 'journey, philosophy, and stance')}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

