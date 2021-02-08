import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import parse from "html-react-parser"

const StandalonePageTemplate = ({ data: { page } }) => {
  const featuredImage = {
    fluid: page.featuredImage?.node?.localFile?.childImageSharp?.fluid,
    alt: page.featuredImage?.node?.alt || ``,
  }

  return (
    <>

      <header>
        <h1 itemProp="headline">{parse(page.title)}</h1>

        <p>{page.date}</p>

        {/* if we have a featured image for this post let's display it */}
        {featuredImage?.fluid && (
          <Image
            fluid={featuredImage.fluid}
            alt={featuredImage.alt}
            style={{ marginBottom: 50 }}
          />
        )}
      </header>

      {!!page.content && (
        <section itemProp="articleBody">{parse(page.content)}</section>
      )}

    </>
  )
}

export default StandalonePageTemplate

export const pageQuery = graphql`
  query StandalonePageById(
    # these variables are passed in via createPage.pageContext in gatsby-node.js
    $id: String!
  ) {
    # selecting the current post by id
    page: wpPage(id: { eq: $id }) {
      id
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
  }
`
