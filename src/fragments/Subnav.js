import { graphql } from "gatsby"

export const Subnav = graphql`
  fragment Subnav on WpPage {
    acfSubnav {
      subnav {
        subnavItemLink {
          target
          title
          path: url
        }
      }
    }
  }
`