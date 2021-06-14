import { useStaticQuery, graphql } from "gatsby"

export const useFeaturedNews = () => {
  const data = useStaticQuery(graphql`query FeaturedNews {
  allWpPost(
    filter: {categories: {nodes: {elemMatch: {name: {eq: "Blog"}}}}}
    sort: {order: DESC, fields: date}
    limit: 10
  ) {
    nodes {
      id
      nodeType
      title
      uri
      date(formatString: "MMM, Y")
      acfPostTypeNews {
        summaryImage {
          altText
          srcSet
          sourceUrl
          localFile {
            publicURL
            childImageSharp {
              gatsbyImageData(width: 500, quality: 100, layout: CONSTRAINED, formats: [JPG])
            }
          }
        }
        mainImage {
          altText
          srcSet
          sourceUrl
          localFile {
            childImageSharp {
              gatsbyImageData(width: 500, quality: 100, layout: CONSTRAINED, formats: [JPG])
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

