export const HERO_COLLECTION_QUERY = `#graphql
 query HeroCollection($country: CountryCode, $language: LanguageCode, $handle: String!)
    @inContext(country: $country, language: $language) {
    collection(handle: $handle) {
        id
        title
        description
        image {
        id
        altText
        url
        }
        products(first: 20) {
        edges {
            node {
            id
            title
            description
            featuredImage {
                id
                url
                altText
            }
            }
        }
        }
    }
  }
` as const;
