import React from "react"
import { graphql } from "gatsby"
import parse from "html-react-parser"
import { embedUrl } from "../common/utils/helpers"
import SEO from "../containers/SEO"
import Hero from "../common/ui/Hero"
import Layout from "../containers/Layout"


const FormConfirmationTemplate = ({ data: { post } }) => {
  const acf = post.acfPostTypeFormConfirmation
  const hero = {
    heroHeading: post.title
  }
  // eslint-disable-next-line no-console
  return (
    <Layout>
      <SEO pageSEO={post.seo} />
      <Hero hero={hero} />
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              {!!post.content && (
                <div className="text-center mb-5">
                  <div className="border-bracket">
                    <div className="py-3">
                      {parse(post.content)}
                    </div>
                  </div>
                </div>
              )}
              {acf.videoEmbed && (
                <>
                  <hr className="hr-styled my-5" />
                  <div className="responsive-iframe aspect-4x3">
                    <iframe src={embedUrl(acf.videoEmbed)} title={post.title} />
                  </div>
                </>
              )}
              {acf.document && (
                <>
                  <hr className="hr-styled" />
                  <div className="responsive-iframe aspect-letter my-5">
                    <iframe src={embedUrl(acf.document.localFile?.publicURL)} title={post.title} />
                  </div>
                  <div className="text-center">
                    <a href={acf.document.localFile?.publicURL} title="Download" target="_blank" rel="noreferrer" className="btn btn-primary mx-auto text-white">Download</a>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const formConfirmationQuery = graphql`
  query FormConfirmationById(
    # these variables are passed in via createPage.pageContext in gatsby-node.js
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    # selecting the current post by id
    post: wpFormConfirmation(id: { eq: $id }) {
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
      acfPostTypeFormConfirmation {
        document {
          link
          localFile {
            publicURL
          }
        }
        videoEmbed
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

export default FormConfirmationTemplate
