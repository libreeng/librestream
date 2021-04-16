import React from "react"
import { graphql } from "gatsby"
import Helmet from 'react-helmet'
import parse from "html-react-parser"
import SEO from "../../containers/SEO"
import Hero from "../../common/ui/Hero"
import FooterCTAs from '../../common/ui/FooterCTAs'
import Layout from "../../containers/Layout"

const BlankTemplate = ({ data: { page } }) => {
  const hero = {
    heroHeading: page.title
  }
  const { cta } = page.acfFooterCTAs

  return (
    <Layout>
      <SEO pageSEO={page.seo} />
      {/* TODO: Look for small refactor */}
      <Helmet bodyAttributes={{
        class: 'template-blank'
      }} />
      <Hero hero={hero} />
      <div className="container">
        <div className="row">
          <div className="col-12">
            {!!page.content && (
              <article className="py-5">{parse(page.content)}</article>
            )}
          </div>
        </div>
      </div>

      <FooterCTAs featured={cta} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlankTemplateQuery($id: String!) {
    # selecting the current page by id
    page: wpPage(id: { eq: $id }) {
      ...PageDetails
      ...FooterCTAs
    }
  }
`

export default BlankTemplate