import React from "react"
import { graphql } from "gatsby"
import parse from "html-react-parser"
import Hero from "../common/ui/hero/HeroDefault"


const WebinarTemplate = ({ data: { post } }) => {
  const acf = post.acfWebinar

  return (
    <>
      <Hero heroTitle={post.title} />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              {acf.videoEmbed && (
                <div className="responsive-iframe aspect-4x3">
                  <iframe src={acf.videoEmbed} title={post.title} />
                </div>
              )}
              {acf.label && (
                <h6>{acf.label}</h6>
              )}
              {!!post.content && (
                <div className="py-3">
                  { parse(post.content)}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export const webinarQuery = graphql`
  query WebinarById(
    # these variables are passed in via createPage.pageContext in gatsby-node.js
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    # selecting the current post by id
    post: wpWebinar(id: { eq: $id }) {
      id
      title
      uri
      slug
      content
      acfWebinar {
        label
        videoEmbed
        thumbnailImage {
          altText
          srcSet
          sourceUrl
          localFile {
            childImageSharp {
              fluid(maxWidth: 500, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
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

export default WebinarTemplate
