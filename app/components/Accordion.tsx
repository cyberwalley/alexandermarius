import {useState} from 'react';
import AccordionItem from './AccordionItem';

interface AccordionProps {
  data: {
    id: string;
    title: string;
    content: string;
  }[];
}
const Accordion = ({data}: AccordionProps) => {
  return (
    <div className="accordion" role="region" aria-label="Accordion">
      {data.map((item, index) => (
        <AccordionItem
          key={item.id}
          title={item.title}
          content={item.content}
        />
      ))}
    </div>
  );
};

export default Accordion;
