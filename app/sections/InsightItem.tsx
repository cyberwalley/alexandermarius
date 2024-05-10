import {Link} from '@remix-run/react';
import type {Image} from '@shopify/hydrogen';
import type {Article, Maybe} from '@shopify/hydrogen/storefront-api-types';
import type {AllBlogsQuery} from 'storefrontapi.generated';
import {Button as RelumeButton, ChevronRight} from '@relume_io/relume-ui';

interface InsightItemProps {
  direction?: 'row-reverse' | 'row';
  blog: string | undefined;
  article: AllBlogsQuery['blogs']['edges'][0]['node']['articles']['edges'][0];
  blogPage: string;
}

const InsightItem = ({
  direction = 'row-reverse',
  blog,
  article,
  blogPage,
}: InsightItemProps) => {
  return (
    <div
      key={article?.node?.id}
      className="flex h-full w-full flex-col items-center justify-start border border-gray-300 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2 rounded-t-[12px] rounded-b-[12px]"
    >
      <div className="relative w-full overflow-hidden pt-[66%]">
        <img
          src={article?.node?.image?.url}
          alt={article?.node?.image?.altText || undefined}
          className="absolute inset-0 w-full object-cover aspect-[3/2] rounded-t-[12px]"
        />
      </div>
      <div className="flex w-full flex-1 flex-col justify-between px-5 py-6 md:p-6">
        <div className="mb-4 flex items-center">
          <Link to={`blogs/${blog}`}>
            <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
              {blogPage}
            </p>
          </Link>
        </div>

        <div className="flex w-full flex-col items-start justify-start">
          <h2 className="mb-2 text-xl font-bold md:text-2xl line-clamp-1">
            {article?.node?.title}
          </h2>
          <p className="line-clamp-2">{article?.node?.content}</p>
          <Link to={`blogs/${blog}/${article?.node?.handle}`}>
            <RelumeButton
              variant="link"
              size="link"
              iconRight={<ChevronRight />}
              className="rounded-full border p-2 border-gray-300 mt-6 flex items-center justify-center gap-x-1"
            >
              Read more
            </RelumeButton>
          </Link>
        </div>
      </div>
    </div>
  );
  /*  return (
    <div
      className={`w-full relative flex flex-col overflow-hidden ${
        direction === 'row' ? 'sm:flex-row' : 'sm:flex-row-reverse'
      } `}
    >
      <div className="flex basis-1/2 place-content-end">
        {article?.node?.image?.url && (
          <picture>
            <img
              alt={article?.node?.image?.altText || undefined}
              className="w-full h-full grow object-cover"
              src={article?.node?.image?.url}
            />
          </picture>
        )}
      </div>
      <div className="grid basis-1/2 sm:place-content-center gap-y-md py-[2rem] md:p-10 lg:p-16">
        <div className="w-full p-4">
          <div className="grid grid-cols-1 gap-10 items-start">
            <h3 className="text-[2.2rem] md:text-[3.2rem] md:leading-[4rem] font-medium line-clamp-3">
              {article?.node?.title}
            </h3>
            <div className="leading-[2rem] text-[1.125rem] line-clamp-2">
              {article?.node?.content}
            </div>
            <div>
              <Link
                to={`blogs/${blog}/${article?.node?.handle}`}
                className="group text-black"
              >
                <span className="mb-2 text-left underline hover:no-underline text-lg font-medium">
                  Read more
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
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  ); */
};

export default InsightItem;
