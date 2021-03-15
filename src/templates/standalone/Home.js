import React from "react"
import { graphql } from "gatsby"
// import Image from "gatsby-image"
import parse from "html-react-parser"
import Hero from '../../common/ui/hero/HeroHome'
import CaseStudies from '../../components/CaseStudies'
import CarouselOffset from '../../common/ui/carousel/CarouselOffset'
import Stat from '../../common/ui/Stat'
import FeaturedNews from '../../components/FeaturedNews'

const HomeTemplate = ({ data: { page } }) => {
  const acf = page.acfTemplateHome

  return (

    <>
      <Hero
        heroTitle={parse(acf.heroTitle)}
        heroDescription={acf.heroDescription}
        heroBackground={acf.heroBackground.localFile.publicURL}
        heroCta={acf.heroLink}
      />

      <section id="intro" className="bg-white">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-lg-auto">
              <div className="text-center">
                {acf.introTitle && (
                  <h1>
                    {acf.introTitle}
                  </h1>
                )}
                {acf.introDescription && (
                  <div className="display-4 text-gray my-4">
                    {parse(acf.introDescription)}
                  </div>
                )}
                {acf.introLink && (
                  <a href={acf.introLink.url} className="btn btn-outline-secondary text-dark mt-5">{acf.introLink.title}</a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CaseStudies heading={' '} />

      <CarouselOffset slides={acf.carouselSlide} interval={10000} />

      {/* TODO: Refactor Stats component to include all html markup */}
      <section className="bg-white folder-border folder-top">
        <div className="container">
          <div className="row">
            {acf.homeStat && acf.homeStat.map((stat, i) => (
              <Stat
                key={`home_stat_${i}`}
                number={stat.homeStatValue}
                title={stat.homeStatLabel}
              />
            ))}
          </div>
        </div>
      </section>

      <hr className="hr-styled" />

      <FeaturedNews heading='Featured News' />

    </>
  )
}

export const pageQuery = graphql`
  query HomeTemplateQuery($id: String!) {
    # selecting the current page by id
    page: wpPage(id: { eq: $id }) {
      ...PageDetails
      acfTemplateHome {
        carouselSlide {
          carouselSlideTitle
          carouselSlideDescription
          carouselSlideLink {
            title
            target
            url
          }
          carouselSlideFeaturedImage {
            localFile {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        heroTitle
        heroDescription
        heroBackground {
          localFile {
            publicURL
          }
        }
        heroLink {
          target
          title
          url
        }
        heroVideoEmbed
        heroVideoLabel
        homeStat {
          homeStatLabel
          homeStatValue
        }
        introTitle
        introDescription
        introLink {
          target
          title
          url
        }

      }
    }
  }
`

export default HomeTemplate