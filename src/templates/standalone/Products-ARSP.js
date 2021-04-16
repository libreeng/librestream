// TODO: Confirm and remove
import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import parse from "html-react-parser"
import SEO from "../../containers/SEO"
import Layout from "../../containers/Layout"

const ProductsARSPTemplate = ({ data: { page } }) => {
  const featuredImage = {
    fluid: page.featuredImage?.node?.localFile?.childImageSharp?.fluid,
    alt: page.featuredImage?.node?.alt || ``,
  }

  return (
    <Layout>
      <SEO pageSEO={page.seo} />
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

    </Layout>
  )
}

export const pageQuery = graphql`
  query ProductsARSPTemplateQuery($id: String!) {
    # selecting the current page by id
    page: wpPage(id: { eq: $id }) {
      ...PageDetails
    }
  }
`

export default ProductsARSPTemplate