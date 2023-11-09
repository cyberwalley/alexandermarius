export const GET_SINGLE_PAGE_QUERY = `#graphql
  query SinglePageSection(
    $language: LanguageCode,
    $country: CountryCode,
    $handle: String!
  )
  @inContext(language: $language, country: $country) {
    page(handle: $handle) {
    id
    title
    bodySummary
    body
  }
  }
` as const;
