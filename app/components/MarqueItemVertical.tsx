import {motion} from 'framer-motion';
import {Image} from '@shopify/hydrogen';
import type {HeroCollectionQuery} from 'storefrontapi.generated';

const MarqueItemVertical = ({
  reverse = false,
  duration = 50,
  content,
}: {
  reverse?: boolean;
  duration?: number;
  content: HeroCollectionQuery['collection'];
}) => {
  const collectionData = content?.products?.edges;
  return (
    <motion.div
      initial={{translateY: reverse ? '-100%' : '0%'}}
      animate={{translateY: reverse ? '0%' : '-100%'}}
      transition={{duration, repeat: Infinity, ease: 'linear'}}
      className="flex md:flex-col gap-[1rem] px-2"
    >
      {collectionData?.map((product) => {
        return (
          <div
            key={product?.node?.id}
            className="shadow-3xl mb-10 border-2 border-black rounded-xl p-2 bg-white h-auto w-[15rem] sm:w-[9rem] md:w-[10rem] lg:w-[15rem] xl:w-[19rem] "
          >
            <Image
              data={product?.node?.featuredImage || undefined}
              aspectRatio="1/1"
              sizes="50vw"
            />
            <div className="px-2 py-3">
              <p className="text-black font-normal text-sm">
                {product?.node?.title}
              </p>
              <div className="text-gray-500 font-normal text-sm">
                {product?.node?.description}
              </div>
            </div>
          </div>
        );
      })}
    </motion.div>
  );
};

export default MarqueItemVertical;
