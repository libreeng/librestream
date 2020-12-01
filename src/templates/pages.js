import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

const Page = ({ data }) => {
  const { title,content } = data.wpcontent.page
  return (
    <Layout>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <div
                className="content"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

Page.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Page

export const pageQuery = graphql`
  query PageById($id: ID!) {
    wpcontent{
      page(id: $id) {
        title
        content    
      }
    }
  }
`

