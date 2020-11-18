import { useStaticQuery, graphql } from "gatsby"

const useSiteMetadata = () => {
  const { wpcontent } = useStaticQuery(
    graphql`
      query SiteMetaData {
        wpcontent {
          generalSettings {
            title
            description
            language
            # author
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
  return wpcontent.generalSettings
}

export default useSiteMetadata