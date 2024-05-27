import {Facebook, Instagram, X, LinkedIn, YouTube} from '@relume_io/relume-ui';
import type {ImageProps} from '@relume_io/relume-ui';
import HeartIcon from '~/assets/svg/HeartIcon';
import NewsletterForm from '~/components/NewsletterForm';
import {StaticLink} from '~/configs/links';
import {useLocation} from '@remix-run/react';

type Links = {
  title: string;
  url: string;
};

type socialMediaLinks = Links & {
  icon: React.ReactNode;
};

type ColumnLinks = {
  links: Links[];
};

type Address = {
  label: string;
  value: string;
};

type Contact = {
  label: string;
  phone: string;
  email: string;
};

type Props = {
  image: ImageProps;
  address: Address;
  contact: Contact;
  columnLinks: ColumnLinks[];
  socialMediaLinks: socialMediaLinks[];
  footerText?: string;
  footerLinks: Links[];
};

export type Footer3Props = React.ComponentPropsWithoutRef<'section'> & Props;

const Footer3Defaults: Footer3Props = {
  image: {
    src: 'https://relume-assets.s3.amazonaws.com/logo-image.svg',
    alt: 'Logo image',
  },
  address: {
    label: 'Address:',
    value: 'Level 1, 12 Sample St, Sydney NSW 2000',
  },
  contact: {
    label: 'Contact:',
    phone: '1800 123 4567',
    email: 'info@relume.io',
  },
  columnLinks: [
    {
      links: [
        {title: 'Link One', url: '#'},
        {title: 'Link Two', url: '#'},
        {title: 'Link Three', url: '#'},
        {title: 'Link Four', url: '#'},
        {title: 'Link Five', url: '#'},
      ],
    },
    {
      links: [
        {title: 'Link Six', url: '#'},
        {title: 'Link Seven', url: '#'},
        {title: 'Link Eight', url: '#'},
        {title: 'Link Nine', url: '#'},
        {title: 'Link Ten', url: '#'},
      ],
    },
  ],
  socialMediaLinks: [
    {
      title: 'Facebook',
      url: 'https://www.facebook.com/alexander.marius.96',
      icon: <Facebook className="text-white" />,
    },
    {
      title: 'Instagram',
      url: 'https://www.instagram.com/alexandermariusconsulting/',
      icon: <Instagram className="text-white" />,
    },
    {
      title: 'X',
      url: 'https://twitter.com/amconsulting_',
      icon: <X className="text-white" />,
    },
    {
      title: 'LinkedIn',
      url: 'https://www.linkedin.com/in/alexander-marius-220734163/',
      icon: <LinkedIn className="text-white" />,
    },
  ],
  footerText: '© 2024 Alexander Marius. All rights reserved.',
  footerLinks: [
    {title: 'Privacy Policy', url: '/policies/privacy-policy'},
    {title: 'Terms of Service', url: '/policies/terms-of-service'},
  ],
};

export const Footer = () => {
  const {
    image,
    address,
    contact,
    columnLinks,
    socialMediaLinks,
    footerText,
    footerLinks,
  } = {
    ...Footer3Defaults,
  } as Props;
  const {pathname} = useLocation();

  return (
    <footer className="px-[5%] py-12 md:py-18 lg:py-20 bg-background-alternative">
      <div className="container !h-full">
        <div className="grid grid-cols-1 gap-x-[4vw] gap-y-12 pb-12 md:gap-y-16 md:pb-18 lg:grid-cols-[1fr_0.5fr] lg:gap-y-4 lg:pb-20">
          <div>
            {pathname === StaticLink.Root && (
              <div className="mb-6 md:mb-8">
                <NewsletterForm className="w-full lg:w-[90%] xl:w-[80%]" />
              </div>
            )}
            <div className="grid grid-flow-col grid-cols-[max-content] items-start justify-center lg:justify-start gap-x-3 gap-y-0">
              {socialMediaLinks.map((link, index) => (
                <a
                  key={`${link.title}-${index}`}
                  href={link.url}
                  className="ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="h-px w-full bg-gray-500" />
        <div className="flex flex-col gap-6 md:gap-0 items-start justify-between pt-6 text-sm md:flex-row md:items-center md:pt-8">
          <p className="mt-8 md:mt-0 text-white text-sm">{footerText}</p>
          <ul className="grid grid-flow-row grid-cols-[max-content] justify-center gap-x-0 gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0">
            {footerLinks.map((link, index) => (
              <li key={`${link.title}-${index}`} className="underline">
                <a
                  href={link?.url}
                  className="text-white ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2"
                >
                  {link?.title}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 md:mt-0">
            <p className="text-white text-sm">
              Made with{' '}
              <HeartIcon
                fill="red"
                className="w-6 h-6 inline-block text-red-900"
              />{' '}
              by
              <a
                className="text-white font-extrabold underline text-sm"
                href="https://www.madebyax.com/?utm_source=alexandermarius&utm_medium=web&utm_campaign=referral"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only">Love</span> AxDigital
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
