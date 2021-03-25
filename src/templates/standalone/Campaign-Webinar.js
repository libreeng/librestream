import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import parse from "html-react-parser"
import Hero from "../../common/ui/Hero"

// Might be able to combine this template and Campaign-Whitepaper into a more flexible template
const CampaignWebinarTemplate = ({ data: { page } }) => {
  const acf = page.acfTemplateCampaignWebinar
  const hero = page.acfHero

  return (
    <>
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
              <div className="sticky-top">
                {page.content && parse(page.content)}
                {acf.featuredImage && (
                  <Image
                    fluid={acf.featuredImage.localFile.childImageSharp.fluid}
                    alt={acf.featuredImage.altText}
                  />
                )}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="sticky-top">
                {acf.formEmbed && (
                  <div className="responsive-iframe aspect-1x1">
                    <iframe src={acf.formEmbed} title={page.title} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export const pageQuery = graphql`
  query CampaignWebinarTemplateQuery($id: String!) {
    # selecting the current page by id
    page: wpPage(id: { eq: $id }) {
      ...PageDetails
      ...PageHero
      acfTemplateCampaignWebinar {
        featuredImage {
          altText
          localFile {
            publicURL
            childImageSharp {
              fluid(maxWidth: 1000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        formEmbed
        intro
      }
    }
  }
`

export default CampaignWebinarTemplate