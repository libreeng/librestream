import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import parse from "html-react-parser"
import Hero from "../../common/ui/Hero"
import Intro from "../../common/ui/Intro"
import FooterCTAs from '../../common/ui/FooterCTAs'

const CustomerSuccessTemplate = ({ data: { page } }) => {
  const acf = page.acfTemplateCustomerSuccess
  const hero = {
    heroHeading: page.title
  }
  const intro = page.acfIntro
  const { cta } = page.acfFooterCTAs

  return (
    <>
      <Hero hero={hero} />
      <Intro intro={intro} bracket="true" />
      <div className="container">
        <hr className="hr-styled" />
      </div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              {acf.trainingDescription && parse(acf.trainingDescription)}
            </div>
            <div className="col-lg-6">
              <div className="row align-items-center">
                {acf.trainingImages && acf.trainingImages.map(image => (
                  <div className="col-12 mb-3" key={image.id}>
                    <img src={image?.trainingImage?.localFile?.publicURL} className="img-fluid" alt={image?.trainingImage?.altText}/>
                    {/* <h6 className="text-center mt-3">AI Computer Vision</h6> not sure if images will have borders and titles embedded
                      <div className="border-bracket-bottom" /> */}
                  </div>
                ))}
              </div>
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
              {acf.deploymentDescription && parse(acf.deploymentDescription)}
            </div>
            <div className="col-lg-6">
              <div className="row align-items-center">
                {acf.deploymentImages && acf.deploymentImages.map(image => (
                  <div className="col-12 mb-3" key={image.id}>
                    <img src={image?.deploymentImage?.localFile?.publicURL} className="img-fluid" alt={image?.deploymentImage?.altText}/>
                    {/* <h6 className="text-center mt-3">AI Computer Vision</h6> not sure if images will have borders and titles embedded
                      <div className="border-bracket-bottom" /> */}
                  </div>
                ))}
              </div>
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
              {acf.supportDescription && parse(acf.supportDescription)}
            </div>
            <div className="col-lg-6">
              <div className="row align-items-center">
                {acf.supportImages && acf.supportImages.map(image => (
                  <div className="col-12 col-lg-4 mb-3" key={image.id}>
                    <Image
                      fluid={image?.supportImage?.localFile?.publicURL}
                      alt={image?.supportImage?.altText}
                    />
                    {/* <h6 className="text-center mt-3">AI Computer Vision</h6> not sure if images will have borders and titles embedded
                      <div className="border-bracket-bottom" /> */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <hr className="hr-styled" />
      </div>
      <section>
        <div className="container">
          <div className="row mb-5">
            <div className="col-12">
              <h2 className="text-uppercase">Customer Success Highlights</h2>
            </div>
          </div>

          <ul className="checklist checklist-dark row">
            {acf.customerSuccessHighlights && acf.customerSuccessHighlights.map(highlight => (
              <li className="col-md-3 text-uppercase">
                <small>{highlight.customerSuccessHighlight && highlight.customerSuccessHighlight}</small>
              </li>
            ))}
          </ul>
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
      <FooterCTAs featured={cta} />
    </>
  )
}

export const pageQuery = graphql`
  query CustomerSuccessTemplateQuery($id: String!) {
    # selecting the current page by id
    page: wpPage(id: { eq: $id }) {
      ...PageDetails
      ...PageIntro
      ...FooterCTAs
      acfTemplateCustomerSuccess {
        customerSuccessHighlights {
          customerSuccessHighlight
        }
        deploymentDescription
        deploymentImages {
          deploymentImage {
            id
            altText
            localFile {
              publicURL
            }
          }
        }
        trainingDescription
        trainingImages {
          trainingImage {
            id
            altText
            localFile {
              publicURL
            }
          }
        }
        supportDescription
        supportImages {
          supportImage {
            id
            altText
            localFile {
              publicURL
            }
          }
        }
      }
    }
  }
`

export default CustomerSuccessTemplate