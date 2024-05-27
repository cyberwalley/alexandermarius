import type {PageQuery} from 'storefrontapi.generated';
import {BiEnvelope, BiMessageDetail, BiPhone} from 'react-icons/bi';
import {Location} from '@relume_io/relume-ui';

interface ContactPageProps {
  page: PageQuery['page'];
}

type LinkProps = {
  label: string;
  label2?: string;
  url: string;
  url2?: string;
};

type ContactProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: LinkProps;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  contacts: ContactProps[];
};

export type Contact24Props = React.ComponentPropsWithoutRef<'section'> & Props;

const Contact24Defaults: Contact24Props = {
  tagline: 'Tagline',
  heading: 'Contact us',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  contacts: [
    {
      icon: (
        <BiEnvelope
          className="size-12 w-12 h-12 p-2 rounded-md bg-brand-primary"
          width="2rem"
        />
      ),
      title: 'Email',
      description:
        'For any inquiries, support requests, or feedback, please feel free to reach out to us at:',
      link: {
        label: 'info@alexandermarius.com',
        url: '#',
      },
    },
    {
      icon: (
        <BiPhone
          className="size-12 w-12 h-12 p-2 rounded-md bg-brand-primary"
          width="3rem"
        />
      ),
      title: 'Phone',
      description: 'You can also contact us by phone for immediate assistance:',
      link: {
        label: '+234 916 383 2503',
        label2: '+234 902 468 4979',
        url: '#',
        url2: '#',
      },
    },
    {
      icon: (
        <Location
          className="size-12 w-12 h-12 p-2 rounded-md bg-brand-primary"
          width="1em"
        />
      ),
      title: 'Office',
      description: 'Visit us at our office for a face-to-face consultation:',
      link: {
        label: '63 Awolowo Road, Ikoyi, Lagos.',
        url: '#',
      },
    },
  ],
};

const ContactPage = () => {
  const {tagline, heading, description, contacts} = {
    ...Contact24Defaults,
  } as Props;
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container !h-full">
        <div className="grid grid-cols-1 items-start justify-start gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-4">
          {contacts.map((contact, index) => (
            <div key={`${contact.title}-${index}`}>
              <div className="mb-5 md:mb-6">{contact.icon}</div>
              <h3 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                {contact.title}
              </h3>
              <p className="mb-5 md:mb-6">{contact.description}</p>
              <a
                className="underline ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2"
                href={contact.link.url}
              >
                <a
                  href={
                    contact.title === 'Email'
                      ? `mailto:${contact.link.label}`
                      : contact.title === 'Phone'
                      ? `tel:${contact.link.label}`
                      : contact.title === 'Office'
                      ? `https://www.google.com/maps/search/?api=1&query=${contact.link.label}`
                      : null
                  }
                >
                  {contact.link.label}
                </a>
                <br />
                <a
                  href={
                    contact.title === 'Phone'
                      ? `tel:${contact.link.label2}`
                      : null
                  }
                >
                  {contact.link.label && contact.link.label2}
                </a>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactPage;