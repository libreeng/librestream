import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import HeroDefault from '../components/HeroDefault'

export const SolutionTemplate = ({ title, content }) => {
  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                Solution: {title}
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

SolutionTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
}

const Solution = ({ data }) => {
  const { wpcontent  } = data

  return (
    <Layout>
      <HeroDefault title={wpcontent.solution.title}/>
      <SolutionTemplate title={wpcontent.solution.title} content={wpcontent.solution.content} />
    </Layout>
  )
}

Solution.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Solution

export const solutionQuery = graphql`
  query solutionById($id: ID!) {
    wpcontent{
      solution(id: $id) {
        title
        content
      }
    }
  }
`
