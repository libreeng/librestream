import { useStaticQuery, graphql } from "gatsby"

export const useSiteMetadata = () => {
  const { wpcontent } = useStaticQuery(graphql`
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
  const meta = wpcontent.generalSettings

  return meta
}
