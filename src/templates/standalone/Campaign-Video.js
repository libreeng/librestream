import React from "react"
import { graphql } from "gatsby"
import parse from "html-react-parser"
import Hero from "../../common/ui/Hero"

// Not sure if this template is necessary as we also have video custom post type
const CampaignVideoTemplate = ({ data: { page } }) => {

  return (
    <>
      <Hero heroTitle={page.title} />
      <section>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 text-center">
              <div className="responsive-iframe aspect-16x9">
                <iframe src="https://www.youtube.com/embed/rxQzgNh2ANY" frameBorder="0" title={page.title} />
              </div>
            </div>
          </div>
        </div>
      </section>
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
  query CampaignVideoTemplateQuery($id: String!) {
    # selecting the current page by id
    page: wpPage(id: { eq: $id }) {
      ...PageDetails
    }
  }
`

export default CampaignVideoTemplate