import { Link } from "gatsby"
import { default as React } from "react"
import {
  connectStateResults,
  Highlight,
  Hits,
  Index,
  Snippet,
  PoweredBy,
} from "react-instantsearch-dom"

const HitCount = connectStateResults(({ searchResults }) => {
  const hitCount = searchResults && searchResults.nbHits

  return hitCount > 0 ? (
    <div className="HitCount">
      {hitCount} result{hitCount !== 1 ? `s` : ``}
    </div>
  ) : null
})

const PageHit = ({ hit }) => {
  console.log(hit)
  
  return (

    <div className={``}>
      <div class="h6 text-uppercase text-dark font-weight-normal text-gray">{hit.nodeType}</div>
      <Link
        to={hit.link}
        target='_self'
        >
        <div className="">          
          <h4 className="result-title text-dark font-weight-normal">
            <Highlight attribute="title" hit={hit} tagName="mark" />
          </h4>
          {hit.nodeType == "Post" ?
            <Snippet attribute="excerpt" hit={hit} tagName="mark" className="result-excerpt text-dark "/>
          :
            <Snippet attribute="content" hit={hit} tagName="mark" className="result-excerpt text-dark "/>
          }
          
        </div>
      </Link>
      <hr class="hr-xs ml-0"></hr>
    </div>
  )
}

const HitsInIndex = ({ index }) => (
  <Index indexName={index.name}>
    <HitCount />
    <Hits className="Hits" hitComponent={PageHit} />
  </Index>
)

const SearchResult = ({ indices, className }) => {
  console.log(indices)
  return(
  <div className={className}>
    {indices.map(index => (
      <>
      <h3>{index.title}</h3>
      <HitsInIndex index={index} key={index.name} />
      </>
    ))}
    
  </div>
  )
}

export default SearchResult

/** Algolia asks that we add <PoweredBy /> if we're using the free tier */