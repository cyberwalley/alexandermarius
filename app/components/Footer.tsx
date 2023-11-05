import {useMatches, NavLink, Link} from '@remix-run/react';
import type {FooterQuery} from 'storefrontapi.generated';

export function Footer({menu}: FooterQuery) {
  return (
    <footer className="footer">
      <FooterMenu menu={menu} />
    </footer>
  );
}

function FooterMenu({menu}: Pick<FooterQuery, 'menu'>) {
  const [root] = useMatches();
  const publicStoreDomain = root?.data?.publicStoreDomain;
  return (
    <nav
      className="relative mx-auto max-w-[1536px] grid grid-cols-4 sm:grid-cols-8 md:grid-cols-12 gap-x-gutter gap-x-[1.5rem] gap-y-[2rem] p-4"
      role="navigation"
    >
      <div className="pt-4 px-4 col-span-4 xs:col-span-4 md:col-span-4 col-start-1 flex flex-col pt-3xl sm:col-span-6 my-auto md:py-[5rem] md:px-10 gap-y-[1rem] text-[1.2rem] md:text-[1.5rem]">
        <h3 className="text-white text-[2rem] md:text-[3rem] font-[300]">
          {"Let's connect"}
        </h3>
        {(menu || FALLBACK_FOOTER_MENU).items.map((item) => {
          if (!item.url) return null;
          // if the url is internal, we strip the domain
          const url =
            item.url.includes('myshopify.com') ||
            item.url.includes(publicStoreDomain)
              ? new URL(item.url).pathname
              : item.url;
          const isExternal = !url.startsWith('/');
          return isExternal ? (
            <a
              href={url}
              key={item.id}
              rel="noopener noreferrer"
              target="_blank"
            >
              {item.title}
            </a>
          ) : (
            <NavLink
              end
              key={item.id}
              prefetch="intent"
              style={activeLinkStyle}
              to={url}
            >
              {item.title}
            </NavLink>
          );
        })}
      </div>
      <div className="px-4 col-span-4 xs:col-span-4 md:col-span-8 col-start-1 gap-[1rem] my-auto sm:col-start-1 sm:col-span-8 text-white grid grid-cols-1 md:grid-cols-3 md:mb-10">
        <div className="col-start-1 md:col-start-2">
          <div className="col-span-3">
            <div className="mb-4 mt-4 md:mt-0 ">Follow us</div>
            <ul className="flex gap-4 col-span-3">
              <li>
                <a
                  className="text-white text-sm"
                  href="https://www.facebook.com/alexander.marius.96"
                  rel="noopener noreferrer noreferrer"
                  target="_blank"
                >
                  <svg
                    fill="#ffffff"
                    width="32px"
                    height="32px"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M21.95 5.005l-3.306-.004c-3.206 0-5.277 2.124-5.277 5.415v2.495H10.05v4.515h3.317l-.004 9.575h4.641l.004-9.575h3.806l-.003-4.514h-3.803v-2.117c0-1.018.241-1.533 1.566-1.533l2.366-.001.01-4.256z" />
                  </svg>
                  <span className="sr-only">Facebook</span>
                </a>
              </li>
              <li>
                <a
                  className="text-white text-sm"
                  href="https://www.instagram.com/alexandermariusconsulting/"
                  rel="noopener noreferrer noreferrer"
                  target="_blank"
                >
                  <svg
                    width="32px"
                    height="32px"
                    viewBox="0 0 20 20"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs></defs>
                    <g
                      id="Page-1"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g
                        id="Dribbble-Light-Preview"
                        transform="translate(-340.000000, -7439.000000)"
                        fill="#ffffff"
                      >
                        <g
                          id="icons"
                          transform="translate(56.000000, 160.000000)"
                        >
                          <path
                            d="M289.869652,7279.12273 C288.241769,7279.19618 286.830805,7279.5942 285.691486,7280.72871 C284.548187,7281.86918 284.155147,7283.28558 284.081514,7284.89653 C284.035742,7285.90201 283.768077,7293.49818 284.544207,7295.49028 C285.067597,7296.83422 286.098457,7297.86749 287.454694,7298.39256 C288.087538,7298.63872 288.809936,7298.80547 289.869652,7298.85411 C298.730467,7299.25511 302.015089,7299.03674 303.400182,7295.49028 C303.645956,7294.859 303.815113,7294.1374 303.86188,7293.08031 C304.26686,7284.19677 303.796207,7282.27117 302.251908,7280.72871 C301.027016,7279.50685 299.5862,7278.67508 289.869652,7279.12273 M289.951245,7297.06748 C288.981083,7297.0238 288.454707,7296.86201 288.103459,7296.72603 C287.219865,7296.3826 286.556174,7295.72155 286.214876,7294.84312 C285.623823,7293.32944 285.819846,7286.14023 285.872583,7284.97693 C285.924325,7283.83745 286.155174,7282.79624 286.959165,7281.99226 C287.954203,7280.99968 289.239792,7280.51332 297.993144,7280.90837 C299.135448,7280.95998 300.179243,7281.19026 300.985224,7281.99226 C301.980262,7282.98483 302.473801,7284.28014 302.071806,7292.99991 C302.028024,7293.96767 301.865833,7294.49274 301.729513,7294.84312 C300.829003,7297.15085 298.757333,7297.47145 289.951245,7297.06748 M298.089663,7283.68956 C298.089663,7284.34665 298.623998,7284.88065 299.283709,7284.88065 C299.943419,7284.88065 300.47875,7284.34665 300.47875,7283.68956 C300.47875,7283.03248 299.943419,7282.49847 299.283709,7282.49847 C298.623998,7282.49847 298.089663,7283.03248 298.089663,7283.68956 M288.862673,7288.98792 C288.862673,7291.80286 291.150266,7294.08479 293.972194,7294.08479 C296.794123,7294.08479 299.081716,7291.80286 299.081716,7288.98792 C299.081716,7286.17298 296.794123,7283.89205 293.972194,7283.89205 C291.150266,7283.89205 288.862673,7286.17298 288.862673,7288.98792 M290.655732,7288.98792 C290.655732,7287.16159 292.140329,7285.67967 293.972194,7285.67967 C295.80406,7285.67967 297.288657,7287.16159 297.288657,7288.98792 C297.288657,7290.81525 295.80406,7292.29716 293.972194,7292.29716 C292.140329,7292.29716 290.655732,7290.81525 290.655732,7288.98792"
                            id="instagram-[#167]"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <span className="sr-only">Instagram</span>
                </a>
              </li>
              <li>
                <a
                  className="text-white text-sm"
                  href="https://www.linkedin.com/in/alexander-marius-220734163/"
                  rel="noopener noreferrer noreferrer"
                  target="_blank"
                >
                  <svg
                    fill="#ffffff"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32px"
                    height="32px"
                    viewBox="0 0 512 512"
                  >
                    <g id="7935ec95c421cee6d86eb22ecd125aef">
                      <path
                        style={{
                          display: 'inline',
                          fillRule: 'evenodd',
                          clipRule: 'evenodd',
                        }}
                        d="M116.504,500.219V170.654H6.975v329.564H116.504
		L116.504,500.219z M61.751,125.674c38.183,0,61.968-25.328,61.968-56.953c-0.722-32.328-23.785-56.941-61.252-56.941
		C24.994,11.781,0.5,36.394,0.5,68.722c0,31.625,23.772,56.953,60.53,56.953H61.751L61.751,125.674z M177.124,500.219
		c0,0,1.437-298.643,0-329.564H286.67v47.794h-0.727c14.404-22.49,40.354-55.533,99.44-55.533
		c72.085,0,126.116,47.103,126.116,148.333v188.971H401.971V323.912c0-44.301-15.848-74.531-55.497-74.531
		c-30.254,0-48.284,20.38-56.202,40.08c-2.897,7.012-3.602,16.861-3.602,26.711v184.047H177.124L177.124,500.219z"
                      ></path>
                    </g>
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  className="text-white text-sm"
                  href="https://twitter.com/amconsulting_"
                  rel="noopener noreferrer noreferrer"
                  target="_blank"
                >
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    fill="#ffffff"
                    width="32px"
                    height="32px"
                  >
                    <g>
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                    </g>
                  </svg>
                  <span className="sr-only">Twitter</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-span-12 px-0 md:px-10 py-10 border-t-2 border-gray-700 flex justify-between flex-col md:flex-row">
        <ul className="flex gap-4">
          <li>
            <Link
              className="text-white text-sm"
              to="/policies/terms-of-service"
            >
              Terms of Use
            </Link>
          </li>
          <li>
            <Link className="text-white text-sm" to="/pages/cookies">
              Cookies
            </Link>
          </li>
          <li>
            <Link className="text-white text-sm" to="/policies/privacy-policy">
              Privacy Policy
            </Link>
          </li>
        </ul>
        <div className="text-white mt-10 md:mt-0 text-sm">
          Site designed and developed by{' '}
          <a
            className="text-red-500"
            href="https://www.ax.digital/?utm_source=alexandermarius&utm_medium=web&utm_campaign=referral"
            target="_blank"
            rel="noreferrer"
          >
            AxDigital
          </a>
        </div>
      </div>
    </nav>
  );
}

