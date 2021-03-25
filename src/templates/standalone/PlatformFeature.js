import React from 'react'
// import PropTypes from 'prop-types'
import { graphql } from "gatsby"
import Image from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'
import parse from "html-react-parser"
import Hero from "../../common/ui/Hero"
import { useDispatch } from "react-redux"
import { openModal } from "../../common/modals/modalActions"
import PartnerModal from '../../common/modals/PartnerModal'

const PlatformFeatureTemplate = ({ data: { page, subnav } }) => {
  const dispatch = useDispatch();
  const template = page.acfTemplatePlaformFeature
  const hero = page.acfHero
  const nav = subnav.menuItems.nodes

  return (
    <>
      <Hero
        className=""
        hero={hero}
        nav={nav}
      />

      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              {template.ctaMessage && (
                <div className="border-bracket text-center p-3">
                  <h4><strong>{template.ctaMessage}</strong></h4>
                </div>
              )}
              {template.ctaButton && (
                <div className="text-center mt-2">
                  <a href={template.ctaButton.url} className="btn btn-secondary my-5" target={template.ctaButton.target}>{template.ctaButton.title}</a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark text-white bg-offset-right my-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              {template.feature1Description && (
                parse(template.feature1Description)
              )}
              <hr className="hr-xs ml-0 border-green" />
              {template.feature1Link && (
                <a href={template.feature1Link.url} className="btn btn-secondary mt-3" target={template.feature1Link.target}>{template.feature1Link.title ? template.feature1Link.title : 'Learn More'}</a>
              )}
            </div>
            <div className="col-lg-6">
              {template.feature1Image &&
                <BackgroundImage
                  Tag="div"
                  className="bg-image aspect-1x1 img-offset-top"
                  fluid={template.feature1Image?.localFile?.childImageSharp?.fluid}
                />
              }
            </div>
          </div>
        </div>
      </section>


      <section>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              {template.feature2Image &&
                <BackgroundImage
                  Tag="div"
                  className="bg-image aspect-1x1"
                  fluid={template.feature2Image?.localFile?.childImageSharp?.fluid}
                />
              }
            </div>
            <div className="col-lg-6">
              <div className="p-4">
                {template.feature2Description && parse(template.feature2Description)}
                <hr className="hr-sm ml-0" />
                {template.feature2Link && (
                  <a href={template.feature2Link.url} className="btn btn-primary mt-3" target={template.feature2Link.target}>{template.feature2Link.title ? template.feature2Link.title : 'Learn More'}</a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            {template.featureDownloads && template.featureDownloads.map((download, i) => (
              <div className="col-12 col-xl-4" key={`download_${i}`}>
                <a href={download?.featureDownload?.localFile.url} className="btn btn-outline-secondary text-dark btn-block mb-3">{download?.downloadLabel}</a>
              </div>
            ))}
            {template.featureLinks && template.featureLinks.map((link, i) => (
              <div className="col-12 col-xl-4" key={`link_${i}`}>
                <a href={link?.featureLink?.url} className="btn btn-outline-secondary text-dark btn-block mb-3">{link?.featureLink?.title}</a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="container">
        <hr />
      </div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              {template.technicalDetailsHeading &&
                <h3 className="text-primary">{template.technicalDetailsHeading}</h3>
              }
            </div>
            <div className="col-lg-7">
              <div className="border-left border-dark pl-4">
                {template.technicalDetailsDescription &&
                  parse(template.technicalDetailsDescription)
                }
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
            <div className="col-12">
              <h2>Product Highlights</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="row">
                {template.highlights && template.highlights.map(highlight => {
                  const iconData = highlight.highlightIcon ? highlight.highlightIcon.localFile.url : false
                  return (
                    <div className="col-6 col-lg-4 mb-3">
                      <button className="card h-100 w-100 justify-content-between border-0 bg-transparent" onClick={() => dispatch(openModal("HighlightModal", { highlight: highlight }))}>

                        {iconData && (
                          <div className="w-100 p-3 p-lg-4">
                            <div
                              style={{ backgroundImage: `url(${iconData})` }}
                              className="bg-image aspect-1x1 bg-contain" />
                          </div>

                        )}
                        <div className="card-body p-0 d-flex text-center w-100">
                          {highlight.highlightTitle && (
                            <h6 className="text-center mt-3 mb-0 w-100">{highlight.highlightTitle}</h6>
                          )}
                        </div>
                        <div className="card-footer bg-transparent border-0 w-100">
                          <div className="border-bracket-bottom" />
                        </div>
                      </button>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="col-lg-6">
              {template.productHighlightsImage && (
                <Image
                  fluid={template?.productHighlightsImage?.localFile.childImageSharp.fluid}
                  alt={template?.productHighlightsImage?.altText}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

PlatformFeatureTemplate.propTypes = {

}

export const pageQuery = graphql`
  query PlatformFeatureTemplateQuery($id: String!) {
    # selecting the current page by id
    page: wpPage(id: { eq: $id }) {
      ...PageDetails
      ...PageHero
      acfTemplatePlaformFeature {
        ctaMessage
        ctaButton {
          target
          title
          url
        }
        feature1Description
        feature1Image {
          altText
          localFile {
            publicURL
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        feature1Link {
          target
          title
          url
        }
        feature2Description
        feature2Image {
          altText
          localFile {
            publicURL
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        feature2Link {
          target
          title
          url
        }
        featureLinks {
          featureLink {
            target
            title
            url
          }
        }
        featureDownloads {
          downloadLabel
          featureDownload {
            id
            altText
            localFile {
              publicURL
              url
            }
          }
        }
        technicalDetailsHeading
        technicalDetailsDescription
        productHighlightsTitle
        productHighlightsImage {
          altText
          localFile {
            publicURL
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        highlights {
          highlightTitle
          highlightDescription
          highlightIcon {
            altText
            localFile {
              publicURL
              url
            }
          }
        }
      }
    }
    subnav: wpMenu(name: {eq: "Platform Features"}) {
      id
      menuItems {
        nodes {
          id
          label
          url
        }
      }
      name
    }
  }
`

export default PlatformFeatureTemplate
