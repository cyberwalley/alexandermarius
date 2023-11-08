import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {useMediaQuery} from './useMediaQuery';

const Carousel = () => {
  const isExtraLargeDevice = useMediaQuery('(min-width: 1201px)');
  const isLargeDevice = useMediaQuery('(min-width: 993px)');
  const isMediumDevice = useMediaQuery('(min-width: 769px)');
  const Images = [
    {
      id: 1,
      src: 'https://cdn.shopify.com/s/files/1/0687/9913/5766/articles/cop28-page-thumb_1536x1536_66c13104-15c3-4f13-913a-a28ab91f05e2.jpg?v=1699257427',
      alt: 'Image 1',
      title: 'Ford Mustang',
      description:
        'The Huracán Performante has reworked the concept of super sports cars and taken the notion of performance to levels never seen before.',
    },
    {
      id: 2,
      src: 'https://cdn.shopify.com/s/files/1/0687/9913/5766/articles/cop28-page-thumb_1536x1536_66c13104-15c3-4f13-913a-a28ab91f05e2.jpg?v=1699257427',
      alt: 'Image 2 ',
      title: 'Ford Mustang',
      description:
        'This Turbo S variant comes with an engine putting out 641 bhp @ 6750 rpm and 800 Nm @ 2500 rpm of max power and max torque respectively.',
    },
    {
      id: 3,
      src: 'https://cdn.shopify.com/s/files/1/0687/9913/5766/articles/cop28-page-thumb_1536x1536_66c13104-15c3-4f13-913a-a28ab91f05e2.jpg?v=1699257427',
      alt: 'Image 3',
      title: 'Ford Mustang',
      description: 'For offroad lovers. Super fast, Super Comfortable.',
    },
    {
      id: 4,
      src: 'https://cdn.shopify.com/s/files/1/0687/9913/5766/articles/cop28-page-thumb_1536x1536_66c13104-15c3-4f13-913a-a28ab91f05e2.jpg?v=1699257427',
      alt: 'Image 4',
      title: 'Ford Mustang',
      description:
        'Aventador SV provide thrills unlike anything that has ever been experienced before.',
    },
    {
      id: 5,
      src: 'https://cdn.shopify.com/s/files/1/0687/9913/5766/articles/cop28-page-thumb_1536x1536_66c13104-15c3-4f13-913a-a28ab91f05e2.jpg?v=1699257427',
      alt: 'Image 5',
      title: 'Ford Mustang',
      description:
        '0 to 100 km/h (0 to 62 mph) takes 3.0 seconds and the Spider is capable of a top speed of 400 km/h (249 mph).',
    },
  ];

  /*   const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isExtraLargeDevice
      ? 3
      : isLargeDevice
      ? 2
      : isMediumDevice
      ? 2
      : 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    nextArrow: (
      <div>
        <div className="next-slick-arrow"> ⫸ </div>
      </div>
    ),
    prevArrow: (
      <div>
        <div className="prev-slick-arrow"> ⫷ </div>
      </div>
    ),
  }; */

  return (
    <div>
      {/* <Slider {...settings}>
        {Images.map((item) => (
          <div key={item.id}>
            <div className="bg-white  p-4 shadow-3xl border-2  border-black rounded-xl w-full sm:w-[10rem] md:w-[23rem] lg:w-[26rem]">
              <h2 className="title">{item.title}</h2>
              <img
                src={item.src}
                alt={item.alt}
                className="w-full object-cover round-xl"
              />
            </div>
          </div>
        ))}
      </Slider> */}
    </div>
  );
};

export default Carousel;
