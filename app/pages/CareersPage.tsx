import {Link} from '@remix-run/react';
import type {CareersPageQuery} from 'storefrontapi.generated';
import CareerPageJobItem from './CareerPageJobItem';

interface CareersPageProps {
  blog: CareersPageQuery['blog'];
}

const CareersPage = ({blog}: CareersPageProps) => {
  return (
    <section className="bg-white px-[1rem]">
      <div className="grid gap-y-[4rem] px-4 pt-[3rem] md:pt-[7rem] pb-[3rem] md:pb-[7rem]">
        <div className="mx-auto max-w-[1536px] w-full grid grid-cols-1 gap-x-[1.5rem] gap-y-[2.5rem]">
          <ul aria-label="Featured roles grid grid-flow-row auto-rows-max">
            {blog?.articles?.edges.map((article) => {
              return (
                <CareerPageJobItem key={article?.node?.id} article={article} />
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CareersPage;
