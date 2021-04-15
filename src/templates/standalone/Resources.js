import React from "react"
import { graphql, Link } from "gatsby"
import parse from "html-react-parser"
import SEO from "../../containers/SEO"
import BackgroundImage from 'gatsby-background-image'
import Hero from "../../common/ui/Hero"
import FooterCTAs from '../../common/ui/FooterCTAs'
import Layout from "../../containers/Layout"

const ResourcesTemplate = ({ data: { page, resources } }) => {
  const hero = {
    heroHeading: page.acfHero.heroHeading ? page.acfHero.heroHeading : page.title
  }
  const allResources = resources.edges
  const { cta } = page.acfFooterCTAs

  return (
    <Layout>
      <SEO pageSEO={page.seo} />
      <Hero hero={hero} />
      <section>
        <div className="container">
          <div className="row mt-5">

            {allResources && allResources.map(resource => {
              const { id, uri, acfPostTypeResource: { summaryDescription, caption } } = resource.post
              const featuredImage = {
                fluid: resource.post.acfPostTypeResource?.featuredImage?.localFile?.childImageSharp?.fluid,
                alt: resource.post.acfPostTypeResource?.featuredImage?.altText || ``
              }
              return (
                <div key={id} className="col-12 col-sm-6 col-lg-4">
                  <Link to={uri}>
                    <div className="card p-2">
                      {featuredImage.fluid ? (
                        <BackgroundImage
                          Tag="div"
                          className={`card-img-top bg-image aspect-1x1 grayscale`}
                          fluid={featuredImage.fluid}
                        />
                      ) : (
                        <div className={`card-img-top bg-image bg-black aspect-1x1`} />
                      )}

                      <div className="card-footer bg-transparent text-dark text-center text-uppercase">
                        <h6 className="mt-4 text-dark">{caption}</h6>
                        <p>{summaryDescription}</p>
                        <div className="border-bracket-bottom" />
                      </div>
                    </div>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {
        !!page.content && (
          <section>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  {parse(page.content)}
                </div>
              </div>
            </div>
          </section>
        )
      }

      <FooterCTAs featured={cta} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query ResourcesTemplateQuery($id: String!) {
    # selecting the current page by id
    page: wpPage(id: { eq: $id }) {
      ...PageDetails
      ...PageIntro
      ...PageHero
      ...FooterCTAs
    }
    resources: allWpResource(sort: { fields: [date], order: DESC }) {
      edges {
        post: node {
          id
          title
          uri
          acfPostTypeResource {
            summaryDescription
            caption
            featuredImage {
              localFile {
                publicURL
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
  }
`

export default ResourcesTemplate
