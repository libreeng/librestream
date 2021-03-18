import React from "react"
import { Link, graphql } from "gatsby"
import parse from "html-react-parser"
import Hero from "../common/ui/Hero"


const ResourceTemplate = ({ data: { previous, next, post } }) => {

  const acf = post.acfPostTypeResource
  const hero = {
    heroHeading: post.title
  }
  return (
    <>
      <Hero
        hero={hero}
      />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              {acf.embed && (
                <div className="responsive-iframe aspect-4x3">
                  <iframe src={acf.embed} title={post.title} />
                </div>
              )}
              {acf.document && (
                <div className="mt-5">
                  <div className="responsive-iframe aspect-4x3">
                    <iframe src={acf.document.localFile.url} title={post.title} />
                  </div>
                </div>
              )}
              {acf.document && (
                <div className="mt-5">
                  <a href={acf.document.localFile.url} target="_blank" rel="noreferrer" className="btn btn-primary text-white">Download {post.title}</a>
                </div>
              )}
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
      acfPostTypeResource {
        fieldGroupName
        embed
        document {
          localFile {
            url
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

export default ResourceTemplate
