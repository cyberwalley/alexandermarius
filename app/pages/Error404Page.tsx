import {Link} from '@remix-run/react';
import React from 'react';
import Button from '~/components/Button';

interface Error404PageProps {
  errorStatus: number;
  errorMessage?: string;
}

const Error404Page = ({errorStatus, errorMessage}: Error404PageProps) => {
  return (
    <section className="bg-white text-[--color-primary]">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-[--color-primary]">
            {errorStatus}
          </h1>
          {errorMessage && (
            <p className="mb-4 text-3xl tracking-tight font-bold md:text-4xl text-[--color-primary]">
              {errorMessage}
            </p>
          )}

          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            Sorry, something went wrong.
          </p>
          <div className="mt-10">
            <Button to="/" variant="primary">
              Back to Homepage
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Error404Page;
