'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './page.styles.module.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { usePayloadOverrides } from '@/lib/usePayloadOverrides';

const projects = [
  {
    id: '1',
    slug: 'resilience-workshop-with-x',
    title: 'Lorem ipsum dolor sit amet consectetur',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo id enim id bibendum.',
    image: '/images/projects/project1.png'
  },
  {
    id: '2',
    slug: 'lorem-ipsum-dolor-sit-amet-consectetur',
    title: 'Lorem ipsum dolor sit amet consectetur',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo id enim id bibendum.',
    image: '/images/projects/project2.png'
  },
  {
    id: '3',
    slug: 'lorem-ipsum-dolor-sit-amet-consectetur-2',
    title: 'Lorem ipsum dolor sit amet consectetur',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo id enim id bibendum.',
    image: '/images/projects/project3.png'
  },
  {
    id: '4',
    slug: 'lorem-ipsum-dolor-sit-amet-consectetur-3',
    title: 'Lorem ipsum dolor sit amet consectetur',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo id enim id bibendum.',
    image: '/images/projects/project4.png'
  },
  {
    id: '5',
    slug: 'lorem-ipsum-dolor-sit-amet-consectetur-4',
    title: 'Lorem ipsum dolor sit amet consectetur',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo id enim id bibendum.',
    image: '/images/projects/project5.png'
  },
  {
    id: '6',
    slug: 'lorem-ipsum-dolor-sit-amet-consectetur-5',
    title: 'Lorem ipsum dolor sit amet consectetur',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo id enim id bibendum.',
    image: '/images/projects/project6.png'
  }
];

export default function Projects() {
  const overrides = usePayloadOverrides('projects');
  const t = (key: string, fallback: string) => overrides?.strings?.[key] || fallback;

  const [visibleProjects, setVisibleProjects] = useState(6);

  const handleLoadMore = () => {
    setVisibleProjects((prev) => prev + 6);
  };

  return (
    <div className={styles.container}>
      <section className="relative w-full min-h-screen mb-[55px]">
        <Navbar />

        <div className="w-full max-w-[1448px] mx-auto px-4 md:px-8 lg:px-16 pt-32 pb-16">
          <h1
            className="font-sans font-normal text-[48px] leading-[normal] text-black text-center mb-16"
            style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
          >
            {t('projects.hero.title', 'Impact Delivered')}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16 mb-12">
            {projects.slice(0, visibleProjects).map((project) => (
              <div key={project.id} className="flex flex-col">
                <div className="relative w-full h-[269px] bg-[#D9D9D9] mb-6">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <svg
                      width="94"
                      height="83"
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

                <h2 className="font-sans font-medium text-[23.462px] leading-[31.993px] text-black mb-4 capitalize text-center">
                  {project.title}
                </h2>
                <p className="font-sans font-normal text-[17.063px] leading-[110%] text-black mb-6 text-center">
                  {project.description}
                </p>
                <div className="flex flex-col items-center gap-[9px] mt-auto">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="font-sans font-normal text-[18px] text-center"
                    style={{ color: '#4F0E0E' }}
                  >
                    More Details
                  </Link>
                  <div
                    className="w-[91px] h-px"
                    style={{ backgroundColor: '#4F0E0E' }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {visibleProjects < projects.length && (
            <div className="flex justify-center items-center">
              <button
                onClick={handleLoadMore}
                className="flex flex-col items-center gap-[9px]"
              >
                <span className="font-sans font-normal text-[18px] text-[#4F0E0E] text-center">
                  Load More
                </span>
                <div className="w-[133px] h-px bg-[#4F0E0E]"></div>
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
