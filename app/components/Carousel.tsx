import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const Images = [
    {
      id: 1,
      src: 'https://cdn.shopify.com/s/files/1/0687/9913/5766/articles/cop28-page-thumb_1536x1536_66c13104-15c3-4f13-913a-a28ab91f05e2.jpg?v=1699257427',
      alt: 'Image 1',
      title: 'Lamborghini Huracan Performante',
      description:
        'The Huracán Performante has reworked the concept of super sports cars and taken the notion of performance to levels never seen before.',
    },
    {
      id: 2,
      src: 'https://cdn.shopify.com/s/files/1/0687/9913/5766/articles/cop28-page-thumb_1536x1536_66c13104-15c3-4f13-913a-a28ab91f05e2.jpg?v=1699257427',
      alt: 'Image 2 ',
      title: 'Porsche 911 Turbo S',
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
      title: 'Lamborghini Aventador SV',
      description:
        'Aventador SV provide thrills unlike anything that has ever been experienced before.',
    },
    {
      id: 5,
      src: 'https://cdn.shopify.com/s/files/1/0687/9913/5766/articles/cop28-page-thumb_1536x1536_66c13104-15c3-4f13-913a-a28ab91f05e2.jpg?v=1699257427',
      alt: 'Image 5',
      title: 'Ferrari 458 Speciale',
      description:
        '0 to 100 km/h (0 to 62 mph) takes 3.0 seconds and the Spider is capable of a top speed of 400 km/h (249 mph).',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    /*     autoplay: true,
    autoplaySpeed: 1000, */
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
  };

  return (
    <div>
      <Slider {...settings}>
        {Images.map((item) => (
          <div key={item.id}>
            <h2 className="title">{item.title}</h2>
            <img src={item.src} alt={item.alt} className="img" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
