import type {FeaturedCollectionFragment} from 'storefrontapi.generated';
import {Image} from '@shopify/hydrogen';
import {Await, type V2_MetaFunction} from '@remix-run/react';
import People from './People';
import {Suspense} from 'react';
import {useMediaQuery} from '~/Hooks/useMediaQuery';
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
  const isMediumLargeDevice = useMediaQuery('(min-width: 768px)');

  const collectionData = content?.products.edges;
  const productDetails = collectionData?.map((product) => (
    <div
      key={product?.node?.id}
      className="shadow-3xl sm:rotate-2 border-2 border-black rounded-xl p-2 bg-white h-auto w-[18rem] "
    >
      {/* <People
        imgSrc={product?.node?.featuredImage?.url}
        altText={product?.node?.featuredImage?.altText || undefined}
      /> */}
      <Image
        data={product?.node?.featuredImage || undefined}
        aspectRatio="1/1"
        sizes="50vw"
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
              orientation === 'vertical' ? 'marquee--vertical' : ''
            }`}
          >
            <div className="marquee__group p-8">
              <div
                className={` ${
                  orientation === 'vertical' ? 'marquee__item' : ''
                } flex justify-center items-center gap-10 text-[5rem] font-bold`}
              >
                <Suspense fallback={<div>Loading...</div>}>
                  <Await resolve={collectionData}>{productDetails}</Await>
                </Suspense>
              </div>
            </div>
            <div aria-hidden="true" className="marquee__group p-8">
              <div
                className={` ${
                  orientation === 'vertical' ? 'marquee__item' : ''
                } flex justify-center items-center gap-10 text-[5rem] font-bold`}
              >
                <Suspense fallback={<div>Loading...</div>}>
                  <Await resolve={collectionData}>{productDetails}</Await>
                </Suspense>
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
            <div className="marquee__group p-8">
              <div
                className={` ${
                  orientation === 'vertical' ? 'marquee__item' : ''
                } flex justify-center items-center gap-10 text-[5rem] font-bold`}
              >
                {productDetails}
              </div>
            </div>
            <div aria-hidden="true" className="marquee__group p-8">
              <div
                className={` ${
                  orientation === 'vertical' ? 'marquee__item' : ''
                } flex justify-center items-center gap-10 text-[5rem] font-bold`}
              >
                {productDetails}
              </div>
            </div>
          </div>
          {isMediumLargeDevice && (
            <div
              className={` marquee ${
                reverse ? 'marquee--reverse' : ''
              } text-white ${
                orientation === 'vertical' ? 'marquee--vertical' : ''
              }`}
            >
              <div className="marquee__group p-8">
                <div
                  className={` ${
                    orientation === 'vertical' ? 'marquee__item' : ''
                  } flex justify-center items-center gap-10 text-[5rem] font-bold`}
                >
                  {productDetails}
                </div>
              </div>
              <div aria-hidden="true" className="marquee__group p-8">
                <div
                  className={` ${
                    orientation === 'vertical' ? 'marquee__item' : ''
                  } flex justify-center items-center gap-10 text-[5rem] font-bold`}
                >
                  {productDetails}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Marquee;