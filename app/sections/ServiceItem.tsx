import {Link} from '@remix-run/react';
import type {AllBlogsQuery} from 'storefrontapi.generated';
import ArrowRight from '~/assets/svg/ArrowRight';
interface ServiceItemProps {
  article: AllBlogsQuery['blogs']['edges'][0]['node']['articles']['edges'][0];
  icon: React.ReactNode;
}

const ServiceItem = ({article, icon}: ServiceItemProps) => {
  return (
    <div className="rounded-2xl ring-0 ring-black/20 border-black p-0">
      <div>
        <div className="text-left text-white">
          {icon && (
            <span className="inline-block mb-4 p-1 lg:p-2 leading-[1] border-2 lg:border-4 border-[#edf9e4] rounded-full">
              {icon}
            </span>
          )}
          <h3 className="text-[1.57rem] mb-4 font-bold">
            {article?.node.title}
          </h3>
          <p className="leading-[2rem] pt-sm line-clamp-3">
            {article?.node.content}
          </p>
          <div className="w-full mt-4 text-left">
            <Link
              to={`pages/services/${article?.node.handle}`}
              className="group text-white"
            >
              <span className="mb-2 text-left underline hover:no-underline text-lg font-medium">
                Read more
                <ArrowRight />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
