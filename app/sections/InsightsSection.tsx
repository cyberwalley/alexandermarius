import {Link, useLoaderData} from '@remix-run/react';
import InsightItem from './InsightItem';
//import Button from '../components/Button';
import type {loader} from '~/routes/_index';
import type {AllBlogsQuery} from 'storefrontapi.generated';
import {BlogPage, Section, SitePage} from '~/configs/links';
import {Button as RelumeButton, ChevronRight} from '@relume_io/relume-ui';
import ChevronLeft from '~/assets/svg/ChevronLeft';
import Button from '../components/Button';
import Typography from '~/components/Typography';

interface InsightsSectionProps {
  title: string;
  description: string;
  page: string;
}

const InsightsSection = ({title, description, page}: InsightsSectionProps) => {
  const SIZE = 6;
  const {blogs}: AllBlogsQuery = useLoaderData<typeof loader>();

  const isInsights = blogs?.edges.find(
    (blog) => blog.node.handle === 'insights',
  );

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-[12rem] bg-slate-100">
      <div className="container !h-full">
        {/* <div className="grid grid-cols-1 items-start justify-start gap-y-8 md:grid-cols-[1fr_max-content] md:items-end md:justify-between md:gap-x-12 md:gap-y-4">
          <div className="mb-12 md:mb-18 lg:mb-20 lg:max-w-[50vw]">
            <Link
              to={BlogPage.Insights}
              className="text-black no-underline hover:no-underline"
            >
              <h1 className="mb-3 text-5xl font-bold md:mb-4 md:text-7xl lg:text-8xl">
                {Section.Insights}
              </h1>
            </Link>
            <p className="md:text-md">{description}</p>
          </div>
        </div> */}
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-4 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <Link
            to={BlogPage.Insights}
            className="text-black no-underline hover:no-underline"
          >
            <Typography variant="h2" className="text-brand-darkest">
              {Section.Insights}
            </Typography>
          </Link>
          <Typography variant="body1" className="text-brand-darkest">
            {description}
          </Typography>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
          {blogs?.edges?.map((blog) => {
            if (blog?.node?.handle === 'insights') {
              if (blog?.node?.articles?.edges.length === 0)
                return <Typography variant="body1">Coming soon!</Typography>;
              return blog?.node?.articles?.edges
                .slice(0, SIZE)
                .map((article, _index) => (
                  <InsightItem
                    key={article?.node?.id}
                    blog={blog?.node?.handle}
                    blogPage={Section.Insights}
                    article={article}
                  />
                ));
            }
            return null;
          })}
        </div>
        <div className="flex justify-center mt-10 md:mt-[4rem] mb-10">
          <Button to={BlogPage.Insights} variant="secondary">
            View all insights
          </Button>
        </div>
      </div>
    </section>
  );

  /*  return (
    <section className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container !h-full">
        <div className="mb-12 md:mb-18 lg:mb-20 lg:max-w-[50vw]">
          <Link to={page} className="no-underline hover:no-underline">
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              {title}
            </h2>
          </Link>
          <p className="md:text-md">{description}</p>
        </div>
        <div className="hidden flex-wrap items-center justify-end md:block">
          <Link to={BlogPage.Insights}>
            <Button
              variant="secondary"
              size="link"
              iconRight={<ChevronRight />}
            >
              View all
            </Button>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
        {blogs?.edges?.map((blog) => {
          if (blog?.node?.handle === 'insights') {
            return blog?.node?.articles?.edges.map((article, _index) => (
              <a
                key={article?.node?.id}
                href={blog?.node?.handle}
                className="flex size-full flex-col items-center justify-start border border-border-primary ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2"
              >
                <div className="relative w-full overflow-hidden pt-[66%]">
                  <img
                    src={article?.node?.image?.url}
                    alt={article?.node?.image?.altText || undefined}
                    className="absolute inset-0 w-full object-cover"
                  />
                </div>
                <div className="flex w-full flex-1 flex-col justify-between px-5 py-6 md:p-6">
                  <div className="mb-4 flex items-center">
                    <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                      {blog?.node?.handle}
                    </p>
                  </div>

                  <div className="flex w-full flex-col items-start justify-start">
                    <h2 className="mb-2 text-xl font-bold md:text-2xl">
                      {article?.node?.title}
                    </h2>
                    <p>{article?.node?.content}</p>
                    <Button
                      variant="link"
                      size="link"
                      iconRight={<ChevronRight />}
                      className="mt-6 flex items-center justify-center gap-x-1"
                    >
                      read more
                    </Button>
                  </div>
                </div>
              </a>
            ));
          }
          return null;
        })}
      </div>
    </section>
  );
 */
  /* return (
    <section className="bg-white px-[1rem]">
      <div className="grid gap-y-[4rem] px-4 pt-[3rem] md:py-[7rem] md:pb-[7rem]">
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
  ); */
};

export default InsightsSection;
