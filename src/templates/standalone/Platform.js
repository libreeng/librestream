import React from "react"
import { graphql } from "gatsby"
import parse from "html-react-parser"
import CaseStudies from '../../components/CaseStudies'
import Hero from "../../common/ui/Hero"
import PlatformFeatures from '../../components/PlatformFeatures'
import Stats from '../../components/Stats'


const PlatformTemplate = ({ data: { page } }) => {
  const template = page.acfTemplatePlatform
  const hero = page.acfHero
  const stats = page.acfStats.statistics
  const featuresContent = page.acfPlatformFeatures

  return (
    <>
      <Hero hero={hero} />

      <Stats stats={stats} />

      <div className="container">
        <hr className="hr-styled" />
      </div>

      <section>
        <div className="container">
          <div className="row mb-4">
            {template.platformDescription && (
              <div className="col-lg-6">
                <div className="text-primary h3">
                  {parse(template.platformDescription)}
                </div>
              </div>
            )}
            {template.platformVideo && (
              <div className="col-lg-6">
                <div className="responsive-iframe aspect-16x9">
                  <iframe src={template.platformVideo} frameBorder="0" title='blah' />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <PlatformFeatures content={featuresContent} />

      <CaseStudies heading={'Customer Use Cases'} />
    </>
  )
}

export const pageQuery = graphql`
  query PlatformTemplateQuery($id: String!) {
    # selecting the current page by id
    page: wpPage(id: { eq: $id }) {
      ...PageDetails
      ...PageHero
      ...PageStats
      ...PlatformFeatures
      acfTemplatePlatform {
        platformDescription
        platformVideo
      }
    }
  }
`

export default PlatformTemplate