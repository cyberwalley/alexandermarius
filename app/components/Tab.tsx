import {useState} from 'react';
import {handleize} from '~/utils';

interface TabProps {
  /* tabs: {
    id: string | number;
    title: string;
    subtitle: string;
    content: string;
    accessibilityLabel: string;
    panelID: string;
  }[]; */
  tabs: any;
  title: string;
}

const Tab = ({tabs, title}: TabProps) => {
  const [activeTab, setActiveTab] = useState(0);

  const [selected, setSelected] = useState(0);

  const handleTabClick = (selectedTabindex: any) => {
    setSelected(selectedTabindex);
  };

  return (
    <div className="mt-0 mx-auto max-w-[1300px] px-4 pt-[3rem] md:pt-[7rem] pb-[3rem] md:pb-[7rem]">
      <div
        className="flex justify-center border-b-2 mt-0 border-slate-200 sm:space-x-10 md:gap-x-4 md:space-x-0 mb-10"
        role="tablist"
      >
        {tabs?.edges?.map((blog: any) => {
          if (blog?.node?.handle === handleize(title)) {
            return blog?.node?.articles?.edges.map((article, index) => {
              return (
                <div
                  key={article?.node?.id}
                  className={`relative -mt-[2px] border-b-2 pb-6 pt-4 px-6 text-center md:pb-10 md:pt-8  ${
                    activeTab === index
                      ? 'border-b-2 border-black'
                      : 'border-transparent hover:border-black hover:bg-slate-100'
                  }`}
                >
                  <button
                    key={article?.node?.id}
                    onClick={() => setActiveTab(index)}
                    aria-selected={activeTab === index ? true : false}
                    aria-controls={`panel-${article?.node?.id}`}
                    id={`tab-${article?.node?.id}`}
                    role="tab"
                    aria-label={article?.node?.title}
                    //@ts-ignore
                    tabIndex={`${index === 0 ? '0' : '-1'}`}
                    className={`py-2 text-left whitespace-nowrap leading-7 font-semibold absolute w-full h-full inset-0 ${
                      activeTab === index ? ' text-black' : null
                    }`}
                  ></button>
                  <h3
                    className={`text-center text-[1.3rem] ${
                      activeTab === index ? 'text-black' : 'text-slate-500'
                    }`}
                  >
                    {article?.node?.title}
                  </h3>
                </div>
              );
            });
          }
          return null;
        })}
        {/* {tabs.map(({id, title, subtitle}, index) => (
          <div
            key={id}
            className={`relative -mt-[2px] border-b-2 pb-6 pt-4 px-6 text-center md:pb-10 md:pt-8  ${
              activeTab === index
                ? 'border-b-2 border-black'
                : 'border-transparent hover:border-black hover:bg-slate-100'
            }`}
          >
            <button
              key={id}
              onClick={() => setActiveTab(index)}
              aria-selected={activeTab === index ? true : false}
              aria-controls={`panel-${id}`}
              id={`tab-${id}`}
              role="tab"
              aria-label={title}
              //@ts-ignore
              tabIndex={`${index === 0 ? '0' : '-1'}`}
              className={`py-2 text-left whitespace-nowrap leading-7 font-semibold absolute w-full h-full inset-0 ${
                activeTab === index ? ' text-black' : null
              }`}
            ></button>
            <h3
              className={`text-center text-[1.3rem] ${
                activeTab === index ? 'text-black' : 'text-slate-500'
              }`}
            >
              {title}
            </h3>
            {subtitle && (
              <p
                onClick={() => setActiveTab(index)}
                className="mt-2 hidden text-sm leading-6 text-slate-700 md:block cursor-pointer"
              >
                {subtitle}
              </p>
            )}
          </div>
        ))} */}
      </div>

      <div className="mt-6">
        {tabs?.edges?.map((blog: any) => {
          if (blog?.node?.handle === handleize(title)) {
            return blog?.node?.articles?.edges.map(
              (article, index) =>
                activeTab === index && (
                  <div
                    key={article?.node?.id}
                    id={`panel-${article?.node?.id}`}
                    aria-labelledby={`tab-${article?.node?.id}`}
                    className="mb-4"
                    role="tabpanel"
                    tabIndex={0}
                  >
                    <div
                      className="rte"
                      dangerouslySetInnerHTML={{
                        __html: article?.node?.contentHtml,
                      }}
                    />
                  </div>
                ),
            );
          }
          return null;
        })}

        {/* {tabs.map(
          ({id, title, subtitle, content}, index) =>
            activeTab === index && (
              <div
                key={id}
                id={`panel-${id}`}
                aria-labelledby={`tab-${id}`}
                className="mb-4"
                role="tabpanel"
                tabIndex={0}
              >
                <p className="text-sm leading-6 text-slate-700 md:hidden">
                  {subtitle}fsfs
                </p>
                <h2 className="font-bold text-lg mb-2">{title}</h2>
                <p>{content}</p>
              </div>
            ),
        )} */}
      </div>
    </div>
  );
};

Tab.displayName = 'Tab';
export default Tab;
