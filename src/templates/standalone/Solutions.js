import React from "react"
import { graphql, Link } from "gatsby"
import parse from "html-react-parser"
import SEO from "../../containers/SEO"
import Hero from "../../common/ui/Hero"
import Intro from '../../common/ui/Intro'
import FooterCTAs from '../../common/ui/FooterCTAs'
import Layout from "../../containers/Layout"
import { BgImage } from "gbimage-bridge";

const SolutionsTemplate = ({ data: { page, solutions } }) => {
  const hero = {
    heroHeading: page.acfHero.heroHeading ? page.acfHero.heroHeading : page.title
  }
  const intro = page.acfIntro
  const allSolutions = solutions.edges
  const { cta } = page.acfFooterCTAs

  return (
    <Layout>
      <SEO pageSEO={page.seo} />
      <Hero hero={hero} />
      <Intro intro={intro} />

      <section className="pt-0">
        <div className="container">
          <div className="row">

            {allSolutions && allSolutions.map(solution => {
              const { id, uri, title, acfPostTypeSolution: { solutionDescription, solutionTitle } } = solution.post
              const featuredImageData = solution.post.acfIntro.introFeaturedImage.localFile?.childImageSharp?.gatsbyImageData

              return (
                <div key={id} className="col-12 col-sm-6 col-lg-4">
                  <Link to={uri}>
                    <div className='card p-2'>
                      {featuredImageData ? (
                        <BgImage
                          className="card-img-top bg-image aspect-1x1 grayscale"
                          image={featuredImageData}
                        />
                      ) : (
                        <div
                          className="card-img-top bg-image aspect-1x1 grayscale"
                          style={{ backgroundImage: `url('https://via.placeholder.com/400/000/000')` }}
                        />
                      )}

                      <div>
                        <p>
                          <span className="text-dark">{solutionTitle || title}</span><br />
                          <span className="text-gray">{solutionDescription}</span>
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      {!!page.content && (
        <section className="pb-0">
          <div className="container">
            <div className="row">
              <div className="col-12">
                {parse(page.content)}
              </div>
            </div>
          </div>
        </section>
      )}
      <FooterCTAs featured={cta} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query SolutionsTemplateQuery($id: String!) {
    # selecting the current page by id
    page: wpPage(id: { eq: $id }) {
      ...PageDetails
      ...PageIntro
      ...PageHero
      ...FooterCTAs
    }
    solutions: allWpSolution(sort: { fields: [date], order: DESC }) {
      edges {
        post: node {
          id
          title
          uri
          acfIntro {
            introDescription
            introFeaturedImage {
              localFile {
                publicURL
                childImageSharp {
                  gatsbyImageData(width: 500, quality: 100, layout: CONSTRAINED, formats: [JPG])
                }
              }
            }
          }
          acfPostTypeSolution {
            solutionTitle
            solutionDescription
          }
        }
      }
    }
  }
`

export default SolutionsTemplate