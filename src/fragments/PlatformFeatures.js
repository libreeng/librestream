import { graphql } from "gatsby"

export const PlatformFeatures = graphql`
  fragment PlatformFeatures on WpPage {
    acfPlatformFeatures {
      heading
      description
      features {
        heading
        summary
        featuredImage {
          altText
          srcSet
          sourceUrl
          localFile {
            childImageSharp {
              fluid(maxWidth: 800, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        link {
          target
          title
          url
        }
      }
      footer {
        heading
        summary
        checklist {
          checklistItem {
            checklistItem
          }
        }
      }
    }
  }
`

