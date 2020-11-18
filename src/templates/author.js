import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PostList from '../components/PostList'

const Author = props => {
  const { posts, name } = props.data.wpcontent.user
  const { title: siteTitle } = props.data.wpcontent.generalSettings
  const totalCount = posts.edges.length
  const fulltitle = `${totalCount} post${totalCount === 1 ? '' : 's'} by ${name}`
  
  //const { authored_wordpress__POST, name } = data.wordpressWpUsers
  //const totalCount =
  //  (authored_wordpress__POST && authored_wordpress__POST.length) || 0



  return (
    <Layout>
      <Helmet title={`${name} | ${siteTitle}`} />
      <PostList posts={posts} title={fulltitle} />
    </Layout>
  )
}

export default Author

export const pageQuery = graphql`
  query AuthorPage($id: ID!) {
    wpcontent{
      generalSettings{
        title
      }
      user(id: $id, idType: ID) {
        id
        name
        description
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
