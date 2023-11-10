import {useState} from 'react';
import AccordionItem from './AccordionItem';

const Accordion = ({data}) => {
  return (
    <div className="accordion" role="region" aria-label="Accordion">
      {data.map((item, index) => (
        <AccordionItem key={item} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Accordion;
