import {Link} from '@remix-run/react';
import Button from './Button';

const SectionBanner = () => {
  return (
    <section className="grid gap-y-[4rem] pb-20 pt-20 bg-[--color-secondary]">
      <div className="mx-auto grid grid-cols-4 sm:grid-cols-8 md:grid-cols-12 gap-x-[1.5rem] gap-y-[4rem]">
        <div className="col-span-4 xs:col-span-4 sm:col-span-8 md:col-span-10 lg:col-span-8 xl:col-span-8 xs:col-start-1 sm:col-start-1 md:col-start-2 lg:col-start-3 xl:col-start-3">
          <div className="text-center text-black">
            <h2 className="text-[1.9rem] md:text-[3rem] px-[0.9rem]">
              Ready to Transform Your Business?
            </h2>
            <p className="text-[1.125rem] md:text-[1.375rem] pt-sm richtext">
              Unearth unparalleled insights and tailored strategies
            </p>
          </div>
          <div className="mt-md">
            <div className="flex gap-y-sm flex-wrap gap-x-sm justify-center">
              <Link to={'/pages/contact'}>
                <Button>Get in touch</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionBanner;
