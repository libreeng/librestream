import algoliasearch from "algoliasearch/lite"
import { default as React, useRef, useState, useEffect, useMemo } from "react"
import { InstantSearch, Configure, connectStateResults } from "react-instantsearch-dom"

import SearchBox from "./search-box"
import SearchResult from "./search-result"
import { useLocation, navigate } from "@reach/router"
import queryString from 'query-string'

const DEFAULT_NBR_RESUlTS = 5

export default function Search({ indices }) {

  // On first load, get the search term from the URL
  const location = useLocation();
  const newSearchQuery = queryString.parse(location.search)
  const newSearchTerm = (newSearchQuery.s && newSearchQuery.s != 'undefined') ? newSearchQuery.s : ''

  const [nbrResults, setNbrResults] = useState(DEFAULT_NBR_RESUlTS)
  const [query, setQuery] = useState(newSearchTerm)
  const [hasFocus, setFocus] = useState(false)

  setQuery(newSearchTerm)


  
  const onBlur = (e) => {
    if(e.target.value) navigate(`/search?s=${e.target.value}`) 
    else navigate(`/search`) 
  }

  const searchClient = useMemo(
    () =>
      algoliasearch(
        process.env.GATSBY_ALGOLIA_APP_ID,
        process.env.GATSBY_ALGOLIA_SEARCH_KEY
      ),
    []
  )



  const onLoadMore = () => {  
    setNbrResults(null)
  }
  
  const HitCount = connectStateResults(({ searchResults }) => {
    const hitCount = searchResults && searchResults.nbHits
    return searchResults ? (
      <div className="resultCount text-primary font-weight-normal border-right border-dark">
        <span className='text-dark'>{(query && hitCount > 0) ? hitCount : "No"}</span> Result{hitCount !== 1 ? `s` : ``} 
      </div>
    ) : 'Searching...'
  })


  const LoadMore = connectStateResults(({ searchResults }) => {
    return query && nbrResults && searchResults && searchResults.nbHits > nbrResults && (
      <button class="btn btn-secondary mt-3" onClick={onLoadMore}>Load More Results </button>
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
              page={0}
            />  
          }
          
          <div className="searchForm">            
            <label htmlFor="query" className="d-flex align-items-center display-4 border-bottom border-dark">
              <HitCount />
              <div className="searchInputWrapper col px-0">
                <SearchBox onBlur={onBlur} onFocus={() => setFocus(true)} hasFocus={hasFocus} defaultRefinement={query}/>
              </div>
            </label>
          </div>

          <div className="mt-5 searchResultsList">
            { query ?
              <SearchResult
                show={query && query.length > 0 && hasFocus}
                indices={indices}
              />
            :
              <p>Please enter your search above</p>
            }
            
          </div>
          
          <LoadMore />
         
        </InstantSearch>
  )
}


              

       
// use different useFlexSearch hooks for each post type
// https://githubmemory.com/repo/angeloashmore/gatsby-plugin-local-search/issues/23

