import React from "react"
import { graphql } from "gatsby"
import parse from "html-react-parser"
import Hero from "../common/ui/Hero"

const ReleaseNotesTemplate = ({ data: { post } }) => {
  const featuredImage = {
    fluid: post.acfPostTypeNews?.mainImage?.localFile?.childImageSharp?.fluid,
    alt: post.acfPostTypeNews?.mainImage?.altText || ``
  }
  const hero = {
    heroHeading: post.title
  }

  return (
    <>
      <Hero hero={hero} />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 col-lg-3">
            <ReleaseNotesNav />
          </div>
          <div className="col-12 col-md-8 col-lg-9">

          </div>
        </div>
      </div>

    </>
  )
}

// export const pageQuery = graphql`
//   query ReleaseNotesTemplateQuery($id: String!) {
//     # selecting the current page by id
//     page: wpPost(id: { eq: $id }) {
//       ...PostDetails
//     }
//   }
// `

export default ReleaseNotesTemplate