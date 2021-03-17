import { graphql } from "gatsby"

export const SolutionIntro = graphql`
  fragment SolutionIntro on WpSolution {
    acfIntro {
      introDescription
      introFeaturedImage {
        altText
        localFile {
          publicURL
        }
      }
      callToAction {
        target
        title
        url
      }
    }
  }
`