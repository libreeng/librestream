import React from "react"
import { graphql } from "gatsby"
// import Image from "gatsby-image"
import parse from "html-react-parser"
import Hero from '../../common/ui/Hero'
import CarouselOffset from '../../common/ui/carousel/CarouselOffset'
import Carousel from '../../common/ui/carousel/Carousel'
import Stats from '../../components/Stats'
import { useFeaturedNews } from "../../common/hooks/useFeaturedNews"
import { useCaseStudies } from "../../common/hooks/useCaseStudies"

const HomeTemplate = ({ data: { page } }) => {
  const acf = page.acfTemplateHome
  const hero = page.acfHero
  const stats = page.acfStats.statistics
  const { featuredNews } = useFeaturedNews()
  const { featuredCaseStudies } = useCaseStudies()

  return (
    <>
      <Hero hero={hero} className="home-hero" />

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

      <section>
        <Carousel
          posts={featuredCaseStudies}
          config={{
            dots: true
          }}
        />
      </section>

      <CarouselOffset slides={acf.carouselSlide} interval={10000} />

      <Stats stats={stats} />

      <hr className="hr-styled" />

      <section>
        <div className="container">
          <div className="row mb-4">
            <div className="col-12">
              <h3>Featured News</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Carousel
                posts={featuredNews}
                config={{
                  dots: true
                }}
              />
            </div>
          </div>
          <div className="row my-5">
            <div className="col-12">
              <div className="text-center">
                <a href="/news" className="btn btn-outline-secondary text-dark">View All News</a>
              </div>
            </div>
          </div>
        </div>
      </section>

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