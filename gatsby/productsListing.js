import React from 'react'
// import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import ProductsList from '../components/ProductsList'
import Pagination from '../components/Pagination'
import HeroDefault from '../components/HeroDefault'



const ProductsPage = ({ data, pageContext }) => {
  console.log("pageContext", pageContext)
  console.log("data", data)

  const fulltitle = `Products${pageContext.pageNumber > 1 ? `: page ${pageContext.pageNumber}` : ''}`

  const { products: posts } = data.wpcontent

  return (
    <>
      <HeroDefault title='Products' />
      <Pagination pageContext={pageContext} pathPrefix="/products" />
      <ProductsList posts={posts} title={fulltitle} />
      <Pagination pageContext={pageContext} pathPrefix="/products" />
    </>
  )
}
export default ProductsPage

/*
ProductsPage.propTypes = {

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
export const ProductsQuery = graphql`
  query GET_PRODUCTS($limit: Int!, $endCursor: String = null) {
    wpcontent{
      generalSettings {
        title
      }

      products(
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


