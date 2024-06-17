import {useState} from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

interface StatsProps {
  heading: string;
  description: string;
  stats: {
    heading: string;
    signBefore?: string | null;
    signAfter?: string | null;
    percentage: number;
  }[];
}

const StatsSection = ({heading, description, stats}: StatsProps) => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-slate-100">
      <div className="container !h-full flex flex-col items-start">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <h3 className="font-bold leading-[1.2] text-brand-darkest text-[37px]">
            {heading}
          </h3>
          <p className="md:text-md text-brand-darkest">{description}</p>
        </div>
        {/*  @ts-ignore */}
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
          //@ts-ignore
          className="w-full"
        >
          <div className="grid w-full grid-cols-1 items-center justify-start gap-y-8 md:grid-cols-3 md:gap-x-8 lg:gap-x-12 lg:gap-y-16">
            {stats.map((stat, index) => (
              <div
                key={`${stat.heading}-${index}`}
                className="w-full md:border-l border-gray-300 md:pl-8 text-center"
              >
                <span className="flex justify-center items-center mb-2 text-10xl text-center font-bold leading-[1.3] md:text-[4rem] lg:text-[5rem] text-brand-primary">
                  <small className="text-[2.25rem]">{stat.signBefore}</small>
                  {counterOn && (
                    <CountUp
                      start={0}
                      end={Number(stat.percentage)}
                      duration={2}
                      delay={0}
                    />
                  )}
                  {stat.signAfter}
                </span>
                <h3 className="text-md font-bold leading-[1.4] md:text-xl text-brand-darkest">
                  {stat.heading}
                </h3>
              </div>
            ))}
          </div>
        </ScrollTrigger>
      </div>
    </section>
  );
};

export default StatsSection;
