import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const ProductTemplate = ({ title, content }) => {
  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                Product: {title}
              </h2>
              <div
                className="content"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

ProductTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
}

const Product = ({ data }) => {
  const { wpcontent  } = data

  return (
    <Layout>
      <ProductTemplate title={wpcontent.product.title} content={wpcontent.product.content} />
    </Layout>
  )
}

Product.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Product

export const productQuery = graphql`
  query productById($id: ID!) {
    wpcontent{
      product(id: $id) {
        title
        content
      }
    }
  }
`
