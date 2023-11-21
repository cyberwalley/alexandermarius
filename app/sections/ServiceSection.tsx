import {Link, useLoaderData} from '@remix-run/react';
import type {loader} from '~/routes/_index';
import ServiceItem from './ServiceItem';
import type {PageSectionQuery} from 'storefrontapi.generated';
import ConsultingIcon from '~/assets/svg/ConsultingIcon';
import HumanCapital from '~/assets/svg/HumanCapital';

const ServiceSection = () => {
  const {pages, blogs} = useLoaderData<typeof loader>();
  const allPages = pages?.edges;
  return (
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
                            <HumanCapital className="w-10 h-10 text-gray-800 dark:text-white" />
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
  );
};

ServiceSection.displayName = 'ServiceSection';

export default ServiceSection;
