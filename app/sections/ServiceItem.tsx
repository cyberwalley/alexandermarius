import {Link} from '@remix-run/react';
import type {PageSectionQuery} from 'storefrontapi.generated';
interface ServiceItemProps {
  page: PageSectionQuery['pages']['edges'][0];
  icon: React.ReactNode;
}

const ServiceItem = ({page, icon}: ServiceItemProps) => {
  return (
    <div className="rounded-2xl ring-0 ring-black/20 border-black p-0">
      <div>
        <div className="text-left text-white">
          {icon && (
            <span className="inline-block mb-4 p-1 lg:p-2 leading-[1] border-2 lg:border-4 border-[#edf9e4] rounded-full">
              {icon}
            </span>
          )}
          <h3 className="text-[1.57rem] mb-4 font-bold">{page.node.title}</h3>
          <p className="leading-[2rem] pt-sm line-clamp-4">
            {page.node.bodySummary}
          </p>
          <div className="w-full mt-4 text-left">
            <Link to={`pages/${page.node.handle}`} className="group text-white">
              <span className="mb-2 text-left underline hover:no-underline text-lg font-medium">
                Read more
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
      </div>
    </div>
  );
};

export default ServiceItem;
