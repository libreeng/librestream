import { graphql } from "gatsby"

export const PageFields = graphql`
  fragment PageDetails on WpPage {
    id
    content
    title
    date(formatString: "MMMM DD, YYYY")
    featuredImage {
      node {
        altText
        localFile {
          publicURL
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    ...PageSEO
  }
`