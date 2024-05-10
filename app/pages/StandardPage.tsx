import type {PageQuery} from 'storefrontapi.generated';

interface StandardPageProps {
  page: PageQuery['page'];
}
const StandardPage = ({page}: StandardPageProps) => {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container !h-full">
        <div className="mx-auto w-full max-w-[57rem] items-center">
          <div
            className="prose"
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

/* <section className="px-[1rem]">
      <div className="grid gap-y-[4rem] py-[3rem]  md:pt-[7rem] md:pb-[7rem]">
        <div className="mx-auto max-w-[1000px] w-full">
          <div
            className="rte"
            dangerouslySetInnerHTML={{
              __html: page?.body || '',
            }}
          />
        </div>
      </div>
    </section> */
