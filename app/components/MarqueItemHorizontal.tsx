import {motion} from 'framer-motion';
import {Image} from '@shopify/hydrogen';

const MarqueItemHorizontal = ({
  reverse = false,
  duration = 50,
  content,
}: {
  reverse?: boolean;
  duration?: number;
}) => {
  const collectionData = content?.products?.edges;
  return (
    <motion.div
      initial={{translateX: reverse ? '-100%' : '0%'}}
      animate={{translateX: reverse ? '0%' : '-100%'}}
      transition={{duration, repeat: Infinity, ease: 'linear'}}
      className="flex md:flex-col gap-[1rem] px-2"
    >
      {collectionData?.map((product) => {
        return (
          <div
            key={product?.node?.id}
            className="shadow-3xl mb-10 border-2 border-black rounded-xl p-2 bg-white h-auto w-[15rem] sm:w-[9rem] md:w-[7rem] lg:w-[11rem] xl:w-[15rem] "
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

export default MarqueItemHorizontal;
