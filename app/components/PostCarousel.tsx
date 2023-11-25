import {Image} from '@shopify/hydrogen';
import type {AllBlogsQuery} from 'storefrontapi.generated';
import Button from './Button';
interface PostCarouselProps {
  article: AllBlogsQuery['blogs']['edges'][0]['node']['articles']['edges'][0];
  blog: AllBlogsQuery['blogs']['edges'][0]['node']['articles']['edges'][0];
  cardWidth: number;
  marginRight: number;
}

const PostCarousel = ({
  article,
  blog,
  cardWidth,
  marginRight,
}: PostCarouselProps) => {
  return (
    <div
      className="relative shrink-0 cursor-pointer transition-transform hover:-translate-y-1 bg-white p-4 rounded-xl shadow-4xl border-2 border-[--color-secondary]"
      style={{
        width: cardWidth,
        marginRight,
      }}
    >
      <Image
        data={article?.node?.image || undefined}
        aspectRatio="4/3"
        sizes="(min-width: 45em) 50vw, 100vw"
        crop="center"
      />
      <div className="px-2 py-3">
        <h3 className="text-black font-bold text-xl uppercase text-center min-h-[56px] xs:min-h-0 line-clamp-2">
          {article?.node?.title}
        </h3>
        <div>
          <div className="flex justify-center mt-10 mb-10 ">
            <Button
              to={`blogs/${blog?.node?.handle}/${article?.node?.handle}`}
              variant="primary"
            >
              Read success story
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCarousel;
