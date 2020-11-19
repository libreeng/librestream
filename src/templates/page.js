import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const PageTemplate = ({ title, content }) => {
  console.log("Running page template")
  return (
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



  )
}

PageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
}

const Page = ({ data }) => {
  const { wpcontent  } = data
  console.log("PAEG",wpcontent)
  return (
    <Layout>
      <PageTemplate title={wpcontent.page.title} content={wpcontent.page.content} />
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
