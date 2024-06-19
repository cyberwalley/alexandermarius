import {Link} from '@remix-run/react';
import Button from '../components/Button';
import Typography from '~/components/Typography';
interface SectionBannerProps {
  title: string;
  subtitle?: string;
  buttons?: {title: string; url: string}[];
}

const SectionBanner = ({title, subtitle, buttons}: SectionBannerProps) => {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-[12rem] bg-brand-secondary">
      <div className="container grid !h-full w-full grid-cols-1 justify-items-center gap-6 md:gap-x-12 md:gap-y-8 lg:gap-x-20">
        <div className="md:mr-12 lg:mr-0">
          <div className="w-full ">
            <Typography variant="title" className="mb-3 md:mb-4  text-center">
              {title}
            </Typography>
            <Typography variant="body1" className="text-center md:text-md">
              {subtitle}
            </Typography>
          </div>
        </div>
        <div className="flex items-start justify-start gap-4">
          {buttons?.map(({title, url}, index) => (
            <Link to={url} key={index}>
              <Button variant="primary" shadow>
                {title}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
  /*  return (
    <section className="px-[1rem] bg-[--color-secondary]">
      <div className="grid gap-y-[4rem] pb-20 pt-20 md:pb-[8rem] md:pt-[8rem]">
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
              <div className="flex gap-y-sm flex-wrap gap-x-sm justify-center mt-10">
                <Link to={'/pages/contact'}>
                  <Button variant="primary" shadow>
                    Get in touch
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  ); */
};

export default SectionBanner;
