import {Form, Link, useActionData, useTransition} from '@remix-run/react';
import Button from './Button';
import type {CustomerCreateMutation} from 'storefrontapi.generated';
import {useEffect, useRef} from 'react';

interface NewsletterFormProps {
  className?: string;
  formState?: 'idle' | 'success' | 'error' | 'submitting';
}

type ActionResponse = {
  error: string | null;
  newCustomer:
    | NonNullable<CustomerCreateMutation['customerCreate']>['customer']
    | null;
};

const NewsletterForm = ({className}: NewsletterFormProps) => {
  const data = useActionData<ActionResponse>();
  const error = data?.error || null;
  const formState = data?.newCustomer ? 'success' : error ? 'error' : 'idle';
  const inputRef = useRef<HTMLInputElement>(null);
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
      successRef.current?.focus();
    }

    mounted.current = true;
  }, [formState]);

  return (
    <div className={className}>
      <div className={` desktop ${formState === 'success' ? 'hidden' : ''}`}>
        <Form method="POST">
          <div className="desktop hidden lg:flex justify-between rounded-full border-2  border-brand-white bg-white p-[0.188rem] pl-[0.938rem] md:pl-[1.125rem] text-base lg:text-xl">
            <input
              className="focus:ring-offset-0  focus:outline-none flex-1 pr-1 border-0 outline-none mr-2 min-w-0 bg-transparent text-black"
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email address"
              aria-label="Enter your email address"
              spellCheck="false"
              required
              autoComplete="off"
              ref={inputRef}
              // eslint-disable-next-line jsx-a11y/no-autofocus
              autoFocus
            />
            <Button submit variant="primary">
              Get insights
            </Button>
          </div>
        </Form>
      </div>
      <div
        className={`mobile lg:hidden   ${
          formState === 'success' ? 'hidden' : ''
        }`}
      >
        <Form method="POST">
          <div className="flex justify-between rounded-full shadow-3xl border-2  border-black bg-white p-[0.188rem] pl-[0.938rem] md:pl-[1.125rem] text-base lg:text-xl">
            <input
              className="flex-1 ring-0 pr-1 outline-none focus:outline-none mr-2 min-w-0 bg-transparent text-black py-[0.9rem] border-0 rounded-full"
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email address"
              aria-label="Enter your email address"
              required
              autoComplete="off"
              spellCheck="false"
              ref={inputRef}
              // eslint-disable-next-line jsx-a11y/no-autofocus
              autoFocus
            />
          </div>
          <div className="mt-6 sm:mt-10">
            <Button submit className="w-full" variant="primary" shadow>
              Get insights
            </Button>
          </div>
        </Form>
      </div>
      {!error ||
        (formState === 'success' && (
          <div className="mt-4 text-left justify-start  px-2 h-8 text-lg text-black flex">
            Subscribe for weekly insights
          </div>
        ))}
      {error && (
        <div className="mt-4 px-2 h-8 text-left justify-start  text-lg text-red-700 flex">
          {error}
        </div>
      )}
      <div
        className={` bg-[--color-secondary] p-4 ${
          formState !== 'success' ? 'hidden' : ''
        }`}
      >
        <h2 ref={successRef} tabIndex={-1} className="mb-[3rem]">
          Subscribed!
        </h2>
        <Link className="underline" to="/">
          Start over
        </Link>
      </div>
    </div>
  );
};

export default NewsletterForm;
