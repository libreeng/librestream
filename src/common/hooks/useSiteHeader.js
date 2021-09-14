import { useStaticQuery, graphql } from 'gatsby'

export const useSiteHeader = () => {

  const data = useStaticQuery(graphql`
    query SiteHeaderQuery {
      wpMenu(slug: {eq: "primary-menu"}) {
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
      logo: file(relativePath: {eq: "logo.png"}) {
        publicURL
      }
      wp{
        globalOptions {
          acfSiteOptions {
            languages {
              label:languageLabel
              value:languageUrl
              languageName
              languageIsActive
              languageIsDefault
            }
          }
        }
      }
    }
  `)

  const { nodes } = data.wpMenu.menuItems

  return { menuItems: nodes, logo: data.logo, languages: data.wp.globalOptions.acfSiteOptions.languages.filter(lang => {return lang.languageIsActive}) }
}


