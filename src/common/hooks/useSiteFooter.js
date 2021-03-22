import { useStaticQuery, graphql } from 'gatsby'

export const useSiteFooter = () => {
  
  const data = useStaticQuery(graphql`
    query SiteFooterQuery {
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
            socialLinks {
              site
              svgCode
              url
            }
            ctas {
              label
              image {
                altText
                srcSet
                sourceUrl
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 500, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              link {
                url
              }
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