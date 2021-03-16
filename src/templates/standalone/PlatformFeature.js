import React from 'react'
// import PropTypes from 'prop-types'
import { graphql } from "gatsby"
import Image from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'
import parse from "html-react-parser"
import Hero from "../../common/ui/Hero"

const PlatformFeatureTemplate = ({ data: { page, subnav } }) => {
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
              </div>
            </div>
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
                  console.log(highlight.highlightIcon)
                  const iconData = highlight.highlightIcon ? highlight.highlightIcon.localFile.childImageSharp.fluid : false

                  return (
                    <div className="col-lg-4">
                      {iconData && (
                        <Image
                          fluid={iconData}
                          alt={highlight.highlightIcon.altText || ''}
                          className="img-fluid"
                        />
                      )}
                      {highlight.highlightTitle && (
                        <>
                          <h6 className="text-center mt-3">{highlight.highlightTitle}</h6>
                          {highlight.highlightDescription && (
                            <small className="d-block text-center">
                              {highlight.highlightDescription}
                            </small>
                          )}
                          <div className="border-bracket-bottom" />
                        </>
                      )}
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
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        feature2Description
        feature2Image {
          altText
          localFile {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
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
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
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
