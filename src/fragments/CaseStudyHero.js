import { graphql } from "gatsby"

export const CaseStudyHero = graphql`
  fragment CaseStudyHero on WpCaseStudy {
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
