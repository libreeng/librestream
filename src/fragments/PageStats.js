import { graphql } from "gatsby"

export const PageStats = graphql`
  fragment PageStats on WpPage {
    acfStats {
      statistics {
        number
        caption
        descriptor
        numberPrefix
      }
    }
  }
`