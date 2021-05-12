import { graphql } from "gatsby"

export const FooterCTAs = graphql`fragment FooterCTAs on WpPage {
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
            gatsbyImageData(width: 500, quality: 100, layout: CONSTRAINED, formats: [AUTO])
          }
        }
      }
    }
  }
}
`