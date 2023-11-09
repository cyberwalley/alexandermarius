export const PAGES_QUERY = `#graphql
  query PageSection(
    $language: LanguageCode,
    $country: CountryCode,
  )
  @inContext(language: $language, country: $country) {
    pages(first:20){
    edges {
      node {
        id
        title
        handle
        bodySummary
        body
      }
    }
  }
  }
` as const;
