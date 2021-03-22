import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'
import parse from "html-react-parser"
import Hero from "../../common/ui/Hero"
import Intro from '../../common/ui/Intro'
import AccordionItems from "../../components/AccordionItems"

const CampaignRemoteExpertAcceleratorProgramTemplate = ({ data: { page } }) => {

  const acf = page.acfTemplateRemoteExpertAcceleratorProgram
  const hero = {
    heroHeading: page.acfHero.heroHeading ? page.acfHero.heroHeading : page.title
  }
  const intro = page.acfIntro
  const aspect = 'aspect-4x3'
  return (
    <>
      <Hero hero={hero} />
      <Intro intro={intro} bracket="true" aspect={aspect} />
      <section className="bg-gradient-blue">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              {acf.accordionFeaturedImage && (
                <BackgroundImage
                  Tag="div"
                  className="bg-image aspect-1x1 img-offset-top img-offset-bottom offset-bottom-lg bg-dark"
                  fluid={acf.accordionFeaturedImage.localFile.childImageSharp.fluid}
                />
              )}
            </div>
            <div className="col-lg-6">
              {acf.accordionSections && (
                <AccordionItems items={acf.accordionSections} className="accordion-icons" />
              )}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-5 ml-lg-auto">
              {acf.accordionDescription && parse(acf.accordionDescription)}
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
            <div className="col-12">
              {acf.formIntro && parse(acf.formIntro)}
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                {acf.formEmbed && (
                  <div className="responsive-iframe aspect-16x9">
                    <iframe src={acf.formEmbed} title="Campaign Form" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="hr-styled" />
      {!!page.content && (
        <section itemProp="articleBody">
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
  query CampaignRemoteExpertAcceleratorProgramTemplateQuery($id: String!) {
    # selecting the current page by id
    page: wpPage(id: { eq: $id }) {
      ...PageDetails
      ...PageIntro
      ...PageHero
      acfTemplateRemoteExpertAcceleratorProgram {
        accordionSections {
          sectionContent
          sectionTitle
        }
        accordionFeaturedImage {
          altText
          localFile {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          altText
        }
        formIntro
        formEmbed
      }
    }
  }
`

export default CampaignRemoteExpertAcceleratorProgramTemplate