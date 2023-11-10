import {Link} from '@remix-run/react';
import Accordion from './Accordion';

const FaqSection = () => {
  const accordionData = [
    {
      id: '1',
      title: 'How long will the hiring process take?',
      content: `For Entry level and Junior roles, we deliver within 4 weeks. While for Mid-level roles, we guarantee
      a delivery within 5-weeks. However for senior roles like Team Lead and Executive recruitments, the
      delivery time will depend on the intricacy of the hire. During our alignment meeting we will discuss
      the most realistic timeline suited to your recruitment project.`,
    },
    {
      id: '2',
      title:
        'What happens if I find a candidate through a different source? Do I get my payment back?',
      content: `If we are contacted and informed at least 5 working days prior to the commencement of the
      recruitment exercise, then the credit/funds for that role can be substituted for a similar role of
      equivalent value.`,
    },
    {
      id: '3',
      title:
        'What happens if I am not happy with the candidates? Can I get a refund?',
      content: `If you are not pleased with the initial recommendations, we will another set of recommendations`,
    },
    {
      id: '4',
      title:
        'What happens if the candidate leaves after 2-3 months on the job?',
      content: `If the candidate is released based on poor performance, a proof of communicated and agreed
      performance target must be provided to show that performance target was communicated by the
      company to the candidate, and signed off by both parties. Furthermore, a documentation show the
      track record of his/her performance must be provided to show the candidate did not meet the
      agreed target over the stated period. If these supporting documents are provided, we will do
      another recruitment exercise at no additional cost.
      If the candidate resigns or leaves for any other reason, we will be open to rerun the role at 50% of
      the original cost.`,
    },
  ];
  return (
    <section className="rounded-t-[1.3rem] md:rounded-t-[2rem] bg-[--color-secondary] px-[1rem]">
      <div className="grid gap-y-[4rem] px-4 pt-[3rem] md:pt-[7rem] pb-[3rem] md:pb-[7rem]">
        <div className="relative mx-auto max-w-[1536px] w-full grid grid-cols-4 sm:grid-cols-8 md:grid-cols-12 gap-x-gutter gap-y-2xl">
          <div className="col-span-4 xs:col-span-4 sm:col-span-8 md:col-span-10 lg:col-span-8 xl:col-span-8 col-start-1 pt-xl">
            <div className="text-left text-black">
              <h2 className="text-[3rem] font-[900] leading-[3.5rem]">
                <Link
                  className="text-black no-underline hover:no-underline"
                  to={`pages/faq`}
                >
                  {'Frequently Asked Questions'}
                </Link>
              </h2>

              <div
                // @ts-ignore
                dangerouslySetInnerHTML={{
                  __html:
                    '<div>Frequently asked questions about our recruitment services.</div>',
                }}
                className="text-[1.375rem] tracking-[-0.02em] leading-[2rem] pt-[1rem] line-clamp-3"
              ></div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-[1000px]">
          <div>
            <Accordion data={accordionData} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
