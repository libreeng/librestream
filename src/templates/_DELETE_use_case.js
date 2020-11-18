import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const UseCaseTemplate = ({ title, content }) => {
  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                Case Study: {title}
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

UseCaseTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
}

const UseCase = ({ data }) => {
  const { wpcontent  } = data

  return (
    <Layout>
      <UseCaseTemplate title={wpcontent.caseStudy.title} content={wpcontent.caseStudy.content} />
    </Layout>
  )
}

UseCase.propTypes = {
  data: PropTypes.object.isRequired,
}

export default UseCase

export const UseCaseQuery = graphql`
  query UseCaseById($id: ID!) {
    wpcontent{
      caseStudy(id: $id) {
        title
        content
      }
    }
  }
`
