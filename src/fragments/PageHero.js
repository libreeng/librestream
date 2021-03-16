import { graphql } from "gatsby"

export const PageHero = graphql`
  fragment PageHero on WpPage {
    acfHero {
      heroHeading
      heroDescription
      heroCta {
        target
        title
        url
      }
      heroFeaturedImage {
        altText
        srcSet
        sourceUrl
        localFile {
          childImageSharp {
            fluid(maxWidth: 500, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      heroBackgroundImage {
        altText
        srcSet
        sourceUrl
        localFile {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
