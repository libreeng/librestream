import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import { format } from 'date-fns'
import Img from 'gatsby-image'
import contentParser from 'gatsby-wpgraphql-inline-images';



export const BlogPostTemplate = ({
  content,
  categories,
  tags,
  title,
  date,
  author,
  image,
}) => {

  const pluginOptions = {
    wordPressUrl: `https://librestream.wpengine.com/`,
    uploadsUrl: `https://librestream.wpengine.com/media/`,
  };




  const getFeaturedImage = (image) => {
    if (image && image.imageFile) {
      return <Img 
              className="featured-image mb-3"
              alt={image.altText}
              fluid={image.imageFile.childImageSharp.fluid}
            /> 
    } else if(image && image.sourceUrl && image.sourceUrl.altText) {
      <img src={image.sourceUrl} alt={image.altText} className='w-100 mb-4'/>;
    }
  }
  return (
    <section className="section">
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>

            { getFeaturedImage(image) }   

            <div className="post-content">{contentParser({ content }, pluginOptions)}</div>
           
            <div className="mt-5">
              <p>
              { format(new Date(post.date),"MMMM do, yyyy") } - posted by{' '}
                {author.node.name}
              </p>
              {categories && categories.edges.length ? (
                <div>
                  <h4>Categories</h4>
                  <ul className="taglist">
                    {categories.edges.map(category => (
                      <li key={`${category.node.slug}cat`}>
                        <Link to={category.node.uri}>
                          {category.node.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              {tags && tags.edges.length ? (
                <div>
                  <h4>Tags</h4>
                  <ul className="taglist">
                    {tags.edges.map(tag => (
                      <li key={`${tag.node.slug}tag`}>
                        <Link to={tag.node.uri}>{tag.node.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  title: PropTypes.string,
}

const BlogPost = ({ data }) => {
  const { post } = data.wpcontent
  return (
    <Layout>
      <Helmet title={`${post.title} | Blog`} />
      <BlogPostTemplate
        content={post.content}
        categories={post.categories}
        tags={post.tags}
        title={post.title}
        date={post.date}
        author={post.author}
        image={post.acfPostTypeNews.mainImage}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  # fragment PostFields on wordpress__POST {
  #   id
  #   slug
  #   content
  #   date(formatString: "MMMM DD, YYYY")
  #   title
  # }
  query BlogPostByID($id: ID!) {
    wpcontent {
      post(id: $id, idType: ID) {
        id
        title
        slug
        uri
        content
        date
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
        categories {
          edges {
            node {
              name
              slug
              uri
            }
          }
        }
        tags {
          edges {
            node {
              name
              slug
              uri
            }
          }          
        }
        author {
          node {
            name
            slug
            uri
          }
        }
      }
    }
  }
 
`
