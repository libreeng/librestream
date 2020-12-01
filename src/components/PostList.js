import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import { format } from 'date-fns'
import Img from "gatsby-image"

export default class IndexPage extends React.Component {
  render() {
    const { posts, title } = this.props
    console.log("POSTS",posts)

    const getFeaturedImage = (post) => {
      if (post.acfPostTypeNews && post.acfPostTypeNews.mainImage && post.acfPostTypeNews.mainImage.imageFile) {
        return <Img 
                  className="featured-image mb-3"
                  style={{height:0,paddingBottom:'66%'}}
                  alt={post.acfPostTypeNews.mainImage.altText}
                  fluid={post.acfPostTypeNews.mainImage.imageFile.childImageSharp.fluid}
                />
      } else if(post.acfPostTypeNews && post.acfPostTypeNews.mainImage) {
        return <div className="featured-image mb-3 bg" alt={post.acfPostTypeNews.mainImage.altText} style={{height:0,paddingBottom:'66%',backgroundImage:`url(${post.acfPostTypeNews.mainImage.sourceUrl})`,backgroundSize:'cover',backgroundPosition:'center center'}}></div> ;
      }
    }
    

    return (
      <section className="section">
        <div className="container">
          <div className="content">
            <h1 className="has-text-weight-bold is-size-2">{title}</h1>
          </div>

          <div className="row">
          {posts.edges.map(({ node: post }) => (
            <article
              className="d-flex col-12 col-md-6 col-lg-4 pb-4"
              key={post.id}
            >
              <div className="border border-primary p-4 d-flex flex-column">
                
                <header className="mb-4">
                  <div className="post-image">
                    { getFeaturedImage(post) }
                  </div>
                  <Link className="has-text-primary mb-3" to={post.uri}>
                    {post.title}
                  </Link>
                  <span> &bull; </span>
                  <small className="meta">
                    { format(new Date(post.date),"MMMM do, yyyy") } - 
                    
                    {post.author && 
                      <>posted by <i>{post.author.node.name}</i></>
                    }
                  </small>
                </header>
                <main className="mb-4 flex-fill">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: post.excerpt.replace(/<p class="link-more.*/, ''),
                    }}
                  />
                </main>
                <footer className="post-button">
                  <Link className="btn btn-secondary btn-small stretched-link" to={post.uri}>
                    Keep Reading
                  </Link>
                </footer>
              </div>
            </article>
          ))}
          </div>
        </div>
      </section>
    )
  }
}

IndexPage.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
}

export const pageQuery = graphql`
  fragment PostListFields on WPGraphQL_Post {
    id
    title
    excerpt
    date
    slug
    uri
    acfPostTypeNews {
      mainImage {
        altText
        sourceUrl(size: LARGE)
        #imageFile {
        #  childImageSharp {
        #    fluid(maxWidth: 1600, quality: 60) {
        #      ...GatsbyImageSharpFluid
        #    }
        #  }
        #}
      }
    }
    author {
      node {
        name
        slug
        uri
        avatar {
          url
        }
      }
    }
  }
`
