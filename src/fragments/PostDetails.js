import { graphql } from "gatsby"

export const PostDetails = graphql`fragment PostDetails on WpPost {
  ...PostSEO
  id
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
  acfFooterCTAs {
    cta {
      ctaTitle
      ctaLink {
        url
        title
        target
      }
      ctaFeaturedImage {
        localFile {
          childImageSharp {
            gatsbyImageData(width: 500, quality: 100, layout: CONSTRAINED)
          }
        }
      }
    }
  }
  acfPostTypeNews {
    mainImage {
      altText
      localFile {
        publicURL
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        }
      }
    }
    postVideo {
      videoDescription
      videoEmbed
      videoTitle
    }
  }
  featuredImage {
    node {
      altText
      localFile {
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        }
      }
    }
  }
}
`