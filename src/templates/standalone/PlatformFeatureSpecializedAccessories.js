import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from "gatsby"
import Image from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'
import parse from "html-react-parser"
import Hero from "../../common/ui/Hero"

const PlatformFeatureSpecializedAccessories = ({ data: { page, subnav } }) => {
  const acf = page.acfTemplatePlaformFeature
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
              {template.cta && (
                <div className="border-bracket text-center">
                  {parse(template.ctaMessage)}
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

export default PlatformFeatureSpecializedAccessories
