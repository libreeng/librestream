import { graphql } from "gatsby"

export const SolutionHero = graphql`
  fragment SolutionHero on WpSolution {
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
          publicURL
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
          publicURL
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