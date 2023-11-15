import AccordionItem from './AccordionItem';
import type {AllBlogsQuery} from 'storefrontapi.generated';

const Accordion = ({blogs}: AllBlogsQuery) => {
  return (
    <div className="accordion" role="region" aria-label="Accordion">
      {blogs?.edges?.map((blog) => {
        if (blog?.node?.handle === 'faq') {
          return blog?.node?.articles?.edges?.map((article) => {
            return (
              <AccordionItem
                key={article?.node?.id}
                title={article?.node?.title}
                content={article?.node?.content}
              />
            );
          });
        }
        return null;
      })}
    </div>
  );
};

export default Accordion;
