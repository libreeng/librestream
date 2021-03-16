import { graphql } from "gatsby"

export const PageIntro = graphql`
  fragment PageIntro on WpPage {
    acfIntro {
      introDescription
      introFeaturedImage {
        altText
        localFile {
          childImageSharp {
            fluid(maxWidth: 500, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
          publicURL
        }
      }
    }
  }
`