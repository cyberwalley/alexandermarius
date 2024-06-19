import {useState} from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import Typography from '~/components/Typography';

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
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
      //@ts-ignore
      className="w-full"
    >
      <section className="px-[5%] py-16 md:py-24 lg:py-[12rem] bg-slate-100">
        <div className="container !h-full flex flex-col items-start">
          <div className="mb-12 grid grid-cols-1 items-start justify-between gap-4 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
            <Typography variant="h2" className="text-brand-darkest">
              {heading}
            </Typography>
            <Typography variant="body1" className="text-brand-darkest">
              {description}
            </Typography>
          </div>

          <div className="grid w-full grid-cols-2 items-center justify-start gap-y-8 md:grid-cols-3 md:gap-x-8 lg:gap-x-12 lg:gap-y-16">
            {stats.map((stat, index) => (
              <div
                key={`${stat.heading}-${index}`}
                className="w-full md:border-l border-gray-300 md:pl-8 text-center"
              >
                <span className="flex justify-center items-center mb-2 text-10xl text-center font-bold leading-[1.3] text-[70px] text-brand-primary">
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
                <Typography
                  variant="body1"
                  className="text-brand-darkest !font-bold"
                >
                  {stat.heading}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ScrollTrigger>
  );
};

export default StatsSection;
