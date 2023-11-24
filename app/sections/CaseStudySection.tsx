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
const MARGIN = 20;
const CARD_SIZE = CARD_WIDTH + MARGIN;

const BREAKPOINTS = {
  sm: 640,
  lg: 1024,
};

const CaseStudySection = () => {
  const {blogs}: AllBlogsQuery = useLoaderData<typeof loader>();
  const [ref, {width}] = useMeasure();
  const [offset, setOffset] = useState(0);

  const CARD_BUFFER =
    width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1;

  const CAN_SHIFT_LEFT = offset < 0;

  const CAN_SHIFT_RIGHT =
    Math.abs(offset) < CARD_SIZE * (posts.length - CARD_BUFFER);

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
    <section className="bg-neutral-100 py-8" ref={ref}>
      <div className="relative overflow-hidden p-4">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center justify-between">
            <h2 className="mb-4 text-4xl">The Team Blog</h2>

            <div className="flex items-center gap-2">
              <button
                className={`rounded-lg border-[1px] border-neutral-400 bg-white p-1.5 text-2xl transition-opacity ${
                  CAN_SHIFT_LEFT ? '' : 'opacity-30'
                }`}
                disabled={!CAN_SHIFT_LEFT}
                onClick={shiftLeft}
              >
                <ChevronLeft />
              </button>
              <button
                className={`rounded-lg border-[1px] border-neutral-400 bg-white p-1.5 text-2xl transition-opacity ${
                  CAN_SHIFT_RIGHT ? '' : 'opacity-30'
                }`}
                disabled={!CAN_SHIFT_RIGHT}
                onClick={shiftRight}
              >
                <ChevronRight />
              </button>
            </div>
          </div>
          <motion.div
            animate={{
              x: offset,
            }}
            transition={{
              ease: 'easeInOut',
            }}
            className="flex"
          >
            {posts.map((post) => {
              return (
                <PostCarousel
                  key={post.id}
                  {...post}
                  marginRight={MARGIN}
                  cardWidth={CARD_WIDTH}
                />
              );
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
