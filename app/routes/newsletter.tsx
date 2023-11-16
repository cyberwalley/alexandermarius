import {Form, useActionData} from '@remix-run/react';
import {json, type LoaderArgs, type ActionArgs} from '@shopify/remix-oxygen';
import type {CustomerCreateMutation} from 'storefrontapi.generated';
import Button from '~/components/Button';
import NewsletterForm from '~/components/NewsletterForm';
type ActionResponse = {
  error: string | null;
  newCustomer:
    | NonNullable<CustomerCreateMutation['customerCreate']>['customer']
    | null;
};
export async function action({request, context}: ActionArgs) {
  if (request.method !== 'POST') {
    return json({error: 'Method not allowed'}, {status: 405});
  }

  const {storefront} = context;
  const form = await request.formData();
  const email = String(form.has('email') ? form.get('email') : '');
  const password = '*****';
  const acceptsMarketing = true;

  const validInputs = Boolean(email);
  try {
    if (!validInputs) {
      throw new Error('Please provide both an email');
    }
    const {customerCreate} = await storefront.mutate(USER_SUBSCRIBE_MUTATION, {
      variables: {
        input: {email, password, acceptsMarketing},
      },
    });
    if (customerCreate?.customerUserErrors?.length) {
      throw new Error(customerCreate?.customerUserErrors[0].message);
    }
    const newCustomer = customerCreate?.customer;
    if (!newCustomer?.id) {
      throw new Error('Could not subscribe user');
    }

    return json({error: null, newCustomer, message: 'you are subscribed'});
  } catch (error: unknown) {
    if (error instanceof Error) {
      return json({error: error.message}, {status: 400});
    }
    return json({error}, {status: 400});
  }
}

export default function Newsletter() {
  const data = useActionData<ActionResponse>();
  const error = data?.error || null;
  return (
    <div className="newsletter-page">
      <NewsletterForm />
    </div>
  );
}

const USER_SUBSCRIBE_MUTATION = `#graphql
  mutation customerCreate(
    $input: CustomerCreateInput!,
    $country: CountryCode,
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    customerCreate(input: $input) {
      customer {
        id
        email
        acceptsMarketing
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
` as const;
