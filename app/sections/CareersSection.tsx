import {Link, useLoaderData} from '@remix-run/react';
import JobItem from './JobItem';
import Button from '../components/Button';
import type {loader} from '~/routes/_index';
import type {AllBlogsQuery} from 'storefrontapi.generated';
import Typography from '~/components/Typography';
import {Section, SitePage} from '~/configs/links';

interface CareersSectionProps {
  title: string;
  description: string;
}

const CareersSection = ({title, description}: CareersSectionProps) => {
  const {blogs}: AllBlogsQuery = useLoaderData<typeof loader>();
  const SIZE = 4;

  return (
    <section className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-[12rem]">
      <div className="container !h-full">
        {/*  <div className="mb-12 md:mb-18 lg:mb-20 lg:max-w-[50vw]">
          <Link
            className="text-black no-underline hover:no-underline"
            to="pages/careers"
          >
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              {title}
            </h2>
          </Link>
          <p className="md:text-md">{description}</p>
        </div> */}
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-4 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <Link
            className="text-black no-underline hover:no-underline"
            to={SitePage.Careers}
          >
            <Typography variant="h2" className="text-brand-darkest">
              {Section.Careers}
            </Typography>
          </Link>
          <Typography variant="body1" className="text-brand-darkest">
            {description}
          </Typography>
        </div>
        <div className="mx-auto max-w-[1536px] w-full grid grid-cols-1 gap-x-[1.5rem] gap-y-[2.5rem]">
          <ul aria-label="Featured roles grid grid-flow-row auto-rows-max">
            {blogs?.edges?.map((blog) => {
              if (blog?.node?.handle === 'careers') {
                if(blog?.node?.articles?.edges?.length === 0) return (
                  <div className="flex justify-center mt-10 md:mt-[4rem] mb-10">
                    <Typography variant="body1">No Job Openings</Typography>
                  </div>
                );
                return blog?.node?.articles?.edges
                  ?.slice(0, SIZE)
                  .map((article) => {
                    return (
                      <JobItem
                        key={article?.node?.id}
                        blogName={blog?.node?.handle}
                        article={article}
                      />
                    );
                  });
              }
              return null;
            })}
          </ul>
          <div className="flex justify-center mt-10 md:mt-[4rem] mb-10">
            <Button to="pages/careers" variant="secondary">
              View all open roles
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
  /* return (
    <section className="bg-white px-[1rem]">
      <div className="grid gap-y-[4rem] px-4 pt-[3rem] md:pt-[7rem] pb-[3rem] md:pb-[7rem]">
        <div className="relative mx-auto max-w-[1536px] w-full grid grid-cols-4 sm:grid-cols-8 md:grid-cols-12 gap-x-gutter gap-y-2xl">
          <div className="col-span-4 xs:col-span-4 sm:col-span-8 md:col-span-10 lg:col-span-8 xl:col-span-8 col-start-1 pt-xl">
            <div className="text-left text-black">
              <h2 className="text-[3rem] font-[900] leading-[3.5rem]">
                <Link
                  className="text-black no-underline hover:no-underline"
                  to="pages/careers"
                >
                  Careers
                </Link>
              </h2>
              <div className="text-[1.375rem] tracking-[-0.02em] leading-[2rem] pt-[1rem] line-clamp-3">
                Helping businesses succeed requires people from a wide range of
                disciplines and backgrounds. We’re always looking for curious
                minds to join our team.
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-[1536px] w-full grid grid-cols-1 gap-x-[1.5rem] gap-y-[2.5rem]">
          <ul aria-label="Featured roles grid grid-flow-row auto-rows-max">
            {blogs?.edges?.map((blog) => {
              if (blog?.node?.handle === 'careers') {
                return blog?.node?.articles?.edges
                  ?.slice(0, SIZE)
                  .map((article) => {
                    return (
                      <JobItem
                        key={article?.node?.id}
                        blogName={blog?.node?.handle}
                        article={article}
                      />
                    );
                  });
              }
              return null;
            })}
          </ul>
          <div className="flex justify-center mt-10 md:mt-[4rem] mb-10">
            <Button to="pages/careers" variant="secondary">
              View all open roles
            </Button>
          </div>
        </div>
      </div>
    </section>
  ); */
};

export default CareersSection;
