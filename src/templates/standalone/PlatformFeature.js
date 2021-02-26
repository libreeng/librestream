import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from "gatsby"
import Image from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'
import parse from "html-react-parser"
import Hero from "../../common/ui/Hero"

const PlatformFeatureTemplate = ({ data: { page, subnav } }) => {
  const acf = page.acfTemplatePlaformFeature
  const subnavItems = subnav.menuItems.nodes
  return (
    <>
      <Hero 
        heroTitle={acf.heroTitle}
        heroFeaturedImage={acf?.heroFeaturedImage?.localFile?.childImageSharp.fluid}
        heroBackgroundImage={acf?.heroBackground?.sourceUrl}
        // heroSubnav={subnavItems} not sure how to make this more globally accessible, the field name is not the same using a menu vs the custom in page subnav
      />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              {acf.intro && (
                <div className="border-bracket text-center">
                  {parse(acf.intro)}
                </div>
              )}
              {acf.introButton && (
                <div className="text-center mt-4">
                  <a href={acf.introButton.url} className="btn btn-gradient-cyan-green">{acf.introButton.title}</a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-dark text-white bg-offset-right mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              {acf.feature1Description && (
                parse(acf.feature1Description)
              )}
              <hr className="hr-xs ml-0 border-green" />
            </div>
            <div className="col-lg-6">
              {acf.feature1Image && 
                <BackgroundImage
                  Tag="div"
                  className="bg-image aspect-1x1 img-offset-top"
                  fluid={acf.feature1Image?.localFile?.childImageSharp?.fluid}
                />
              }
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            {acf.featureDownloads && acf.featureDownloads.map( download => (
              <div className="col-lg-4" key={download.id}>
                <a href={download?.featureDownload?.localFile.url} className="btn btn-border btn-block mb-3">{download?.downloadLabel}</a>
              </div>
            ))}
            {acf.featureLinks && acf.featureLinks.map( link => (
              <div className="col-lg-4" key={link.id}>
                <a href={link?.featureLink?.url} className="btn btn-border btn-block mb-3">{link?.featureLink?.title}</a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              {acf.feature2Image && 
                <BackgroundImage
                  Tag="div"
                  className="bg-image aspect-1x1"
                  fluid={acf.feature2Image?.localFile?.childImageSharp?.fluid}
                />
              }
            </div>
            <div className="col-lg-6">
              <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, et nemo dolor amet officia itaque explicabo, voluptates labore repudiandae praesentium molestias illum pariatur in inventore voluptatum eum dignissimos, debitis blanditiis!</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed accusamus nostrum architecto temporibus tempore, nobis, quos, aperiam porro distinctio officia doloribus. Repellat necessitatibus libero sit alias ex sed, laborum quod.</p>
              <hr className="hr-sm ml-0" />
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
            <div className="col-lg-4">
              {acf.technicalDetailsDescription && 
                parse(acf.technicalDetailsDescription)
              }
            </div>
            <div className="col-lg-8">
              <div className="row">
                {acf.technicalDetails && acf.technicalDetails.map( detail => (
                  <div className="col-lg-6 mb-4">
                    <div className="px-2 border-left border-dark">
                      {detail.technicalTitle && (
                        <h6 className="text-uppercase text-primary">{detail.technicalTitle}</h6>
                      )}
                      {detail.technicalDescription &&
                        parse(detail.technicalDescription)
                      }
                    </div>
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
            <div className="col-12">
              <h2>Product Highlights</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="row">
                {acf.highlights && acf.highlights.map( highlight => (
                  <div className="col-lg-4">
                    {highlight.highlightIcon &&
                      <img src={highlight.highlightIcon.sourceUrl} className="img-fluid" alt={highlight.highlightIcon.altText}/>
                    }
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
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              {acf.productHighlightsImage && (
                <Image
                  fluid={acf?.productHighlightsImage?.localFile.childImageSharp.fluid}
                  alt={acf?.productHighlightsImage?.altText}
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
      acfTemplatePlaformFeature {
        feature1Description
        feature1Image {
          altText
          localFile {
            childImageSharp {
              fluid {
                base64
                tracedSVG
                srcWebp
                srcSetWebp
                originalImg
                originalName
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
        heroBackground {
          altText
          sourceUrl
        }
        heroFeaturedImage {
          altText
          localFile {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        heroTitle
        highlights {
          highlightTitle
          highlightDescription
          highlightIcon {
            altText
            sourceUrl
          }
        }
        intro
        introButton {
          target
          title
          url
        }
        productHighlightsImage {
          altText
          localFile {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          altText
        }
        productHighlightsTitle
        technicalDetails {
          technicalDescription
          technicalTitle
        }
        technicalDetailsDescription
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
      }
    }
    subnav: wpMenu(name: {eq: "Platform Features"}) {
      id
      menuItems {
        nodes {
          parentId
          id
          label
          path
          url
        }
      }
      name
    }
  }
`

export default PlatformFeatureTemplate
