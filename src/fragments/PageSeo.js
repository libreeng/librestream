import { graphql } from "gatsby"

export const SEOFields = graphql`
  fragment PageSEO on WpPage {
    seo {
      title
      canonical
      metaDesc
      metaRobotsNofollow
      metaRobotsNoindex
      opengraphSiteName
      opengraphTitle
      opengraphUrl
      opengraphType
      opengraphModifiedTime
      opengraphImage {
        sourceUrl
      }
      twitterTitle
      twitterDescription
      twitterImage {
        sourceUrl
      }
    }
  }
`