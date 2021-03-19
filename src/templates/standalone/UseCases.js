import React from "react"
import { graphql, Link } from "gatsby"
import parse from "html-react-parser"
import Hero from "../../common/ui/Hero"
import UseCaseCard from '../../common/ui/cards/UseCaseCard'

const UseCasesTemplate = ({ data: { page, cases } }) => {

  return (
    <>
      <Hero heroTitle={page.title} />
      <section>
        <div className="container">
          <div className="row mt-5">
            {cases && cases.edges.map(useCase => (
              <div className="col-12 col-lg-3 mb-4">
                <Link to={useCase.uri}>
                  <UseCaseCard post={useCase} />
                </Link>
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
          }
        }
      }
    }
  }
`

export default UseCasesTemplate