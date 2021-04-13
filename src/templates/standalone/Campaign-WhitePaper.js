import React from "react"
import { graphql } from "gatsby"
import parse from "html-react-parser"
import SEO from "../../containers/SEO"
import { embedUrl } from "../../common/utils/helpers"
import Hero from "../../common/ui/Hero"
import FooterCTAs from '../../common/ui/FooterCTAs'


// this template may be able to be combined with Campaign-Webinar into a more flexible single 2 column form template
const CampaignWhitePaperTemplate = ({ data: { page } }) => {
  const acf = page.acfTemplateCampaignWhitePaper
  const hero = page.acfHero
  const { cta } = page.acfFooterCTAs

  return (
    <>
      <SEO pageSEO={page.seo} />
      <Hero hero={hero} />
      <section>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 text-center">
              {acf.intro && (
                <div className="border-bracket">
                  {parse(acf.intro)}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <hr className="hr-styled" />
      </div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              {page.content && parse(page.content)}
            </div>
            <div className="col-lg-6">
              {acf.formEmbed && (
                <div className="responsive-iframe aspect-1x1">
                  <iframe src={embedUrl(acf.formEmbed)} title={page.title} />
                </div>
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
  query CampaignWhitePaperTemplateQuery($id: String!) {
    # selecting the current page by id
    page: wpPage(id: { eq: $id }) {
      ...PageDetails
      ...PageHero
      ...FooterCTAs
      acfTemplateCampaignWhitePaper {
        formEmbed
        intro
      }
    }
  }
`

export default CampaignWhitePaperTemplate