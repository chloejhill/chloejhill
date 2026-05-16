'use client';

import { useState } from 'react';
import { NavLinkItem } from '@/lib/navLink';
import { useSiteSettings } from '@/lib/SiteSettingsProvider';
import { LinkedInFooterIcon } from '../icons';
import styles from './Footer.module.css';

export default function Footer() {
  const { navLinks, linkedInUrl, footer } = useSiteSettings();
  const [email, setEmail] = useState('');
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('loading');
    setSubmitError(null);
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      const data = (await res.json().catch(() => ({}))) as {
        error?: string;
      };
      if (!res.ok) {
        setSubmitStatus('error');
        setSubmitError(data.error || 'Something went wrong. Please try again.');
        return;
      }
      setSubmitStatus('success');
      setEmail('');
    } catch {
      setSubmitStatus('error');
      setSubmitError('Network error. Please try again.');
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (submitStatus === 'success' || submitStatus === 'error') {
      setSubmitStatus('idle');
      setSubmitError(null);
    }
  };

  return (
    <footer className={styles.newsletterSection}>
      <div className={styles.newsletterInner}>
        <div className={styles.footerTop}>
          <div
            className={`${styles.newsletterCopy} ${styles.footerNewsletter}`}
          >
            <h2 className={styles.newsletterTitle}>{footer.newsletterTitle}</h2>
            <p className={styles.newsletterText}>{footer.newsletterText}</p>
            <form
              className={`${styles.newsletterForm} ${styles.footerFormTypography}`}
              onSubmit={handleNewsletterSubmit}
            >
              <label
                className={`${styles.srOnly} ${styles.footerFormTypography}`}
                htmlFor="footer-newsletter-email"
              >
                Email address
              </label>
              <input
                id="footer-newsletter-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={handleEmailChange}
                placeholder="Email address"
                disabled={submitStatus === 'loading'}
                className={`${styles.newsletterInput} ${styles.footerNewsletterControl}`}
              />
              <button
                className={`${styles.newsletterButton} ${styles.footerNewsletterControl}`}
                type="submit"
                disabled={submitStatus === 'loading'}
              >
                {submitStatus === 'loading' ? 'Subscribing…' : 'Subscribe'}
              </button>
            </form>
            {(submitStatus === 'success' || submitStatus === 'error') && (
              <p
                className={styles.newsletterStatus}
                data-status={submitStatus}
                role={submitStatus === 'error' ? 'alert' : undefined}
              >
                {submitStatus === 'success'
                  ? 'Thank you — you’re subscribed.'
                  : submitError}
              </p>
            )}
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
