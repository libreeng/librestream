import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import parse from "html-react-parser"
import Hero from "../../common/ui/hero/HeroDefault"
import Card from "../../components/Card"

const UseCasesTemplate = ({ data: { page, cases } }) => {
  console.log('All Use Cases', cases.edges)
  return (
    <>
      <Hero heroTitle={page.title} />
      <section>
        <div className="container">
          <div className="row mt-5">
            {cases && cases.edges.map(useCase => (
              <div className="col-12 col-lg-3 mb-4">
                <Card
                  // need to add featured image field for use cases
                  image={useCase.node.acfPostTypeUseCase?.heroBackground?.localFile?.childImageSharp?.fluid}
                  title={useCase.node.title}
                  url={useCase.node.uri}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {!!page.content && (
        <section itemProp="articleBody">{parse(page.content)}</section>
      )}

    </>
  )
}

export const pageQuery = graphql`
  query UseCasesTemplateQuery($id: String!) {
    # selecting the current page by id
    page: wpPage(id: { eq: $id }) {
      ...PageDetails
    }
    cases: allWpCaseStudy {
      edges {
        node {
          id
          title
          uri
          acfPostTypeUseCase {
            articleContent
            articleLink
            articleLinkText
            articleTitle
            articleImage {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1000, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            heroBackground {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1000, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              title
              altText
            }
            columns {
              columnContent
              columnTitle
              demoFormIframe
              showRequestDemoButton
            }
            heroTitle
            heroSubtitle
            whiteLogo {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1000, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export default UseCasesTemplate