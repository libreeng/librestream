import { graphql } from "gatsby"
export const CaseStudyCta = graphql`
  fragment CaseStudyCta on WpCaseStudy {
    acfCta {
      description
      link {
        target
        title
        url
      }
    }
  }
`

