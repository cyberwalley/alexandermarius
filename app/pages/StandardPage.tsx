import type {PageQuery} from 'storefrontapi.generated';

interface StandardPageProps {
  page: PageQuery['page'];
}
const StandardPage = ({page}: StandardPageProps) => {
  return (
    <section className="px-[1rem]">
      <div className="grid gap-y-[4rem] py-[3rem]  md:pt-[7rem] md:pb-[7rem]">
        <div className="mx-auto max-w-[1000px] w-full">
          <div
            className="rte first-letter:text-7xl first-letter:font-bold first-letter:text-black
            first-letter:mr-3 first-letter:float-left"
            dangerouslySetInnerHTML={{
              __html: page?.body || '',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default StandardPage;
