import React from "react"
import { graphql } from "gatsby"
// import Image from "gatsby-image"
import parse from "html-react-parser"
import Hero from '../../common/ui/Hero'
import CaseStudies from '../../components/CaseStudies'
import CarouselOffset from '../../common/ui/carousel/CarouselOffset'
import Stats from '../../components/Stats'
import FeaturedNews from '../../components/FeaturedNews'

const HomeTemplate = ({ data: { page } }) => {
  const acf = page.acfTemplateHome
  const hero = page.acfHero
  const stats = page.acfStats.statistics

  return (
    <>
      <Hero hero={hero} />

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

      <Stats stats={stats} />

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
      ...PageHero
      ...PageStats
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