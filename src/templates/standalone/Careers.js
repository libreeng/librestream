import React from 'react'
// import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
// import parse from "html-react-parser"
import Hero from "../../common/ui/Hero"

const CareersTemplate = ({ data: { page } }) => {
  return (
    <>
      <Hero heroTitle={page.title} />
      <h1>Careers Page</h1>
    </>
  )
}

CareersTemplate.propTypes = {

}

export const pageQuery = graphql`
  query CareersTemplateQuery($id: String!) {
    # selecting the current page by id
    page: wpPage(id: { eq: $id }) {
      ...PageDetails
    }
  }
`

export default CareersTemplate

