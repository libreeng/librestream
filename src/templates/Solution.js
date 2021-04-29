import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from "gatsby"
import parse from "html-react-parser"
import SEO from "../containers/SEO"
import Hero from "../common/ui/Hero"
import Intro from "../common/ui/Intro"
import NextPrevMenu from '../common/ui/menus/NextPrevMenu'
import Stats from '../components/Stats'
import Layout from '../containers/Layout'

const Solution = ({ data: { previous, next, post } }) => {
  const stats = post.acfStats.statistics
  const hero = {
    heroHeading: "Industry Solution",
    heroBackgroundImage: post.acfHero?.heroBackgroundImage ? post.acfHero?.heroBackgroundImage : false,
    heroFeaturedImage: post.acfHero?.heroFeaturedImage ? post.acfHero?.heroFeaturedImage : false
  }
  const intro = post.acfIntro
  const featuredImage = intro.introFeaturedImage?.localFile?.publicURL
  const acf = post.acfPostTypeSolution
  return (
    <Layout>
      <SEO pageSEO={post.seo} />
      <Hero hero={hero} />
      <section className="pb-0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>{post.title}</h2>
            </div>
          </div>
          <hr />
        </div>
      </section>
      <Intro intro={intro} />
      <section className="bg-dark text-white bg-offset-right mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              {!!post.content && parse(post.content)}
              {acf.solutionLink && (
                <a href={acf.solutionLink.url} target={acf.solutionLink.target} className="btn btn-secondary text-dark">{acf.solutionLink.title ? acf.solutionLink.title : 'Learn More'}</a>
              )}
            </div>

            <div className="col-lg-5">
              {featuredImage && (
                <div
                  style={{ backgroundImage: `url(${intro.introFeaturedImage?.localFile?.publicURL})` }}
                  className="bg-image aspect-1x1 img-offset-top"
                />
              )}
            </div>
          </div>
        </div>
      </section>
      {stats && (
        <Stats stats={stats} />
      )}
      <NextPrevMenu previous={previous} next={next} />
    </Layout>
  )
}

Solution.propTypes = {
  post: PropTypes.instanceOf(Object),
  next: PropTypes.string,
  previous: PropTypes.string,
}

export const pageQuery = graphql`query SolutionById($id: String!, $previousPostId: String, $nextPostId: String) {
  post: wpSolution(id: {eq: $id}) {
    ...SolutionIntro
    ...SolutionStats
    id
    title
    uri
    slug
    content
    seo {
      title
      canonical
      metaDesc
      metaRobotsNofollow
      metaRobotsNoindex
      opengraphSiteName
      opengraphTitle
      opengraphUrl
      opengraphType
      opengraphModifiedTime
      opengraphImage {
        sourceUrl
      }
      twitterTitle
      twitterDescription
      twitterImage {
        sourceUrl
      }
    }
    acfHero {
      heroFeaturedImage {
        altText
        localFile {
          publicURL
      }
    }
    heroBackgroundImage {
      altText
      localFile {
        publicURL
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        }
      }
    }
  }
  acfPostTypeSolution {
    solutionLink {
      target
      title
      url
    }
  }
}
previous: wpPost(id: { eq: $previousPostId }) {
  uri
  title
}
next: wpPost(id: { eq: $nextPostId }) {
  uri
  title
}
}
`

export default Solution
