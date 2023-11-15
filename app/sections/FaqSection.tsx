import {Link, useLoaderData} from '@remix-run/react';
import type {loader} from '~/routes/_index';
import type {AllBlogsQuery} from 'storefrontapi.generated';
import Accordion from '../components/Accordion';

const FaqSection = () => {
  const {blogs}: AllBlogsQuery = useLoaderData<typeof loader>();

  return (
    <section className="rounded-t-[1.3rem] md:rounded-t-[2rem] bg-[--color-secondary] px-[1rem]">
      <div className="grid gap-y-[4rem] px-4 pt-[3rem] md:pt-[7rem] pb-[3rem] md:pb-[7rem]">
        <div className="relative mx-auto max-w-[1536px] w-full grid grid-cols-4 sm:grid-cols-8 md:grid-cols-12 gap-x-gutter gap-y-2xl">
          <div className="col-span-4 xs:col-span-4 sm:col-span-8 md:col-span-10 lg:col-span-8 xl:col-span-8 col-start-1 pt-xl">
            <div className="text-left text-black">
              <h2 className="text-[3rem] font-[900] leading-[3.5rem]">
                <Link
                  className="text-black no-underline hover:no-underline"
                  to="blogs/faq"
                >
                  Frequently Asked Questions
                </Link>
              </h2>

              <div
                // @ts-ignore
                dangerouslySetInnerHTML={{
                  __html:
                    '<div>Frequently asked questions about our recruitment services.</div>',
                }}
                className="text-[1.375rem] tracking-[-0.02em] leading-[2rem] pt-[1rem] line-clamp-3"
              ></div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-[1000px]">
          <div>
            <Accordion blogs={blogs} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
