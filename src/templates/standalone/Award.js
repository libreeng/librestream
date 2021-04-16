import React from "react"
// import PropTypes from 'prop-types'
import { graphql } from "gatsby"
import parse from "html-react-parser"
import SEO from "../../containers/SEO"
import Hero from "../../common/ui/Hero"
import FooterCTAs from '../../common/ui/FooterCTAs'
import Layout from "../../containers/Layout"

const AwardTemplate = ({ data: { page } }) => {
  const hero = {
    heroHeading: page.title
  }
  const cta = page.acfFooterCTAs?.cta || []

  return (
    <Layout>
      <SEO pageSEO={page.seo} />
      <Hero hero={hero} />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <p className="float-right mr-5">{page.date}</p>

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
  query AwardTemplateQuery($id: String!) {
    # selecting the current page by id
    page: wpPage(id: { eq: $id }) {
      ...PageDetails
    }
  }
`


export default AwardTemplate