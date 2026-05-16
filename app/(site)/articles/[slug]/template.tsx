'use client';

import { useLayoutEffect } from 'react';

export default function ArticleSlugTemplate({
  children
}: {
  children: React.ReactNode;
}) {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return children;
}
