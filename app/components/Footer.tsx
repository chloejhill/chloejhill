'use client';

import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.newsletterSection}>
      <div className={styles.newsletterInner}>
        <div className={styles.footerTop}>
          <div
            className={`${styles.newsletterCopy} ${styles.footerNewsletter}`}
          >
            <h2 className={styles.newsletterTitle}>
              Sign up to my quarterly newsletter
            </h2>
            <p className={styles.newsletterText}>
              reflections, tools, and updates from my work and the world around
              it, sent with intention, not noise
            </p>
            <form className={`${styles.newsletterForm} ${styles.footerFormTypography}`}>
              <label
                className={`${styles.srOnly} ${styles.footerFormTypography}`}
                htmlFor="footer-newsletter-email"
              >
                Email address
              </label>
              <input
                id="footer-newsletter-email"
                type="email"
                placeholder="Email address"
                className={`${styles.newsletterInput} ${styles.footerNewsletterControl}`}
              />
              <button
                className={`${styles.newsletterButton} ${styles.footerNewsletterControl}`}
                type="submit"
              >
                Subscribe
              </button>
            </form>
          </div>

          <nav
            className={`${styles.footerRight} ${styles.footerNav}`}
            aria-label="Footer"
          >
            <Link href="/thinking" className={styles.footerRightLink}>
              Thinking
            </Link>
            <Link href="/practice" className={styles.footerRightLink}>
              Practice
            </Link>
            <Link href="/about" className={styles.footerRightLink}>
              About
            </Link>
            <Link href="/articles" className={styles.footerRightLink}>
              Insights
            </Link>
            <Link href="/contact" className={styles.footerRightLink}>
              Get In Touch
            </Link>
          </nav>
        </div>

        <div className={styles.footerBottomRow}>
          <p className={styles.footerBottomText}>© Chloe J. Hill 2026</p>
          <Link href="/privacy" className={styles.footerBottomLink}>
            Privacy Policy
          </Link>
          <a
            className={styles.footerBottomLinkUnderline}
            href="https://www.moderndaystrategy.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Website by Modern Day Strategy
          </a>
        </div>
      </div>
    </footer>
  );
}
