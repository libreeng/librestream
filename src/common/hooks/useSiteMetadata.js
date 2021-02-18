import { useStaticQuery, graphql } from "gatsby"

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
      query SiteMetaData {
        wp(id: {eq: "/graphql--rootfields"}) {
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
  const meta = data.wp.generalSettings

  return meta
}
