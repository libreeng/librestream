import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import parse from "html-react-parser"
import Hero from "../../common/ui/hero/HeroDefault"

// Might be able to combine this template and Campaign-Whitepaper into a more flexible template
const CampaignWebinarTemplate = ({ data: { page } }) => {


  return (
    <>
      <Hero heroTitle={page.title} />
      <section>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 text-center">
              <div className="border-bracket">
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, veniam?</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <hr className="hr-styled" />
      </div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui alias iste nemo sed corrupti atque aut est nihil officiis, numquam architecto neque enim maiores cumque consectetur modi necessitatibus! Quisquam, beatae.
              <div className="bg-image aspect-4x3 bg-dark mt-5">
                <div className="bg-fill">
                  Computer image
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              form
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
  query CampaignWebinarTemplateQuery($id: String!) {
    # selecting the current page by id
    page: wpPage(id: { eq: $id }) {
      ...PageDetails
    }
  }
`

export default CampaignWebinarTemplate