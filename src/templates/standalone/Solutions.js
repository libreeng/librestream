import React from "react"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"
import parse from "html-react-parser"
import SEO from "../../containers/SEO"
import Hero from "../../common/ui/Hero"
import Intro from '../../common/ui/Intro'
import FooterCTAs from '../../common/ui/FooterCTAs'

const SolutionsTemplate = ({ data: { page, solutions } }) => {
  const hero = {
    heroHeading: page.acfHero.heroHeading ? page.acfHero.heroHeading : page.title
  }
  const intro = page.acfIntro
  const allSolutions = solutions.edges
  const { cta } = page.acfFooterCTAs

  return (
    <>
      <SEO pageSEO={page.seo} />
      <Hero hero={hero} />
      <Intro intro={intro} />

      <section className="pt-0">
        <div className="container">
          <div className="row">

            {allSolutions && allSolutions.map(solution => {
              const { id, uri, title, acfPostTypeSolution: { solutionDescription, solutionTitle } } = solution.post
              const featuredImage = solution.post.acfIntro.introFeaturedImage

              return (
                <div key={id} className="col-12 col-sm-6 col-lg-4">
                  <Link to={uri}>
                    <div className='card p-2'>
                      <div
                        className="card-img-top bg-image aspect-1x1 grayscale"
                        style={{ backgroundImage: `url(${featuredImage ? featuredImage?.localFile?.publicURL : 'https://via.placeholder.com/400/000/000'})` }}
                      >
                        {/* <div className="bg-fill bg-hover-red">
                          {logoImage && (
                            <img src={logoImage.sourceUrl} className="img-fluid w-50" alt={title} />
                          )}
                        </div> */}
                      </div>
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
    </>
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