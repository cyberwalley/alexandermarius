import {Image} from '@shopify/hydrogen';
import {motion} from 'framer-motion';
import {useRef} from 'react';
import type {AllBlogsQuery} from 'storefrontapi.generated';
import Button from './Button';

interface CarouselProps {
  blogs: AllBlogsQuery['blogs'];
}

const Carousel = ({blogs}: CarouselProps) => {
  const carousel = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={carousel}
      className="carousel cursor-grab overflow-hidden col-span-12  flex flex-row gap-[1rem] my-auto "
    >
      <motion.div
        drag="x"
        dragConstraints={carousel}
        whileTap={{cursor: 'grabbing'}}
        className="inner-carousel flex gap-10 p-10"
      >
        {blogs?.edges?.map((blog) => {
          if (blog?.node?.handle === 'case-study') {
            return blog?.node?.articles?.edges?.map((article) => {
              return (
                <motion.div
                  key={article?.node?.id}
                  whileTap={{cursor: 'grabbing'}}
                  className="item min-h-[20rem] w-[20rem] md:w-[20rem] lg:w-[29rem] xl:w-[35rem] bg-white p-4 shadow-4xl border-2 border-[--color-secondary] rounded-xl"
                >
                  <Image
                    data={article?.node?.image || undefined}
                    aspectRatio="1/1"
                    sizes="50vw"
                    className="pointer-events-none"
                  />
                  <div className="px-2 py-3">
                    <h3 className="text-black font-bold text-xl uppercase text-center min-h-[56px] xs:min-h-0 line-clamp-2">
                      {article?.node?.title}
                    </h3>
                    <div>
                      <div className="flex justify-center mt-10 mb-10 ">
                        <Button
                          to={`blogs/${blog?.node?.handle}/${article?.node?.handle}`}
                          variant="primary"
                        >
                          Read success story
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            });
          }
          return null;
        })}
      </motion.div>
    </motion.div>
  );
};

export default Carousel;
