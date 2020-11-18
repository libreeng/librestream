import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import moment from 'moment'
import Img from "gatsby-image"

export default class ProductsListPage extends React.Component {
  render() {
    const { posts, title } = this.props

    const getFeaturedImage = (post) => {
      if (post.acfPostTypeProduct && post.acfPostTypeProduct.mainImage && post.acfPostTypeProduct.mainImage.imageFile) {
        return <Img 
                  className="featured-image mb-3"
                  style={{height:0,paddingBottom:'66%'}}
                  alt={post.acfPostTypeProduct.mainImage.altText}
                  fluid={post.acfPostTypeProduct.mainImage.imageFile.childImageSharp.fluid}
                />
      } else if(post.acfPostTypeProduct && post.acfPostTypeProduct.mainImage) {
        return <div className="featured-image mb-3 bg" alt={post.acfPostTypeProduct.mainImage.altText} style={{height:0,paddingBottom:'66%',backgroundImage:`url(${post.acfPostTypeNews.mainImage.sourceUrl})`,backgroundSize:'cover',backgroundPosition:'center center'}}></div> ;
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
                    { moment(post.date).format("MMMM Do, YYYY")}                  
                
                  </small>
                </header>
                <main className="mb-4 flex-fill">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: 'Content for this product will go here',
                    }}
                  />
                </main>
                <footer className="post-button">
                  <Link className="btn btn-secondary btn-small stretched-link" to={post.uri}>
                    Learn More
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

ProductsListPage.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
}
