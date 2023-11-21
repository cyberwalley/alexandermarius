import {Link} from '@remix-run/react';
import type {BlogsOnPageQuery} from 'storefrontapi.generated';
interface ServicePageItemProps {
  //@ts-ignore
  article: BlogsOnPageQuery['blog']['articles']['edges'][0]['node'];
}

const ServicePageItem = ({article}: ServicePageItemProps) => {
  return (
    <div className="p-10 shadow-xl rounded-md bg-white" key={article?.node.id}>
      <h2 className="text-[1.5rem]">{article?.node.title}</h2>
      <div className="text-[1.125rem] line-clamp-3">
        {article?.node.content}
      </div>
      <div className="mt-10">
        <Link to={`/pages/services/${article?.node.handle}`} className="group">
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
};

export default ServicePageItem;
