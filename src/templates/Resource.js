import React from "react"
import { graphql } from "gatsby"
import parse from "html-react-parser"
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

export const postQuery = graphql`query ResourceById($id: String!, $previousPostId: String, $nextPostId: String) {
  post: wpResource(id: {eq: $id}) {
    id
    title
    uri
    slug
    content
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
  previous: wpPost(id: {eq: $previousPostId}) {
    uri
    title
  }
  next: wpPost(id: {eq: $nextPostId}) {
    uri
    title
  }
}
`

export default ResourceTemplate
