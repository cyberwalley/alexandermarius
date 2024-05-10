import React from 'react';

interface StatsProps {
  heading: string;
  description: string;
  stats: {heading: string; percentage: string}[];
}

const StatsSection = ({heading, description, stats}: StatsProps) => {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-slate-100">
      <div className="container !h-full flex flex-col items-start">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <h3 className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl text-brand-darkest">
            {heading}
          </h3>
          <p className="md:text-md text-brand-darkest">{description}</p>
        </div>
        <div className="grid w-full grid-cols-1 items-start justify-start gap-y-8 md:grid-cols-3 md:gap-x-8 lg:gap-x-12 lg:gap-y-16">
          {stats.map((stat, index) => (
            <div
              key={`${stat.heading}-${index}`}
              className="w-full border-l border-gray-300 pl-8"
            >
              <p className="mb-2 text-10xl font-bold leading-[1.3] md:text-[4rem] lg:text-[5rem] text-brand-primary">
                {stat.percentage}
              </p>
              <h3 className="text-md font-bold leading-[1.4] md:text-xl text-brand-darkest">
                {stat.heading}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
