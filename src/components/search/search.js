import algoliasearch from "algoliasearch/lite"
import { default as React, useState, useMemo } from "react"
import { InstantSearch, Configure, connectStateResults } from "react-instantsearch-dom"

import SearchBox from "./search-box"
import SearchResult from "./search-result"
import { useLocation } from "@reach/router"
import queryString from 'query-string'


const HitCount = connectStateResults(({ searchResults }) => {
  const hitCount = searchResults && searchResults.nbHits
  return searchResults ? (
    <div className="resultCount text-primary font-weight-normal border-right border-dark">
      <span className='text-dark'>{hitCount > 0 ? hitCount : "No"}</span> Result{hitCount !== 1 ? `s` : ``}
    </div>
  ) : 'Searching...'
})




export default function Search({ indices }) {

  const location = useLocation(); // NEW
  const newSearchQuery = queryString.parse(location.search)
  const newSerchTerm = (newSearchQuery.s && newSearchQuery.s != 'undefined') ? newSearchQuery.s : ''

  const [nbrResults, setNbrResults] = useState(10)
  const [currentPage, setPage] = useState(0)

  const [query, setQuery] = useState(newSerchTerm)
  const [hasFocus, setFocus] = useState(false)
  const searchClient = useMemo(
    () =>
      algoliasearch(
        process.env.GATSBY_ALGOLIA_APP_ID,
        process.env.GATSBY_ALGOLIA_SEARCH_KEY
      ),
    []
  )

  const LoadMore = connectStateResults(({ searchResults }) => {
    return nbrResults && searchResults && searchResults.nbHits > nbrResults && (
      <button class="btn btn-secondary mt-3" onClick={() => setNbrResults(null)}>Load More Results </button>
    )
  })


  return (

        <InstantSearch
          searchClient={searchClient}
          indexName={indices[0].name}
          onSearchStateChange={({ query }) => setQuery(query)}
        >   
          {nbrResults && 
            <Configure
              hitsPerPage={nbrResults}
              page={currentPage}
            />  
          }
          
          <div className="searchForm">
            
            <label htmlFor="query" className="d-flex align-items-center display-4 border-bottom border-dark">
              <HitCount />
              <div className="searchInputWrapper col px-0">
                <SearchBox onFocus={() => setFocus(true)} hasFocus={hasFocus} defaultRefinement={query}/>
              </div>
            </label>
          </div>

          <div className="mt-5 searchResultsList">
            <SearchResult
              show={query && query.length > 0 && hasFocus}
              indices={indices}
            />
          </div>
          <LoadMore />
         
        </InstantSearch>
  )
}


              

       


// use different useFlexSearch hooks for each post type
// https://githubmemory.com/repo/angeloashmore/gatsby-plugin-local-search/issues/23

