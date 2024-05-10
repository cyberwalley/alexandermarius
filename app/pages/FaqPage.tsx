import type {BlogsOnPageQuery} from 'storefrontapi.generated';

import {Link} from '@remix-run/react';
import Button from '../components/Button';
import {SitePage} from '~/configs/links';
import AccordionItem from '~/components/AccordionItem';

interface FaqPageProps {
  blog: BlogsOnPageQuery['blog'];
  footerHeading?: string;
  footerDescription?: string;
}

const FaqPage = ({blog, footerHeading, footerDescription}: FaqPageProps) => {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className=" container !h-full">
        <div className="mx-auto w-full max-w-[72rem] items-center">
          {blog?.articles?.edges.map((article) => (
            <AccordionItem
              key={article?.node?.id}
              title={article?.node?.title}
              content={article?.node?.content}
            />
          ))}
        </div>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            {footerHeading}
          </h4>
          <p className="md:text-md">{footerDescription}</p>
          <div className="mt-6 md:mt-8">
            <Link to={SitePage.Contact}>
              <Button variant="primary" shadow>
                Contact us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqPage;
