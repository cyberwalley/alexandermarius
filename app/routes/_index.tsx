import {
  type ActionArgs,
  defer,
  json,
  type LoaderArgs,
} from '@shopify/remix-oxygen';
import {
  Await,
  useLoaderData,
  Link,
  type V2_MetaFunction,
  useActionData,
} from '@remix-run/react';
import {Suspense} from 'react';
import {Image, Money} from '@shopify/hydrogen';
import Hero from '~/components/Hero';
import SectionBanner from '~/sections/SectionBanner';
import ServiceSection from '~/sections/ServiceSection';
import {PAGES_QUERY} from '~/components/PagesQuery';
import {HERO_COLLECTION_QUERY} from '~/components/HeroCollectionQuery';
import {GET_SINGLE_PAGE_QUERY} from '~/components/GetSinglePageQuery';
import InsightsSection from '~/sections/InsightsSection';
import CaseStudySection from '~/sections/CaseStudySection';
import CareersSection from '~/sections/CareersSection';
import FaqSection from '~/sections/FaqSection';
import type {CustomerCreateMutation} from 'storefrontapi.generated';
import type {ImageProps, ButtonProps} from '@relume_io/relume-ui';
import LogoImage from '~/sections/LogoImage';
import {BlogPage} from '~/configs/links';
import StatsSection from '~/sections/StatsSection';

export const meta: V2_MetaFunction = () => {
  return [{title: 'Alexander Marius'}];
};

export async function loader({context}: LoaderArgs) {
  const {storefront} = context;
  const {collection} = await storefront.query(HERO_COLLECTION_QUERY, {
    variables: {
      handle: 'transforming-business-empowering-workforces',
    },
  });
  const recommendedProducts = storefront.query(RECOMMENDED_PRODUCTS_QUERY);
  const {pages} = await storefront.query(PAGES_QUERY);
  const {blogs} = await storefront.query(GET_ALL_BLOGS_QUERY);

  return defer({collection, recommendedProducts, pages, blogs});
}

export default function Homepage() {
  return (
    <div className="home">
      <Hero />
      <ServiceSection
        page="Services"
        description="Our services cater to a wide range of local and global clients
                with diverse needs, and are market leaders in their own rights.
                Elevate your business with a suite of services designed to
                deliver excellence and drive growth. Explore how we can serve
                you."
      />
      <StatsSection
        heading="Our (Constantly Growing) Statistics"
        description="We are real people that understand what it takes to hire the right people. We take a personalized approach to business, which means we take the time to understand you, your business and every candidate we introduce to you."
        stats={[
          {
            signBefore: null,
            percentage: 98,
            signAfter: '%',
            heading: 'Client Satisfaction Rate',
          },
          {
            signBefore: null,
            percentage: 95,
            signAfter: '%',
            heading: 'Talent Retention Rate',
          },
          {
            signBefore: '>',
            percentage: 10,
            signAfter: 'K',
            heading: 'Employee Training Hours',
          },
          {
            signBefore: '<',
            percentage: 15,
            signAfter: '%',
            heading: 'Operational Cost Reduction',
          },
          {
            signBefore: null,
            percentage: 100,
            signAfter: '%',
            heading: 'Compliance Success Rate',
          },
          {
            signBefore: '^',
            percentage: 30,
            signAfter: '%',
            heading: 'Client Revenue Growth',
          },
        ]}
      />
      <SectionBanner
        title="Ready to Transform Your Business?"
        subtitle="Unearth unparalleled insights and tailored strategies"
        buttons={[{title: 'Get in touch', url: '/pages/contact'}]}
      />
      <LogoImage />
      {/*   <CaseStudySection
        title="Case study"
        description="Success Stories Sculpted by Strategy. Unveil the narratives of
                  transformation and triumph that underscore our partnership
                  with global leaders. Dive into our case studies."
        page={BlogPage.CaseStudy}
      /> */}
      {/*  <InsightsSection
        title="Trending insights"
        description="Navigate the Now with Next-Level Insights. Tap into the pulse of
                industry innovation and future-forward strategies. Discover the
                trends that will define tomorrow—today."
        page={BlogPage.Insights}
      /> */}
      {/* <FaqSection /> */}
      {/*  <CareersSection
        title="Careers"
        description="Helping businesses succeed requires people from a wide range of
                disciplines and backgrounds. We’re always looking for curious
                minds to join our team."
      /> */}
    </div>
  );
}

