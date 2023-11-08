import {Link, useLoaderData} from '@remix-run/react';
import InsightItem from './InsightItem';
import Button from './Button';
import type {loader} from '~/routes/_index';

const InsightsSection = () => {
  const {blog} = useLoaderData<typeof loader>();

  const articles = blog?.articles?.edges;
  return (
    <section className="bg-white px-[1rem]">
      <div className="grid gap-y-[4rem] px-4 pt-[3rem] md:pt-[7rem] md:pb-0">
        <div className="relative mx-auto max-w-[1536px] w-full grid grid-cols-4 sm:grid-cols-8 md:grid-cols-12 gap-x-gutter gap-y-2xl">
          <div className="col-span-4 xs:col-span-4 sm:col-span-8 md:col-span-10 lg:col-span-8 xl:col-span-8 col-start-1 pt-xl">
            <div className="text-left text-black">
              <Link
                className="text-black no-underline hover:no-underline"
                to={`blogs/${blog?.handle}`}
              >
                <h2 className="text-[3rem] font-[900] leading-[3.5rem]">
                  {blog?.title}
                </h2>
              </Link>
              <p className="text-[1.375rem] tracking-[-0.02em] leading-[2rem] pt-[1rem]">
                {blog?.seo?.description}
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto">
          {articles?.map((article, _index) => {
            if (_index % 2 == 0) {
              return (
                <InsightItem
                  key={article.node.id}
                  blog={blog?.title}
                  article={article}
                  direction="row"
                />
              );
            }
            return (
              <InsightItem
                key={article.node.id}
                blog={blog?.title}
                article={article}
              />
            );
          })}
          <div className="flex justify-center mt-10 mb-10 ">
            <Link
              to={`blogs/${blog?.handle}`}
              className="inline-block self-center overflow-hidden max-w-full px-5 py-2 ring-inset rounded-full text-base border-black font-bold tracking-tight transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-state-focus focus-visible:outline hover:ring-1 disabled:hover-ring-0 md:px-6 md:py-3 md:text-lg border-2"
              data-component-name="view-all-sales-channel-apps"
            >
              View all insights
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
