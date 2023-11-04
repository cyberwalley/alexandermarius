import {useLoaderData} from '@remix-run/react';
import type {loader} from '~/routes/_index';
import ServiceItem from './ServiceItem';
import type {PageSectionQuery} from 'storefrontapi.generated';

const ServiceSection = () => {
  const {pages} = useLoaderData<typeof loader>();
  const page: PageSectionQuery['pages']['edges'] = pages?.edges;
  return (
    <section className="bg-[--color-main] px-[1rem]">
      <div className="grid gap-y-[4rem] px-4 pt-[3rem] md:pb-0">
        <div className="relative mx-auto max-w-[1536px] w-full grid grid-cols-4 sm:grid-cols-8 md:grid-cols-12 gap-x-gutter gap-y-2xl">
          <div className="col-span-4 xs:col-span-4 sm:col-span-8 md:col-span-10 lg:col-span-8 xl:col-span-8 col-start-1 pt-xl">
            <div className="text-left text-white">
              <h2 className="text-[3rem] font-[900] leading-[3.5rem]">
                Services
              </h2>
              <p className="text-[1.375rem] tracking-[-0.02em] leading-[2rem] pt-[1rem]">
                Our services cater to a wide range of local and global clients
                with diverse needs, and are market leaders in their own rights.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-[1536px] w-full grid grid-cols-4 sm:grid-cols-8 md:grid-cols-12 gap-x-[1.5rem] gap-y-[2.5rem]">
          <div className="col-span-4 xs:col-span-4 sm:col-span-8 md:col-span-6 col-start-1 flex flex-col gap-y-[2.5rem]">
            <picture>
              <img
                alt="A person at a store check-out, using the Shopify point of sale tablet to complete their purchase."
                className="mx-auto ml-0 w-full"
                src="https://cdn.shopify.com/s/files/1/0687/9913/5766/files/triangle.png?v=1698992900 3x"
              />
            </picture>
          </div>
          <div className="sm:px-0 md:px-0 lg:px-[4rem] col-span-4 xs:col-span-4 md:col-span-6 xs:col-start-1 sm:col-start-1 md:col-start-7 flex flex-col gap-y-xl sm:col-span-6">
            <div className="grid gap-y-[2.5rem] pb-[4rem]">
              <div className="grid grid-cols-1 gap-x-[1.5rem] gap-y-[2.5rem]">
                {page?.map((page, index) => {
                  if (
                    page.node.handle === 'manpower-management' ||
                    page.node.handle === 'business-management-and-consulting'
                  )
                    //@ts-ignore
                    return <ServiceItem page={page} />;
                  return null;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

ServiceSection.displayName = 'ServiceSection';

export default ServiceSection;
