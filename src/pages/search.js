import React, { useState } from 'react'
// import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { useFlexSearch } from 'react-use-flexsearch'
import Hero from '../common/ui/Hero'


const SearchPage = ({ data }) => {
  const { localSearchPosts: { index, store } } = data
  const [query, setQuery] = useState('')
  const results = useFlexSearch(query, index, store)
  const hero = {
    heroHeading: "Search"
  }

  return (
    <>
      <Hero hero={hero} />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <label htmlFor="query">
                <span>Search query</span>
                <input
                  name="query"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                />
              </label>
              <h2>Results</h2>
              {results.length > 0 ? (
                <ul>
                  {results.map((result) => (
                    <li key={result.url}>{result.title}</li>
                  ))}
                </ul>
              ) : (
                <p>No results!</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

SearchPage.propTypes = {

}
export const pageQuery = graphql`
  query SearchQuery {
    localSearchPosts {
      index
      store
    }
  }
`

export default SearchPage
