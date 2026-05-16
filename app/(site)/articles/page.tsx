'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './page.styles.module.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { defaultArticles } from '@/lib/defaultContent';
import { useArticles } from '@/lib/useArticles';
export default function Articles() {
  const cmsArticles = useArticles();
  const articles =
    cmsArticles && cmsArticles.length > 0 ? cmsArticles : defaultArticles;

  return (
    <div className={styles.container}>
      <section
        className="relative w-full min-h-screen"
        style={{ backgroundColor: '#D6DCDB' }}
      >
        <Navbar />

        <div className="w-full max-w-[1448px] mx-auto px-4 md:px-8 lg:px-16 pt-32 pb-32 md:pb-40">
          <h1
            className="font-normal text-[40px] leading-normal text-black mb-16"
            style={{
              fontFamily: 'var(--font-serif), serif',
              fontFeatureSettings: "'liga' off, 'clig' off"
            }}
          >
            Latest Insights
          </h1>

          <div className="flex flex-col gap-16">
            {articles.map((article, index) => (
              <div key={article.id} className="relative">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
                  <div className="flex-1 max-w-[812px]">
                    <h2
                      className="font-normal text-[24px] md:text-[30px] leading-tight text-black mb-5 capitalize"
                      style={{
                        fontFamily: 'var(--font-serif), serif',
                        fontFeatureSettings: "'liga' off, 'clig' off"
                      }}
                    >
                      {article.title}
                    </h2>
                    <p
                      className="mb-6"
                      style={{
                        color: '#000',
                        fontFamily: 'Lora',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        lineHeight: '35px'
                      }}
                    >
                      {article.description}
                    </p>
                    <Link
                      href={`/articles/${article.slug}`}
                      className="inline-block font-normal text-[18px] text-[#4F0E0E] relative group"
                      style={{ fontFamily: 'var(--font-lora), serif' }}
                    >
                      Read More
                      <span className="absolute bottom-[-8px] left-0 w-full h-px bg-[#4F0E0E]"></span>
                    </Link>
                  </div>

                  <div className={styles.listImageFrame}>
                    {article.image ? (
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className={styles.listImage}
                        sizes="(max-width: 1024px) 100vw, 360px"
                        unoptimized
                      />
                    ) : null}
                  </div>
                </div>

                {index < articles.length - 1 && (
                  <div className="mt-16 w-full h-px bg-black/10"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
