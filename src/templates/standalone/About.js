import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import parse from "html-react-parser"

const AboutTemplate = ({ data: { page } }) => {
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

export const pageQuery = graphql`
  query AboutTemplateQuery($id: String!) {
    # selecting the current page by id
    page: wpPage(id: { eq: $id }) {
      ...PageDetails
    }
  }
`

export default AboutTemplate