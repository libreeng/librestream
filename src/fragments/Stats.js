import { graphql } from "gatsby"

export const Stats = graphql`
  fragment Stats on WpPage {
    stats {
      number
      caption
      descriptor
    }
  }
`