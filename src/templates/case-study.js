import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import HeroDefault from '../components/HeroDefault'


const UseCase = ({ data }) => {
  const { wpcontent } = data

  return (
    <>
      <HeroDefault title={wpcontent.caseStudy.title} />
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
    </>
  )
}

UseCase.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
}

export default UseCase

export const UseCaseQuery = graphql`
  query GET_CASE_STUDIES($id: ID!) {
    wpcontent{
      caseStudy(id: $id) {
        title
        content
      }
    }
  }
`
