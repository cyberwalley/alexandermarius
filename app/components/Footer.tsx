import {useMatches, NavLink, Link} from '@remix-run/react';
import type {FooterQuery} from 'storefrontapi.generated';
import FacebookIcon from '~/assets/svg/FacebookIcon';
import InstagramIcon from '~/assets/svg/InstagramIcon';
import LinkedInIcon from '~/assets/svg/LinkedInIcon';
import XIcon from '~/assets/svg/XIcon';
import HeartIcon from '~/assets/svg/HeartIcon';

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
      className="relative mx-auto max-w-[1536px] grid grid-cols-4 sm:grid-cols-8 md:grid-cols-12 gap-y-[2rem] p-4"
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
                  <FacebookIcon />
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
                  <InstagramIcon />
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
                  <LinkedInIcon />
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
                  <XIcon />
                  <span className="sr-only">X</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-span-12 px-0 md:px-10 py-10 border-t-2 border-gray-700 flex justify-between flex-col md:flex-row">
        <ul className="flex flex-col md:flex-row gap-4">
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
          <span className="flex gap-[0.2rem]">
            Made with
            <HeartIcon className="w-6 h-6 text-red-700" /> by{' '}
            <a
              className="text-[--color-secondary]"
              href="https://www.ax.digital/?utm_source=alexandermarius&utm_medium=web&utm_campaign=referral"
              target="_blank"
              rel="noreferrer"
            >
              <span className="sr-only">Love</span> AxDigital
            </a>
          </span>
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
