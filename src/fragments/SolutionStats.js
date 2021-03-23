import { graphql } from "gatsby"

export const SolutionStats = graphql`
  fragment SolutionStats on WpSolution {
    acfStats {
      statistics {
        number
        caption
        descriptor
      }
    }
  }
`