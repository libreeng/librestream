import React from "react"
import { graphql } from "gatsby"
import parse from "html-react-parser"
import Hero from "../../common/ui/Hero"

const NewsTemplate = ({ data: { page } }) => {
  const hero = {
    heroHeading: page.title
  }

  return (
    <>
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

    </>
  )
}

export const pageQuery = graphql`
  query NewsTemplateQuery($id: String!) {
    # selecting the current page by id
    page: wpPage(id: { eq: $id }) {
      ...PageDetails
    }
  }
`

export default NewsTemplate