import { useStaticQuery, graphql } from 'gatsby'

export const useSiteFooter = () => {

  const data = useStaticQuery(graphql`query SiteFooterQuery {
  wp(id: {eq: "/graphql--rootfields"}) {
    id
    globalOptions {
      acfSiteOptions {
        title
        footerPhoneTitle
        footerPhone
        footerTollFreePhoneTitle
        footerTollFreePhone
        footerEmailTitle
        footerEmail
        phoneTitle
        phoneNumber
        tollFreeTitle
        tollFree
        faxTitle
        faxNumber
        footerMailingListTitle
        mailingListFormShortcode
        socialLinks {
          site
          svgCode
          url
        }
        ctas {
          ctaTitle
          ctaLink {
            url
            title
            target
          }
          ctaFeaturedImage {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 500, quality: 100, layout: CONSTRAINED, formats: [JPG])
              }
            }
          }
        }
        partners {
          url
          logo {
            id
            altText
            localFile {
              publicURL
              childImageSharp {
                gatsbyImageData(
                  layout: FIXED
                  height: 105
                  placeholder: NONE
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    }
  }
  logo: file(relativePath: {eq: "logo.png"}) {
    publicURL
  }
  wpMenu(name: {eq: "Footer Menu"}) {
    id
    menuItems {
      nodes {
        parentId
        id
        label
        path
      }
    }
  }
}
`)

  const { nodes } = data.wpMenu.menuItems
  const options = data.wp.globalOptions.acfSiteOptions

  return {
    options,
    logo: data.logo,
    menuItems: nodes
  }

}