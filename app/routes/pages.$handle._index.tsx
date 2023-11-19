import {json, type LoaderArgs} from '@shopify/remix-oxygen';
import {
  useLoaderData,
  useLocation,
  type V2_MetaFunction,
} from '@remix-run/react';
import {Image} from '@shopify/hydrogen';
import StandardPage from '../pages/StandardPage';
import CareersPage from '~/pages/CareersPage';
import type {PageQuery} from 'storefrontapi.generated';

export const meta: V2_MetaFunction = ({data}) => {
  return [{title: `${data.page.title} | Alexander Marius`}];
};

export async function loader({params, context}: LoaderArgs) {
  if (!params.handle) {
    throw new Error('Missing page handle');
  }

  const {page}: PageQuery = await context.storefront.query(PAGE_QUERY, {
    variables: {
      handle: params.handle,
    },
  });

  if (!page) {
    throw new Response('Not Found', {status: 404});
  }

  const {blog} = await context.storefront.query(GET_BLOG_QUERY, {
    variables: {
      handle: params.handle,
    },
  });

  return json({page, blog});
}

export default function Page() {
  const location = useLocation();
  const {page, blog} = useLoaderData<typeof loader>();
  const subtitle = page?.metafields?.[0]?.value;
  const coverImage = page?.metafields?.[1]?.reference?.image;

  return (
    <div className="page">
      <header className="bg-[--color-main] border-b-[2.5rem] border-[--color-secondary] px-[1rem]">
        <div
          className={`grid gap-y-[4rem] px-4 pt-[3rem] md:pt-[7rem] ${
            coverImage ? 'md:pb-0' : 'pb-[7rem]'
          } `}
        >
          <div className="mx-auto max-w-[1536px] w-full grid grid-cols-4 sm:grid-cols-8 md:grid-cols-12 gap-x-gutter gap-y-[2.5rem]">
            <div className="col-span-4 xs:col-span-4 sm:col-span-8 md:col-span-6 col-start-1 pt-xl">
              <div className="text-left text-white">
                <h1 className="text-[3rem] font-[900] leading-[3.5rem]">
                  {page.title}
                </h1>
                {subtitle && (
                  <div className="text-[1.375rem] tracking-[-0.02em] leading-[2rem] pt-[1rem] line-clamp-3">
                    {subtitle}
                  </div>
                )}
              </div>
            </div>
            {coverImage && (
              <div className="col-span-4 xs:col-span-4 sm:col-span-8 md:col-span-6 col-start-1 md:col-start-7  flex flex-col gap-y-[2.5rem]">
                <picture>
                  <Image
                    alt={page.title || page.title}
                    aspectRatio="3/2"
                    data={coverImage}
                    loading="eager"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </picture>
              </div>
            )}
          </div>
        </div>
      </header>
      <main>
        {page.handle === 'careers' ? (
          <CareersPage blog={blog} />
        ) : (
          <StandardPage page={page} />
        )}
      </main>
    </div>
  );
}

const PAGE_QUERY = `#graphql
  query Page(
    $language: LanguageCode,
    $country: CountryCode,
    $handle: String!
  )
  @inContext(language: $language, country: $country) {
    page(handle: $handle) {
      id
      title
      body
      handle
      seo {
        description
        title
      }
      metafields(identifiers: [{ key: "subtitle", namespace:"custom" }, {key: "cover_image", namespace:"custom"}]){
      id
      value
      reference {
        ... on MediaImage {
          image {
            url
          }
        }
      }
     }
    }
  }
` as const;

const GET_BLOG_QUERY = `#graphql
  query CareersPage(
    $language: LanguageCode,
    $country: CountryCode,
    $handle: String!
  )
  @inContext(language: $language, country: $country) {
    blog(handle: $handle) {
    id
    title
    handle
    articles (first: 100 sortKey: UPDATED_AT, reverse: true) {
      edges {
        node {
          id
          title
          content
          contentHtml
          handle
          image {
            id
            width
            altText
            url
          }
          metafields(identifiers: [{ key: "job_location", namespace:"custom" }, {key: "apply_link", namespace:"custom"}]){
            id
            value     
          }   
        }
      }
    }
    seo {
      description
    }
  }
  }
` as const;
