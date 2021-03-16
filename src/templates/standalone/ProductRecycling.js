import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import parse from "html-react-parser"
import Hero from "../../common/ui/Hero"
import Intro from "../../common/ui/Intro"

const ProductRecyclingTemplate = ({ data: { page } }) => {
  
  const acf = page.acfTemplateProductRecycling
  const hero = {
    heroHeading: page.title
  }
  const intro = page.acfIntro
  return (
    <>
      <Hero hero={hero} />
      <Intro intro={intro} />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {acf.intro && parse(acf.intro)}
            </div>
            <div className="col-lg-4">
              {acf.introImage && (
                <Image
                  fluid={acf?.introImage?.localFile?.childImageSharp?.fluid}
                  alt={acf?.introImage?.altText}
                />
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
            <div className="col-12">
              {acf.shippingTitle && (
                <h3 className="text-uppercase">{acf.shippingTitle}</h3>
              )}
              {acf.shippingDescription && (
                <p className="text-primary">{acf.shippingDescription}</p>
              )}
              {acf.shippingAddress && (
                <div className="border-bracket d-inline-block text-uppercase">
                  <address>
                    {parse(acf.shippingAddress)}
                  </address>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
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
  query ProductRecyclingTemplateQuery($id: String!) {
    # selecting the current page by id
    page: wpPage(id: { eq: $id }) {
      ...PageDetails
      ...PageIntro
      acfTemplateProductRecycling {
        shippingAddress
        shippingDescription
        shippingTitle
      }
    }
  }
`

export default ProductRecyclingTemplate