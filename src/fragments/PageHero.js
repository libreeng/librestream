import { graphql } from "gatsby"

export const PageHero = graphql`
  fragment PageHero on WpPage {
    acfHero {
      heading
      description
      link {
        target
        title
        url
      }
      featuredImage {
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
      backgroundImage {
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
