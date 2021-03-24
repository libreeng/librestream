import { graphql } from "gatsby"

export const PostDetails = graphql`
  fragment PostDetails on WpPost {
    id
    excerpt
    content
    title
    date(formatString: "MMM DD, YYYY")
    categories {
      nodes {
        slug
        name
      }
    }
    tags {
      nodes {
        slug
      }
    }
    acfPostTypeNews {
      mainImage {
        altText
        localFile {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    featuredImage {
      node {
        altText
        localFile {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`