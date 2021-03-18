import React from "react"
import { graphql } from "gatsby"
import parse from "html-react-parser"
import Hero from "../common/ui/Hero"


const FormConfirmationTemplate = ({ data: { post } }) => {
  const acf = post.acfPostTypeFormConfirmation
  const hero = {
    heroHeading: post.title
  }
  // eslint-disable-next-line no-console
  return (
    <>
      <Hero hero={hero} />
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              {!!post.content && (
                <div className="text-center mb-5">
                  <div className="border-bracket">
                    <div className="py-3">
                      { parse(post.content)}
                    </div>
                  </div>
                </div>
              )}
              {acf.videoEmbed && (
                <>
                  <hr className="hr-styled my-5" />
                  <div className="responsive-iframe aspect-4x3">
                    <iframe src={acf.videoEmbed} title={post.title} />
                  </div>
                </>
              )}
              {acf.document && (
                <>
                  <hr className="hr-styled" />
                  <p className="mt-5">
                    <div className="responsive-iframe aspect-4x3 mb-5">
                      <iframe src={acf.document.localFile.url} title={post.title} />
                    </div>
                    <a href={acf.document.localFile.url} target="_blank" rel="noreferrer" className="btn btn-primary text-white">Download {post.title}</a>
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
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
      acfPostTypeFormConfirmation {
        document {
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
