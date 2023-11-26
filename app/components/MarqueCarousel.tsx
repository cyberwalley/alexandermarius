import MarqueItemHorizontal from './MarqueItemHorizontal';
import MarqueItemVertical from './MarqueItemVertical';

const MarqueCarousel = ({content}) => {
  return (
    <div className="bg-transparent select-none ml-[-4rem] md:ml-[4rem] mask-gradient-marquee-bottom ">
      <div className="p-4 overflow-hidden md:flex gap-8 md:h-[57rem] lg:h-[49rem] md:relative">
        {/*  <div className="absolute top-0 bottom-0 left-0 w-24 z-10 bg-gradient-to-r from-slate-900 to-transparent" /> */}
        <div className="hidden md:flex md:flex-col items-center mb-4 md:h-full">
          <MarqueItemVertical content={content} duration={30} />
          <MarqueItemVertical content={content} duration={30} />
          <MarqueItemVertical content={content} duration={30} />
        </div>
        <div className="hidden md:flex md:flex-col mb-4 h-full">
          <MarqueItemVertical content={content} duration={30} reverse />
          <MarqueItemVertical content={content} duration={30} reverse />
          <MarqueItemVertical content={content} duration={30} reverse />
        </div>
        <div className="md:hidden flex md:flex-col items-center mb-4 md:h-full">
          <MarqueItemHorizontal content={content} duration={30} />
          <MarqueItemHorizontal content={content} duration={30} />
          <MarqueItemHorizontal content={content} duration={30} />
        </div>

        {/*  <div className="absolute top-0 bottom-0 right-0 w-24 z-10 bg-gradient-to-l from-slate-900 to-transparent" /> */}
      </div>
    </div>
  );
};

export default MarqueCarousel;
