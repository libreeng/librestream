import { graphql } from "gatsby"

export const PageFields = graphql`fragment PageDetails on WpPage {
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
          gatsbyImageData(width: 600, quality: 100, layout: CONSTRAINED)
        }
      }
    }
  }
  ...PageSEO
}
`