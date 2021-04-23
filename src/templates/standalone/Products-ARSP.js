// TODO: Confirm and remove
import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import parse from "html-react-parser"
import SEO from "../../containers/SEO"
import Layout from "../../containers/Layout"

const ProductsARSPTemplate = ({ data: { page } }) => {
  const featuredImageData = page.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData
  const featuredImageAlt = page.featuredImage?.node?.alt || ``

  return (
    <Layout>
      <SEO pageSEO={page.seo} />
      <header>
        <h1 itemProp="headline">{parse(page.title)}</h1>

        <p>{page.date}</p>

        {featuredImageData && (
          <GatsbyImage
            image={featuredImageData}
            alt={featuredImageAlt}
            style={{ marginBottom: 50 }} />
        )}
      </header>

      {!!page.content && (
        <section itemProp="articleBody">{parse(page.content)}</section>
      )}

    </Layout>
  );
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