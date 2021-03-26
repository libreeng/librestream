import { useStaticQuery, graphql } from "gatsby"

export const useNews = () => {
  const data = useStaticQuery(graphql`
    query AllNews {
      press: allWpPost(
        filter: {categories: {nodes: {elemMatch: {name: {eq: "Press Releases"}}}}},
        sort: {order: DESC, fields: date}
        ) {
        nodes {
          ...PostSummary
        }
      }
      events: allWpPost(
        filter: {categories: {nodes: {elemMatch: {name: {eq: "Events"}}}}},
        sort: {order: DESC, fields: date}
        ) {
        nodes {
          ...PostSummary
        }
      }
      news: allWpPost(
        filter: {categories: {nodes: {elemMatch: {name: {eq: "In The News"}}}}},
        sort: {order: DESC, fields: date}
        ) {
        nodes {
          ...PostSummary
          acfPostTypeNews {
            externalSource {
              externalLink {
                target
                title
                url
              }
            }
          }
        }
      }
      videos: allWpPost(
        filter: {categories: {nodes: {elemMatch: {name: {eq: "Videos"}}}}},
        sort: {order: DESC, fields: date}
        ) {
        nodes {
          ...PostSummary
        }
      }
      webinars: allWpPost(
        filter: {categories: {nodes: {elemMatch: {name: {eq: "Webinars"}}}}},
        sort: {order: DESC, fields: date}
        ) {
        nodes {
          ...PostSummary
        }
      }
      blog: allWpPost(
        filter: {categories: {nodes: {elemMatch: {name: {eq: "Blog"}}}}},
        sort: {order: DESC, fields: date}
        ) {
        nodes {
          ...PostSummary
        }
      }
    }`
  )
  const pressReleases = data.press.nodes
  const events = data.events.nodes
  const news = data.news.nodes
  const videos = data.videos.nodes
  const webinars = data.webinars.nodes
  const blog = data.blog.nodes




  return { pressReleases, events, news, webinars, videos, blog }
}

