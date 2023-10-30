import type {FeaturedCollectionFragment} from 'storefrontapi.generated';
import {Image, Money} from '@shopify/hydrogen';

interface MarqueeProps {
  /* content: {
    node: {
      title: string;
      id: string;
      featuredImage: {
        id: string;
        url: string;
        altText: string;
        width: number;
        height: number;
      };
    };
  }[]; */
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
    <>
      <h3 className="mx-8 md:mx-10 lg:mx-12 inline-block">
        {product.node?.title}
      </h3>
      {console.log(product?.node?.featuredImage?.url)}
      <img
        src={product?.node?.featuredImage?.url}
        alt={product?.node?.featuredImage?.altText || undefined}
      />
      {/* <Image
        data={product?.node?.featuredImage?.url}
        aspectRatio="1/1"
        sizes="(min-width: 45em) 20vw, 50vw"
      /> */}
      {divider && <div className="start-icon w-10 h-1 mr-1 bg-white"></div>}
    </>
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
            } bg-[#0115a8] text-white  ${
              orientation === 'vertical' ? 'marquee--vertical' : ''
            }`}
          >
            <div className="marquee__group">
              <div
                className={` ${
                  orientation === 'vertical' ? 'marquee__item' : ''
                } flex justify-center items-center gap-10 text-[5rem] font-bold`}
              >
                {productDetails}
              </div>
            </div>
            <div aria-hidden="true" className="marquee__group">
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
              bg-[#0115a8] text-white ${
                orientation === 'vertical' ? 'marquee--vertical' : ''
              }`}
          >
            <div className="marquee__group">
              <div
                className={` ${
                  orientation === 'vertical' ? 'marquee__item' : ''
                } flex justify-center items-center gap-10 text-[5rem] font-bold`}
              >
                {contentInfo}
              </div>
            </div>
            <div aria-hidden="true" className="marquee__group">
              <div
                className={` ${
                  orientation === 'vertical' ? 'marquee__item' : ''
                } flex justify-center items-center gap-10 text-[5rem] font-bold`}
              >
                {contentInfo}
              </div>
            </div>
          </div>
          <div
            className={` marquee ${
              reverse ? 'marquee--reverse' : ''
            } bg-[#0115a8] text-white ${
              orientation === 'vertical' ? 'marquee--vertical' : ''
            }`}
          >
            <div className="marquee__group">
              <div
                className={` ${
                  orientation === 'vertical' ? 'marquee__item' : ''
                } flex justify-center items-center gap-10 text-[5rem] font-bold`}
              >
                {contentInfo}
              </div>
            </div>
            <div aria-hidden="true" className="marquee__group">
              <div
                className={` ${
                  orientation === 'vertical' ? 'marquee__item' : ''
                } flex justify-center items-center gap-10 text-[5rem] font-bold`}
              >
                {contentInfo}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Marquee;
