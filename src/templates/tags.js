import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PostList from '../components/PostList'
import HeroDefault from '../components/HeroDefault'

const Tag = props => {
  const { posts, count, name : tagName } = props.data.wpcontent.tag
  const { title: siteTitle } = props.data.wpcontent.generalSettings

  const fulltitle = `${count} post${
    count === 1 ? '' : 's'
  } with the tag “${tagName}”`

  return (
    <Layout>
      <Helmet title={`${tagName} | ${siteTitle}`} />
      <HeroDefault title={tagName} />
      <PostList posts={posts} title={fulltitle} />
    </Layout>
  )
}

export default Tag

export const pageQuery = graphql`
  query TagPage($id: ID!) {

    wpcontent{
      generalSettings{
        title
      }
      tag(id: $id, idType: ID) {
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
