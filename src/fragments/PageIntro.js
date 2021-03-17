import { graphql } from "gatsby"

export const PageIntro = graphql`
  fragment PageIntro on WpPage {
    acfIntro {
      introDescription
      introFeaturedImage {
        altText
        localFile {
          publicURL
        }
      }
    }
  }
`