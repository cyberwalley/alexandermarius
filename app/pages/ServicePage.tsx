import {Link} from '@remix-run/react';
import type {ServicePageQuery} from 'storefrontapi.generated';

interface ServicePageProps {
  data: ServicePageQuery['pages'];
}

const ServicePage = ({data}: ServicePageProps) => {
  const pages = data?.edges;
  console.log(pages, 'pages');
  return (
    <section className="px-[1rem] bg-[#efefef]">
      <div className="grid gap-y-[4rem] py-[3rem]  md:pt-[7rem] md:pb-[7rem]">
        <div className="mx-auto max-w-[1000px] w-full">
          <div className="grid grid-cols-1 gap-10 ">
            {pages.map((page) => {
              if (
                page.node.handle === 'manpower-management' ||
                page.node.handle === 'business-management-and-consulting'
              ) {
                return (
                  <div
                    className="p-10 shadow-xl rounded-md bg-white"
                    key={page.node.id}
                  >
                    <h2 className="text-[1.5rem]">{page.node.title}</h2>
                    <div className="text-[1.125rem]">
                      {page.node.bodySummary}
                    </div>
                    <div className="mt-10">
                      <Link
                        to={`/pages/services/${page.node.handle}`}
                        className="group"
                      >
                        <span className="mb-2 text-left underline hover:no-underline text-lg font-medium">
                          Find out more
                          <svg
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                            focusable="false"
                            className="group-hover:opacity-100 opacity-0 w-4 h-4 inline-block transition-all duration-500 group-hover:translate-x-2 will-change-transform"
                          >
                            <path
                              d="M17.707 9.293l-5-5a.999.999 0 10-1.414 1.414L14.586 9H3a1 1 0 100 2h11.586l-3.293 3.293a.999.999 0 101.414 1.414l5-5a.999.999 0 000-1.414z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                      </Link>
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePage;
