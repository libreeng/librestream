import { graphql } from "gatsby"
export const CaseStudyCta = graphql`
  fragment CaseStudyCta on WpCaseStudy {
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

