import {Link} from '@remix-run/react';
import type {BlogsOnPageQuery} from 'storefrontapi.generated';
import CareerPageJobItem from './CareerPageJobItem';
import Typography from '~/components/Typography';
import Button from '~/components/Button';
import {StaticLink} from '~/configs/links';

interface CareersPageProps {
  blog: BlogsOnPageQuery['blog'];
}

const CareersPage = ({blog}: CareersPageProps) => {
  return (
    <section className="bg-white px-[1rem]">
      <div className="grid gap-y-[4rem] px-4 pt-[3rem] md:pt-[7rem] pb-[3rem] md:pb-[7rem]">
        <div className="mx-auto max-w-[1536px] w-full grid grid-cols-1 gap-x-[1.5rem] gap-y-[2.5rem]">
          <ul aria-label="Featured roles grid grid-flow-row auto-rows-max">
            {blog?.articles?.edges.length === 0 && (
              <div className="flex flex-col mt-10 md:mt-[4rem] mb-10 text-center">
                <Typography variant="h2">No Openings Available</Typography>
                <p>
                  <Link to={StaticLink.Root}>
                    <Button variant="primary">Back to home</Button>
                  </Link>
                </p>
              </div>
            )}
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
