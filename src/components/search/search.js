import algoliasearch from "algoliasearch/lite"
import { default as React, useRef, useState, useEffect, useMemo } from "react"
import { InstantSearch, Configure, connectStateResults } from "react-instantsearch-dom"

import SearchBox from "./search-box"
import SearchResult from "./search-result"
import { useLocation, navigate } from "@reach/router"
import queryString from 'query-string'

const DEFAULT_NBR_RESUlTS = 5
const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
      ref.current = value;
  });
  return ref.current;
};

const HitCount = connectStateResults(({ searchResults }) => {
  const hitCount = searchResults && searchResults.nbHits
  return searchResults ? (
    <div className="resultCount text-primary font-weight-normal border-right border-dark">
      <span className='text-dark'>{hitCount > 0 ? hitCount : "No"}</span> Result{hitCount !== 1 ? `s` : ``}
    </div>
  ) : 'Searching...'
})



export default function Search({ indices }) {


  const location = useLocation(); 
  const prevLocation = usePrevious(location);   

  const newSearchQuery = queryString.parse(location.search)
  const newSearchTerm = (newSearchQuery.s && newSearchQuery.s != 'undefined') ? newSearchQuery.s : ''

  const [respondToRouteChanges, setRespondToRouteChanges] = useState(true)
  const [nbrResults, setNbrResults] = useState(DEFAULT_NBR_RESUlTS)
  const [currentPage, setPage] = useState(0)
  const [query, setQuery] = useState(newSearchTerm)
  const [hasFocus, setFocus] = useState(false)

  // Listen for changes in the URL, if the change resultes in a different search parameter, do a new search
  useEffect(() => {
    //console.log("Location Changed",location)
    if(!respondToRouteChanges){
      //console.log("Do not respond to this route change!")      
      setRespondToRouteChanges(true)
      return;
    }
    const newSearchQuery = queryString.parse(location.search)
    const newSearchTerm = (newSearchQuery.s && newSearchQuery.s != 'undefined') ? newSearchQuery.s : '' 
     
    if(! prevLocation) return  setQuery(newSearchTerm)
    const oldSearchQuery = queryString.parse(prevLocation.search)
    const oldSerchTerm = (oldSearchQuery.s && oldSearchQuery.s != 'undefined') ? oldSearchQuery.s : '' 
    
    //console.log("new vs old",newSearchTerm, oldSerchTerm) 
    //console.log(query)  
    if (newSearchTerm != oldSerchTerm && query != newSearchTerm) {
        //console.log("Setting Query to " + newSearchTerm)
        setQuery(newSearchTerm)
    }    
  }, [location]); // , prevLocation


// every time the query is updated, update the URL in the address bar.
  useEffect(() => {
    //console.log("Query has been updated")
    //navigate(`/search?s=${query}`)  
  }, [query]); // , prevLocation


  const searchClient = useMemo(
    () =>
      algoliasearch(
        process.env.GATSBY_ALGOLIA_APP_ID,
        process.env.GATSBY_ALGOLIA_SEARCH_KEY
      ),
    []
  )

  const onSearchInputUpdated = (query) => {  
    //setRespondToRouteChanges(false)
    //setQuery(query)  
    //console.log("search Input updated . do not respond to next route change")    
    setRespondToRouteChanges(false)
    navigate(`/search?s=${query}`)  
    setQuery(query)
  }

  const LoadMore = connectStateResults(({ searchResults }) => {
    //console.log("Loading More")
    return query && nbrResults && searchResults && searchResults.nbHits > nbrResults && (
      <button class="btn btn-secondary mt-3" onClick={() => setNbrResults(null)}>Load More Results </button>
    )
  })

  return (

        <InstantSearch
          searchClient={searchClient}
          indexName={indices[0].name}
          onSearchStateChange={({ query }) => onSearchInputUpdated(query)}
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

