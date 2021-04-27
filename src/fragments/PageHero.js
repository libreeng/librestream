import { graphql } from "gatsby"

export const PageHero = graphql`fragment PageHero on WpPage {
  acfHero {
    heroHeading
    heroDescription
    heroCta {
      target
      title
      url
    }
    heroFeaturedImage {
      altText
      srcSet
      sourceUrl
      localFile {
        publicURL
      }
    }
    heroBackgroundImage {
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
    linkTo
    modalData {
      modalContent
      modalHeader
      modalShowCloseButton
      ctaLabel
    }
  }
}
`
