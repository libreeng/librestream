import { graphql } from "gatsby"

export const PostSummary = graphql`fragment PostSummary on WpPost {
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
          gatsbyImageData(width: 500, quality: 100, layout: CONSTRAINED)
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
          gatsbyImageData(width: 500, quality: 100, layout: CONSTRAINED)
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
