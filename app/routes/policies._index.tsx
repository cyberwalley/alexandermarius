import {json, type LoaderArgs} from '@shopify/remix-oxygen';
import {useLoaderData, Link} from '@remix-run/react';

export async function loader({context}: LoaderArgs) {
  const data = await context.storefront.query(POLICIES_QUERY);
  const policies = Object.values(data.shop || {});

  if (!policies.length) {
    throw new Response('No policies found', {status: 404});
  }

  return json({policies});
}

export default function Policies() {
  const {policies} = useLoaderData<typeof loader>();

  return (
    <section className="px-[1rem]">
      <div className="grid gap-y-[4rem] py-[3rem]  md:pt-[7rem] md:pb-[7rem]">
        <div className="mx-auto max-w-[1000px] w-full">
          <div className="policies">
            <h1>Policies</h1>
            <div className="rte">
              {policies.map((policy) => {
                if (!policy) return null;
                return (
                  <fieldset key={policy.id}>
                    <Link to={`/policies/${policy.handle}`}>
                      {policy.title}
                    </Link>
                  </fieldset>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const POLICIES_QUERY = `#graphql
  fragment PolicyItem on ShopPolicy {
    id
    title
    handle
  }
  query Policies ($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    shop {
      privacyPolicy {
        ...PolicyItem
      }
      shippingPolicy {
        ...PolicyItem
      }
      termsOfService {
        ...PolicyItem
      }
      refundPolicy {
        ...PolicyItem
      }
      subscriptionPolicy {
        id
        title
        handle
      }
    }
  }
` as const;
