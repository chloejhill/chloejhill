'use client';

import { NavLinkItem } from '@/lib/navLink';
import { useSiteSettings } from '@/lib/SiteSettingsProvider';
import { LinkedInFooterIcon } from '../icons';
import styles from './Footer.module.css';

export default function Footer() {
  const { navLinks, linkedInUrl, footer } = useSiteSettings();

  return (
    <footer className={styles.newsletterSection}>
      <div className={styles.newsletterInner}>
        <div className={styles.footerTop}>
          <div
            className={`${styles.newsletterCopy} ${styles.footerNewsletter}`}
          >
            <h2 className={styles.newsletterTitle}>{footer.newsletterTitle}</h2>
            <p className={styles.newsletterText}>{footer.newsletterText}</p>
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
            {navLinks.map((link) => (
              <NavLinkItem
                key={link.id}
                link={link}
                className={styles.footerRightLink}
              />
            ))}
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerLinkedin}
              aria-label="LinkedIn"
            >
              <LinkedInFooterIcon />
            </a>
          </nav>
        </div>

        <div className={styles.footerBottomRow}>
          <p className={styles.footerBottomText}>{footer.copyrightText}</p>
          <NavLinkItem
            link={{
              id: 'privacy',
              label: footer.privacyLabel,
              href: footer.privacyHref
            }}
            className={styles.footerBottomLink}
          />
          <a
            className={styles.footerBottomLinkUnderline}
            href={footer.creditHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            {footer.creditLabel}
          </a>
        </div>
      </div>
    </footer>
  );
}
