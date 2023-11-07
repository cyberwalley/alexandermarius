import {Link} from '@remix-run/react';
import Carousel from './Carousel';

const CaseStudySection = () => {
  return (
    <section className="bg-[--color-main] px-[1rem]">
      <div className="grid gap-y-[4rem] px-4 pt-[3rem] md:pt-[7rem] md:pb-0">
        <div className="relative mx-auto max-w-[1536px] w-full grid grid-cols-4 sm:grid-cols-8 md:grid-cols-12 gap-x-gutter gap-y-2xl">
          <div className="col-span-4 xs:col-span-4 sm:col-span-8 md:col-span-10 lg:col-span-8 xl:col-span-8 col-start-1 pt-xl">
            <div className="text-left text-white">
              <Link
                className="text-white no-underline hover:no-underline"
                to={`blogs/`}
              >
                <h2 className="text-[3rem] font-[900] leading-[3.5rem]">
                  Case study
                </h2>
              </Link>
              <p className="text-[1.375rem] tracking-[-0.02em] leading-[2rem] pt-[1rem]">
                test
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-[1536px] overflow-hidden">
          <Carousel />
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;