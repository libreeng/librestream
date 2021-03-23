import { graphql } from "gatsby"

export const RelatedPosts = graphql`
  fragment RelatedPosts on WpPost {
    categories {
      nodes {
        name
        posts {
          nodes {
            title
            uri
            id
            acfPostTypeNews {
              mainImage {
                altText
                srcSet
                sourceUrl
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1920, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
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
              mainImage {
                altText
                srcSet
                sourceUrl
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1920, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
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