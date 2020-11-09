import { useStaticQuery, graphql } from "gatsby"

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            description
            lang
            author
            # siteUrl
            # headline
            # description
            # image
            # video
            # twitter
            # name
            # logo
          }
        }
      }
    `
  )
  return site.siteMetadata
}

export default useSiteMetadata