import {useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import PlusIcon from '~/assets/svg/PlusIcon';
import MinusIcon from '~/assets/svg/MinusIcon';

interface AccordionItemProps {
  title: string;
  content: string;
}

const AccordionItem = ({title, content}: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const variants = {
    open: {opacity: 1, height: 'auto'},
    collapsed: {opacity: 0, height: 0},
  };

  return (
    <div className="border-b-black border-b-2 last:border-0">
      <button
        className="w-full text-left flex justify-between gap-10 align-center relative pr-16 items-center px-6 focus:outline-none pt-8 py-xl pb-8 md:p-10 leading-[1.6] "
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
            <div className=" py-xl px-8 md:px-10 pb-10 mr-16 text-xl leading-7 md:text-[1.125rem] md:leading-[1.625rem] richtext">
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AccordionItem;
