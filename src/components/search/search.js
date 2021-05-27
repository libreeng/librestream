import algoliasearch from "algoliasearch/lite"
import { default as React, useState, useMemo } from "react"
import { InstantSearch, Configure } from "react-instantsearch-dom"

import SearchBox from "./search-box"
import SearchResult from "./search-result"


export default function Search({ indices }) {

  const [query, setQuery] = useState()
  const [hasFocus, setFocus] = useState(false)
  const searchClient = useMemo(
    () =>
      algoliasearch(
        process.env.GATSBY_ALGOLIA_APP_ID,
        process.env.GATSBY_ALGOLIA_SEARCH_KEY
      ),
    []
  )

/**
 * Place this after InstantSeach
 <Configure
    hitsPerPage={4}
    page={2}
  />  
*/
  return (

        <InstantSearch
          searchClient={searchClient}
          indexName={indices[0].name}
          onSearchStateChange={({ query }) => setQuery(query)}
        >   
          
          <div className="searchForm">
            <label htmlFor="query" className="d-flex align-items-center display-4 border-bottom border-dark">
              <div className="searchInputWrapper col px-0">
                <SearchBox onFocus={() => setFocus(true)} hasFocus={hasFocus} />
              </div>
            </label>
          </div>

          <div className="mt-5 searchResults">
            <SearchResult
              show={query && query.length > 0 && hasFocus}
              indices={indices}
            />
          </div>
        </InstantSearch>
  )
}


              

       


// use different useFlexSearch hooks for each post type
// https://githubmemory.com/repo/angeloashmore/gatsby-plugin-local-search/issues/23

