import React from 'react'
import { Link } from "gatsby"
import PropTypes from 'prop-types'

const SearchResult = ({ result, className, searchterm }) => {
    
    // Create an excerpt...There is probably a better way to do this
    // To Do: Highlight Search Terms
    let excerpt = result.excerpt.replace(/(<([^>]+)>)/gi, "");
    if(excerpt.length > 300) excerpt = excerpt.slice(0,300) + '...';
    
    return (
    <div  className={`col-12 ${className}`}>
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

SearchResult.propTypes = {
  result: PropTypes.instanceOf(Object),
}

export default SearchResult
