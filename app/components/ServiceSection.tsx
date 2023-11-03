const ServiceSection = () => {
  return (
    <section className="bg-[--color-main] px-[1rem]">
      <div className="grid gap-y-[4rem] p-8 md:p-0 md:pt-[4rem]">
        <div className="relative mx-auto max-w-[1536px] w-full grid grid-cols-4 sm:grid-cols-8 md:grid-cols-12 gap-x-gutter gap-y-2xl">
          <div className="col-span-4 xs:col-span-4 sm:col-span-8 md:col-span-10 lg:col-span-8 xl:col-span-8 col-start-1 pt-xl">
            <div className="text-left text-white">
              <h2 className="text-[3rem] font-bold leading-[3.5rem]">
                Services
              </h2>
              <p className="text-[1.375rem] tracking-[-0.02em] leading-[2rem] pt-[1rem]">
                Our services cater to a wide range of local and global clients
                with diverse needs, and are market leaders in their own rights.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-[1536px] w-full grid grid-cols-4 sm:grid-cols-8 md:grid-cols-12 gap-x-[1.5rem] gap-y-[2.5rem]">
          <div className="col-span-4 xs:col-span-4 sm:col-span-8 md:col-span-6 col-start-1 flex flex-col gap-y-[2.5rem]">
            <picture>
              <img
                alt="A person at a store check-out, using the Shopify point of sale tablet to complete their purchase."
                className="mx-auto ml-0 w-full"
                src="https://cdn.shopify.com/s/files/1/0687/9913/5766/files/triangle.png?v=1698992900 3x"
              />
            </picture>
          </div>
          <div className="col-span-4 xs:col-span-4 md:col-span-6 xs:col-start-1 sm:col-start-1 md:col-start-7 flex flex-col gap-y-xl sm:col-span-6">
            <div className="grid gap-y-[2.5rem] pb-[4rem]">
              <div className="grid grid-cols-1 gap-x-[1.5rem] gap-y-[2.5rem]">
                <div className="rounded-2xl ring-0 ring-black/20 border-black p-0">
                  <div>
                    <div className="text-left text-white">
                      <span className="inline-block mb-4 p-1 lg:p-2 leading-[1] bg-[#DBF3C9] border-4 lg:border-8 border-[#edf9e4] rounded-full">
                        💚
                      </span>
                      <h2 className="text-[1.57rem] font-bold">
                        Business Management and Consulting
                      </h2>
                      <p className="text-body-base pt-sm line-clamp-4">
                        Our Business Restructuring Services are designed to help
                        you transform your organization, streamline operations,
                        and enhance profitability. Whether youre looking to
                        optimize your resources
                      </p>
                      <div className="w-full mt-4 text-center md:text-left">
                        <a href="/pages/about-us" className="group text-white">
                          <span className="mb-2 text-left  underline hover:no-underline text-lg font-medium">
                            Read more
                            <svg
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                              focusable="false"
                              className="group-hover:opacity-100 opacity-0 w-4 h-4 inline-block transition-all duration-500 group-hover:translate-x-2 will-change-transform"
                            >
                              <path
                                d="M17.707 9.293l-5-5a.999.999 0 10-1.414 1.414L14.586 9H3a1 1 0 100 2h11.586l-3.293 3.293a.999.999 0 101.414 1.414l5-5a.999.999 0 000-1.414z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="rounded-2xl ring-0 ring-black/20 border-black p-0"
                  data-mode="light"
                >
                  <div>
                    <div className="text-left text-white">
                      <span className="inline-block mb-4 p-1 lg:p-2 leading-[1] bg-[#DBF3C9] border-4 lg:border-8 border-[#edf9e4] rounded-full">
                        💚
                      </span>
                      <h2 className="text-[1.57rem] font-bold">
                        Manpower Management
                      </h2>
                      <p className="text-body-base pt-sm line-clamp-4">
                        In the dynamic world of business, your most valuable
                        asset is your people. Finding, hiring, and retaining top
                        talent is essential for success.
                      </p>
                      <div className="w-full mt-4 text-center md:text-left">
                        <a href="/pages/about-us" className="group text-white">
                          <span className="mb-2 text-left  underline hover:no-underline text-lg font-medium">
                            Read more
                            <svg
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                              focusable="false"
                              className="group-hover:opacity-100 opacity-0 w-4 h-4 inline-block transition-all duration-500 group-hover:translate-x-2 will-change-transform"
                            >
                              <path
                                d="M17.707 9.293l-5-5a.999.999 0 10-1.414 1.414L14.586 9H3a1 1 0 100 2h11.586l-3.293 3.293a.999.999 0 101.414 1.414l5-5a.999.999 0 000-1.414z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
