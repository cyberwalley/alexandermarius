import {Input, Label, Textarea} from '@relume_io/relume-ui';
import type {ButtonProps} from '@relume_io/relume-ui';
import {useEffect, useRef, useState} from 'react';
import Button from './Button';
import {
  useActionData,
  useLoaderData,
  useNavigation,
  useTransition,
} from '@remix-run/react';

type Props = {
  tagline: string;
  heading: string;
  description: string;
  button: ButtonProps;
};

export type Contact1Props = React.ComponentPropsWithoutRef<'section'> &
  Partial<Props>;

const ContactForm = (props: Contact1Props) => {
  const {tagline, heading, description, button} = {
    ...Contact1Defaults,
    ...props,
  } as Props;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [error, setError] = useState('');

  const person = useLoaderData();
  const actionData = useActionData();
  //const transition = useTransition();
  const transition = useNavigation();
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const formRef = useRef();

  const isSubmitting =
    transition.state === 'loading' || transition.state === 'submitting';

  console.log(isSubmitting, 'isSubmitting');
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all fields');
      return;
    }
    setError('');
    try {
      const response = await fetch('/pages/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      /* 
      if (!response.ok) {
        throw new Error('Network response was not ok');
      } */
      //setFormData({name: '', email: '', message: ''});
      const data = await response.json();

      /* if (data) {
        alert('Message sent successfully');
        setFormData({name: '', email: '', message: ''});
      } */
      useEffect(() => {
        if (data) {
          alert('Message sent successfully');
          setFormData({name: '', email: '', message: ''});
        }
      }, [data]);
    } catch (error) {
      console.error('Error sending message', error);
    }

    if (formRef.current) {
      formRef.current.reset();
    }

    /*  if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();

    if (data) {
      console.log(data, 'data');
      setFormData({name: '', email: '', message: ''});
      alert('Message sent successfully');
    } */
  };

  return (
    <section className="">
      <div className="container">
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}
        {actionData && actionData.success && (
          <p>Form submitted successfully!</p>
        )}
        <form
          ref={formRef}
          method="POST"
          className="mx-auto grid w-full grid-cols-1 gap-6"
          onSubmit={handleSubmit}
        >
          <div className="grid w-full items-center">
            <Label htmlFor="name" className="mb-2">
              Name
            </Label>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              ref={nameRef}
            />
          </div>
          <div className="grid w-full items-center">
            <Label htmlFor="email" className="mb-2">
              Email
            </Label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              ref={emailRef}
            />
          </div>
          <div className="grid w-full items-center">
            <Label htmlFor="message" className="mb-2">
              Message
            </Label>
            <Textarea
              id="message"
              placeholder="Type your message..."
              className="min-h-[11.25rem] overflow-auto"
              name="message"
              value={formData.message}
              onChange={handleChange}
              ref={messageRef}
            />
          </div>
          <div className="text-center">
            <Button variant="primary" className="w-full" submit>
              {button.title}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export const Contact1Defaults: Contact1Props = {
  tagline: 'Tagline',
  heading: 'Contact us',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  button: {title: 'Submit'},
};

export default ContactForm;
