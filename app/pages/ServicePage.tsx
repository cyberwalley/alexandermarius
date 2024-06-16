import {Link} from '@remix-run/react';

import ServicePageItem from './ServicePageItem';
import type {BlogsOnPageQuery} from 'storefrontapi.generated';
import {Button, ChevronRight} from '@relume_io/relume-ui';

interface ServicePageProps {
  blog: BlogsOnPageQuery['blog'];
}

const ServicePage = ({blog}: ServicePageProps) => {
  return (
    <section className="px-[5%]">
      <div className="grid gap-y-[4rem] py-[3rem]  md:pt-[7rem] md:pb-[7rem]">
        <div className="mx-auto w-full max-w-[57rem] lg:max-w-[1300px] ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
            {blog?.articles?.edges.map((article) => {
              return (
                <div
                  key={article?.node?.id}
                  className="order-last flex flex-col items-stretch border border-gray-300 rounded-t-[12px] rounded-b-[12px] md:grid md:grid-cols-1 lg:order-none"
                >
                  <div className="flex w-full items-center justify-center">
                    <img
                      src={article?.node.image?.url}
                      alt={article?.node.image?.altText || ''}
                      className="w-full md:h-[20rem] object-cover"
                    />
                  </div>
                  <div className="block flex-col justify-center p-6 md:flex">
                    <div>
                      <h3 className="mb-2 text-xl font-bold md:text-2xl">
                        {article?.node.title}
                      </h3>
                      <p>{article?.node.content}</p>
                    </div>
                    <div className="mt-5 flex items-center gap-4 md:mt-6">
                      <Link
                        to={`/pages/services/${article?.node.handle}`}
                        className="group"
                      >
                        <Button
                          variant="link"
                          size="link"
                          iconRight={<ChevronRight />}
                          className="flex items-center justify-center"
                        >
                          Read more
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePage;

{
  /* <ServicePageItem key={article?.node?.id} article={article} /> */
}
