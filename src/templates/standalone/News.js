/* eslint-disable import/no-named-as-default-member */
import React from "react"
import { Link, graphql } from "gatsby"
import parse from "html-react-parser"
import Hero from "../../common/ui/Hero"
import FooterCTAs from '../../common/ui/FooterCTAs'
import Carousel from "../../common/ui/carousel/Carousel"
import { useNews } from "../../common/hooks/useNews"
import { useCaseStudies } from "../../common/hooks/useCaseStudies"
import Filters from '../../common/ui/Filters'

const NewsTemplate = ({ data: { page } }) => {
  const hero = {
    heroHeading: page.title
  }
  const { pressReleases, events, news } = useNews()
  const { acfFeaturedPosts: { featured } } = page
  const { featuredCaseStudies } = useCaseStudies()
  const featuredPosts = featured.map(item => item.featuredPost)
  const { cta } = page.acfFooterCTAs

  return (
    <>
      <Hero hero={hero} />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Featured News</h2>
            </div>
          </div>
        </div>
      </section>


      <section className="overflow-hidden pt-0">
        <div className="container-fluid">
          <Carousel
            posts={featuredPosts}
            config={{
              dots: true,
              showBracket: true
            }}
          />
        </div>
      </section>



      <section id="press-releases">
        <hr className="hr-styled" />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Filters />
            </div>
          </div>
        </div>
        <hr className="hr-styled caret-left" />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="mt-5">
                Press Releases
                <Link to="/press-releases" className="float-right btn btn-outline-primary">View All</Link>
              </h3>
            </div>
          </div>
          <Carousel
            posts={pressReleases.slice(0, 4)}
            config={{
              dots: false
            }}
          />
        </div>
      </section>

      <section id="news">
        <hr className="hr-styled caret-left" />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="mt-5">
                In The News
                <Link to="/in-the-news" className="float-right btn btn-outline-primary">View All</Link>
              </h3>
            </div>
          </div>
          <Carousel
            posts={news.slice(0, 4)}
            config={{
              dots: false
            }}
          />
        </div>
      </section>

      <section id="events">
        <hr className="hr-styled caret-left" />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="mt-5">
                Events
                <Link to="/events" className="float-right btn btn-outline-primary">View All</Link>
              </h3>
            </div>
          </div>
          <Carousel
            posts={events.slice(0, 4)}
            config={{
              dots: false

            }}
          />
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              {!!page.content && (
                <article className="py-5">{parse(page.content)}</article>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden">
        <Carousel
          posts={featuredCaseStudies}
          config={{
            dots: true
          }}
        />
      </section>

      <FooterCTAs featured={cta} />
    </>
  )
}

export const pageQuery = graphql`
  query NewsTemplateQuery($id: String!) {
    # selecting the current page by id
    page: wpPage(id: { eq: $id }) {
      ...PageDetails
      ...FooterCTAs
      acfFeaturedPosts {
        featured {
          featuredPost {
            ... on WpPost {
              ...PostSummary
            }
          }
        }
      }
    }
  }
`

export default NewsTemplate