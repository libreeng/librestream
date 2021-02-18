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
    }
  `)

  // console.log("data.logo.childImageSharp.fixed.srcWebp", data.logo.childImageSharp.fixed.srcWebp)
  const { nodes } = data.wpMenu.menuItems

  return { menuItems: nodes, logo: data.logo }
}

