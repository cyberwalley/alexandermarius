import {Link, useLoaderData} from '@remix-run/react';
import Carousel from '../components/Carousel';
import type {loader} from '~/routes/_index';
import type {AllBlogsQuery} from 'storefrontapi.generated';

const CaseStudySection = () => {
  const {blogs}: AllBlogsQuery = useLoaderData<typeof loader>();

  return (
    <section className="rounded-b-[1.3rem] md:rounded-b-[2rem] bg-[--color-main]">
      <div className="grid gap-y-[4rem] pt-[3rem] md:py-[7rem]">
        <div className="relative px-8 xl:px-0 mx-auto max-w-[1536px] w-full grid grid-cols-4 sm:grid-cols-8 md:grid-cols-12 gap-x-gutter gap-y-2xl">
          <div className="col-span-4 xs:col-span-4 sm:col-span-8 md:col-span-10 lg:col-span-8 xl:col-span-8 col-start-1 pt-xl">
            {blogs?.edges?.map((blog) => {
              if (blog.node.handle === 'case-study') {
                return (
                  <div key={blog.node.id} className="text-left text-white">
                    <Link
                      className="text-white no-underline hover:no-underline"
                      to={`blogs/${blog.node.handle}`}
                    >
                      <h2 className="text-[3rem] font-[900] leading-[3.5rem]">
                        {blog.node.title}
                      </h2>
                    </Link>
                    <p className="text-[1.375rem] tracking-[-0.02em] leading-[2rem] pt-[1rem] line-clamp-3">
                      {blog.node.seo?.description}
                    </p>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
        <div className="relative mx-auto  grid grid-cols-4 sm:grid-cols-8 md:grid-cols-12 gap-x-gutter gap-x-[1.5rem] gap-y-[2rem]">
          <Carousel
            //@ts-ignore
            blogs={blogs}
          />
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
