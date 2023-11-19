import {useLoaderData} from '@remix-run/react';
import type {loader} from '~/routes/_index';
import {Image} from '@shopify/hydrogen';
import Button from './Button';
import Marquee from './Marque';
import {useMediaQuery} from '~/hooks/useMediaQuery';
import NewsletterForm from './NewsletterForm';

const Hero = () => {
  const isMediumLargeDevice = useMediaQuery('(min-width: 768px)');
  const {collection} = useLoaderData<typeof loader>();

  if (!collection) return null;
  const image = collection?.image;

  return (
    <section
      className="px-[1rem] bg-contain bg-repeat md:bg-no-repeat"
      style={{backgroundImage: `url(${image?.url})`, width: '100%'}}
    >
      <div className="relative overflow-hidden  md:bg-cover p-4 md:p-0">
        <div className="relative mx-auto max-w-[1536px] grid grid-cols-4 sm:grid-cols-8 md:grid-cols-12 gap-x-gutter gap-x-[1.5rem] gap-y-[2rem]">
          <div className="col-span-4 xs:col-span-4 md:col-span-6 col-start-1 flex flex-col pt-3xl sm:col-span-8 my-auto md:py-[5rem] gap-y-[3rem]">
            <div className="text-left text-black z-[2]">
              <h1 className="text-[2rem] text-left mb-4 mt-0 md:text-[4.2rem] text-[var(--color-main)] font-[900] leading-tight md:leading-[1.3]">
                {collection.title}
              </h1>
              <p className="text-left leading-[2rem]  text-[var(--color-main)] pt-2 line-clamp-5 md:line-clamp-3">
                {collection.description}
              </p>
              <div className="w-full mt-4 text-left">
                <a href="/pages/about-us" className="group">
                  <span className="mb-2 underline hover:no-underline text-lg font-medium">
                    Read more about us
                    <svg
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      focusable="false"
                      className="group-hover:opacity-100 opacity-0 w-4 h-4 inline-block transition-all duration-500 group-hover:translate-x-2 will-change-transform"
                    >
                      <path
                        d="M17.707 9.293l-5-5a.999.999 0 10-1.414 1.414L14.586 9H3a1 1 0 100 2h11.586l-3.293 3.293a.999.999 0 101.414 1.414l5-5a.999.999 0 000-1.414z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
            <NewsletterForm className="w-full lg:w-[90%] xl:w-[80%]" />
          </div>
          <div className="col-span-4 xs:col-span-4 md:col-span-5 xs:col-start-1 flex flex-row gap-[1rem] my-auto sm:col-start-1 sm:col-span-8">
            <Marquee
              content={collection}
              contentType="text"
              orientation={isMediumLargeDevice ? 'vertical' : 'horizontal'}
              variant="double"
              reverse
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
