import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SolutionsList from '../components/SolutionsList'
import Pagination from '../components/Pagination'
import HeroDefault from '../components/HeroDefault'



const SolutionsPage = ({data,pageContext}) => {
  console.log("pageContext",pageContext)
  console.log("data",data)
  
  const fulltitle = `Solutions${pageContext.pageNumber > 1 ?  `: page ${pageContext.pageNumber}` : ''  }`
  
  const { solutions: posts } = data.wpcontent

  return (
    <Layout>
      <HeroDefault title='Solutions'/>
      <Pagination pageContext={pageContext} pathPrefix="/solutions" />
      <SolutionsList posts={posts} title={fulltitle} />
      <Pagination pageContext={pageContext} pathPrefix="/solutions" />
    </Layout>
  )
}
export default SolutionsPage

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
  query GET_SOLUTIONS($limit: Int!, $endCursor: String = null) {
    wpcontent{
      generalSettings {
        title
      }      

      solutions(
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


