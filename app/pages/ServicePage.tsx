import {Link} from '@remix-run/react';

import ServicePageItem from './ServicePageItem';
import type {BlogsOnPageQuery} from 'storefrontapi.generated';

interface ServicePageProps {
  blog: BlogsOnPageQuery['blog'];
}

const ServicePage = ({blog}: ServicePageProps) => {
  return (
    <section className="px-[1rem] bg-[#efefef]">
      <div className="grid gap-y-[4rem] py-[3rem]  md:pt-[7rem] md:pb-[7rem]">
        <div className="mx-auto max-w-[1000px] w-full">
          <div className="grid grid-cols-1 gap-10 ">
            {blog?.articles?.edges.map((article) => {
              return (
                <ServicePageItem key={article?.node?.id} article={article} />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePage;