/* function FeaturedCollection({
  collection,
}: {
  collection: FeaturedCollectionFragment;
}) {
  if (!collection) return null;
  const image = collection?.image;
  return (
    <Link
      className="featured-collection"
      to={`/collections/${collection.handle}`}
    >
      {image && (
        <div className="featured-collection-image">
          <Image data={image} sizes="100vw" />
        </div>
      )}
      <h1>{collection.title}</h1>
      <p>{collection.description}</p>
    </Link>
  );
} */

/* function RecommendedProducts({
  products,
}: {
  products: Promise<RecommendedProductsQuery>;
}) {
  return (
    <div className="recommended-products">
      <h2>Recommended Products</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={products}>
          {({products}) => (
            <div className="recommended-products-grid">
              {products.nodes.map((product) => (
                <Link
                  key={product.id}
                  className="recommended-product"
                  to={`/products/${product.handle}`}
                >
                  <Image
                    data={product.images.nodes[0]}
                    aspectRatio="1/1"
                    sizes="(min-width: 45em) 20vw, 50vw"
                  />
                  <h4>{product.title}</h4>
                  <small>
                    <Money data={product.priceRange.minVariantPrice} />
                  </small>
                </Link>
              ))}
            </div>
          )}
        </Await>
      </Suspense>
      <br />
    </div>
  );
} */

export async function action({request, context}: ActionArgs) {
  if (request.method !== 'POST') {
    return json({error: 'Method not allowed'}, {status: 405});
  }

  const {storefront} = context;
  const form = await request.formData();
  const email = String(form.has('email') ? form.get('email') : '');
  const password = '*****';
  const acceptsMarketing = true;

  const validInputs = Boolean(email);
  try {
    if (!validInputs) {
      throw new Error('Please provide both an email');
    }
    const {customerCreate} = await storefront.mutate(USER_SUBSCRIBE_MUTATION, {
      variables: {
        input: {email, password, acceptsMarketing},
      },
    });
    if (customerCreate?.customerUserErrors?.length) {
      throw new Error(customerCreate?.customerUserErrors[0].message);
    }
    const newCustomer = customerCreate?.customer;
    if (!newCustomer?.id) {
      throw new Error('Could not subscribe user');
    }

    return json({error: null, newCustomer, message: 'you are subscribed'});
  } catch (error: unknown) {
    if (error instanceof Error) {
      return json({error: error.message}, {status: 400});
    }
    return json({error}, {status: 400});
  }
}

const RECOMMENDED_PRODUCTS_QUERY = `#graphql
  fragment RecommendedProduct on Product {
    id
    title
    handle
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    images(first: 1) {
      nodes {
        id
        url
        altText
        width
        height
      }
    }
  }
  query RecommendedProducts ($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    products(first: 4, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...RecommendedProduct
      }
    }
  }
` as const;

const GET_ALL_BLOGS_QUERY = `#graphql
  query AllBlogs(
    $language: LanguageCode,
    $country: CountryCode,
  )
  @inContext(language: $language, country: $country) {
    blogs(first: 20) {
    edges {
      node {
        id
        title
        handle
        articles(first: 50 sortKey: UPDATED_AT, reverse: true) {
          edges {
            node {
              id
              title
              content
              handle
              publishedAt
              image {
                id
                altText
                url
              }
              metafields(identifiers: [{ key: "job_location", namespace:"custom" }, {key: "apply_link", namespace:"custom"}]){
                id
                value
                
              }
              authorV2 {
                firstName
              }
            }
          }
        }
        seo {
          description
        }
      }
    }
  }
  }
` as const;

const USER_SUBSCRIBE_MUTATION = `#graphql
  mutation customerCreateForm(
    $input: CustomerCreateInput!,
    $country: CountryCode,
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    customerCreate(input: $input) {
      customer {
        id
        email
        acceptsMarketing
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
` as const;
