import {Link, useLoaderData} from '@remix-run/react';
import InsightItem from './InsightItem';
import Button from '../components/Button';
import type {loader} from '~/routes/_index';
import type {AllBlogsQuery} from 'storefrontapi.generated';

const InsightsSection = () => {
  const {blogs}: AllBlogsQuery = useLoaderData<typeof loader>();
  const SIZE = 2;
  return (
    <section className="bg-white px-[1rem]">
      <div className="grid gap-y-[4rem] pt-[3rem] md:py-[7rem] md:pb-[7rem]">
        <div className="relative mx-auto max-w-[1536px] w-full grid grid-cols-4 sm:grid-cols-8 md:grid-cols-12 gap-x-gutter gap-y-2xl">
          <div className="col-span-4 xs:col-span-4 sm:col-span-8 md:col-span-10 lg:col-span-8 xl:col-span-8 col-start-1 pt-xl">
            <div className="text-left text-black">
              <Link
                className="text-black no-underline hover:no-underline"
                to="blogs/insights"
              >
                <h2 className="text-[3rem] font-[900] leading-[3.5rem]">
                  Trending insights
                </h2>
              </Link>
              <p className="text-[1.375rem] tracking-[-0.02em] leading-[2rem] pt-[1rem] line-clamp-3">
                Navigate the Now with Next-Level Insights. Tap into the pulse of
                industry innovation and future-forward strategies. Discover the
                trends that will define tomorrow—today.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto">
          {blogs?.edges?.map((blog) => {
            if (blog?.node?.handle === 'insights') {
              return blog?.node?.articles?.edges
                ?.slice(0, SIZE)
                .map((article, _index) => {
                  if (_index % 2 == 0) {
                    return (
                      <InsightItem
                        key={article?.node?.id}
                        blog={blog?.node?.handle}
                        article={article}
                        direction="row"
                      />
                    );
                  }
                  return (
                    <InsightItem
                      key={article?.node?.id}
                      blog={blog?.node?.handle}
                      article={article}
                    />
                  );
                });
            }
            return null;
          })}

          <div className="flex justify-center mt-10 md:mt-[4rem] mb-10">
            <Button to="blogs/insights" variant="secondary">
              View all insights
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
