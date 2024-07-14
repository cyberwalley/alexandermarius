import type {PageQuery} from 'storefrontapi.generated';
import {BiEnvelope, BiMessageDetail, BiPhone} from 'react-icons/bi';
import {Location} from '@relume_io/relume-ui';
import Typography from '~/components/Typography';
import ContactForm from '~/components/ContactForm';
import {useActionData, Form} from '@remix-run/react';
import {json, type LoaderArgs} from '@shopify/remix-oxygen';
import NewContactForm from '~/components/NewContactForm';
import { Resend } from 'resend';
const resend = new Resend('re_Lzd2Pgby_LUJ9JZEbvH8tHVNMQCe2cCYz');

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
          className="size-12 w-10 h-10 p-2 rounded-md bg-brand-primary"
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
          className="size-12 w-10 h-10 p-2 rounded-md bg-brand-primary"
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
          className="size-12 w-10 h-10 p-2 rounded-md bg-brand-primary"
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

  const actionData = useActionData();
  console.log(actionData, 'actionData3');

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container !h-full">
        <div className="mx-auto w-full max-w-[57rem] lg:max-w-[1300px] items-center">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-start">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {contacts.map((contact, index) => (
                <div key={`${contact.title}-${index}`}>
                  <div className="mb-5 md:mb-6">{contact.icon}</div>
                  <Typography variant="h3" className="mb-3">
                    {contact.title}
                  </Typography>
                  <Typography variant="body1" className="mb-5 md:mb-6">
                    {contact.description}
                  </Typography>
                  <Typography variant="body1">
                    <a
                      //@ts-ignore
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
                  </Typography>
                  <Typography variant="body1">
                    <a
                      //@ts-ignore
                      href={
                        contact.title === 'Phone'
                          ? `tel:${contact.link.label2}`
                          : null
                      }
                    >
                      {contact.link.label && contact.link.label2}
                    </a>
                  </Typography>
                </div>
              ))}
            </div>
           {/*  {actionData?.message && <p>{actionData.message}</p>} */}
            <NewContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
