import React from "react"
import { graphql } from "gatsby"
// import Image from "gatsby-image"
import parse from "html-react-parser"
import HeroHome from '../../components/HeroHome'
import CaseStudies from '../../components/CaseStudies'
import CarouselBootstrap from '../../components/CarouselBootstrap'
import Stat from "../../components/Stat"

const HomeTemplate = ({ data: { page } }) => {
  const acf = page.acfTemplateHome

  return (

    <>
      <HeroHome />
      <section className="bg-white">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-7 mx-lg-auto">
              <div className="text-center">
                {acf.introTitle && (
                  <h2 className="mb-4 font-weight-light">
                    {acf.introTitle}
                  </h2>
                )}
                {acf.introDescription && (
                  <div className="lead lead-lg text-gray mb-5">
                    {parse(acf.introDescription)}
                  </div>
                )}
                {acf.introLink && (
                  <a href={acf.introLink.url} className="btn btn-large btn-cyan">{acf.introLink.title}</a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <CaseStudies />
      <section className="bg-gradient-blue text-white folder-border folder-bottom">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <CarouselBootstrap slides={acf.carouselSlide} />
            </div>
          </div>
        </div>
      </section>

      

      <section className="bg-white folder-border folder-top">
        <div className="container">
          <div className="row">
            {acf.homeStat && acf.homeStat.map(stat => (
              <Stat  
                number={stat.homeStatValue}
                title={stat.homeStatLabel}
              />
            ))}
          </div>
        </div>
      </section>

      <hr className="hr-styled" />

      <section className="bg-white">
        <div className="container">
          <div className="row mb-4">
            <div className="col-12">
              <h3>Featured News</h3>
            </div>
          </div>
          <div className="row">
            {/* {news && news.map((newsItem) => (
              <div className="col-12 col-md-6 col-lg-3" key={newsItem.newsItem.id}>
                <Card title={newsItem.newsItem.title} />
              </div>
            ))} */}
          </div>
          <div className="row my-5">
            <div className="col-12">
              <div className="text-center">
                <a href="/news" className="btn btn-primary text-white">View All News</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* {!!page.content && (
        <section itemProp="articleBody">{parse(page.content)}</section>
      )} */}

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
          carouselSlideTitle
        }
        heroBackground {
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        heroDescription
        heroLink {
          target
          title
          url
        }
        heroTitle
        heroVideoEmbed
        heroVideoLabel
        homeStat {
          homeStatLabel
          homeStatValue
        }
        introDescription
        introLink {
          target
          title
          url
        }
        introTitle
      }
    }
  }
`

export default HomeTemplate