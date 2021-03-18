import { graphql } from "gatsby"
export const PageCta = graphql`
  fragment PageCta on WpPage {
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