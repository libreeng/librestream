import React from "react"
import { graphql } from "gatsby"
import parse from "html-react-parser"
import { BgImage } from "gbimage-bridge"
import SEO from "../../containers/SEO"
import Hero from '../../common/ui/Hero'
import FooterCTAs from '../../common/ui/FooterCTAs'
import Carousel from '../../common/ui/carousel/Carousel'
import Stats from '../../components/Stats'
import { useFeaturedNews } from "../../common/hooks/useFeaturedNews"
import { useCaseStudies } from "../../common/hooks/useCaseStudies"
import Layout from "../../containers/Layout"


const HomeTemplate = ({ data: { page } }) => {
  const acf = page.acfTemplateHome
  const hero = { ...page.acfHero, heroGallery: acf.galleryImages }
  const stats = page.acfStats.statistics
  const { featuredNews } = useFeaturedNews()
  const { featuredCaseStudies } = useCaseStudies()
  const { cta } = page.acfFooterCTAs
  const slide = acf.carouselSlide[0]

  return (
    <Layout>
      <SEO pageSEO={page.seo} />
     
      <section>
        <div className="container">
          <div className="row mb-4">
            <div className="col-12">
              <h3>Customer Use Cases</h3>
            </div>
          </div>
          <Carousel
            posts={featuredCaseStudies}
            config={{
              dots: true
            }}
          />
          <div className="row mt-5">
            <div className="col-12">
              <div className="text-center">
                <a href="/use-cases" className="btn btn-lg btn-outline-secondary text-dark">View All Use Cases </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-blue text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              {slide.carouselSlideFeaturedImage && (
                <BgImage
                  className="bg-image aspect-4x3"
                  image={slide.carouselSlideFeaturedImage?.localFile?.childImageSharp?.gatsbyImageData}
                />
              )}
            </div>
            <div className="col-12 col-lg-6">
              <h2 className="h1 mt-3">{slide.carouselSlideTitle && slide.carouselSlideTitle}</h2>
              <hr className="hr-xs border-green ml-0" />
              <p>{slide.carouselSlideDescription && slide.carouselSlideDescription}</p>
              {slide.carouselSlideLink && (
                <a href={slide.carouselSlideLink.url} target={slide.carouselSlideLink.target} className="btn btn-secondary btn-lg mt-4" title="Learn more about customer success stories">{slide.carouselSlideLink.title}</a>
              )}
            </div>
          </div>
        </div>
      </section>
      <Stats stats={stats} />

      <hr className="hr-styled caret-left" />

      <section className="overflow-hidden">
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
                <a href="/news" className="btn btn-outline-secondary btn-lg text-dark">View All News</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterCTAs featured={cta} />
    </Layout>
  );
}

export const pageQuery = graphql`query HomeTemplateQuery($id: String!) {
  page: wpPage(id: {eq: $id}) {
    ...PageDetails
    ...PageHero
    ...PageStats
    ...FooterCTAs
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
            publicURL
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, formats: [JPG])
            }
          }
        }
      }
      galleryImages {
        galleryImage {
          localFile {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: FULL_WIDTH, formats: [JPG])
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