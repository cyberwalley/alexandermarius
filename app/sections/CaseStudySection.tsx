import {Link, useLoaderData} from '@remix-run/react';
import Carousel from '../components/Carousel';
import type {loader} from '~/routes/_index';
import type {AllBlogsQuery} from 'storefrontapi.generated';
import useMeasure from 'react-use-measure';
import {useState} from 'react';
import PostCarousel from '~/components/PostCarousel';
import {motion} from 'framer-motion';
import ChevronLeft from '~/assets/svg/ChevronLeft';
import ChevronRight from '~/assets/svg/ChevronRight';

const CARD_WIDTH = 350;
const MARGIN = 40;
const CARD_SIZE = CARD_WIDTH + MARGIN;

const BREAKPOINTS = {
  sm: 640,
  lg: 1024,
};

const CaseStudySection = () => {
  const {blogs}: AllBlogsQuery = useLoaderData<typeof loader>();
  const [ref, {width}] = useMeasure();
  const [offset, setOffset] = useState(0);

  const articleCount = blogs?.edges?.[3].node?.articles?.edges?.length;

  const CARD_BUFFER =
    width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1;

  const CAN_SHIFT_LEFT = offset < 0;

  const CAN_SHIFT_RIGHT =
    Math.abs(offset) < CARD_SIZE * (articleCount - CARD_BUFFER);

  const shiftLeft = () => {
    if (!CAN_SHIFT_LEFT) {
      return;
    }
    setOffset((pv) => (pv += CARD_SIZE));
  };

  const shiftRight = () => {
    if (!CAN_SHIFT_RIGHT) {
      return;
    }
    setOffset((pv) => (pv -= CARD_SIZE));
  };

  return (
    <section
      className="rounded-b-[1.3rem] md:rounded-b-[2rem] bg-[--color-main]"
      ref={ref}
    >
      <div className="relative overflow-hidden p-4 pt-[3rem] py-[4rem] md:py-[7rem]">
        <div className="px-4 xl:px-0  mx-auto max-w-[1536px] w-full  ">
          <div className="text-left text-white xl:px-0">
            <Link
              className="text-white no-underline hover:no-underline"
              to="blogs/case-study"
            >
              <h2 className="text-[3rem] font-[900] leading-[3.5rem]">
                Case study
              </h2>
            </Link>

            <div className="flex-col md;flex items-center justify-between mb-[5rem]">
              <div className="mb-10 text-4xl max-w-[1024px]">
                <p className="text-[1.375rem] tracking-[-0.02em] leading-[2rem] pt-[1rem] line-clamp-3">
                  Success Stories Sculpted by Strategy. Unveil the narratives of
                  transformation and triumph that underscore our partnership
                  with global leaders. Dive into our case studies.
                </p>
              </div>

              <div className="flex items-center gap-2 justify-end">
                <button
                  className={`rounded-lg border-2 border-neutral-400 bg-[--color-main] p-1.5 text-2xl transition-opacity ${
                    CAN_SHIFT_LEFT ? '' : 'opacity-30'
                  }`}
                  disabled={!CAN_SHIFT_LEFT}
                  onClick={shiftLeft}
                >
                  <ChevronLeft />
                </button>
                <button
                  className={`rounded-lg border-2 border-neutral-400 bg-[--color-main] p-1.5 text-2xl transition-opacity ${
                    CAN_SHIFT_RIGHT ? '' : 'opacity-30'
                  }`}
                  disabled={!CAN_SHIFT_RIGHT}
                  onClick={shiftRight}
                >
                  <ChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-6xl">
          <motion.div
            animate={{
              x: offset,
            }}
            transition={{
              ease: 'easeInOut',
            }}
            className="flex"
          >
            {blogs?.edges?.map((blog) => {
              if (blog?.node?.handle === 'case-study') {
                return blog?.node?.articles?.edges?.map((article) => {
                  return (
                    <PostCarousel
                      key={article?.node?.id}
                      article={article}
                      //@ts-ignore
                      blog={blog}
                      marginRight={MARGIN}
                      cardWidth={CARD_WIDTH}
                    />
                  );
                });
              }
              return null;
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;

// eslint-disable-next-line no-lone-blocks
{
  /* <section className="rounded-b-[1.3rem] md:rounded-b-[2rem] bg-[--color-main]">
<div className="grid gap-y-[4rem] pt-[3rem] md:py-[7rem]">
  <div className="relative px-8 xl:px-0 mx-auto max-w-[1536px] w-full grid grid-cols-4 sm:grid-cols-8 md:grid-cols-12 gap-x-gutter gap-y-2xl">
    <div className="col-span-4 xs:col-span-4 sm:col-span-8 md:col-span-10 lg:col-span-8 xl:col-span-8 col-start-1 pt-xl">
      <div className="text-left text-white">
        <Link
          className="text-white no-underline hover:no-underline"
          to="blogs/case-study"
        >
          <h2 className="text-[3rem] font-[900] leading-[3.5rem]">
            Case study
          </h2>
        </Link>
        <p className="text-[1.375rem] tracking-[-0.02em] leading-[2rem] pt-[1rem] line-clamp-3">
          Success Stories Sculpted by Strategy. Unveil the narratives of
          transformation and triumph that underscore our partnership with
          global leaders. Dive into our case studies.
        </p>
      </div>
    </div>
  </div>
  <div className="relative mx-auto  grid grid-cols-4 sm:grid-cols-8 md:grid-cols-12 gap-x-gutter gap-x-[1.5rem] gap-y-[2rem]">
    <Carousel blogs={blogs} />
  </div>
</div>
</section> */
}

const posts = [
  {
    id: 1,
    imgUrl: '/imgs/blog/1.png',
    author: 'John Anderson',
    title: 'We built an AI chess bot with ChatGPT',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.',
  },
  {
    id: 2,
    imgUrl: '/imgs/blog/2.png',
    author: 'Kyle Parsons',
    title: 'How to grow your personal brand as a web designer',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.',
  },
  {
    id: 3,
    imgUrl: '/imgs/blog/3.png',
    author: 'Andrea Bates',
    title: 'Calm down, monoliths are totally fine',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.',
  },
  {
    id: 4,
    imgUrl: '/imgs/blog/4.png',
    author: 'Jess Drum',
    title: 'A quick guide to Framer Motion (for dummies)',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.',
  },
  {
    id: 5,
    imgUrl: '/imgs/blog/5.png',
    author: 'Phil White',
    title: "You probably don't need kubernetes",
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.',
  },
  {
    id: 6,
    imgUrl: '/imgs/blog/6.png',
    author: 'Karen Peabody',
    title: 'State of JavaScript in 2024',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.',
  },
  {
    id: 7,
    imgUrl: '/imgs/blog/7.png',
    author: 'Dante Gordon',
    title: "What's new in Python?",
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.',
  },
];
