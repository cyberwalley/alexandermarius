import {defer, type LoaderArgs} from '@shopify/remix-oxygen';
import {
  Await,
  useLoaderData,
  Link,
  type V2_MetaFunction,
} from '@remix-run/react';
import {Suspense} from 'react';
import {Image, Money} from '@shopify/hydrogen';
/* import type {
  FeaturedCollectionFragment,
  RecommendedProductsQuery,
} from 'storefrontapi.generated'; */
import Hero from '~/components/Hero';
import SectionBanner from '~/components/SectionBanner';
import ServiceSection from '~/components/ServiceSection';
import {PAGES_QUERY} from '~/components/PagesQuery';
import {HERO_COLLECTION_QUERY} from '~/components/HeroCollectionQuery';
import {GET_SINGLE_PAGE_QUERY} from '~/components/GetSinglePageQuery';
import InsightsSection from '~/components/InsightsSection';
import CaseStudySection from '~/components/CaseStudySection';

export const meta: V2_MetaFunction = () => {
  return [{title: 'Alexander Marius'}];
};

export async function loader({context}: LoaderArgs) {
  const {storefront} = context;
  //const {collections} = await storefront.query(HERO_COLLECTION_QUERY);
  const {collection} = await storefront.query(HERO_COLLECTION_QUERY, {
    variables: {
      handle: 'transforming-business-empowering-workforces',
    },
  });
  //const collection = collections.nodes[0];
  const recommendedProducts = storefront.query(RECOMMENDED_PRODUCTS_QUERY);
  const {pages} = await storefront.query(PAGES_QUERY);
  const {page} = await storefront.query(GET_SINGLE_PAGE_QUERY, {
    variables: {
      handle: 'services',
    },
  });

  const {blog} = await storefront.query(GET_BLOG_QUERY, {
    variables: {
      handle: 'insights',
    },
  });

  return defer({collection, recommendedProducts, pages, page, blog});
}

export default function Homepage() {
  return (
    <div className="home">
      <Hero />
      <ServiceSection />
      <SectionBanner />
      <CaseStudySection />
      <InsightsSection />
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

const GET_BLOG_QUERY = `#graphql
  query BlogSection(
    $language: LanguageCode,
    $country: CountryCode,
    $handle: String!
  )
  @inContext(language: $language, country: $country) {
    blog(handle: $handle) {
    id
    title
    handle
    articles (first: 2) {
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
        }
      }
    }
    seo {
      description
    }
  }
  }
` as const;
