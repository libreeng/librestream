import { useStaticQuery, graphql } from "gatsby"

export const useCaseStudies = () => {
  const data = useStaticQuery(graphql`
    query CaseStudies {
      allWpCaseStudy(sort: { fields: [date], order: DESC }) {
        edges {
          post: node {
            id
            nodeType
            title
            uri
            acfPostTypeUseCase {
              caption
              summaryDescription
              externalSource {
                externalLink {
                  target
                  title
                  url
                }
              }
              logoImage {
                localFile {
                  childImageSharp {
                    gatsbyImageData(width: 400, quality: 100, layout: CONSTRAINED)
                  }
                }
              }
              featuredImage {
                localFile {
                  childImageSharp {
                    gatsbyImageData(width: 400, quality: 100, layout: CONSTRAINED)
                  }
                }
              }
            }
          }
          next {
            id
          }
          previous {
            id
          }
        }
      }
    }`
  )
  const caseStudies = data.allWpCaseStudy.edges
  const featuredCaseStudies = caseStudies.map(useCase => useCase.post)

  return { caseStudies, featuredCaseStudies }
}

