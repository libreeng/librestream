import React from "react"
import { graphql, Link } from "gatsby"
import parse from "html-react-parser"
import SEO from "../../containers/SEO"
import { useCaseStudies } from "../../common/hooks/useCaseStudies"
import Hero from "../../common/ui/Hero"
import FooterCTAs from '../../common/ui/FooterCTAs'
import Layout from "../../containers/Layout"

const UseCasesTemplate = ({ data: { page } }) => {
  const { caseStudies } = useCaseStudies()
  const hero = {
    heroHeading: 'Use Cases'
  }
  const { cta } = page.acfFooterCTAs

  return (
    <Layout>
      <SEO pageSEO={page.seo} />
      <Hero hero={hero} />
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
      <section>
        <div className="container">
          <div className="row mt-5">

            {caseStudies && caseStudies.map(useCase => {
              const { id, title, uri, acfPostTypeUseCase: { caption, summaryDescription, featuredImage, logoImage, externalSource: { externalLink } } } = useCase.post
              const url = externalLink
                ? externalLink.url
                : uri

              return (
                <div key={id} className="col-12 col-sm-6 col-lg-4">
                  <Link
                    to={url}
                    target={externalLink ? '_blank' : '_self'}
                    rel={externalLink ? 'noopener' : ''}
                  >
                    <div className='card p-2'>
                      <div
                        className="card-img-top bg-image aspect-1x1 grayscale"
                        style={featuredImage && { backgroundImage: `url(${featuredImage?.sourceUrl})` }}
                      >
                        <div className="bg-fill">
                          {logoImage && (
                            <img src={logoImage.sourceUrl} className="img-fluid w-50" alt={title} />
                          )}
                        </div>
                      </div>
                      <div>
                        <p>
                          <span className="text-dark">{caption || title}</span><br />
                          <span className="text-gray">{summaryDescription}</span>
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

      <FooterCTAs featured={cta} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query UseCasesTemplateQuery($id: String!) {
    # selecting the current page by id
    page: wpPage(id: { eq: $id }) {
      ...PageDetails
      ...FooterCTAs
    }
  }
`

export default UseCasesTemplate