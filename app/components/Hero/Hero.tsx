import React from 'react';
import type {FeaturedCollectionFragment} from 'storefrontapi.generated';
import {Image} from '@shopify/hydrogen';
import Button from '../Button';

const Hero = ({collection}: {collection: FeaturedCollectionFragment}) => {
  if (!collection) return null;
  const image = collection?.image;
  return (
    <section
      className={`relative overflow-hidden pb-16 pt-4 md:pt-[5.75rem] bg-cover`}
      style={{backgroundImage: `url(${image?.url})`, width: '100%'}}
    >
      <div className="relative mx-auto max-w-[1500px] grid grid-cols-4 sm:grid-cols-8 md:grid-cols-12 gap-x-gutter gap-x-[1.5rem] gap-y-[2rem]">
        <div className="col-span-4 xs:col-span-4 md:col-span-6 col-start-1 flex flex-col pt-3xl sm:col-span-6 my-auto md:py-[5rem] gap-y-[1.5rem]">
          <div className="text-left text-black">
            <h1 className="text-[4rem] text-[var(--color-main)] font-bold md:font-black leading-tight md:leading-normal">
              {collection.title}
            </h1>
            <p className="text-[1.375rem] text-[var(--color-main)] pt-2">
              {collection.description}
            </p>
          </div>
          <div className="flex gap-y-sm flex-wrap gap-x-sm justify-start">
            <Button>Get in touch</Button>
          </div>
        </div>
        <div className="col-span-4 xs:col-span-4 md:col-span-5 xs:col-start-1 md:col-start-8 flex flex-col gap-y-[2rem] my-auto sm:col-start-1 sm:col-span-8 md:py-[1.5rem]">
          <picture>
            <img
              alt="A plant product in a Shopify online store and in an online shopping cart."
              className="mx-auto"
              src="https://cdn.shopify.com/shopifycloud/brochure/assets/start/hero/hero-@artdirection-large-e3e5e6d578a83a2b1b8e7ce01d1290419074e8b91ddc5781eebf4c4f7c430c63.png?width=1236&amp;height=980&amp;crop=center"
              srcSet="https://cdn.shopify.com/shopifycloud/brochure/assets/start/hero/hero-@artdirection-small-bbf4a3bdf6832b5fbae149f37f14817d01ed788db0c1dab8e3aecda612920c01.png 1x, https://cdn.shopify.com/shopifycloud/brochure/assets/start/hero/hero-@artdirection-large-e3e5e6d578a83a2b1b8e7ce01d1290419074e8b91ddc5781eebf4c4f7c430c63.png?width=1236&amp;height=980&amp;crop=center 2x"
            />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default Hero;
