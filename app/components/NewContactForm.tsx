import {useEffect, useRef} from 'react';
import {Form, Link, useActionData} from '@remix-run/react';

import Button from './Button';
import {Label} from '@relume_io/relume-ui';

interface NewContactFormProps {
  className?: string;
  formState?: 'idle' | 'success' | 'error' | 'submitting';
}

type ActionResponse = {
  error: string | null;
  message: string | null;
};

export async function action({request}: {request: Request}) {
  const formData = new URLSearchParams(await request.text());
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  if (!name || !email || !message) {
    return new Response('Please fill in all fields', {
      status: 400,
    });
  }

  return new Response('Success', {
    status: 200,
  });
}

const NewContactForm = ({className}: NewContactFormProps) => {
  const data = useActionData<ActionResponse>();
  const error = data?.error || null;
  const formState = data?.message ? 'success' : error ? 'error' : 'idle';
  const inputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const mounted = useRef<boolean>(false);
  const successRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (formState === 'error') {
      inputRef.current?.focus();
    }
    if (formState === 'idle' && mounted.current) {
      inputRef.current?.select();
    }

    if (formState === 'success') {
      formRef.current?.reset();
      successRef.current?.focus();
    }

    mounted.current = true;
  }, [formState]);

  return (
    <section className="">
      <div className="container">
        {data && (
          <p ref={successRef} className="mb-10">
            {data.message}
          </p>
        )}
        {error && (
          <div className="mt-4 px-2 h-8 text-left justify-start  text-lg text-red-700 flex">
            {error}
          </div>
        )}
        <Form
          ref={formRef}
          method="post"
          className="mx-auto grid w-full grid-cols-1 gap-6"
        >
          <div className="grid w-full items-center">
            <Label htmlFor="name" className="mb-2">
              Name
            </Label>
            <input
              type="text"
              id="name"
              className="rounded-xl border-2  border-black bg-white p-[0.7rem] pl-[0.938rem] md:pl-[1.125rem] text-base"
              name="name"
              placeholder="Jane Doe"
              required
            />
          </div>

          <div className="grid w-full items-center">
            <Label htmlFor="email" className="mb-2">
              Email
            </Label>
            <input
              type="email"
              className="rounded-xl border-2  border-black bg-white p-[0.7rem] pl-[0.938rem] md:pl-[1.125rem] text-base"
              id="email"
              name="email"
              placeholder="email@yourdomain.com"
              required
            />
          </div>

          <div className="grid w-full items-center">
            <Label htmlFor="message" className="mb-2">
              Message
            </Label>
            <textarea
              id="message"
              name="message"
              placeholder="Type your message..."
              className="min-h-[11.25rem] overflow-auto rounded-xl border-black border-2 bg-white p-[0.7rem] pl-[0.938rem] md:pl-[1.125rem] text-base "
              required
            ></textarea>
          </div>
          <div className="g-recaptcha" data-sitekey="YOUR_SITE_KEY"></div>
          <div className="text-center">
            <Button className="w-full" submit variant="primary">
              Send
            </Button>
          </div>
        </Form>
      </div>
    </section>
  );
};

export default NewContactForm;