const FALLBACK_FOOTER_MENU = {
  id: 'gid://shopify/Menu/199655620664',
  items: [
    {
      id: 'gid://shopify/MenuItem/461633060920',
      resourceId: 'gid://shopify/ShopPolicy/23358046264',
      tags: [],
      title: 'Privacy Policy',
      type: 'SHOP_POLICY',
      url: '/policies/privacy-policy',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633093688',
      resourceId: 'gid://shopify/ShopPolicy/23358013496',
      tags: [],
      title: 'Refund Policy',
      type: 'SHOP_POLICY',
      url: '/policies/refund-policy',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633126456',
      resourceId: 'gid://shopify/ShopPolicy/23358111800',
      tags: [],
      title: 'Shipping Policy',
      type: 'SHOP_POLICY',
      url: '/policies/shipping-policy',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633159224',
      resourceId: 'gid://shopify/ShopPolicy/23358079032',
      tags: [],
      title: 'Terms of Service',
      type: 'SHOP_POLICY',
      url: '/policies/terms-of-service',
      items: [],
    },
  ],
};

function activeLinkStyle({
  isActive,
  isPending,
}: {
  isActive: boolean;
  isPending: boolean;
}) {
  return {
    fontWeight: isActive ? 'bold' : undefined,
    color: isPending ? 'grey' : 'white',
  };
}
