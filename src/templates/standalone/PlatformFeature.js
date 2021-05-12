import React, { useState } from 'react'
// import PropTypes from 'prop-types'
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { BgImage } from 'gbimage-bridge'
import parse from "html-react-parser"
import SEO from "../../containers/SEO"
import Hero from "../../common/ui/Hero"
import FooterCTAs from '../../common/ui/FooterCTAs'
import Highlight from '../../components/Highlight'
import Layout from '../../containers/Layout'

const PlatformFeatureTemplate = ({ data: { page, subnav } }) => {
  const {
    ctaMessage,
    ctaButton,
    technicalDetailsHeading,
    technicalDetailsDescription,
    featureDownloads,
    feature1Description,
    feature1Link,
    feature1Image,
    feature2Description,
    feature2Link,
    feature2Image,
    featureLinks,
    highlights,
    productHighlightsImage
  } = page.acfTemplatePlaformFeature
  const productHighlightsImageData = productHighlightsImage?.localFile?.childImageSharp?.gatsbyImageData
  const productsHighlightsImageAlt = productHighlightsImage?.altText || ``
  const feature1ImageData = feature1Image?.localFile?.childImageSharp?.gatsbyImageData
  const feature2ImageData = feature2Image?.localFile?.childImageSharp?.gatsbyImageData
  const hero = page.acfHero
  const nav = subnav.menuItems.nodes
  const { cta } = page.acfFooterCTAs


  return (
    <Layout>
      <SEO pageSEO={page.seo} />
      <Hero
        className=""
        hero={hero}
        nav={nav}
      />

      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              {ctaMessage && (
                <div className="border-bracket text-center p-3">
                  <h4><strong>{ctaMessage}</strong></h4>
                </div>
              )}
              {ctaButton && (
                <div className="text-center mt-2">
                  <a href={ctaButton.url} className="btn btn-secondary my-5" target={ctaButton.target}>{ctaButton.title}</a>
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
              {feature1Description && (
                parse(feature1Description)
              )}
              <hr className="hr-xs ml-0 border-green" />
              {feature1Link && (
                <a href={feature1Link.url} className="btn btn-secondary mt-3" target={feature1Link.target}>{feature1Link.title ? feature1Link.title : 'Learn More'}</a>
              )}
            </div>
            <div className="col-lg-6">
              {feature1ImageData &&
                <BgImage
                  className="bg-image aspect-1x1 img-offset-top"
                  image={feature1ImageData}
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
              {feature2ImageData &&
                <BgImage
                  className="bg-image aspect-1x1"
                  image={feature2ImageData}
                />
              }
            </div>
            <div className="col-lg-6">
              <div className="p-4">
                {feature2Description && parse(feature2Description)}
                <hr className="hr-sm ml-0" />
                {feature2Link && (
                  <a
                    href={feature2Link.url}
                    className="btn btn-primary mt-3"
                    target={feature2Link.target}
                  >
                    {feature2Link.title ? feature2Link.title : 'Learn More'}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            {featureDownloads && featureDownloads.map((download, i) => (
              <div className="col-12 col-xl-4" key={`download_${i}`}>
                <a href={download?.featureDownload?.localFile?.publicURL} className="btn btn-outline-secondary text-dark btn-block mb-3">{download?.downloadLabel}</a>
              </div>
            ))}
            {featureLinks && featureLinks.map((link, i) => (
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
              {technicalDetailsHeading && <h3 className="text-primary">{technicalDetailsHeading}</h3>}
            </div>
            <div className="col-lg-7">
              <div className="border-left border-dark pl-4">
                {technicalDetailsDescription && parse(technicalDetailsDescription)}
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
            <div className="col-12 col-xl-6">
              <div className="row justify-content-center">
                {highlights && highlights.map((highlight, i) => (
                  <Highlight highlight={highlight} key={`highlight_${i}`} />
                ))}
              </div>
            </div>
            <div className="col-12 col-xl-6">
              {productHighlightsImage && (
                <GatsbyImage
                  image={productHighlightsImageData}
                  alt={productsHighlightsImageAlt} />
              )}
            </div>
          </div>
        </div>
      </section>

      <FooterCTAs featured={cta} />
    </Layout>
  );
}

PlatformFeatureTemplate.propTypes = {

}

export const pageQuery = graphql`query PlatformFeatureTemplateQuery($id: String!) {
  page: wpPage(id: {eq: $id}) {
    ...PageDetails
    ...PageHero
    ...FooterCTAs
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
            gatsbyImageData(layout: FULL_WIDTH, formats: [AUTO])
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
            gatsbyImageData(layout: FULL_WIDTH, formats: [AUTO])
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
            gatsbyImageData(width: 400, quality: 100, layout: CONSTRAINED, formats: [AUTO])
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
        path
      }
    }
    name
  }
}
`

export default PlatformFeatureTemplate
