import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from "gatsby"
import Image from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'
import parse from "html-react-parser"
import Hero from "../../common/ui/Hero"

const PlatformFeatureSpecializedAccessories = ({ data: { page, subnav } }) => {
  const template = page.acfTemplatePlatformFeatureSpecialized
  const hero = page.acfHero
  const nav = subnav.menuItems.nodes
  const accessories = template.accessories
  // const {featureLinks} = template.links
  // const {featureDocuments} = template.documents
  console.log('docs and links', template.links, template.documents)
  return (
    <>
      <Hero
        className=""
        hero={hero}
        nav={nav}
      />

      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              {template.ctaMessage && (
                <div className="border-bracket text-center">
                  <h3>{parse(template.ctaMessage)}</h3>
                </div>
              )}
              {template.ctaButton && (
                <div className="text-center mt-4">
                  <a href={template.ctaButton.url} className="btn btn-secondary my-5" target={template.ctaButton.target}>{template.ctaButton.title}</a>
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
      <section className="pb-0">
        <div className="container">
          <div className="row">
            {template.links && template.links.map((link, i) => (
              <div className="col-12 col-xl-4" key={`link_${i}`}>
                <a href={link?.link?.url} className="btn btn-outline-secondary text-dark btn-block mb-3">{link?.link?.title}</a>
              </div>
            ))}
            {template.documents && template.documents.map((document, i) => (
              <div className="col-12 col-xl-4" key={`download_${i}`}>
                <a href={document?.document?.localFile.url} className="btn btn-outline-secondary text-dark btn-block mb-3">{document?.documentLabel}</a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            {accessories && accessories.map(accessory => (
              <div className="col-lg-6 mb-5">
                <div className="d-flex flex-column justify-content-between h-100">
                  <div>
                    <hr className="hr-styled" />
                    <h3 className="mt-5">{accessory.title && accessory.title}</h3>
                    <p>{accessory.description && accessory.description}</p>
                  </div>
                  <div>
                    {accessory.featuredImage && (
                      <Image
                        fluid={accessory.featuredImage.localFile.childImageSharp.fluid}
                        alt={accessory.featuredImage.altText}
                        className="mt-4 mb-3"
                      />
                    )}

                    {accessory.specsDownload && (
                      <div className="text-center">
                        <a href={accessory.specsDownload.localFile.url && accessory.specsDownload.localFile.url} className="btn btn-outline-primary text-dark">View Specs</a>
                      </div>
                    )}
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

PlatformFeatureSpecializedAccessories.propTypes = {

}

export const pageQuery = graphql`
  query PlatformFeatureSpecializedAccessoriesTemplateQuery($id: String!) {
    # selecting the current page by id
    page: wpPage(id: { eq: $id }) {
      ...PageDetails
      ...PageHero
      acfTemplatePlatformFeatureSpecialized {
        accessories {
          description
          title
          specsDownload {
            localFile {
              publicURL
            }
          }
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
        }
        feature1Description
        feature1Image {
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
        feature1Link {
          title
          target
          url
        }
        ctaButton {
          target
          title
          url
        }
        ctaMessage
        documents {
          documentLabel
          document {
            localFile {
              publicURL
              url
            }
          }
        }
        links {
          link {
            target
            title
            url
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

export default PlatformFeatureSpecializedAccessories
