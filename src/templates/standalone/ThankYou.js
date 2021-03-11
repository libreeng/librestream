import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import parse from "html-react-parser"
import Hero from "../../common/ui/hero/HeroDefault"

const ThankYouTemplate = ({ data: { page } }) => {

  return (
    <>
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
    </>
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