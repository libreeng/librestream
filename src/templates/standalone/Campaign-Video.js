import React from "react"
import { graphql } from "gatsby"
import parse from "html-react-parser"
import Hero from "../../common/ui/Hero"

// Not sure if this template is necessary as we also have video custom post type
const CampaignVideoTemplate = ({ data: { page } }) => {
  const acf = page.acfTemplateCampaignVideo
  const hero = {
    heroHeading: page.acfHero.heroHeading ? page.acfHero.heroHeading : page.title
  }
  return (
    <>
      <Hero hero={hero} />
      <section>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 text-center">
              {acf.videoEmbed && (
                <div className="responsive-iframe aspect-16x9">
                  <iframe src={acf.videoEmbed} title={page.title} />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      {!!page.content && (
        <section className="pt-3">
          <div className="container">
            <div className="row">
              <div className="col-12">
                {parse(page.content)}
              </div>
            </div>
          </div>
        </section>
      )}

    </>
  )
}

export const pageQuery = graphql`
  query CampaignVideoTemplateQuery($id: String!) {
    # selecting the current page by id
    page: wpPage(id: { eq: $id }) {
      ...PageDetails
      ...PageHero
      acfTemplateCampaignVideo {
        videoEmbed
      }
    }
  }
`

export default CampaignVideoTemplate