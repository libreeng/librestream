import { graphql } from "gatsby"

export const PostSummary = graphql`
  fragment PostSummary on WpPost {
    id
    nodeType
    title
    uri
    date(formatString: "MMM, Y")
    acfPostTypeNews {
      mainImage {
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
      summaryImage {
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
    }
    tags {
      nodes {
        name
        slug
      }
    }
  }
`
