import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import parse from "html-react-parser"

const PostTemplate = ({ data: { previous, next, post } }) => {
  const featuredImage = {
    fluid: post.featuredImage?.node?.localFile?.childImageSharp?.fluid,
    alt: post.featuredImage?.node?.alt || ``,
  }

  return (
    <>
      <Hero title="News" />
      <header>
        <h1>{parse(post.title)}</h1>
        <p>{post.date}</p>

        {/* if we have a featured image for this post let's display it */}
        {featuredImage?.fluid && (
          <Image
            fluid={featuredImage.fluid}
            alt={featuredImage.alt}
            style={{ marginBottom: 50 }}
          />
        )}
      </header>

      {!!post.content && (
        <section itemProp="articleBody">{parse(post.content)}</section>
      )}


    </>
  )
}

export const pageQuery = graphql`
  query PostById(
    # these variables are passed in via createPage.pageContext in gatsby-node.js
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    # selecting the current post by id
    post: wpPost(id: { eq: $id }) {
      id
      excerpt
      content
      title
      date(formatString: "MMMM DD, YYYY")

      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 100) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
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

export default PostTemplate
