import React from "react"
import { graphql } from "gatsby"
// import Image from "gatsby-image"
import parse from "html-react-parser"
import Hero from '../../common/ui/hero/HeroHome'
import CaseStudies from '../../components/CaseStudies'
import CarouselOffset from '../../common/ui/carousel/CarouselOffset'
import Stat from '../../common/ui/Stat'

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
                  <a href={acf.introLink.url} className="btn btn-outline-primary mt-5">{acf.introLink.title}</a>
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
                <a href="/news" className="btn btn-outline-primary text-dark">View All News</a>
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
            publicURL
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