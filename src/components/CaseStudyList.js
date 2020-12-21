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
      if (post.acfPostTypeCaseStudy && post.acfPostTypeCaseStudy.mainImage && post.acfPostTypeCaseStudy.mainImage.imageFile) {
        return <Img 
                  className="featured-image mb-3"
                  style={{height:0,paddingBottom:'66%'}}
                  alt={post.acfPostTypeCaseStudy.mainImage.altText}
                  fluid={post.acfPostTypeCaseStudy.mainImage.imageFile.childImageSharp.fluid}
                />
      } else if(post.acfPostTypeCaseStudy && post.acfPostTypeCaseStudy.mainImage) {
        return <div className="featured-image mb-3 bg" alt={post.acfPostTypeCaseStudy.mainImage.altText} style={{height:0,paddingBottom:'66%',backgroundImage:`url(${post.acfPostTypeNews.mainImage.sourceUrl})`,backgroundSize:'cover',backgroundPosition:'center center'}}></div> ;
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
                    { format(new Date(post.date),"MMMM do, yyyy") }
                  </small>
                </header>
                <main className="mb-4 flex-fill">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: 'Content for this case study will go here',
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
fragment CaseStudyFields on WPGraphQL_CaseStudy {
  id
  title
  content
  date
  slug
  uri
}
`
