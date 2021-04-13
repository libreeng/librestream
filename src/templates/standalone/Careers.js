import React from "react"
import { graphql } from "gatsby"
import parse from "html-react-parser"
import SEO from "../../containers/SEO"
import Hero from "../../common/ui/Hero"
import Intro from '../../common/ui/Intro'
import FooterCTAs from '../../common/ui/FooterCTAs'

const CareersTemplate = ({ data: { page } }) => {
  const hero = page.acfHero
  const intro = page.acfIntro
  const { careers } = page.acfTemplateCareers
  const { cta } = page.acfFooterCTAs

  return (
    <>
      <SEO pageSEO={page.seo} />
      <Hero hero={hero} />
      <Intro intro={intro} bracket="true" />
      <section>
        <div className="container">
          <div className="row">
            {careers ? (
              careers.map((career, i) => {
                return (
                  <div key={`career_${i}`} className="col-lg-6 mb-5">
                    <hr className="hr-styled" />
                    <h3 className="mt-5">{career.title && career.title}</h3>
                    <p>{career.shortDescription && career.shortDescription}</p>
                    {career.careerLink && (
                      <a href={career.careerLink.url && career.careerLink.url} className="btn btn-outline-primary text-dark" target={career.careerLink.target && career.careerLink.target}>{career.careerLink.title ? career.careerLink.title : 'Read More'}</a>
                    )}
                  </div>
                )
              })
            ) : (
              <div className="col-12">
                <h2>There are currently no careers avaialable. Please check back soon!</h2>
              </div>
            )}
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              {!!page.content && (
                <article className="py-5">{parse(page.content)}</article>
              )}
            </div>
          </div>
        </div>
      </section>
      <FooterCTAs featured={cta} />
    </>
  )
}

export const pageQuery = graphql`
  query CareersTemplateQuery($id: String!) {
    # selecting the current page by id
    page: wpPage(id: { eq: $id }) {
      ...PageDetails
      ...PageHero
      ...PageIntro
      ...FooterCTAs
      acfTemplateCareers {
        careers {
          shortDescription
          longDescription
          title
          careerLink {
            url
            title
            target
          }
        }
      }
    }
  }
`

export default CareersTemplate