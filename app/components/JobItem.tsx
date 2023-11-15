import {Link} from '@remix-run/react';
import type {AllBlogsQuery} from 'storefrontapi.generated';

interface JobItemProps {
  blogName: string;
  article: AllBlogsQuery['blogs']['edges'][0]['node']['articles']['edges'][0];
}

const JobItem = ({blogName, article}: JobItemProps) => {
  return (
    <li className="py-[2rem] border-t border-gray-300">
      <div className="flex flex-wrap justify-between gap-5 items-center">
        <div className="xs:w-6-cols md:w-2-cols lg:w-2-cols mt-spacing-4 md:mt-0 md:text-right">
          <Link
            to={`blogs/${blogName}/${article?.node?.handle}`}
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
              <svg
                data-v-cbc994d7=""
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                className="a-icon--arrow-north-east400 a-icon--text a-icon--no-align top-[0.05em] relative f-ui-1 ml-2 -mr-4"
                data-new=""
                aria-hidden="true"
                style={{width: '1em', height: '1em'}}
              >
                <polygon
                  data-v-cbc994d7=""
                  fill="currentColor"
                  points="5 4.31 5 5.69 9.33 5.69 2.51 12.51 3.49 13.49 10.31 6.67 10.31 11 11.69 11 11.69 4.31 5 4.31"
                ></polygon>
              </svg>
            </span>
          </a>
        </div>
      </div>
    </li>
  );
};

export default JobItem;
