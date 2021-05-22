import React, { useEffect, useRef, useState } from 'react';
// import PropTypes from 'prop-types'
import { Link, graphql } from "gatsby"
import { useFlexSearch } from 'react-use-flexsearch'
import Layout from "../containers/Layout"
import Hero from '../common/ui/Hero'
import FooterCTAs from '../common/ui/FooterCTAs'
import SearchLineIcon from 'remixicon-react/SearchLineIcon'


const SearchPage = ({ data }) => {

  const [isExpanded, setExpanded] = useState(false)

  const { localSearchSite: { index, store } } = data
  const [query, setQuery] = useState('')
  const nbrResultsToShow = 4
  const results = useFlexSearch(query, index, store)  
  const hero = {
    heroHeading: "Search Results"
  }
  const displayResults = (results && results.length > nbrResultsToShow) ? [...results].splice(0, nbrResultsToShow)  : results
  const moreResults =  [...results].splice(nbrResultsToShow)
  
  const clickMoreResults = () => {
    setExpanded(!isExpanded);
  }
  const UpdateSearch = (value) => {
    console.log("update search")
    setExpanded(false)
    setQuery(value)
  }

  const outputResult = (result) => {
    let excerpt = result.excerpt.replace(/(<([^>]+)>)/gi, "");
    if(excerpt.length > 300) excerpt = excerpt.slice(0,300) + '...';

    return (
    <div className="col-12">
      <div class="h6 text-uppercase text-dark font-weight-normal text-gray">{result.nodeType}</div>
      <Link
        to={result.externalLink ? result.externalLink : result.url}
        target={result.externalLink ? '_blank' : '_self'}
        rel={result.externalLink ? 'noopener' : ''}>
        <div className="">          
          <h4 className="result-title text-dark font-weight-normal">
            {result.title}
          </h4>
          <div  class="result-excerpt text-dark " dangerouslySetInnerHTML={{__html: excerpt}}></div>
        </div>
      </Link>
      <hr class="hr-xs ml-0"></hr>
    </div>
    )
  }
   

  return (
    <Layout>
      
      <Hero hero={hero} />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 searchForm">
              <label htmlFor="query" className="d-flex align-items-center display-4 border-bottom border-dark">
                
                <div className="resultCount text-primary font-weight-normal border-right border-dark"><span className='text-dark'>{results.length}</span> Results</div>
                  
                <div className="searchInputWrapper col">
                  <input
                    className="border-0 text-primary"
                    name="query"
                    placeholder="Search"
                    value={query}
                    onChange={(event) => UpdateSearch(event.target.value)}
                  />
                  <SearchLineIcon size="25" />

                </div>

              </label>

            </div>
              
            <div className="col-12 mt-5 searchResults">

              {query && (  results.length > 0 ? (
                  <div className="row">     

                    {displayResults.map((result, i) => outputResult(result) )}

                    { isExpanded && moreResults.length > 1 &&                       
                      <div className={ 'more-results ' + (isExpanded && 'expanded') }>
                        {moreResults.map((result, i) => outputResult(result) )}
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
      index
      store
    }
  }
`

export default SearchPage


