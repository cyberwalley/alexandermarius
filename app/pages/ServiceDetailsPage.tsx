import {Link, useLoaderData} from '@remix-run/react';
import {Image} from '@shopify/hydrogen';
import type {loader} from '~/routes/_index';
import type {ArticleCareerPageQuery} from 'storefrontapi.generated';
import Tab from '~/components/Tab';

interface ServiceDetailsPageProps {
  //@ts-ignore
  article: ArticleCareerPageQuery['blog']['article'];
  parentPage: string;
}

const tabs = [
  {
    id: '1',
    title: 'Business Restructuring',
    subtitle: '',
    content: 'Tab 1 content',
    accessibilityLabel: 'Tab 1',
    panelID: 'panel-1',
  },
  {
    id: '2',
    title: 'Business Auditing',
    subtitle: '',
    content: 'Tab 2 content',
    accessibilityLabel: 'Tab 2',
    panelID: 'panel-2',
  },
];

const ServiceDetailsPage = ({article, parentPage}: ServiceDetailsPageProps) => {
  const {pages, blogs} = useLoaderData<typeof loader>();
  const {title, image, contentHtml, author, metafields, seo, excerpt} = article;

  console.log(blogs, 'blogs newwy');

  return (
    <div>
      <header className="bg-[--color-main] border-b-[2.5rem] border-[--color-secondary] px-[1rem]">
        <div className="grid gap-y-[4rem] px-4 pt-[3rem] pb-[3rem] md:pt-[7rem] md:pb-[7rem]">
          <div className="mx-auto max-w-[1536px] w-full grid grid-cols-4 sm:grid-cols-8 md:grid-cols-12 gap-x-[2.5rem] gap-y-[2.5rem]">
            <div className="col-span-4 xs:col-span-4 sm:col-span-8 md:col-span-6 col-start-1 pt-xl">
              <div className="text-left text-white">
                <div>
                  <Link className="text-white" to={`/pages/${parentPage}`}>
                    <div className="capitalize">{parentPage}</div>
                  </Link>
                </div>
                <h1 className="text-[3rem] font-[900] leading-[3.5rem]">
                  {title}
                </h1>
                <div>{seo.description}</div>
                <div className="text-[1.375rem] tracking-[-0.02em] leading-[2rem] pt-[1rem]">
                  {excerpt}
                </div>
                <div className="text-[1.375rem] tracking-[-0.02em] leading-[2rem] pt-[1rem] line-clamp-3">
                  {metafields?.[0]?.value}
                </div>
              </div>
            </div>
            {image && (
              <div className="col-span-4 xs:col-span-4 sm:col-span-8 md:col-span-6 col-start-1 md:col-start-7  flex flex-col gap-y-[2.5rem]">
                <picture>
                  <Image
                    aspectRatio="3/2"
                    data={image}
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </picture>
              </div>
            )}
          </div>
        </div>
      </header>
      {blogs && <Tab tabs={blogs} title={title} />}
      {/*    <main className="article">
        <section className="bg-white px-[1rem]">
          <div className="grid gap-y-[4rem] px-4 pt-[3rem] md:pt-[7rem] pb-[3rem] md:pb-[7rem]">
            <div className="mx-auto max-w-[1300px] w-full grid grid-cols-1 gap-x-[1.5rem] gap-y-[2.5rem]">
              <div
                className="rte"
                dangerouslySetInnerHTML={{__html: contentHtml}}
              />
            </div>
          </div>
        </section>
      </main> */}
    </div>
  );
};

export default ServiceDetailsPage;
