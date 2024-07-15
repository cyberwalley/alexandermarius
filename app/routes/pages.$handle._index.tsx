import {json, type LoaderArgs} from '@shopify/remix-oxygen';
import {
  useFetcher,
  useLoaderData,
  useLocation,
  type V2_MetaFunction,
} from '@remix-run/react';
import {Image} from '@shopify/hydrogen';
import StandardPage from '../pages/StandardPage';
import CareersPage from '~/pages/CareersPage';
import type {PageQuery} from 'storefrontapi.generated';
import ServicePage from '~/pages/ServicePage';
import ContactPage from '~/pages/ContactPage';
import {useMemo} from 'react';
import FaqPage from '~/pages/FaqPage';
import Typography from '~/components/Typography';

import {ActionFunction} from '@shopify/remix-oxygen';
import {useActionData, Form} from '@remix-run/react';

import {Resend} from 'resend';
import Button from '~/components/Button';

const resend = new Resend('re_Lzd2Pgby_LUJ9JZEbvH8tHVNMQCe2cCYz');
//const resend = new Resend(process.env.RESEND_API_KEY);
const recaptchaSecretKey = '6Ldz9Q8qAAAAAMHKnMTMrxxtqZnaoNrdxkg8lCwG';

export async function action({request}) {
  const formData = await request.formData();
  console.log(formData, 'formData1');

  const recaptchaResponse = formData.get('g-recaptcha-response');

  // Verify CAPTCHA response with Google
  const captchaResponse = await fetch(
    'https://www.google.com/recaptcha/api/siteverify',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${recaptchaSecretKey}Y&response=${recaptchaResponse}`,
    },
  );
  const captchaData = await captchaResponse.json();

  if (!captchaData.success) {
    return {error: 'CAPTCHA failed, please try again.'};
  }

  // Extract form fields
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  const {data, error} = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: ['delivered@resend.dev'],
    subject: `New Contact Message from ${name}`,
    html: `<strong>Name:</strong> ${name}<br/><strong>Email:</strong> ${email}<br/><strong>Message:</strong> ${message}`,
  });

  if (error) {
    return json({message: 'Failed to send email. Please try again.'}, 400);
  }

  return json({message: 'Your message has been sent successfully!'}, 200);
}

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

  //const {pages} = await context.storefront.query(GET_ALL_PAGES_QUERY);

  /* if (!pages) {
    throw new Response('Not Found', {status: 404});
  } */

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

  const currentPage = useMemo(() => {
    switch (page.handle) {
      case 'careers':
        return <CareersPage blog={blog} />;
      case 'services':
        return <ServicePage blog={blog} />;
      case 'contact':
        return <ContactPage />;
      case 'faq':
        return (
          <FaqPage
            blog={blog}
            footerHeading="Still have questions?"
            footerDescription="Don't see your question here? Reach out to us and we'll be happy to help."
          />
        );
      default: {
        return <StandardPage page={page} />;
      }
    }
  }, [blog, page]);

  return (
    <div className="page">
      {/*  <header className="bg-[--color-main] border-b-[2.5rem] border-[--color-secondary] px-[1rem]">
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
      </header> */}
      <header className=" bg-brand-primary flex flex-col lg:flex-row  lg:h-[30rem]">
        <div className="container px-[11%] py-16 md:py-24 lg:py-28 !h-full !mb-[5rem] grid grid-cols-1 items-start content-center justify-between gap-x-12 gap-y-2 md:mb-18 md:gap-x-12  lg:mb-20">
          <Typography variant="h2" className="text-brand-darkest">
            {page.title}
          </Typography>
          <Typography variant="body1" className="text-brand-darkest">
            {subtitle}
          </Typography>
        </div>
        {coverImage && (
          <div className="lg:w-[80%]">
            <img
              src={coverImage?.url}
              className="w-full h-full object-cover"
              alt={page.title}
            />
          </div>
        )}
      </header>
      <main>{currentPage}</main>
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

/* export const GET_ALL_PAGES_QUERY = `#graphql
  query ServicePage(
    $language: LanguageCode,
    $country: CountryCode,
  )
  @inContext(language: $language, country: $country) {
    pages(first:50){
    edges {
      node {
        id
        title
        handle
        bodySummary
        body
      }
    }
  }
  }
` as const; */

const GET_BLOG_QUERY = `#graphql
  query BlogsOnPage(
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
