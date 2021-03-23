import React from "react"
import { graphql } from "gatsby"
import parse from "html-react-parser"
import Hero from "../../common/ui/Hero"
import Carousel from "../../common/ui/carousel/Carousel"
import { useNews } from "../../common/hooks/useNews"
import { useCaseStudies } from "../../common/hooks/useCaseStudies"

const NewsTemplate = ({ data: { page } }) => {
  const hero = {
    heroHeading: page.title
  }
  const { pressReleases, events, news } = useNews()
  const { acfFeaturedPosts: { featured } } = page
  const { featuredCaseStudies } = useCaseStudies()
  const featuredPosts = featured.map(item => item.featuredPost)


  return (
    <>
      <Hero hero={hero} />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p className="float-right mr-5">{page.date}</p>
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
              <h3 className="mt-5">Press Releases</h3>
            </div>
          </div>
          <Carousel
            posts={pressReleases}
            config={{
              dots: false
            }}
          />
        </div>
      </section>

      <section id="news">
        <hr className="hr-styled" />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="mt-5">In The News</h3>
            </div>
          </div>
          <Carousel
            posts={news}
            config={{
              dots: false
            }}
          />
        </div>
      </section>

      <section id="events">
        <hr className="hr-styled" />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="mt-5">Events</h3>
            </div>
          </div>
          <Carousel
            posts={events}
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

      <section>
        <Carousel
          posts={featuredCaseStudies}
          config={{
            dots: true
          }}
        />
      </section>

    </>
  )
}

export const pageQuery = graphql`
  query NewsTemplateQuery($id: String!) {
    # selecting the current page by id
    page: wpPage(id: { eq: $id }) {
      ...PageDetails
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