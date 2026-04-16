'use client';

import Image from 'next/image';
import styles from '../page.module.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { usePayloadOverrides } from '@/lib/usePayloadOverrides';

const articles = [
  {
    id: '1',
    slug: 'lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo id enim id bibendum. Morbi facilisis tortor odio. Suspendisse a lobortis arcu. Aliquam pellentesque, dui ut feugiat gravida, ligula felis luctus sem, in blandit ligula nisi id ipsum. Aliquam volutpat quis nisl at iaculis.',
    image: '/images/articles/article1.png',
    date: '01.02.2024',
    theme: 'Theme Name 1',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo id enim id bibendum. Morbi facilisis tortor odio. Suspendisse a lobortis arcu. Aliquam pellentesque, dui ut feugiat gravida, ligula felis luctus sem, in blandit ligula nisi id ipsum. Aliquam volutpat quis nisl at iaculis. Maecenas dignissim luctus libero, et ultricies leo. Nunc quis mauris et sapien tincidunt lacinia. Curabitur sollicitudin ante vel dui vulputate luctus. Nullam vitae massa tortor. Curabitur tincidunt condimentum magna, ut semper nunc pellentesque ac. Sed tempus ut quam aliquet viverra. Vivamus non sapien vel lacus elementum feugiat vel ut mi.

Nam mi risus, varius eu lobortis in, molestie tempus nulla. Vestibulum fringilla elit ac volutpat tristique. Donec eu tempor sapien. Pellentesque vitae imperdiet ex. Donec ultrices malesuada ante, malesuada aliquam tellus placerat eu. Cras et semper justo. Ut auctor et ex nec tempor. Suspendisse et lorem quis nibh lobortis porta ullamcorper eu mi. Integer molestie odio ac tristique convallis. Nam blandit leo eget nisl fringilla auctor. Sed lorem leo, finibus porta ornare sit amet, sodales quis nibh. Mauris at dui aliquam, euismod lacus eu, tempor lacus. Ut semper molestie ex, at bibendum quam blandit non.

Proin vulputate id nisl lobortis gravida. Sed sollicitudin odio eget viverra malesuada. Phasellus laoreet arcu at diam tincidunt, at dictum nunc vehicula. Pellentesque ante libero, eleifend non lacus nec, placerat ultrices lacus. Ut fermentum fringilla molestie. Curabitur sollicitudin varius dictum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus luctus convallis mi vitae cursus. Duis imperdiet quam quis feugiat porta. Pellentesque vel nulla tortor. Suspendisse potenti. Etiam ultricies libero est, in accumsan odio elementum at.

Donec tincidunt porta odio, ac pretium diam ultrices quis. Donec diam ligula, aliquet eu tincidunt cursus, condimentum pellentesque dui. Praesent viverra, quam eu fermentum egestas, sapien dui maximus velit, ac posuere diam velit quis erat. Integer lacinia nisi magna, sit amet interdum nulla facilisis sit amet. Etiam condimentum condimentum metus, eu auctor metus porta in. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed diam eros, egestas vel dolor sit amet, accumsan aliquam velit.

Pellentesque luctus lacus ipsum, sed malesuada ligula sodales sit amet. Nulla quis metus tincidunt, maximus risus nec, porta arcu. Ut lobortis varius nibh at suscipit. Quisque vel sapien sodales sapien eleifend aliquet. Duis at est velit. Vestibulum auctor convallis orci a auctor. Cras ac dictum neque. Integer eu leo volutpat, semper ligula sit amet, scelerisque metus. Vestibulum viverra porta tincidunt. Fusce cursus ultrices risus ac hendrerit. Donec vel quam porta, cursus nunc in, lacinia dui. In eu eleifend elit.`
  },
  {
    id: '2',
    slug: 'lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit-2',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo id enim id bibendum. Morbi facilisis tortor odio. Suspendisse a lobortis arcu. Aliquam pellentesque, dui ut feugiat gravida, ligula felis luctus sem, in blandit ligula nisi id ipsum. Aliquam volutpat quis nisl at iaculis.',
    image: '/images/articles/article2.png',
    date: '01.02.2024',
    theme: 'Theme Name 1',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo id enim id bibendum. Morbi facilisis tortor odio. Suspendisse a lobortis arcu. Aliquam pellentesque, dui ut feugiat gravida, ligula felis luctus sem, in blandit ligula nisi id ipsum. Aliquam volutpat quis nisl at iaculis. Maecenas dignissim luctus libero, et ultricies leo. Nunc quis mauris et sapien tincidunt lacinia. Curabitur sollicitudin ante vel dui vulputate luctus. Nullam vitae massa tortor. Curabitur tincidunt condimentum magna, ut semper nunc pellentesque ac. Sed tempus ut quam aliquet viverra. Vivamus non sapien vel lacus elementum feugiat vel ut mi.

Nam mi risus, varius eu lobortis in, molestie tempus nulla. Vestibulum fringilla elit ac volutpat tristique. Donec eu tempor sapien. Pellentesque vitae imperdiet ex. Donec ultrices malesuada ante, malesuada aliquam tellus placerat eu. Cras et semper justo. Ut auctor et ex nec tempor. Suspendisse et lorem quis nibh lobortis porta ullamcorper eu mi. Integer molestie odio ac tristique convallis. Nam blandit leo eget nisl fringilla auctor. Sed lorem leo, finibus porta ornare sit amet, sodales quis nibh. Mauris at dui aliquam, euismod lacus eu, tempor lacus. Ut semper molestie ex, at bibendum quam blandit non.`
  },
  {
    id: '3',
    slug: 'lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit-3',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo id enim id bibendum. Morbi facilisis tortor odio. Suspendisse a lobortis arcu. Aliquam pellentesque, dui ut feugiat gravida, ligula felis luctus sem, in blandit ligula nisi id ipsum. Aliquam volutpat quis nisl at iaculis.',
    image: '/images/articles/article3.png',
    date: '01.02.2024',
    theme: 'Theme Name 1',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo id enim id bibendum. Morbi facilisis tortor odio. Suspendisse a lobortis arcu. Aliquam pellentesque, dui ut feugiat gravida, ligula felis luctus sem, in blandit ligula nisi id ipsum. Aliquam volutpat quis nisl at iaculis. Maecenas dignissim luctus libero, et ultricies leo. Nunc quis mauris et sapien tincidunt lacinia. Curabitur sollicitudin ante vel dui vulputate luctus. Nullam vitae massa tortor. Curabitur tincidunt condimentum magna, ut semper nunc pellentesque ac. Sed tempus ut quam aliquet viverra. Vivamus non sapien vel lacus elementum feugiat vel ut mi.`
  }
];

export default function Articles() {
  const overrides = usePayloadOverrides('articles');
  const t = (key: string, fallback: string) => overrides?.strings?.[key] || fallback;

  return (
    <div className={styles.container}>
      <section
        className="relative w-full min-h-screen"
        // style={{ backgroundColor: '#EFEBE7' }}
      >
        <Navbar />

        {/* Main Content */}
        <div className="w-full max-w-[1448px] mx-auto px-4 md:px-8 lg:px-16 pt-32 pb-16">
          <h1
            className="font-sans font-normal text-[40px] leading-[65.954px] text-black mb-16"
            style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
          >
            {t('articles.hero.title', 'Latest Insights')}
          </h1>

          <div className="flex flex-col gap-16">
            {articles.map((article, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
                  {/* Article Content */}
                  <div className="flex-1 max-w-[812px]">
                    <h2 className="font-sans font-medium text-[25px] leading-[29.979px] text-black mb-5 capitalize">
                      {article.title}
                    </h2>
                    <p className="font-sans font-normal text-[18px] leading-[110%] text-black mb-6">
                      {article.description}
                    </p>
                    <a
                      href={`/articles/${article.slug}`}
                      className="inline-block font-sans font-normal text-[18px] text-[#4F0E0E] relative group"
                    >
                      Read More
                      <span className="absolute bottom-[-8px] left-0 w-full h-px bg-[#4F0E0E]"></span>
                    </a>
                  </div>

                  {/* Article Image */}
                  <div className="relative w-full lg:w-[425px] h-[298px] shrink-0 bg-[#D9D9D9]">
                    {/* <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover"
                      unoptimized
                    /> */}
                    {/* Image Icon */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                      <svg
                        width="104"
                        height="91"
                        viewBox="0 0 104 91"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
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
                    </div>
                  </div>
                </div>

                {/* Divider Line */}
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
