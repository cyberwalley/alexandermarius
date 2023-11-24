interface PostCarouselProps {
  id: number;
  imgUrl: string;
  author: string;
  title: string;
  description: string;
  cardWidth: number;
  marginRight: number;
}

const PostCarousel = ({
  imgUrl,
  author,
  title,
  description,
  cardWidth,
  marginRight,
}: PostCarouselProps) => {
  return (
    <div
      className="relative shrink-0 cursor-pointer transition-transform hover:-translate-y-1"
      style={{
        width: cardWidth,
        marginRight,
      }}
    >
      <img
        src={imgUrl}
        className="mb-3 h-[200px] w-full rounded-lg object-cover"
        alt={`An for a fake blog post titled ${title}`}
      />
      <span className="rounded-md border-[1px] border-neutral-500 px-1.5 py-1 text-xs uppercase text-neutral-500">
        {author}
      </span>
      <p className="mt-1.5 text-lg font-medium">{title}</p>
      <p className="text-sm text-neutral-500">{description}</p>
    </div>
  );
};

export default PostCarousel;
