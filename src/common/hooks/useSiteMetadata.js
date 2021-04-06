import { useStaticQuery, graphql } from "gatsby"

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
      query SiteMetaData {
        wp(id: {eq: "/graphql--rootfields"}) {
          generalSettings {
            description
          }
          seo {
            schema {
              inLanguage
              siteName
              siteUrl
            }
            social {
              facebook {
                url
              }
              wikipedia {
                url
              }
              instagram {
                url
              }
              linkedIn {
                url
              }
              mySpace {
                url
              }
              pinterest {
                url
              }
              twitter {
                username
              }
              youTube {
                url
              }
            }
            openGraph {
              frontPage {
                description
                title
              }
              defaultImage {
                sourceUrl
              }
            }
          }
        }
      }
    `
  )

  const { generalSettings, seo: { schema, openGraph, social } } = data.wp
  console.log(data.wp)
  const meta = {
    title: schema.siteName,
    description: generalSettings.description,
    language: schema.inLanguage,
    social,
    image: openGraph.defaultImage.sourceUrl,
    twitter: social.twitter.username,
  }

  return meta
}
