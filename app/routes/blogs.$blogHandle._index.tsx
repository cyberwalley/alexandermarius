import {json, type LoaderArgs} from '@shopify/remix-oxygen';
import {Link, useLoaderData, type V2_MetaFunction} from '@remix-run/react';
import {Image, Pagination, getPaginationVariables} from '@shopify/hydrogen';
import type {ArticleItemFragment} from 'storefrontapi.generated';
import Button from '~/components/Button';
import ArrowRight from '~/assets/svg/ArrowRight';
import {StaticLink} from '~/configs/links';
import Typography from '~/components/Typography';

export const meta: V2_MetaFunction = ({data}) => {
  return [{title: `${data.blog.title} | Alexander Marius`}];
};

export const loader = async ({
  request,
  params,
  context: {storefront},
}: LoaderArgs) => {
  const paginationVariables = getPaginationVariables(request, {
    pageBy: 4,
  });

  if (!params.blogHandle) {
    throw new Response(`blog not found`, {status: 404});
  }

  const {blog} = await storefront.query(BLOGS_QUERY, {
    variables: {
      blogHandle: params.blogHandle,
      ...paginationVariables,
    },
  });

  if (!blog?.articles) {
    throw new Response('Not found', {status: 404});
  }

  return json({blog});
};

export default function Blog() {
  const {blog} = useLoaderData<typeof loader>();
  const {articles} = blog;

  return (
    <div className="blog">
      <header className="bg-[--color-main] bg-brand-darkest px-[1rem]">
        <div className="grid gap-y-[4rem] px-4 pt-[3rem] pb-[3rem] md:pt-[7rem] md:pb-[7rem]">
          <div className="mx-auto max-w-[1536px] w-full grid grid-cols-4 sm:grid-cols-8 md:grid-cols-12 gap-x-gutter gap-y-[2.5rem]">
            <div className="col-span-4 xs:col-span-4 sm:col-span-8 md:col-span-6 col-start-1 pt-xl">
              <div className="text-left text-white">
                <div>
                  <Link className="text-white" to={StaticLink.Root}>
                    <Typography
                      variant="body1"
                      className="text-white capitalize"
                    >
                      Home
                    </Typography>
                  </Link>
                </div>
                <Typography variant="h2" className="text-white">
                  {blog.title}
                </Typography>
                <div className="text-[1.375rem] tracking-[-0.02em] leading-[2rem] pt-[1rem] line-clamp-3">
                  {blog.metafield?.value}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className="bg-white px-[1rem]">
          <div className="grid gap-y-[4rem] px-4 pt-[3rem] md:pt-[7rem] pb-[3rem] md:pb-[7rem]">
            <div className="mx-auto max-w-[1000px] w-full grid grid-cols-1 gap-x-[1.5rem] gap-y-[2.5rem]">
              <div className="blog-grid">
                <Pagination connection={articles}>
                  {({nodes, isLoading, PreviousLink, NextLink}) => {
                    return (
                      <>
                        <PreviousLink className="bg-[--color-secondary] flex justify-center items-center h-full">
                          {isLoading ? (
                            'Loading...'
                          ) : (
                            <span className="text-[2rem] uppercase">
                              ↑ Load previous
                            </span>
                          )}
                        </PreviousLink>
                        {nodes.length === 0 && (
                          <div className="text-center">
                            <Typography variant="h2">Coming soon!</Typography>
                            <p>
                              <Link to={StaticLink.Root}>
                                <Button variant="primary">Back to home</Button>
                              </Link>
                            </p>
                          </div>
                        )}
                        {nodes.map((article, index) => {
                          return (
                            <ArticleItem
                              article={article}
                              key={article.id}
                              blogName={blog?.title}
                              loading={index < 2 ? 'eager' : 'lazy'}
                            />
                          );
                        })}
                        <NextLink className="hover:no-underline bg-[--color-secondary] flex justify-center items-center h-full md:col-span-2 hover:translate-x-[-5px] transition  hover:translate-y-[5px] hover:shadow-none shadow-3xl border-2 border-black  ease-in-out">
                          {isLoading ? (
                            <span className="text-[2rem] uppercase p-4">
                              Loading...
                            </span>
                          ) : (
                            <span className="text-[2rem] uppercase p-4">
                              Load more ↓
                            </span>
                          )}
                        </NextLink>
                      </>
                    );
                  }}
                </Pagination>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function ArticleItem({
  article,
  loading,
  blogName,
}: {
  article: ArticleItemFragment;
  loading?: HTMLImageElement['loading'];
  blogName: string;
}) {
  const publishedAt = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(article.publishedAt!));
  return (
    <div className="blog-article p-4 rounded-md shadowing" key={article.id}>
      <Link to={`/blogs/${article.blog.handle}/${article.handle}`}>
        {article.image && (
          <div className="blog-article-image relative overflow-hidden">
            <Image
              alt={article.image.altText || article.title}
              aspectRatio="3/2"
              data={article.image}
              loading={loading}
              sizes="(min-width: 768px) 50vw, 100vw"
              className="hover:scale-125 transition-transform ease-linear delay-0 duration-300"
            />
          </div>
        )}
      </Link>
      <div className="p-4">
        <small className="uppercase">{blogName}</small>
        <Link to={`/blogs/${article.blog.handle}/${article.handle}`}>
          <h3 className="text-2xl line-clamp-1">{article.title}</h3>
        </Link>
      </div>

      <div className="py-[0.5rem] px-4">
        <div className="line-clamp-3">{article.content}</div>
      </div>
      <div className="w-full p-4 text-left">
        <Link
          to={`/blogs/${article.blog.handle}/${article.handle}`}
          className="group text-black"
        >
          <span className="mb-2 text-left underline hover:no-underline text-lg font-medium">
            Read more
            <ArrowRight />
          </span>
        </Link>
      </div>
    </div>
  );
}

// NOTE: https://shopify.dev/docs/api/storefront/latest/objects/blog
const BLOGS_QUERY = `#graphql
  query Blog(
    $language: LanguageCode
    $blogHandle: String!
    $first: Int
    $last: Int
    $startCursor: String
    $endCursor: String
  ) @inContext(language: $language) {
    blog(handle: $blogHandle) {
      title
      metafield(namespace: "custom", key: "subtitle") {
        id
        value
      }
      seo {
        title
        description
      }
      articles(
        first: $first,
        last: $last,
        before: $startCursor,
        after: $endCursor
      ) {
        nodes {
          ...ArticleItem
        }
        pageInfo {
          hasPreviousPage
          hasNextPage
          hasNextPage
          endCursor
          startCursor
        }

      }
    }
  }
  fragment ArticleItem on Article {
    author: authorV2 {
      name
    }
    contentHtml
    content
    handle
    id
    image {
      id
      altText
      url
      width
      height
    }
    publishedAt
    title
    blog {
      handle
    }
  }
` as const;
