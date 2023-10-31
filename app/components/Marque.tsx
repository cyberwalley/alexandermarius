import type {FeaturedCollectionFragment} from 'storefrontapi.generated';
import {Image, Money} from '@shopify/hydrogen';
import People from './People';

interface MarqueeProps {
  content: FeaturedCollectionFragment;
  contentType: 'text' | 'image';
  orientation: 'horizontal' | 'vertical';
  divider?: boolean;
  reverse?: boolean;
  variant?: 'single' | 'double';
}

const Marquee = ({
  content,
  contentType,
  divider,
  orientation = 'horizontal',
  reverse,
  variant = 'single',
}: MarqueeProps) => {
  const collectionData = content?.products.edges;
  const productDetails = collectionData?.map((product) => (
    <div
      key={product?.node?.id}
      className="shadow-3xl w-auto sm:rotate-2 border-2 border-black rounded-xl p-2 bg-white h-auto"
    >
      <People
        imgSrc={product?.node?.featuredImage?.url}
        altText={product?.node?.featuredImage?.altText || undefined}
      />
      <div className="px-2 py-3">
        <p className="text-black font-normal text-sm">{product?.node?.title}</p>
        <div className="text-gray-500 font-normal text-sm">
          {product?.node?.description}
        </div>
      </div>
    </div>
  ));

  return (
    <>
      {variant === 'single' && (
        <div
          className={`wrapper ${
            orientation === 'vertical' ? 'wrapper--vertical' : ''
          }`}
        >
          <div
            className={`marquee ${
              reverse ? 'marquee--reverse' : ''
            } text-white  ${
              orientation === 'vertical' ? 'marquee--vertical pr-8' : ''
            }`}
          >
            <div className="marquee__group p-6 md:p-4">
              <div
                className={` ${
                  orientation === 'vertical' ? 'marquee__item' : ''
                } flex justify-center items-center gap-10 text-[5rem] font-bold`}
              >
                {productDetails}
              </div>
            </div>
            <div aria-hidden="true" className="marquee__group  p-6 md:p-4">
              <div
                className={` ${
                  orientation === 'vertical' ? 'marquee__item' : ''
                } flex justify-center items-center gap-10 text-[5rem] font-bold`}
              >
                {productDetails}
              </div>
            </div>
          </div>
        </div>
      )}
      {variant === 'double' && (
        <div
          className={`wrapper ${
            orientation === 'vertical' ? 'wrapper--vertical' : ''
          }`}
        >
          <div
            className={`marquee 
            text-white ${
              orientation === 'vertical' ? 'marquee--vertical' : ''
            }`}
          >
            <div className="marquee__group  p-6 md:p-4">
              <div
                className={` ${
                  orientation === 'vertical' ? 'marquee__item' : ''
                } flex justify-center items-center gap-10 text-[5rem] font-bold`}
              >
                {productDetails}
              </div>
            </div>
            <div aria-hidden="true" className="marquee__group p-6 md:p-4">
              <div
                className={` ${
                  orientation === 'vertical' ? 'marquee__item' : ''
                } flex justify-center items-center gap-10 text-[5rem] font-bold`}
              >
                {productDetails}
              </div>
            </div>
          </div>
          <div
            className={` marquee ${
              reverse ? 'marquee--reverse' : ''
            } text-white ${
              orientation === 'vertical' ? 'marquee--vertical' : ''
            }`}
          >
            <div className="marquee__group  p-6 md:p-4">
              <div
                className={` ${
                  orientation === 'vertical' ? 'marquee__item' : ''
                } flex justify-center items-center gap-10 text-[5rem] font-bold`}
              >
                {productDetails}
              </div>
            </div>
            <div aria-hidden="true" className="marquee__group  p-6 md:p-4">
              <div
                className={` ${
                  orientation === 'vertical' ? 'marquee__item' : ''
                } flex justify-center items-center gap-10 text-[5rem] font-bold`}
              >
                {productDetails}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Marquee;
