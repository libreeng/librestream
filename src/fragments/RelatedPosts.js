import { graphql } from "gatsby"

export const RelatedPosts = graphql`fragment RelatedPosts on WpPost {
  categories {
    nodes {
      name
      posts {
        nodes {
          title
          uri
          id
          acfPostTypeNews {
            summaryImage {
              altText
              srcSet
              sourceUrl
              localFile {
                publicURL
                childImageSharp {
                  gatsbyImageData(width: 500, quality: 100, layout: CONSTRAINED)
                }
              }
            }
            mainImage {
              altText
              srcSet
              sourceUrl
              localFile {
                publicURL
                childImageSharp {
                  gatsbyImageData(quality: 100, layout: FULL_WIDTH)
                }
              }
            }
          }
        }
      }
    }
  }
  tags {
    nodes {
      name
      posts {
        nodes {
          title
          uri
          id
          acfPostTypeNews {
            summaryImage {
              altText
              srcSet
              sourceUrl
              localFile {
                publicURL
                childImageSharp {
                  gatsbyImageData(width: 500, quality: 100, layout: CONSTRAINED)
                }
              }
            }
            mainImage {
              altText
              srcSet
              sourceUrl
              localFile {
                publicURL
                childImageSharp {
                  gatsbyImageData(quality: 100, layout: FULL_WIDTH)
                }
              }
            }
          }
        }
      }
    }
  }
}
`