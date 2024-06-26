import type {ImageProps} from '@relume_io/relume-ui';
import Typography from '~/components/Typography';

type Props = {
  heading: string;
  images: ImageProps[];
};

export type Logo3Props = React.ComponentPropsWithoutRef<'section'> & Props;

const Logo3Defaults: Logo3Props = {
  heading: 'Our clients',
  images: [
    {
      src: 'https://cdn.shopify.com/s/files/1/0837/5717/0963/files/Biola-Alabi-media-logo.jpg?v=1713329104',
      alt: 'Biola Alabi media logo',
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0837/5717/0963/files/Eko-Electricity-Distribution-Company-EKEDC-logo.jpg?v=1713328941',
      alt: 'EKEDC-logo',
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0837/5717/0963/files/xander-logo.jpg?v=1713329402',
      alt: 'xander-logo',
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0837/5717/0963/files/rf-garden.jpg?v=1713328941',
      alt: 'rf-garden logo',
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0837/5717/0963/files/cainergy.png?v=1713328941',
      alt: 'cainergy logo',
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0837/5717/0963/files/araba-logo.jpg?v=1713328941',
      alt: 'araba logo',
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0837/5717/0963/files/LAGOS-STATE-logo-1.jpg?v=1718341792',
      alt: 'Lagos State Government logo',
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0837/5717/0963/files/federal-govt-nigeria.jpg?v=1718341792',
      alt: 'Federal Government of Nigeria logo',
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0837/5717/0963/files/ottoman-turks-logo.png?v=1718399005',
      alt: 'Ottoman Turks logo',
    },
  ],
};
const LogoImage = () => {
  const {heading, images} = {
    ...Logo3Defaults,
  } as Props;
  return (
    <section className="overflow-hidden py-16 md:py-24 lg:py-[12rem]">
      {/* <div className="container !h-full mx-auto mb-8 w-full max-w-lg px-[5%] md:mb-10 lg:mb-12">
        <h2 className=" text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl text-center text-[2rem]  md:leading-[1.2] mb-16">
          {heading}
        </h2>
      </div> */}
      <div className="px-[5%]">
        <div className="container !h-full flex flex-col items-start">
          <div className="mb-12 grid grid-cols-1 items-start justify-between gap-4 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
            <Typography variant="h2" className="text-brand-darkest">
              Our Clients
            </Typography>
          </div>
        </div>
      </div>
      <div className="container !h-full flex flex-col items-start">
        <div className="flex items-center pt-[28px] md:pt-0">
          {Array(2)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="flex shrink-0 animate-loop-horizontally items-center"
              >
                {images.map((logo, index) => (
                  <img
                    key={`${logo.alt}-${index}`}
                    className="mx-[28px] max-w-[10rem] shrink-0 md:mx-10"
                    src={logo.src}
                    alt={logo.alt}
                  />
                ))}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default LogoImage;
