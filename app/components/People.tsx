import type {FeaturedCollectionFragment} from 'storefrontapi.generated';

interface PeopleProps {
  imgSrc: string | undefined;
  altText: string | undefined;
}

const People = ({imgSrc, altText}: PeopleProps) => {
  return (
    <div className="w-full md:w-[16rem]">
      <img
        src={imgSrc}
        alt={altText}
        className="object-cover rounded-md w-full h-full shrink-0 border-gray-200"
      />
    </div>
  );
};

export default People;
