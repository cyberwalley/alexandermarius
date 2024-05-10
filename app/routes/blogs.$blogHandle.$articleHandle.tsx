import {json, type LoaderArgs} from '@shopify/remix-oxygen';
import {useLoaderData, type V2_MetaFunction} from '@remix-run/react';
import {Image} from '@shopify/hydrogen';
import {StaticLink} from '~/configs/links';

export const meta: V2_MetaFunction = ({data}) => {
  return [{title: `${StaticLink.SiteName} | ${data.article.title} article`}];
};

export async function loader({params, context}: LoaderArgs) {
  const {blogHandle, articleHandle} = params;

  if (!articleHandle || !blogHandle) {
    throw new Response('Not found', {status: 404});
  }

  const {blog} = await context.storefront.query(ARTICLE_QUERY, {
    variables: {blogHandle, articleHandle},
  });

  if (!blog?.articleByHandle) {
    throw new Response(null, {status: 404});
  }

  const article = blog.articleByHandle;

  return json({article});
}

export default function Article() {
  const {article} = useLoaderData<typeof loader>();
  const {title, image, contentHtml, author} = article;

  const publishedDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(article.publishedAt));

  return (
    <div className="article">
      <div
        className="w-full h-[20rem] md:h-[40rem] relative bg-cover bg-center flex flex-col justify-center items-center"
        style={{backgroundImage: `url(${article.image?.url})`}}
      >
        <h1 className="text-shadowing text-white text-[2rem] md:text-[5rem] max-w-[100rem] leading-[2rem] md:leading-[4.7rem]  text-center font-extrabold">
          {title}
        </h1>
      </div>
      {/* {image && <Image data={image} sizes="90vw" loading="eager" />} */}
      <section className="bg-white px-[1rem]">
        <div className="grid gap-y-[4rem] px-4 pt-[3rem] md:pt-[7rem] pb-[3rem] md:pb-[7rem]">
          <div className="mx-auto max-w-[1000px] w-full grid grid-cols-1 gap-x-[1.5rem] gap-y-[2.5rem]">
            <span>{publishedDate}</span>
            <div
              dangerouslySetInnerHTML={{__html: contentHtml}}
              className="article prose"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

// NOTE: https://shopify.dev/docs/api/storefront/latest/objects/blog#field-blog-articlebyhandle
const ARTICLE_QUERY = `#graphql
  query Article(
    $articleHandle: String!
    $blogHandle: String!
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(language: $language, country: $country) {
    blog(handle: $blogHandle) {
      articleByHandle(handle: $articleHandle) {
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
        seo {
          description
          title
        }
      }
    }
  }
` as const;
