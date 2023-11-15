import {useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import PlusIcon from '~/assets/svg/PlusIcon';
import MinusIcon from '~/assets/svg/MinusIcon';
import type {AllBlogsQuery} from 'storefrontapi.generated';

const AccordionItem = ({
  title,
  content,
}: {
  content: AllBlogsQuery['blogs']['edges'][0]['node']['articles']['edges'][0]['node']['content'];
  title: AllBlogsQuery['blogs']['edges'][0]['node']['articles']['edges'][0]['node']['title'];
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const variants = {
    open: {opacity: 1, height: 'auto'},
    collapsed: {opacity: 0, height: 0},
  };

  return (
    <div className="border-b-black border-b-2 last:border-0">
      <button
        className="w-full text-left flex justify-between gap-10 align-center relative md:pr-16 items-center md:px-6 focus:outline-none pt-8 py-xl pb-8 md:p-10 leading-[1.6] "
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="text-left font-bold text-xl leading-[1.925rem] md:text-[1.475rem] md:w-4/5 md:leading-9">
          {title}
        </h3>
        <span className="text-lg">
          {isOpen ? (
            <MinusIcon className="w-10 h-10 border-2 rounded-full border-black p-1 bg-black text-white" />
          ) : (
            <PlusIcon className="w-10 h-10 border-2 rounded-full border-black p-1" />
          )}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={variants}
            transition={{duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98]}}
            style={{overflow: 'hidden'}}
            aria-hidden={!isOpen}
          >
            <div className=" py-xl  md:px-10 pb-10 md:mr-16 text-xl leading-7 md:text-[1.125rem] md:leading-[1.625rem] richtext">
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AccordionItem;
