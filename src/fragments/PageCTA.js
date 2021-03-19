import { graphql } from "gatsby"
export const PageCta = graphql`
  fragment PageCta on WpPage {
    acfCta {
      ctaDescription
      link {
        target
        title
        url
      }
    }
  }
`