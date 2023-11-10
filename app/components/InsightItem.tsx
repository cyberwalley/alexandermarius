import {Link} from '@remix-run/react';
import type {Image} from '@shopify/hydrogen';
import type {Article, Maybe} from '@shopify/hydrogen/storefront-api-types';
import type {BlogSectionQuery} from 'storefrontapi.generated';

interface InsightItemProps {
  direction?: 'row-reverse' | 'row';
  blog: string | undefined;
  article: BlogSectionQuery;
}

/* ({
  direction = 'row-reverse',
  blog,
  article,
}: {
  article: BlogSectionQuery;
  direction?: 'row' | 'row-reverse';
  blog: string | undefined;
})  */

const InsightItem = ({
  direction = 'row-reverse',
  blog,
  article,
}: {
  article: {
    node: Pick<
      Article,
      'title' | 'content' | 'handle' | 'id' | 'contentHtml'
    > & {
      image?: //@ts-ignore
      Maybe<Pick<Image, 'altText' | 'url' | 'id' | 'width'>> | undefined;
    };
  };
  direction?: 'row' | 'row-reverse';
  blog: string | undefined;
}) => {
  return (
    <div
      className={`w-full relative flex flex-col overflow-hidden ${
        direction === 'row' ? 'sm:flex-row' : 'sm:flex-row-reverse'
      } `}
    >
      <div className="flex basis-1/2 place-content-end">
        <picture>
          <img
            alt={article?.node?.image?.altText}
            className="w-full h-full grow object-cover"
            src={article?.node?.image?.url}
          />
        </picture>
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
  );
};

export default InsightItem;
