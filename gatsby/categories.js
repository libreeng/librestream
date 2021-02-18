import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import PostList from '../src/components/PostList'

const Category = props => {
  const { posts, count, name: categoryName } = props.data.wpcontent.category
  const { title: siteTitle } = props.data.wpcontent.generalSettings

  const fulltitle = `${count} post${count === 1 ? '' : 's'
    } in the “${categoryName}” category`

  return (
    <>
      <Helmet title={`${categoryName} | ${siteTitle}`} />
      <PostList posts={posts} title={fulltitle} />
    </>
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
