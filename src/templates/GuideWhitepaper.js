import React from "react"
import { Link, graphql } from "gatsby"
import parse from "html-react-parser"
import Hero from "../common/ui/Hero"


const GuideWhitepaperTemplate = ({ data: { previous, next, post } }) => {

  const acf = post.acfPostTypeGuide
  console.log('acf', acf)
  console.log(post)

  return (
    <>
      <Hero
        heroTitle={acf.heroTitle ? acf.heroTitle : post.title}
        heroBackground={acf.heroBackground ? acf.heroBackground.localFile.publicURL : null}
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
                <p className="mt-5">
                  <a href={acf.document.uri} target="_blank" rel="noreferrer" className="btn btn-primary text-white">Download {post.title}</a>
                </p>
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
  query GuideWhitepaperById(
    # these variables are passed in via createPage.pageContext in gatsby-node.js
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    # selecting the current post by id
    post: wpGuideWhitepaper(id: { eq: $id }) {
      id
      title
      uri
      slug
      content
      acfPostTypeGuide {
        fieldGroupName
        heroBackground {
          id
          localFile {
            publicURL
          }
        }
        heroTitle
        embed
        document {
          uri
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

export default GuideWhitepaperTemplate
