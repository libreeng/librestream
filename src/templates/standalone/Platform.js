import React from "react"
import { graphql } from "gatsby"
import parse from "html-react-parser"
import Hero from "../../common/ui/Hero"
import FooterCTAs from '../../common/ui/FooterCTAs'
import PlatformFeatures from '../../components/PlatformFeatures'
import Stats from '../../components/Stats'
import Carousel from '../../common/ui/carousel/Carousel'
import { useCaseStudies } from "../../common/hooks/useCaseStudies"


const PlatformTemplate = ({ data: { page } }) => {
  const template = page.acfTemplatePlatform
  const hero = page.acfHero
  const stats = page.acfStats.statistics
  const featuresContent = page.acfPlatformFeatures
  const { featuredCaseStudies } = useCaseStudies()
  const { cta } = page.acfFooterCTAs

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
                  <iframe src={template.platformVideo} frameBorder="0" title={page.title} />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <PlatformFeatures content={featuresContent} />

      <section className="overflow-hidden">
        <div className="container">
          <div className="row mb-4">
            <div className="col-12">
              <h3>Customer Use Cases</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Carousel
                posts={featuredCaseStudies}
                config={{
                  dots: true
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <FooterCTAs featured={cta} />
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
      ...FooterCTAs
      acfTemplatePlatform {
        platformDescription
        platformVideo
      }
    }
  }
`

export default PlatformTemplate