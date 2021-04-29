// TODO: Confirm and remove
import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import parse from "html-react-parser"
import SEO from "../../containers/SEO"
import Hero from "../../common/ui/Hero"
import Layout from "../../containers/Layout"

const ThankYouTemplate = ({ data: { page } }) => {
  // I believe this template is now form-confirmation, remove once confirmed
  return (
    <Layout>
      <SEO pageSEO={page.seo} />
      <Hero heroTitle={page.title} />
      Thank you template
      {!!page.content && (
        <section itemProp="articleBody">
          <div className="container">
            <div className="row">
              <div className="col-12">
                {parse(page.content)}
              </div>
            </div>
          </div>
        </section>
      )}
    </Layout>
  )
}

export const pageQuery = graphql`
  query ThankYouTemplateQuery($id: String!) {
    # selecting the current page by id
    page: wpPage(id: { eq: $id }) {
      ...PageDetails
    }
  }
`

export default ThankYouTemplate