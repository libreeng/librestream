import { graphql } from "gatsby"

export const PlatformFeatures = graphql`fragment PlatformFeatures on WpPage {
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
          publicURL
          childImageSharp {
            gatsbyImageData(width: 800, quality: 100, layout: CONSTRAINED, formats: [JPG])
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

