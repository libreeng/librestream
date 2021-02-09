import { useStaticQuery, graphql } from 'gatsby'

export const useSiteHeader = () => {

  const data = useStaticQuery(graphql`
    query SiteHeaderQuery {
      wpcontent {
        menuItems(where: {location: PRIMARY_MENU, parentDatabaseId: 0}) {
          nodes {
            label
            path
            id
            childItems {
              nodes {
                label
                path
                id
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

  // console.log("data.logo.childImageSharp.fixed.srcWebp", data.logo.childImageSharp.fixed.srcWebp)
  const { menuItems } = data.wpcontent

  return { menuItems, logo: data.logo }
}

