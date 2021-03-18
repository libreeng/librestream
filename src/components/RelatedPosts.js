import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import PropTypes from 'prop-types'
import Card from './Card'

const RelatedPosts = () => {
  const data = useStaticQuery(graphql`
    query RelatedPostsQuery {
      allWpPost(limit: 3) {
        edges {
          node {
            title
            uri
            id
            acfPostTypeNews {
              mainImage {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1000, quality: 100) {
                      ...GatsbyImageSharpFluid_tracedSVG
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  
  console.log('Related Posts', data.allWpPost.edges)
  const posts = data.allWpPost.edges

  return (
    <div>
      { posts && posts.map(post => (
        <>
          <Card title={post.node.title} key={post.id} image={post.node.acfPostTypeNews.mainImage && post.node.acfPostTypeNews.mainImage.localFile.childImageSharp.fluid} url={post.node.uri} />   
        </>
      ))}
    </div>
  )
}

RelatedPosts.propTypes = {

}

export default RelatedPosts
