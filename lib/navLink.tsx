import Link from 'next/link';

import type { CmsNavLink } from '@/lib/cmsTypes';

export function NavLinkItem({
  link,
  className,
  onClick
}: {
  link: CmsNavLink;
  className?: string;
  onClick?: () => void;
}) {
  if (link.openInNewTab || link.href.startsWith('http')) {
    return (
      <a
        href={link.href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
      >
        {link.label}
      </a>
    );
  }

  return (
    <Link href={link.href} className={className} onClick={onClick}>
      {link.label}
    </Link>
  );
}
