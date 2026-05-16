import Link from 'next/link';

import styles from './page.styles.module.css';

export default function ArticleNotFound() {
  return (
    <div className={styles.container} style={{ backgroundColor: '#D6DCDB' }}>
      <div className="w-full max-w-[1448px] mx-auto px-4 md:px-8 lg:px-16 py-16 text-center">
        <h1
          className="font-normal text-[30px] md:text-[36.151px] leading-normal text-black mb-4"
          style={{ fontFamily: 'var(--font-lora), serif' }}
        >
          Article Not Found
        </h1>
        <Link
          href="/articles"
          className="text-[#4F0E0E] underline"
          style={{ fontFamily: 'var(--font-lora), serif' }}
        >
          Back to Articles
        </Link>
      </div>
    </div>
  );
}
