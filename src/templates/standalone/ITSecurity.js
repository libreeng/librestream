import React from "react"
import { graphql } from "gatsby"
import parse from "html-react-parser"
import Hero from "../../common/ui/Hero"
import Intro from "../../common/ui/Intro"
import FooterCTAs from '../../common/ui/FooterCTAs'
import CTA from '../../common/ui/CTA'

const ItSecurityTemplate = ({ data: { page } }) => {
  const acf = page.acfTemplateItSecurity
  const hero = {
    heroHeading: page.title
  }
  const intro = page.acfIntro
  const pageCTA = page.acfCta

  return (
    <>
      <Hero hero={hero} />
      <Intro intro={intro} bracket="true" />
      <div className="container">
        <hr className="hr-styled" />
      </div>
      <section className="bg-wave">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {acf.details && parse(acf.details)}
              <div className="mt-5">
                {acf.downloads && acf.downloads.map(download => (
                  <p><a href={download.download} target="_blank" className="btn btn-gradient-dark-blue text-white">{download.downloadLabel}</a></p>
                ))}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="px-5 w-75">
                {acf.certificationImages && acf.certificationImages.map(image => (
                  image.certificationDocument ? (
                    <a href={image.certificationDocument.localFile.url} target="_blank">
                      <img src={image?.certificationImage?.localFile?.publicURL} className="img-fluid" alt="" />
                    </a>
                  ) : (
                    <img src={image?.certificationImage?.localFile?.publicURL} className="img-fluid" alt="" />
                  )

                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {!!page.content && (
        <section>
          <div className="container">
            <div className="row">
              <div className="col-12">
                {parse(page.content)}
              </div>
            </div>
          </div>
        </section>
      )}
      {pageCTA && (
        <CTA cta={pageCTA} />
      )}
      <FooterCTAs featured={cta} />
    </>
  )
}

export const pageQuery = graphql`
  query ItSecurityTemplateQuery($id: String!) {
    # selecting the current page by id
    page: wpPage(id: { eq: $id }) {
      ...PageDetails
      ...PageIntro
      ...FooterCTAs
      acfCta {
        ctaDescription
        link {
          target
          title
          url
        }
      }
      acfTemplateItSecurity {
        details
        certificationImages {
          certificationImage {
            localFile {
              publicURL
            }
          }
          certificationDocument {
            localFile {
              publicURL
              url
            }
          }
        }
        downloads {
          download {
            localFile {
              publicURL
              url
            }
            altText
          }
          downloadLabel
        }
      }
    }
  }
`

export default ItSecurityTemplate