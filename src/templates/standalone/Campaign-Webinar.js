import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import parse from "html-react-parser"
import SEO from "../../containers/SEO"
import Hero from "../../common/ui/Hero"
import FooterCTAs from '../../common/ui/FooterCTAs'
import Layout from "../../containers/Layout"

// Might be able to combine this template and Campaign-Whitepaper into a more flexible template
const CampaignWebinarTemplate = ({ data: { page } }) => {
  const acf = page.acfTemplateCampaignWebinar
  const hero = page.acfHero
  const { cta } = page.acfFooterCTAs
  const featuredImageData = acf.featuredImage?.localFile?.childImageSharp?.gatsbyImageData
  const featuredImageAlt = acf.featuredImage.altText || ``

  return (
    <Layout>
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
              <div className="sticky-top">
                {page.content && parse(page.content)}
                {featuredImageData && (
                  <GatsbyImage
                    image={featuredImageData}
                    alt={featuredImageAlt} />
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

      <FooterCTAs featured={cta} />
    </Layout>
  );
}

export const pageQuery = graphql`query CampaignWebinarTemplateQuery($id: String!) {
  page: wpPage(id: {eq: $id}) {
    ...PageDetails
    ...PageHero
    ...FooterCTAs
    acfTemplateCampaignWebinar {
      featuredImage {
        altText
        localFile {
          publicURL
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
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