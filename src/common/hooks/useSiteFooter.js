import { useStaticQuery, graphql } from 'gatsby'

export const useSiteFooter = () => {
  const data = useStaticQuery(graphql`
    query SiteFooterQuery {
      wp(id: {eq: "/graphql--rootfields"}) {
        id
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
                id
                altText
                localFile {
                  publicURL
                }
              }
            }
          }
        }
      }
      logo: file(relativePath: {eq: "logo.png"}) {
        publicURL
      }
    }
  `)
  const options = data.wp.options.acfSiteOptions

  return { options, logo: data.logo }

}