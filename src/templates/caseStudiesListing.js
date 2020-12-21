import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import CaseStudyList from '../components/CaseStudyList'
import Pagination from '../components/Pagination'
import HeroDefault from '../components/HeroDefault'



const CaseStudiesPage = ({data,pageContext}) => {
  console.log("pageContext",pageContext)
  console.log("data",data)
  
  const fulltitle = `Case Studies${pageContext.pageNumber > 1 ?  `: page ${pageContext.pageNumber}` : ''  }`
  
  const { caseStudies: posts } = data.wpcontent

  return (
    <Layout>
      <HeroDefault title={'Case Studies'}/>
      <Pagination pageContext={pageContext} pathPrefix="/use_cases" />
      <CaseStudyList posts={posts} title={fulltitle} />
      <Pagination pageContext={pageContext} pathPrefix="/use_cases" />
    </Layout>
  )
}
export default CaseStudiesPage

 /*
SolutionsPage.propTypes = {
 
  data: PropTypes.shape({
    wpcontent: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
  pageContext: PropTypes.shape({
    currentPage: PropTypes.number,
    numPages: PropTypes.number,
  }),
  
}
*/
export const SolutionsQuery = graphql`
  query GET_CASESTUDIES($limit: Int!, $endCursor: String = null) {
    wpcontent{
      generalSettings {
        title
      }      

      caseStudies(
        where: {orderby: {field: DATE, order: DESC}}, 
        first: $limit, 
        after: $endCursor 
      ) {      
            
        edges {
          node {
            id
            title
            content
            date
            slug
            uri
          }
        }
      }
    }
  }
`


