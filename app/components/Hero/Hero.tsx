import React from 'react';
import type {FeaturedCollectionFragment} from 'storefrontapi.generated';
import {Image} from '@shopify/hydrogen';
import Button from '../Button';
import Marquee from '../Marque';

const Hero = ({collection}: {collection: FeaturedCollectionFragment}) => {
  if (!collection) return null;
  const image = collection?.image;

  console.log(collection?.products.edges);

  return (
    <section
      className={`relative overflow-hidden bg-contain bg-no-repeat md:bg-cover p-4 md:p-0`}
      style={{backgroundImage: `url(${image?.url})`, width: '100%'}}
    >
      <div className="relative mx-auto max-w-[1536px] grid grid-cols-4 sm:grid-cols-8 md:grid-cols-12 gap-x-gutter gap-x-[1.5rem] gap-y-[2rem]">
        <div className="col-span-4 xs:col-span-4 md:col-span-6 col-start-1 flex flex-col pt-3xl sm:col-span-6 my-auto md:py-[5rem] gap-y-[1.5rem]">
          <div className="text-left text-black">
            <h1 className="text-[2.7rem] md:text-[4.2rem] text-[var(--color-main)] font-bold md:font-black leading-tight md:leading-[1.3]">
              {collection.title}
            </h1>
            <p className="text-md md:text-[1.375rem] text-[var(--color-main)] pt-2">
              {collection.description}
            </p>
          </div>
          <div className="flex gap-y-sm flex-wrap gap-x-sm justify-start">
            <Button>Get in touch</Button>
          </div>
        </div>
        <div className="col-span-4 xs:col-span-4 md:col-span-5 xs:col-start-1 flex flex-row gap-[1rem] my-auto sm:col-start-1 sm:col-span-8">
          <Marquee
            content={collection}
            contentType="text"
            orientation="vertical"
            variant="double"
            reverse
          />
          {/*  <Marquee
            content={collection}
            contentType="text"
            divider={true}
            orientation="vertical"
            variant="single"
            reverse
          /> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
