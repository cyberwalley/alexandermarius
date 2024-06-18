import type {HeroCollectionQuery} from 'storefrontapi.generated';
import MarqueItemHorizontal from './MarqueItemHorizontal';
import MarqueItemVertical from './MarqueItemVertical';

interface MarqueCarouselProps {
  content: HeroCollectionQuery['collection'];
}

const MarqueCarousel = ({content}: MarqueCarouselProps) => {
  return (
    <div className="bg-transparent select-none  mask-gradient-marquee-bottom overflow-hidden">
      <div className="p-4 overflow-hidden md:flex gap-8 lg:gap-2 xl:gap-8 md:h-[57rem] lg:h-[54rem] md:relative">
        <div className="hidden md:flex w-full lg:w-auto item-center md:flex-col  mb-4 md:h-full">
          <MarqueItemVertical content={content} duration={100} />
          <MarqueItemVertical content={content} duration={100} />
          <MarqueItemVertical content={content} duration={100} />
        </div>
        <div className="hidden md:flex w-full lg:w-auto md:flex-col mb-4 h-full">
          <MarqueItemVertical content={content} duration={100} reverse />
          <MarqueItemVertical content={content} duration={100} reverse />
          <MarqueItemVertical content={content} duration={100} reverse />
        </div>
        <div className="md:hidden flex md:flex-col items-center mb-4 md:h-full">
          <MarqueItemHorizontal content={content} duration={30} />
          <MarqueItemHorizontal content={content} duration={30} />
          <MarqueItemHorizontal content={content} duration={30} />
        </div>
      </div>
    </div>
  );
};

export default MarqueCarousel;
