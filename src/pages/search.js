import React, { useEffect, useRef, useState } from 'react';
// import PropTypes from 'prop-types'
import { graphql } from "gatsby"
import { useFlexSearch } from 'react-use-flexsearch'
import Layout from "../containers/Layout"
import Hero from '../common/ui/Hero'
import axios from "axios"
import FooterCTAs from '../common/ui/FooterCTAs'
import SearchResult from '../common/ui/SearchResult'
import SearchLineIcon from 'remixicon-react/SearchLineIcon'


const SearchPage = ({ data }) => {
  const [isExpanded, setExpanded] = useState(false)
  const [index, setIndex] = useState(null)
  const [store, setStore] = useState(null)
  const [query, setQuery] = useState('')
  const [loaded, setLoaded] = useState(false)


  const { localSearchSite: { publicIndexURL, publicStoreURL } } = data
  const hero = {heroHeading: "Search Results"}  
  const nbrResultsToShow = 4

  
  const fetchSearchData = async () => {
    if(loaded) return;
    console.log("FETCH SEARCH DATA");
    return axios.get(publicStoreURL)   
    .catch(err => {
        console.warn("Error Loading Store Data",err)
    })
    .then(resp => {        
        setStore(resp.data)
        console.log("Got Store!")
        return axios.get(publicIndexURL)
    })        
    .catch(err => {
        console.warn("Error Loading Index Data",err)
    })
    .then(resp => {
        setIndex(JSON.stringify(resp.data))
        console.log("Got Index!")
        setLoaded(true)
    })  
    
  }
   

  const results = loaded ? useFlexSearch(query, index, store, {
    encode: "extra",
    threshold: 4,
    resolution: 1,
    tokenize: "full",
  }) : []

  // Split into two data sets, initial desplay and "read more"
  const displayResults = (results && results.length > nbrResultsToShow) ? [...results].splice(0, nbrResultsToShow)  : results
  const moreResults =  [...results].splice(nbrResultsToShow)  
  
  const clickMoreResults = () => {
    setExpanded(!isExpanded);
  }
  const UpdateSearch = (value) => {
    setExpanded(false)
    setQuery(value)
  }
  

  return (
    <Layout>
      
      <Hero hero={hero} />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 searchForm">
              <label htmlFor="query" className="d-flex align-items-center display-4 border-bottom border-dark">
                
                <div className="resultCount text-primary font-weight-normal border-right border-dark"><span className='text-dark'>{results ? results.length : 'No '}</span> Results</div>
                  
                <div className="searchInputWrapper col">
                  <input
                    className="border-0 text-primary"
                    name="query"
                    placeholder="Search"
                    value={query}
                    onChange={(event) => UpdateSearch(event.target.value)}
                    onFocus={fetchSearchData}
                  />
                  <SearchLineIcon size="25" />

                </div>

              </label>

            </div>
            
            <div className="col-12 mt-5 searchResults">

              {query && (  results.length > 0 ? (
                  <div className="row">     

                    {displayResults.map((result, i) => <SearchResult result={result} searchterm={query} gatdddd/> )}

                    { isExpanded && moreResults.length > 1 &&                       
                      <div className={ 'more-results ' + (isExpanded && 'expanded') }>
                        {moreResults.map((result, i) => <SearchResult result={result} searchterm={query} /> )}
                      </div> 
                    }
                    
                    {!isExpanded && results.length > nbrResultsToShow &&       
                      <button onClick={clickMoreResults} className="btn btn-secondary mt-3" >Load More Results </button>
                    }
                  </div>
                ) : (
                  <p className="alert alert-light text-center my-4">No results for &quot;{query}&quot;</p>               
                ))}

            </div>
          </div>
        </div>
      </section>
      <FooterCTAs />
    </Layout>
  )
}

SearchPage.propTypes = {

}
export const pageQuery = graphql`
  query SearchQuery {
    
    localSearchSite {
      publicIndexURL
      publicStoreURL
    }
  }
`

export default SearchPage



// use different useFlexSearch hooks for each post type
// https://githubmemory.com/repo/angeloashmore/gatsby-plugin-local-search/issues/23

