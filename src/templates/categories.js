import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PostList from '../components/PostList'
import HeroDefault from '../components/HeroDefault'

const Category = props => {
  const { posts, count, name : categoryName } = props.data.wpcontent.category
  const { title: siteTitle } = props.data.wpcontent.generalSettings

  const fulltitle = `${count} post${
    count === 1 ? '' : 's'
  } in the “${categoryName}” category`

  return (
    <Layout>
      <HeroDefault title={categoryName} />
      <Helmet title={`${categoryName} | ${siteTitle}`} />
      <PostList posts={posts} title={fulltitle} />
    </Layout>
  )
}

export default Category

export const pageQuery = graphql`
  query CategoryPage($id: ID!) {
  
    wpcontent {
      generalSettings {
        title
      }
      category(id: $id, idType: ID) {
        id
        name
        description
        count
        slug 
        posts(first: 999) {
          edges {
            node {
              ...PostListFields
            }
          }
        }         
      }
    }
  }
`
