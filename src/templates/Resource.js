import React from "react"
import { graphql } from "gatsby"
import parse from "html-react-parser"
import SEO from "../containers/SEO"
import { embedUrl } from "../common/utils/helpers"
import Hero from "../common/ui/Hero"
import Layout from "../containers/Layout"


const ResourceTemplate = ({ data: { post } }) => {
  const acf = post.acfPostTypeResource
  const hero = {
    heroHeading: post.title,
    heroBackgroundImage: post.acfHero?.heroBackgroundImage ? post.acfHero?.heroBackgroundImage : false,
    heroFeaturedImage: post.acfHero?.heroFeaturedImage ? post.acfHero?.heroFeaturedImage : false
  }

  return (
    <Layout>
      <SEO pageSEO={post.seo} />
      <Hero hero={hero} />
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
      {acf.leftColumn && (
        <section>
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6">
                <div className="sticky-top">
                  {parse(acf.leftColumn)}
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="sticky-top">
                  {parse(acf.rightColumn)}
                </div>

              </div>
            </div>
          </div>
        </section>
      )}
      {acf.embed && (
        <section>
          <div className="container">
            <div className="row">
              <div className="col-12">
                {acf.embed && (
                  <div className="responsive-iframe aspect-4x3">
                    <iframe src={embedUrl(acf.embed)} title={post.title} />
                  </div>
                )}
                {acf.document && (
                  <div className="mt-5">
                    <div className="responsive-iframe aspect-4x3">
                      <iframe src={embedUrl(acf.document.localFile.publicURL)} title={post.title} />
                    </div>
                  </div>
                )}
                {acf.document && (
                  <div className="mt-5">
                    <a href={acf.document.localFile.publicURL} target="_blank" rel="noreferrer" className="btn btn-primary text-white">Download {post.title}</a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}
      {acf.document && (
        <section>
          <div className="container">
            <div className="row">
              <div className="col-12">
                {acf.document && (
                  <div className="mt-5">
                    <div className="responsive-iframe aspect-4x3">
                      <iframe src={embedUrl(acf.document.localFile.publicURL)} title={post.title} />
                    </div>
                  </div>
                )}
                {acf.document && (
                  <div className="mt-5">
                    <a href={acf.document.localFile.publicURL} target="_blank" rel="noreferrer" className="btn btn-primary text-white">Download {post.title}</a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

    </Layout>
  )
}

export const postQuery = graphql`
  query ResourceById(
    # these variables are passed in via createPage.pageContext in gatsby-node.js
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    # selecting the current post by id
    post: wpResource(id: { eq: $id }) {
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
              fluid(maxWidth: 1920, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      acfPostTypeResource {
        fieldGroupName
        embed
        document {
          localFile {
            publicURL
          }
        }
        leftColumn
        rightColumn
      }
    }
    # previous and next be able to be migrated to PostFields fragment not sure?
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

export default ResourceTemplate
