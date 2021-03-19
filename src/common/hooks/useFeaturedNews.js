import { useStaticQuery, graphql } from "gatsby"

export const useFeaturedNews = () => {
  const data = useStaticQuery(graphql`
      query FeaturedNews {
        allWpPost(filter: {
          categories: {nodes: {elemMatch: {name: {eq: "Blog"}}}}},
          sort: {order: DESC, fields: date},
          limit: 10
          ) {
          nodes {
            id
            nodeType
            title
            uri
            date(formatString: "MMM, Y")
            acfPostTypeNews {
              mainImage {
                altText
                srcSet
                sourceUrl
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 500, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  )
  const featuredNews = data.allWpPost.nodes

  return { featuredNews }
}

