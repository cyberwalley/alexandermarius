import {Link} from '@remix-run/react';
import type {AllBlogsQuery} from 'storefrontapi.generated';
import ExternalLinkIcon from '~/assets/svg/ExternalLinkIcon';

interface JobItemProps {
  blogName: string;
  article: AllBlogsQuery['blogs']['edges'][0]['node']['articles']['edges'][0];
}

const JobItem = ({blogName, article}: JobItemProps) => {
  return (
    <li className="py-[2rem] border-t border-gray-300">
      <div className="flex flex-col md:flex-row md:justify-between gap-5 items-start md:items-center">
        <div className="xs:w-6-cols md:w-2-cols lg:w-2-cols mt-spacing-4 md:mt-0 md:text-right">
          <Link
            to={`pages/${blogName}/${article?.node?.handle}`}
            className="group inline-block text-left"
          >
            <h3 className="text-[1.125rem] text-left font-semibold  group-hover:underline underline-transparent underline-thickness-1 underline-offset-2 group-hover:underline-text-primary">
              {article?.node?.title}
            </h3>
            <span className="text-[1.125rem] text-left hover:no-underline">
              {article?.node?.metafields?.[0]?.value}
            </span>
          </Link>
        </div>
        <div className="xs:w-6-cols md:w-2-cols lg:w-2-cols mt-spacing-4 md:mt-0 md:text-right">
          <a
            href={article?.node?.metafields?.[1]?.value}
            rel="noreferrer"
            target="_blank"
            aria-label="Apply now"
            className="hover:no-underline group  inline-block  relative "
          >
            <span className="flex items-center">
              <span className="underline-thickness-1 underline-offset-4 underline">
                Apply now
              </span>
              <ExternalLinkIcon className="w-[1em] h-[1em] top-[0.05em] -mr-4 ml-2 relative" />
            </span>
          </a>
        </div>
      </div>
    </li>
  );
};

export default JobItem;
