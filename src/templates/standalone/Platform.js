import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import parse from "html-react-parser"
import Hero from "../../common/ui/Hero"
import Stat from "../../components/Stat"
import CarouselBootstrap from "../../components/CarouselBootstrap"


const PlatformTemplate = ({ data: { page } }) => {
  const featuredImage = {
    fluid: page.featuredImage?.node?.localFile?.childImageSharp?.fluid,
    alt: page.featuredImage?.node?.alt || ``,
  }
  const acf = page.acfTemplatePlatform
  console.log(acf)
  const heroData = {
    heroTitle: acf?.heroTitle,
    heroSubtitle: acf?.heroSubtitle,
    herobackgroundImage: acf?.localFile?.childImageSharp?.fluid,
    heroDescription: acf?.heroDescription
  }

  return (
    <>
      <Hero
        heroTitle={heroData.heroTitle}
        heroSubtitle={heroData.heroSubtitle}
        subnav="false"
        logo="false"
        heroBackgroundImage={heroData.heroBackgroundImage}
        heroFeaturedImage={heroData.heroFeaturedImage}
        heroDescription={heroData.heroDescription}
      />
      <section>
        <div className="container">
          <div className="row">
            {acf.stats && acf.stats.map(stat =>
              <Stat 
                number={stat.number}
                descriptor={stat.numberDescriptor}
                title={stat.title}
                description={stat.numberCaption}
              />
            )}
          </div>
        </div>
      </section>
      <div className="container">
        <hr className="hr-styled" />
      </div>
      <section>
        <div className="container">
          <div className="row mb-4">
            {acf.platformDescription && (
              <div className="col-lg-6">
                <div className="text-primary h3">
                  {parse(acf.platformDescription)}
                </div>
              </div>
            )}
            {acf.platformVideo && (
              <div className="col-lg-6">
                <div className="responsive-iframe aspect-16x9">
                  <iframe src={acf.platformVideo} frameBorder="0" />
                </div>
              </div>
            )}
            
          </div>
          <hr className="hr-styled" />
          <div className="row mt-5">
            <div className="col-12">
              {acf.platformCapabilitiesTitle && (
                <h2 className="text-uppercase">{acf.platformCapabilitiesTitle}</h2>
              )}
              {acf.platformCapabilities && parse(acf.platformCapabilities)}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gradient-blue text-white folder-border folder-bottom">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <CarouselBootstrap slides={acf.carouselSlide}/>
            </div>
          </div>
          <hr className="hr-white" />
          <div className="row">
            <div className="col-lg-4 border-left border-primary">
            
                <h3>{acf.carouselFooterTitle && acf.carouselFooterTitle}</h3>
              
            </div>
            <div className="col-lg-4 border-left border-primary">
              {acf.carouselFooterDescription && (
                parse(acf.carouselFooterDescription)
              )}
            </div>
            <div className="col-lg-4 border-left border-primary">
              {acf.carouselFooterChecklist.checklistItem && (
                <ul className="checklist">
                  {acf.carouselFooterChecklist.checklistItem.map( item =>
                    <li>{item.checklistItem}</li>
                  )}
                </ul>
              )}
            </div>
          </div>
        </div>
      </section>

      {!!page.content && (
        <section itemProp="articleBody">{parse(page.content)}</section>
      )}

    </>
  )
}

export const pageQuery = graphql`
  query PlatformTemplateQuery($id: String!) {
    # selecting the current page by id
    page: wpPage(id: { eq: $id }) {
      ...PageDetails
      acfTemplatePlatform {
        carouselFooterChecklist {
          checklistItem {
            checklistItem
          }
        }
        carouselFooterDescription
        carouselFooterTitle
        carouselSlide {
          carouselSlideDescription
          carouselSlideFeaturedImage {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1000, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          carouselSlideLink {
            target
            title
            url
          }
          carouselSlideTitle
        }
        heroBackground {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        heroDescription
        heroFeaturedImage {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        heroTitle
        platformCapabilities
        platformCapabilitiesTitle
        platformDescription
        platformVideo
        stats {
          number
          numberCaption
          numberDescriptor
          title
        }
      }
    }
  }
`

export default PlatformTemplate