import {Link, useLoaderData} from '@remix-run/react';
import type {loader} from '~/routes/_index';
import ServiceItem from './ServiceItem';
import type {PageSectionQuery} from 'storefrontapi.generated';
import ConsultingIcon from '~/assets/svg/ConsultingIcon';
import HumanCapitalIcon from '~/assets/svg/HumanCapitalIcon';
import {Button, ChevronRight} from '@relume_io/relume-ui';
import ChevronLeft from '~/assets/svg/ChevronLeft';

interface ServiceSectionProps {
  page: string;
  description?: string;
}

const ServiceSection = ({page, description}: ServiceSectionProps) => {
  const {pages, blogs} = useLoaderData<typeof loader>();
  const allPages = pages?.edges;

  return (
    <section className="px-[5%] py-16 pb-0 md:py-24 lg:py-28 bg-brand-darkest relative overflow-hidden">
      <div className="container !h-full ">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            {/* <p className="mb-3 font-semibold md:mb-4">{tagline}</p> */}
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              <Link
                className="text-white no-underline hover:no-underline"
                to="pages/services"
              >
                {page}
              </Link>
            </h2>
            <p className="mb-6 md:mb-8 md:text-md text-white">{description}</p>
            <div className="grid grid-cols-1 gap-6 py-2 md:grid-cols-2">
              {/*  {subHeadings.map((subHeading, index) => (
                <div key={article?.node?.id}>
                  <div className="mb-3 md:mb-4">
                    {article?.node.title?.includes('Manpower') ? (
                      <HumanCapitalIcon className="w-10 h-10 text-gray-800 dark:text-white" />
                    ) : (
                      <ConsultingIcon className="w-10 h-10 text-gray-800 dark:text-white" />
                    )}
                  </div>
                  <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                    {article?.node.title}
                  </h6>
                  <p>{article?.node.content}</p>
                </div>
              ))} */}

              {blogs?.edges?.map((blog) => {
                if (blog?.node?.handle === 'services') {
                  return blog?.node?.articles?.edges.map((article) => {
                    return (
                      <div key={article?.node?.id}>
                        <div className="mb-3 md:mb-4">
                          {article?.node.title?.includes('Manpower') ? (
                            <HumanCapitalIcon className="w-16 h-16 mb-3 p-4 rounded-md bg-brand-primary md:mb-4 text-brand-darkest" />
                          ) : (
                            <ConsultingIcon className="w-16 h-16 p-1 rounded-md bg-brand-primary mb-3 md:mb-4 text-brand-darkest" />
                          )}
                        </div>
                        <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl text-white">
                          {article?.node.title}
                        </h6>
                        <p className="text-white line-clamp-5 md:line-clamp-3">
                          {article?.node.content}
                        </p>
                        <div className="mt-5 flex items-center gap-x-4 md:mt-6 text-white">
                          <Link
                            to={`pages/services/${article?.node.handle}`}
                            className="group text-white"
                          >
                            <Button
                              variant="link"
                              size="link"
                              iconRight={<ChevronRight />}
                              className="flex"
                            >
                              Read more
                            </Button>
                          </Link>
                        </div>
                      </div>
                    );
                  });
                }
                return null;
              })}
            </div>
            {/* <div className="mt-6 flex items-center gap-x-4 md:mt-8">
              {buttons.map((button, index) => (
                <Button
                  key={`${button.title}-${index}`}
                  variant={button.variant}
                  size={button.size}
                  iconRight={button.iconRight}
                  iconLeft={button.iconLeft}
                >
                  {button.title}
                </Button>
              ))}
            </div> */}
          </div>
          <div>
            <img
              src="https://cdn.shopify.com/s/files/1/0837/5717/0963/files/triangle-new.png?v=1713331672 3x"
              className="object-cover mx-auto ml-0 md:absolute bottom-0 lg:w-[45%]"
              alt="Alexander Marius abstract triangle illustration"
            />
          </div>
        </div>
      </div>
    </section>
  );
  /*  return (
    <section className="rounded-t-[1.3rem] md:rounded-t-[2rem] bg-[--color-main] px-[1rem]">
      <div className="grid gap-y-[4rem] px-4 pt-[3rem] md:pt-[7rem] md:pb-0">
        <div className="relative mx-auto max-w-[1536px] w-full grid grid-cols-4 sm:grid-cols-8 md:grid-cols-12 gap-x-gutter gap-y-2xl">
          <div className="col-span-4 xs:col-span-4 sm:col-span-8 md:col-span-10 lg:col-span-8 xl:col-span-8 col-start-1 pt-xl">
            <div className="text-left text-white">
              <h2 className="text-[3rem] font-[900] leading-[3.5rem]">
                <Link
                  className="text-white no-underline hover:no-underline"
                  to="pages/services"
                >
                  Services
                </Link>
              </h2>
              <div className="text-[1.375rem] tracking-[-0.02em] leading-[2rem] pt-[1rem] line-clamp-3">
                Our services cater to a wide range of local and global clients
                with diverse needs, and are market leaders in their own rights.
                Elevate your business with a suite of services designed to
                deliver excellence and drive growth. Explore how we can serve
                you.
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-[1536px] w-full grid grid-cols-4 sm:grid-cols-8 md:grid-cols-12 gap-x-[1.5rem] gap-y-[2.5rem]">
          <div className="sm:px-0 md:px-0  col-span-4 xs:col-span-4 md:col-span-6 xs:col-start-1 sm:col-start-1 md:col-start-1 flex flex-col gap-y-xl sm:col-span-6">
            <div className="grid gap-y-[2.5rem] pb-[6rem] md:pb-[8rem]">
              <div className="grid grid-cols-1 gap-x-[1.5rem] gap-y-[2.5rem] lg:flex">
                {blogs?.edges?.map((blog) => {
                  if (blog?.node?.handle === 'services') {
                    return blog?.node?.articles?.edges.map((article) => {
                      return (
                        <ServiceItem
                          key={article?.node?.id}
                          article={article}
                          icon={
                            article?.node.title?.includes('Manpower') ? (
                              <HumanCapitalIcon className="w-10 h-10 text-gray-800 dark:text-white" />
                            ) : (
                              <ConsultingIcon className="w-10 h-10 text-gray-800 dark:text-white" />
                            )
                          }
                        />
                      );
                    });
                  }
                  return null;
                })}
              </div>
            </div>
          </div>
          <div className="col-span-4 md:relative xs:col-span-4 sm:col-span-8 md:col-span-6 col-start-1 md:col-start-7  flex flex-col gap-y-[2.5rem]">
            <picture>
              <img
                alt="Alexander Marius abstract triangle illustration"
                className="mx-auto ml-0 w-full md:absolute bottom-0"
                src="https://cdn.shopify.com/s/files/1/0687/9913/5766/files/triangle.png?v=1698992900 3x"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  ); */
};

ServiceSection.displayName = 'ServiceSection';

export default ServiceSection;
