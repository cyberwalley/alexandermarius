import {Link} from '@remix-run/react';
import {Image} from '@shopify/hydrogen';
import type {ArticleCareerPageQuery} from 'storefrontapi.generated';
import ExternalLinkIcon from '~/assets/svg/ExternalLinkIcon';
import Button from '~/components/Button';

interface CareerPageJobDetailsProps {
  //@ts-ignore
  article: ArticleCareerPageQuery['blog']['article'];
  parentPage: string;
}

const CareerPageJobDetails = ({
  article,
  parentPage,
}: CareerPageJobDetailsProps) => {
  const {title, image, contentHtml, author, metafields} = article;

  return (
    <div>
      <header className="bg-[--color-main] px-[1rem] bg-brand-darkest">
        <div className="grid gap-y-[4rem] px-4 pt-[3rem] pb-[3rem] md:pt-[7rem] md:pb-[7rem]">
          <div className="mx-auto max-w-[1536px] w-full grid grid-cols-4 sm:grid-cols-8 md:grid-cols-12 gap-x-gutter gap-y-[2.5rem]">
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
      <main className="article">
        <section className="bg-white px-[1rem]">
          <div className="grid gap-y-[4rem] px-4 pt-[3rem] md:pt-[7rem] pb-[3rem] md:pb-[7rem]">
            <div className="mx-auto max-w-[1000px] w-full grid grid-cols-1 gap-x-[1.5rem] gap-y-[2.5rem]">
              <div className="flex flex-wrap gap-10">
                <div>
                  <Button
                    variant="secondary"
                    to={metafields?.[1]?.value}
                    className="text-[1.375rem]"
                    icon={<ExternalLinkIcon />}
                  >
                    Apply now
                  </Button>
                </div>
                <div className=" w-full md:w-[75%] flex flex-col items-start">
                  <div
                    className="prose"
                    dangerouslySetInnerHTML={{__html: contentHtml}}
                  />
                  <div className="mt-10">
                    <Button
                      variant="secondary"
                      to={metafields?.[1]?.value}
                      className="text-[1.375rem]"
                      icon={<ExternalLinkIcon />}
                    >
                      Apply now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CareerPageJobDetails;
