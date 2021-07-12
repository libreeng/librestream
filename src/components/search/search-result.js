import { Link } from "gatsby"
import { default as React } from "react"
import { algoliaParse } from "../../common/utils/helpers" // converts HTML entities to HTML character codes.
import {
  Highlight,
  Hits,
  Index,
  Snippet,
} from "react-instantsearch-dom"


const PageHit = ({ hit }) => {
  const parsedHit = {
    ...hit,
    _snippetResult: {
      ...hit._snippetResult,
      excerpt:{
        ...hit._snippetResult.excerpt,     
        value: hit._snippetResult.excerpt?.value ? algoliaParse(hit._snippetResult.excerpt.value) : null,
      },
    }
  }

  
  return (
    <div className={``}>
      <div class="h6 text-uppercase text-dark font-weight-normal text-gray">{hit.nodeSubType ? hit.nodeSubType : hit.nodeType}</div>
      <Link
        to={hit.link}
        target='_self'
        >
        <div className="">          
          <h4 className="result-title text-dark font-weight-normal">
            <Highlight attribute="title" hit={parsedHit} tagName="mark" />
          </h4>
          {hit.nodeType == "Post" ?
          <>
            <Snippet attribute="excerpt" hit={parsedHit} tagName="mark" className="result-excerpt text-dark "/>
          </>
          :
            <Snippet attribute="content" hit={parsedHit} tagName="mark" className="result-excerpt text-dark "/>
          }
          
        </div>
      </Link>
      <hr class="hr-xs ml-0"></hr>
    </div>
  )
}

const HitsInIndex = ({ index }) => (
  <Index indexName={index.name} >
    <Hits className="Hits" hitComponent={PageHit} />
  </Index>
)

const SearchResult = ({ indices, className }) => {
  return(
  <div className={className}>
    {indices.map(index => (
      <HitsInIndex index={index} key={index.name} />
    ))}
    
  </div>
  )
}

export default SearchResult

/** Algolia asks that we add <PoweredBy /> if we're using the free tier */



