import {json, type LoaderArgs} from '@shopify/remix-oxygen';
import {
  useLoaderData,
  useLocation,
  type V2_MetaFunction,
} from '@remix-run/react';
import StandardPage from '../pages/StandardPage';
import SectionBanner from '~/sections/SectionBanner';

export const meta: V2_MetaFunction = ({data}) => {
  return [{title: `${data.page.title} | Alexander Marius`}];
};

export async function loader({params, context}: LoaderArgs) {
  if (!params.handle) {
    throw new Error('Missing page handle');
  }

  const {page} = await context.storefront.query(PAGE_QUERY, {
    variables: {
      handle: params.handle,
    },
  });

  if (!page) {
    throw new Response('Not Found', {status: 404});
  }

  return json({page});
}

export default function Page() {
  const {page} = useLoaderData<typeof loader>();
  const location = useLocation();

  return (
    <div className="page">
      <header className="bg-[--color-main] border-b-[2.5rem] border-[--color-secondary]">
        <div className="grid gap-y-[4rem] px-4 pt-[3rem] md:pt-[7rem] md:pb-0">
          <div className="mx-auto max-w-[1536px] w-full grid grid-cols-4 sm:grid-cols-8 md:grid-cols-12 gap-x-gutter gap-y-[2.5rem]">
            <div className="col-span-4 xs:col-span-4 sm:col-span-8 md:col-span-6 col-start-1 pt-xl">
              <div className="text-left text-white">
                <h1 className="text-[3rem] font-[900] leading-[3.5rem]">
                  {page.title}
                </h1>
                <div className="text-[1.375rem] tracking-[-0.02em] leading-[2rem] pt-[1rem] line-clamp-3">
                  Our services cater to a wide range of local and global clients
                  with diverse needs, and are market leaders in their own
                  rights. Elevate your business with a suite of services
                  designed to deliver excellence and drive growth. Explore how
                  we can serve you.
                </div>
              </div>
            </div>
            <div className="col-span-4 xs:col-span-4 sm:col-span-8 md:col-span-6 col-start-1 md:col-start-7  flex flex-col gap-y-[2.5rem]">
              <picture>
                <img
                  alt="Alexander Marius abstract triangle illustration"
                  className="mx-auto ml-0 w-full bottom-0"
                  src="https://cdn.shopify.com/s/files/1/0687/9913/5766/files/triangle.png?v=1698992900 3x"
                />
              </picture>
            </div>
          </div>
        </div>
      </header>
      <StandardPage page={page} />
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
      seo {
        description
        title
      }
    }
  }
` as const;
