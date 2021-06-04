import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from "gatsby"
import { BgImage } from 'gbimage-bridge'
import Hero from "../common/ui/Hero"
import NextPrevMenu from '../common/ui/menus/NextPrevMenu'
import parse from "html-react-parser"
import SEO from "../containers/SEO"
import CTA from '../common/ui/CTA'
import FooterCTAs from '../common/ui/FooterCTAs'
import Layout from '../containers/Layout'

const CaseStudy = ({ data: { previous, next, post } }) => {
  const acf = post.acfPostTypeUseCase
  const article = {
    title: acf.articleTitle,
    content: acf.articleContent,
    link: acf.articleLink,
    linkText: acf.articleLinkText,
    image: acf.articleImage?.localFile?.childImageSharp?.gatsbyImageData
  }

  const pageCTA = post.acfCta

  const { cta } = post.acfFooterCTAs
  const hero = {
    heroHeading: "Use Case",
    heroBackgroundImage: post.acfHero.heroBackgroundImage ? post.acfHero.heroBackgroundImage : false,
    heroFeaturedImage: post.acfHero.heroFeaturedImage ? post.acfHero.heroFeaturedImage : false
  }

  return (
    <Layout>
      <SEO pageSEO={post.seo} />
      <Hero hero={hero} />
      <section className="pb-3">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-3">
              <h2>{post.title}</h2>
            </div>
          </div>
          <div className="row">
            {acf.solution && (
              <div className="col-lg-4">
                <div className="bg-orange p-2">
                  <h6 className="mb-0 text-white">Situation</h6>
                </div>
                <div className="border-left border-dark p-3">
                  {parse(acf.situation)}
                </div>
              </div>
            )}
            {acf.situation && (
              <div className="col-lg-4">
                <div className="bg-orange p-2">
                  <h6 className="mb-0 text-white">Solution</h6>
                </div>
                <div className="border-left border-dark p-3">
                  {parse(acf.solution)}
                </div>
              </div>
            )}
            {acf.results && (
              <div className="col-lg-4">
                <div className="bg-orange p-2">
                  <h6 className="mb-0 text-white">Results</h6>
                </div>
                <div className="border-left border-dark p-3">
                  {parse(acf.results)}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {article.title && (
        <section className="bg-primary text-white bg-offset-right mt-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <p className="lead">{article.title && article.title}</p>
                {article.content && parse(article.content)}
                {article.link && (
                  <a href={article.link.url} target={article.link.target} className="btn btn-border border-white text-white">{article.link.title ? article.link.title : 'Full Article'}</a>
                )}
              </div>
              {article.image && (
                <div className="col-lg-5">
                  <BgImage
                    className="bg-image aspect-1x1 img-offset-top"
                    image={article.image}
                  />
                </div>
              )}
            </div>
          </div>
        </section>
      )}
      {!!post.content && (
        <section itemProp="articleBody">
          <div className="container">
            <div className="row">
              <div className="col-12">
                {parse(post.content)}
              </div>
            </div>
          </div>
        </section>
      )}
      {previous || next && (
        <NextPrevMenu previous={previous} next={next} />
      )}

      {pageCTA && (
        <CTA cta={pageCTA} />
      )}
      {cta && (
        <FooterCTAs featured={cta} />
      )}

    </Layout>
  )
}

CaseStudy.propTypes = {
  post: PropTypes.instanceOf(Object),
  next: PropTypes.string,
  previous: PropTypes.string,
}
export const pageQuery = graphql`
  query CaseStudyById(
    # these variables are passed in via createPage.pageContext in gatsby-node.js
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    # selecting the current post by id
    post: wpCaseStudy(id: { eq: $id }) {
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
      acfCta {
        ctaDescription
        link {
          target
          title
          url
        }
      }
      acfFooterCTAs {
        cta {
          ctaTitle
          ctaLink {
            url
            title
            target
          }
          ctaFeaturedImage {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 500, quality: 100, layout: CONSTRAINED, formats: [JPG])
              }
            }
          }
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
              gatsbyImageData(quality: 100, layout: FULL_WIDTH, formats: [JPG])
            }
          }
        }
      }
      id
      title
      uri
      slug
      acfPostTypeUseCase {
        articleContent
        articleLink {
          target
          url
          title
        }
        articleTitle
        articleImage {
          localFile {
            publicURL
            childImageSharp {
              gatsbyImageData(quality: 100, layout: FULL_WIDTH)
            }
          }
        }
        solution
        situation
        results
        summaryDescription
      }
      content
    }
    # this gets us the previous post by id (if it exists)
    previous: wpPost(id: { eq: $previousPostId }) {
      uri
      title
    }
    # this gets us the next post by id (if it exists)
    next: wpPost(id: { eq: $nextPostId }) {
      uri
      title
    }
  }
`

export default CaseStudy
