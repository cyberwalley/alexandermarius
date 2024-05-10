import {json, type LoaderArgs} from '@shopify/remix-oxygen';
import {
  useLoaderData,
  useLocation,
  type V2_MetaFunction,
} from '@remix-run/react';

import CareerPageJobDetails from '~/pages/CareerPageJobDetails';
import ServiceDetailsPage from '~/pages/ServiceDetailsPage';

export const meta: V2_MetaFunction = ({data}) => {
  return [{title: `${data.article.title} | Alexander Marius`}];
};

export async function loader({params, context}: LoaderArgs) {
  const {handle, subHandle} = params;

  if (!handle || !subHandle) {
    throw new Response('Not found', {status: 404});
  }
  const {blog} = await context.storefront.query(GET_ARTICLE_QUERY, {
    variables: {handle, subHandle},
  });

  const {blogs} = await context.storefront.query(
    GET_ALL_BLOGS_FOR_SERVICE_DETAIL_PAGE_QUERY,
  );

  const {metaobjects} = await context.storefront.query(
    GET_METOBJECTS_BUS_RESTRUCTURE_QUERY,
  );

  if (!blog?.articleByHandle) {
    throw new Response(null, {status: 404});
  }

  const article = blog.articleByHandle;

  return json({article, blog, blogs, subHandle, metaobjects});
}

const JobPost = () => {
  const {article, blog, metaobjects} = useLoaderData<typeof loader>();
  const {title, image, contentHtml, author} = article;
  const location = useLocation();

  const publishedDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(article.publishedAt));

  return (
    <div className="article">
      {blog?.handle === 'careers' && (
        <CareerPageJobDetails parentPage={blog?.handle} article={article} />
      )}
      {blog?.handle !== 'careers' && (
        <ServiceDetailsPage
          metaobjects={metaobjects}
          parentPage={blog?.handle}
          article={article}
        />
      )}
    </div>
  );
};

export default JobPost;

const GET_ARTICLE_QUERY = `#graphql
  query ArticleCareerPage(
    $handle: String!
    $subHandle: String!
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(language: $language, country: $country) {
    blog(handle: $handle) {
      handle
      articleByHandle(handle: $subHandle) {
        title
        contentHtml
        excerpt
        seo {
          title
          description
        }
        publishedAt
        author: authorV2 {
          name
        }
        image {
          id
          altText
          url
          width
          height
        }
        metafields(identifiers: [{ key: "job_location", namespace:"custom" }, {key: "apply_link", namespace:"custom"}]){
            id
            value     
        }   
        seo {
          description
          title
        }
      }
    }
  }
` as const;

export const GET_PAGE_QUERY = `#graphql
  query ServicesPage(
    $language: LanguageCode,
    $country: CountryCode,
    $handle: String!
  )
  @inContext(language: $language, country: $country) {
    page(handle: $handle) {
    id
    title
    bodySummary
    body
    handle
  }
  }
` as const;

const GET_ALL_BLOGS_FOR_SERVICE_DETAIL_PAGE_QUERY = `#graphql
  query AllBlogsServiceDetailPage(
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
              contentHtml
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

const GET_METOBJECTS_BUS_RESTRUCTURE_QUERY = `#graphql
   query ServicesMetaobjects(
    $language: LanguageCode,
    $country: CountryCode,
  )
  @inContext(language: $language, country: $country) {
    metaobjects(type: "business_restructuring", first: 20) {
    edges {
      node {
        id
        type
        fields {
          value
          key
        }
      }
    }
  }
  }
` as const;
