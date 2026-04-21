'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.styles.module.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// This would normally come from a database or API
const articles = [
  {
    id: '1',
    slug: 'lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo id enim id bibendum. Morbi facilisis tortor odio. Suspendisse a lobortis arcu. Aliquam pellentesque, dui ut feugiat gravida, ligula felis luctus sem, in blandit ligula nisi id ipsum. Aliquam volutpat quis nisl at iaculis.',
    image: '/images/articles/article1.png',
    featuredImage: '/images/articles/article-featured.png',
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
    featuredImage: '/images/articles/article-featured.png',
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
    featuredImage: '/images/articles/article-featured.png',
    date: '01.02.2024',
    theme: 'Theme Name 1',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo id enim id bibendum. Morbi facilisis tortor odio. Suspendisse a lobortis arcu. Aliquam pellentesque, dui ut feugiat gravida, ligula felis luctus sem, in blandit ligula nisi id ipsum. Aliquam volutpat quis nisl at iaculis. Maecenas dignissim luctus libero, et ultricies leo. Nunc quis mauris et sapien tincidunt lacinia. Curabitur sollicitudin ante vel dui vulputate luctus. Nullam vitae massa tortor. Curabitur tincidunt condimentum magna, ut semper nunc pellentesque ac. Sed tempus ut quam aliquet viverra. Vivamus non sapien vel lacus elementum feugiat vel ut mi.`
  }
];

export default function ArticleDetail() {
  const params = useParams();
  const slug = params?.slug as string;

  const article = articles.find((a) => a.slug === slug);
  let relatedArticles = articles.filter((a) => a.id !== article?.id);

  if (relatedArticles.length < 3) {
    relatedArticles = articles.slice(0, 3);
  } else {
    relatedArticles = relatedArticles.slice(0, 3);
  }

  if (!article) {
    return (
      <div className={styles.container}>
        <div className="w-full max-w-[1448px] mx-auto px-4 md:px-8 lg:px-16 py-16 text-center">
          <h1 className="font-sans font-bold text-4xl mb-4">
            Article Not Found
          </h1>
          <Link href="/articles" className="text-[#4F0E0E] underline">
            Back to Articles
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Navbar />

      {/* Main Content */}
      <div className="w-full max-w-[1448px] mx-auto px-4 md:px-8 lg:px-16 pt-32 pb-16">
        {/* Breadcrumb */}
        <p className="font-sans font-normal text-[14px] leading-[1.7] text-black mb-8">
          <Link href="/articles" className="hover:underline">
            Articles
          </Link>{' '}
          | <span className="font-semibold">{article.title}</span>
        </p>

        {/* Article Header */}
        <div className="mb-8 max-w-[770px] mx-auto">
          <h1
            className="font-sans text-[36px] leading-[1.2] text-black text-center mb-8"
            style={{
              fontFeatureSettings: "'liga' off, 'clig' off"
              // fontWeight: 700
            }}
          >
            {article.title}
          </h1>

          {/* Author and Date Section */}
          <div className="w-full">
            <svg
              width="100%"
              height="1"
              viewBox="0 0 1000 1"
              preserveAspectRatio="none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0"
                y1="0.5"
                x2="1000"
                y2="0.5"
                stroke="#4F0E0E"
                strokeWidth="0.999"
              />
            </svg>
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-3 py-2">
              <div className="relative w-[50px] h-[50px] rounded-full bg-gray-300 shrink-0">
                {/* Avatar placeholder */}
              </div>
              <div>
                <p
                  className="font-sans font-medium text-[16px] text-black"
                  style={{
                    lineHeight: '1.2',
                    marginBottom: '5px',
                    fontWeight: '500'
                  }}
                >
                  Chloe Hill
                </p>
                <p
                  className="font-sans font-normal text-[13px] text-black/60"
                  style={{ lineHeight: '1.2', marginTop: '0' }}
                >
                  {article.date}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-sans font-medium text-[16px] leading-[1.7] text-black">
                <span className="font-medium">Theme: </span>
                <span className="font-normal">{article.theme}</span>
              </p>
            </div>
          </div>

          <div className="w-full mb-8">
            <svg
              width="100%"
              height="1"
              viewBox="0 0 1000 1"
              preserveAspectRatio="none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0"
                y1="0.5"
                x2="1000"
                y2="0.5"
                stroke="#4F0E0E"
                strokeWidth="0.999"
              />
            </svg>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative w-full max-w-[770px] mx-auto h-[516px] mb-12 bg-[#F5F5F5]">
          {/* <Image
            src={article.featuredImage || article.image}
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

        {/* Article Content */}
        <div className="max-w-[770px] mx-auto">
          <div className="font-sans font-normal text-[17px] leading-[110%] text-black whitespace-pre-wrap mb-16">
            {article.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-6">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Share Section */}
          <div className="text-center mb-16">
            <p
              className="font-sans font-medium text-[20px] leading-[1.8] mb-6"
              style={{ color: '#4F0E0E' }}
            >
              Share
            </p>
            <div className="flex justify-center items-center gap-4">
              <a
                href="#"
                className="inline-block rounded-full"
                style={{ backgroundColor: '#DAC9BE' }}
              >
                <svg
                  width="52"
                  height="52"
                  viewBox="0 0 52 52"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="26" cy="26" r="26" fill="#DAC9BE" />
                  <mask id="path-2-inside-1_548_74" fill="white">
                    <path d="M33.7715 18.457C39.5597 18.4571 40.6259 22.2732 40.625 27.2256V37.3467L40.6191 37.3418H34.9131V28.375C34.9131 26.2381 34.8688 23.4952 31.9375 23.4951C28.963 23.4951 28.5039 25.8167 28.5039 28.2188V37.3418H22.79V18.9219H28.2773V21.4326H28.3574C28.9064 20.4933 29.6998 19.7203 30.6533 19.1963C31.6067 18.6724 32.6843 18.4169 33.7715 18.457ZM19.208 37.3398H13.4824V18.9209H19.208V37.3398ZM16.3145 9.75C17.1974 9.74627 18.0458 10.0933 18.6729 10.7148C19.3 11.3365 19.6543 12.1824 19.6582 13.0654C19.6609 13.7237 19.4689 14.3681 19.1055 14.917C18.742 15.466 18.2234 15.8948 17.6162 16.1494C17.0092 16.4038 16.3404 16.4732 15.6943 16.3477C15.048 16.222 14.4529 15.9069 13.9854 15.4434C13.5179 14.9799 13.1987 14.3882 13.0674 13.7432C12.9361 13.098 12.9988 12.4278 13.248 11.8184C13.4973 11.2091 13.9221 10.6875 14.4678 10.3193C15.0135 9.95119 15.6561 9.75297 16.3145 9.75Z" />
                  </mask>
                  <path
                    d="M33.7715 18.457C39.5597 18.4571 40.6259 22.2732 40.625 27.2256V37.3467L40.6191 37.3418H34.9131V28.375C34.9131 26.2381 34.8688 23.4952 31.9375 23.4951C28.963 23.4951 28.5039 25.8167 28.5039 28.2188V37.3418H22.79V18.9219H28.2773V21.4326H28.3574C28.9064 20.4933 29.6998 19.7203 30.6533 19.1963C31.6067 18.6724 32.6843 18.4169 33.7715 18.457ZM19.208 37.3398H13.4824V18.9209H19.208V37.3398ZM16.3145 9.75C17.1974 9.74627 18.0458 10.0933 18.6729 10.7148C19.3 11.3365 19.6543 12.1824 19.6582 13.0654C19.6609 13.7237 19.4689 14.3681 19.1055 14.917C18.742 15.466 18.2234 15.8948 17.6162 16.1494C17.0092 16.4038 16.3404 16.4732 15.6943 16.3477C15.048 16.222 14.4529 15.9069 13.9854 15.4434C13.5179 14.9799 13.1987 14.3882 13.0674 13.7432C12.9361 13.098 12.9988 12.4278 13.248 11.8184C13.4973 11.2091 13.9221 10.6875 14.4678 10.3193C15.0135 9.95119 15.6561 9.75297 16.3145 9.75Z"
                    fill="#343433"
                  />
                  <path
                    d="M33.7715 18.457L33.7115 20.0809L33.7415 20.082H33.7715L33.7715 18.457ZM40.625 27.2256L39 27.2253V27.2256H40.625ZM40.625 37.3467L39.5847 38.595L42.25 40.8161V37.3467H40.625ZM40.6191 37.3418L41.6594 36.0934L41.2075 35.7168H40.6191V37.3418ZM34.9131 37.3418H33.2881V38.9668H34.9131V37.3418ZM34.9131 28.375H36.5381H34.9131ZM31.9375 23.4951L31.9376 21.8701H31.9375V23.4951ZM28.5039 37.3418V38.9668H30.1289V37.3418H28.5039ZM22.79 37.3418H21.165V38.9668H22.79V37.3418ZM22.79 18.9219V17.2969H21.165V18.9219H22.79ZM28.2773 18.9219H29.9023V17.2969H28.2773V18.9219ZM28.2773 21.4326H26.6523V23.0576H28.2773V21.4326ZM28.3574 21.4326V23.0576H29.2899L29.7604 22.2525L28.3574 21.4326ZM30.6533 19.1963L29.8708 17.7721L29.8707 17.7722L30.6533 19.1963ZM19.208 37.3398V38.9648H20.833V37.3398H19.208ZM13.4824 37.3398H11.8574V38.9648H13.4824V37.3398ZM13.4824 18.9209V17.2959H11.8574V18.9209H13.4824ZM19.208 18.9209H20.833V17.2959H19.208V18.9209ZM16.3145 9.75L16.3076 8.12501L16.3071 8.12502L16.3145 9.75ZM18.6729 10.7148L19.8169 9.56081L19.8168 9.56068L18.6729 10.7148ZM19.6582 13.0654L21.2832 13.0587L21.2832 13.0582L19.6582 13.0654ZM19.1055 14.917L20.4604 15.8141L20.4604 15.814L19.1055 14.917ZM17.6162 16.1494L18.2443 17.6481L18.2445 17.648L17.6162 16.1494ZM15.6943 16.3477L15.3842 17.9428L15.3844 17.9428L15.6943 16.3477ZM13.9854 15.4434L12.8412 16.5973L12.8413 16.5974L13.9854 15.4434ZM13.0674 13.7432L11.475 14.0672L11.475 14.0673L13.0674 13.7432ZM13.248 11.8184L11.7441 11.203L11.744 11.2031L13.248 11.8184ZM14.4678 10.3193L13.559 8.97218L13.559 8.97223L14.4678 10.3193ZM33.7715 18.457L33.7715 20.082C36.264 20.082 37.3763 20.8684 37.9938 21.8497C38.7198 23.0033 39.0004 24.7846 39 27.2253L40.625 27.2256L42.25 27.2259C42.2504 24.7141 41.9984 22.1112 40.7445 20.1187C39.3821 17.9538 37.0671 16.8321 33.7715 16.832L33.7715 18.457ZM40.625 27.2256H39V37.3467H40.625H42.25V27.2256H40.625ZM40.625 37.3467L41.6653 36.0983L41.6594 36.0934L40.6191 37.3418L39.5788 38.5902L39.5847 38.595L40.625 37.3467ZM40.6191 37.3418V35.7168H34.9131V37.3418V38.9668H40.6191V37.3418ZM34.9131 37.3418H36.5381V28.375H34.9131H33.2881V37.3418H34.9131ZM34.9131 28.375H36.5381C36.5381 27.3771 36.5478 25.8289 36.0353 24.5352C35.7605 23.8417 35.3089 23.1408 34.569 22.6245C33.8256 22.1057 32.9299 21.8701 31.9376 21.8701L31.9375 23.4951L31.9374 25.1201C32.4107 25.1201 32.6199 25.2274 32.7092 25.2898C32.802 25.3545 32.9111 25.473 33.0138 25.7323C33.2562 26.3443 33.2881 27.236 33.2881 28.375H34.9131ZM31.9375 23.4951V21.8701C30.9827 21.8701 30.1121 22.0572 29.3596 22.4734C28.5978 22.8948 28.0548 23.4973 27.6829 24.1703C26.9813 25.4401 26.8789 26.9869 26.8789 28.2188H28.5039H30.1289C30.1289 27.0485 30.256 26.2335 30.5276 25.742C30.6423 25.5343 30.7718 25.4063 30.9327 25.3174C31.1029 25.2232 31.405 25.1201 31.9375 25.1201V23.4951ZM28.5039 28.2188H26.8789V37.3418H28.5039H30.1289V28.2188H28.5039ZM28.5039 37.3418V35.7168H22.79V37.3418V38.9668H28.5039V37.3418ZM22.79 37.3418H24.415V18.9219H22.79H21.165V37.3418H22.79ZM22.79 18.9219V20.5469H28.2773V18.9219V17.2969H22.79V18.9219ZM28.2773 18.9219H26.6523V21.4326H28.2773H29.9023V18.9219H28.2773ZM28.2773 21.4326V23.0576H28.3574V21.4326V19.8076H28.2773V21.4326ZM28.3574 21.4326L29.7604 22.2525C30.1611 21.5669 30.7403 21.0027 31.4359 20.6204L30.6533 19.1963L29.8707 17.7722C28.6594 18.4378 27.6516 19.4197 26.9544 20.6127L28.3574 21.4326ZM30.6533 19.1963L31.4359 20.6204C32.1318 20.2381 32.9182 20.0516 33.7115 20.0809L33.7715 18.457L33.8315 16.8331C32.4505 16.7821 31.0817 17.1067 29.8708 17.7721L30.6533 19.1963ZM19.208 37.3398V35.7148H13.4824V37.3398V38.9648H19.208V37.3398ZM13.4824 37.3398H15.1074V18.9209H13.4824H11.8574V37.3398H13.4824ZM13.4824 18.9209V20.5459H19.208V18.9209V17.2959H13.4824V18.9209ZM19.208 18.9209H17.583V37.3398H19.208H20.833V18.9209H19.208ZM16.3145 9.75L16.3213 11.375C16.7735 11.3731 17.2079 11.5508 17.5289 11.869L18.6729 10.7148L19.8168 9.56068C18.8836 8.63582 17.6213 8.11946 16.3076 8.12501L16.3145 9.75ZM18.6729 10.7148L17.5288 11.8689C17.8495 12.1868 18.0312 12.62 18.0332 13.0727L19.6582 13.0654L21.2832 13.0582C21.2773 11.7448 20.7504 10.4863 19.8169 9.56081L18.6729 10.7148ZM19.6582 13.0654L18.0332 13.0722C18.0346 13.4099 17.9361 13.7396 17.7505 14.02L19.1055 14.917L20.4604 15.814C21.0016 14.9966 21.2872 14.0376 21.2832 13.0587L19.6582 13.0654ZM19.1055 14.917L17.7505 14.0199C17.5648 14.3005 17.2993 14.5202 16.9879 14.6508L17.6162 16.1494L18.2445 17.648C19.1475 17.2695 19.9192 16.6315 20.4604 15.8141L19.1055 14.917ZM17.6162 16.1494L16.9881 14.6507C16.6764 14.7814 16.334 14.8166 16.0043 14.7525L15.6943 16.3477L15.3844 17.9428C16.3469 18.1299 17.342 18.0263 18.2443 17.6481L17.6162 16.1494ZM15.6943 16.3477L16.0045 14.7525C15.6741 14.6883 15.3691 14.527 15.1294 14.2893L13.9854 15.4434L12.8413 16.5974C13.5368 17.2868 14.4219 17.7557 15.3842 17.9428L15.6943 16.3477ZM13.9854 15.4434L15.1295 14.2894C14.8906 14.0525 14.727 13.7497 14.6597 13.4191L13.0674 13.7432L11.475 14.0673C11.6703 15.0266 12.1453 15.9073 12.8412 16.5973L13.9854 15.4434ZM13.0674 13.7432L14.6598 13.4192C14.5924 13.0883 14.6247 12.745 14.7521 12.4336L13.248 11.8184L11.744 11.2031C11.3728 12.1106 11.2798 13.1077 11.475 14.0672L13.0674 13.7432ZM13.248 11.8184L14.752 12.4338C14.8794 12.1225 15.0967 11.8552 15.3766 11.6664L14.4678 10.3193L13.559 8.97223C12.7474 9.51975 12.1153 10.2958 11.7441 11.203L13.248 11.8184ZM14.4678 10.3193L15.3765 11.6665C15.6561 11.4779 15.9851 11.3765 16.3218 11.375L16.3145 9.75L16.3071 8.12502C15.3272 8.12944 14.371 8.42449 13.559 8.97218L14.4678 10.3193Z"
                    fill="#343433"
                    mask="url(#path-2-inside-1_548_74)"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="inline-block rounded-full"
                style={{ backgroundColor: '#DAC9BE' }}
              >
                <svg
                  width="52"
                  height="52"
                  viewBox="0 0 52 52"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="26" cy="26" r="26" fill="#DAC9BE" />
                  <path
                    d="M32.5003 12.4583H28.4378C26.6421 12.4583 24.9199 13.1716 23.6501 14.4414C22.3803 15.7112 21.667 17.4333 21.667 19.2291V23.2916H17.6045V28.7083H21.667V39.5416H27.0837V28.7083H31.1462L32.5003 23.2916H27.0837V19.2291C27.0837 18.8699 27.2263 18.5255 27.4803 18.2715C27.7342 18.0176 28.0787 17.8749 28.4378 17.8749H32.5003V12.4583Z"
                    fill="#343433"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="inline-block rounded-full"
                style={{ backgroundColor: '#DAC9BE' }}
              >
                <svg
                  width="52"
                  height="52"
                  viewBox="0 0 52 52"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="26" cy="26" r="26" fill="#DAC9BE" />
                  <path
                    d="M32.7031 19.2969H32.7153M19.9062 13.8125H32.0938C35.4592 13.8125 38.1875 16.5408 38.1875 19.9062V32.0938C38.1875 35.4592 35.4592 38.1875 32.0938 38.1875H19.9062C16.5408 38.1875 13.8125 35.4592 13.8125 32.0938V19.9062C13.8125 16.5408 16.5408 13.8125 19.9062 13.8125ZM30.875 25.2322C31.0254 26.2465 30.8522 27.2824 30.3799 28.1925C29.9076 29.1027 29.1604 29.8408 28.2445 30.3018C27.3286 30.7628 26.2906 30.9233 25.2782 30.7604C24.2659 30.5975 23.3306 30.1195 22.6056 29.3944C21.8805 28.6694 21.4025 27.7341 21.2396 26.7218C21.0767 25.7094 21.2372 24.6714 21.6982 23.7555C22.1592 22.8396 22.8973 22.0924 23.8075 21.6201C24.7176 21.1478 25.7535 20.9746 26.7678 21.125C27.8024 21.2784 28.7603 21.7605 29.4999 22.5001C30.2395 23.2397 30.7216 24.1976 30.875 25.2322Z"
                    stroke="#343433"
                    strokeWidth="3.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Our Latest Insights Section */}
        <div className="mt-24">
          <h2
            className="font-sans font-normal text-[35px] leading-[65.954px] text-black text-center mb-16"
            style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
          >
            Our Latest Insights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedArticles.map((relatedArticle) => (
              <div key={relatedArticle.id} className="flex flex-col">
                <div className="relative w-full h-[269px] bg-[#D9D9D9] mb-6">
                  {/* <Image
                    src={relatedArticle.image}
                    alt={relatedArticle.title}
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
                <h3
                  className="font-sans text-[20px] leading-[32px] text-black mb-4 capitalize"
                  style={{ fontWeight: 700 }}
                >
                  {relatedArticle.title}
                </h3>
                <p className="font-sans font-normal text-[17px] leading-[1.4] text-black mb-4 line-clamp-3">
                  {relatedArticle.description}
                </p>
                <Link
                  href={`/articles/${relatedArticle.slug}`}
                  className="inline-block font-sans font-normal text-[18px] relative group"
                  style={{ color: '#4F0E0E' }}
                >
                  <span className="relative" style={{ color: '#4F0E0E' }}>
                    Learn More
                    <span
                      className="absolute bottom-[-8px] left-0 right-0 h-px"
                      style={{ backgroundColor: '#4F0E0E' }}
                    ></span>
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
