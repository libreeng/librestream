import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PostList from '../components/PostList'
import Pagination from '../components/Pagination'
import HeroDefault from '../components/HeroDefault'



const IndexPage = ({data,pageContext}) => {
  console.log("pageContext",pageContext)
  console.log("data",data)
  
  const fulltitle = `Latest posts${pageContext.pageNumber > 1 ?  `: page ${pageContext.pageNumber}` : ''  }`
  
  const { posts } = data.wpcontent

  return (
    <Layout>
      <HeroDefault title='Latest Posts'/>
      <Pagination pageContext={pageContext} pathPrefix="/news" />
      <PostList posts={posts} title={fulltitle} />
      <Pagination pageContext={pageContext} pathPrefix="/news" />
    </Layout>
  )
}
export default IndexPage


IndexPage.propTypes = {
  /*
  data: PropTypes.shape({
    wpcontent: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
  pageContext: PropTypes.shape({
    currentPage: PropTypes.number,
    numPages: PropTypes.number,
  }),
  */
}

export const pageQuery = graphql`
  query GET_POSTS($limit: Int!, $endCursor: String = null) {
    wpcontent{
      generalSettings {
        title
      }
      
      posts(
        where: {orderby: {field: DATE, order: DESC}}, 
        first: $limit, 
        after: $endCursor 
      ) {
          
        edges {
          node {
            ...PostListFields
          }
        }
      }
    }
  }
`


