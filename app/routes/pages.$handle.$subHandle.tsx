import {json, type LoaderArgs} from '@shopify/remix-oxygen';
import {
  useLoaderData,
  useLocation,
  type V2_MetaFunction,
} from '@remix-run/react';

import CareerPageJobDetails from '~/pages/CareerPageJobDetails';

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

  if (!blog?.articleByHandle) {
    throw new Response(null, {status: 404});
  }

  const article = blog.articleByHandle;

  return json({article});
}

const JobPost = () => {
  const {article} = useLoaderData<typeof loader>();
  const {title, image, contentHtml, author} = article;
  const location = useLocation();

  const publishedDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(article.publishedAt));

  return (
    <div className="article">
      <CareerPageJobDetails article={article} />
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
      articleByHandle(handle: $subHandle) {
        title
        contentHtml
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
