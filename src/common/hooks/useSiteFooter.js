import { useStaticQuery, graphql } from 'gatsby'

export const useSiteFooter = () => {
  const data = useStaticQuery(graphql`
    query SiteFooterQuery {
      wpcontent {
        options {
          acfSiteOptions {
            title
            footerPhoneTitle
            footerPhone
            footerTollFreePhoneTitle
            footerTollFreePhone
            footerEmailTitle
            footerEmail
            phoneTitle
            footerMailingListTitle
            socialLinks {
              site
              svgCode
              url
            }
            partners {
              url
              logo {
                sourceUrl
                altText
              }
            }
          }
        }
      }
      footerbar: file(relativePath: {eq: "footer-bar.svg"}) {
        publicURL
        absolutePath
        childImageSharp {
          fixed {
           srcWebp
          }
        }
      }
    }
  `)
  const options = data.wpcontent.options.acfSiteOptions

  return { options, footerbar: data.footerbar }

}