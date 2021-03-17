import React from "react"
import { graphql } from "gatsby"
import parse from "html-react-parser"
import Hero from "../common/ui/Hero"


const FormConfirmationTemplate = ({ data: { post } }) => {
  const acf = post.acfPostTypeFormConfirmation
  const hero = {
    heroHeading: post.title
  }
  return (
    <>
      <Hero hero={hero} />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              {!!post.content && (
                <div className="py-3">
                  { parse(post.content)}
                </div>
              )}
              {acf.videoEmbed && (
                <div className="responsive-iframe aspect-4x3">
                  <iframe src={acf.videoEmbed} title={post.title} />
                </div>
              )}

              {acf.document && (
                <p className="mt-5">
                  <div className="responsive-iframe aspect-4x3 mb-5">
                    <iframe src={acf.document.localFile.url} title={post.title} />
                  </div>
                  <a href={acf.document.localFile.url} target="_blank" rel="noreferrer" className="btn btn-primary text-white">Download {post.title}</a>
                </p>
              )}
              
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export const webinarQuery = graphql`
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
      acfPostTypeFormConfirmation {
        document {
          uri
          localFile {
            url
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
