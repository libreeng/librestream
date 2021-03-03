import React from "react"
import { Link, graphql } from "gatsby"
import parse from "html-react-parser"
import Hero from '../common/ui/Hero'


const VideoTemplate = ({ data: { previous, next, post } }) => {
 
  const acf = post.acfPostTypeVideo
  console.log('acf', acf)
  console.log(post)

  return (
    <>
      <Hero 
        heroTitle={post.title}
      />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              {acf.videoEmbed && (
                <div className="responsive-iframe aspect-4x3">
                  <iframe src={acf.videoEmbed} title={post.title} />
                </div>
              )}
              <div className="mt-5">
                {acf.videoTitle && (
                  <h2>{acf.videoTitle}</h2>
                )}
                {acf.subtitle && (
                  <h6>{acf.videoSubtitle}</h6>
                )}
                {acf.videoDescription && (
                  parse(acf.videoDescription)
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
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
    </>
  )
}

export const videoQuery = graphql`
  query VideoById(
    # these variables are passed in via createPage.pageContext in gatsby-node.js
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    # selecting the current post by id
    post: wpVideo(id: { eq: $id }) {
      id
      title
      uri
      slug
      content
      acfPostTypeVideo {
        subtitle
        videoTitle
        videoEmbed
        videoDescription
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

export default VideoTemplate
