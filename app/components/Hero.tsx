import {Link, useLoaderData} from '@remix-run/react';
import type {loader} from '~/routes/_index';
import NewsletterForm from './NewsletterForm';
import MarqueCarousel from './MarqueCarousel';
import Button from './Button';

const Hero = () => {
  const {collection} = useLoaderData<typeof loader>();

  if (!collection) return null;
  const image = collection?.image;

  return (
    <header
      className="grid grid-cols-1 gap-y-16 pt-16 md:grid-flow-row md:pt-24 lg:grid-flow-col lg:grid-cols-2 lg:items-center lg:pt-0 bg-contain bg-repeat md:bg-no-repeat"
      style={{backgroundImage: `url(${image?.url})`, width: '100%'}}
    >
      <div className="mx-[5%] max-w-[40rem] justify-self-start lg:ml-[5vw] lg:mr-20 lg:justify-self-end">
        <h1 className="mb-5 text-6xl font-bold md:mb-6 text-[36px] text-brand-darkest">
          {collection.title}
        </h1>
        <p className="line-clamp-5 md:line-clamp-3 text-[19px]">
          {collection.description}
        </p>
        <div className="mt-6 flex gap-x-4 md:mt-8">
          <Link to={'/pages/about-us'}>
            <Button variant="primary" shadow>
              Read more
            </Button>
          </Link>
        </div>
      </div>
      <div className=" overflow-hidden pl-[5vw] pr-[5vw] md:h-[40rem] lg:pl-0">
        {/*  <div className="grid w-full grid-cols-2 gap-x-4">
          <div className="-mt-[120%] grid size-full animate-loop-vertically columns-2 grid-cols-1 gap-4 self-center">
            {collection?.products?.edges.map((product, index) => (
              <div
                key={`${product?.node?.featuredImage?.url}-${index}`}
                className="grid h-full grid-cols-1 gap-4 shadowing"
              >
                <div className="relative w-full pt-[120%]">
                  <img
                    className="absolute inset-0 size-full object-cover"
                    src={product?.node?.featuredImage?.url}
                    alt={product?.node?.featuredImage?.altText || undefined}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="grid size-full animate-loop-vertically grid-cols-1 gap-4">
            {collection?.products?.edges.map((product, index) => (
              <div
                key={`${product?.node?.featuredImage?.url}-${index}`}
                className="grid size-full grid-cols-1 gap-4"
              >
                <div className="relative w-full pt-[120%]">
                  <img
                    className="absolute inset-0 size-full object-cover"
                    src={product?.node?.featuredImage?.url}
                    alt={product?.node?.featuredImage?.altText || undefined}
                  />
                </div>
              </div>
            ))}
          </div>
        </div> */}
        <MarqueCarousel content={collection} />
      </div>
    </header>
  );

  /*  return (
    <section
      className="px-[1rem] bg-contain bg-repeat md:bg-no-repeat"
      style={{backgroundImage: `url(${image?.url})`, width: '100%'}}
    >
      <div className="md:bg-cover md:p-0">
        <div className="relative px-4 pt-4 md:pt-0 mx-auto max-w-[1536px] grid grid-cols-4 sm:grid-cols-8 md:grid-cols-12 gap-x-gutter gap-x-[1.5rem] gap-y-[2rem]">
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
          <div className="col-span-4 xs:col-span-4 md:col-span-6 xs:col-start-1 flex flex-row gap-[1rem] sm:col-start-1 sm:col-span-8">
            <MarqueCarousel content={collection} />
          </div>
        </div>
      </div>
    </section>
  ); */
};

export default Hero;
