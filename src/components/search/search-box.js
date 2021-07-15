import React from "react"
import SearchLineIcon from 'remixicon-react/SearchLineIcon'
import { connectSearchBox } from "react-instantsearch-dom"



export default connectSearchBox( ({ refine, currentRefinement, className, onFocus, value, onBlur, queryHook }) => {

    return (
      <form className={className}>
        <input
          className="SearchInput border-0 text-primary"
          type="text"
          placeholder="Search"
          aria-label="Search"
          onChange={e => refine(e.target.value)}
          value={currentRefinement}
          onFocus={onFocus}
          onBlur={onBlur} 
        />
        <SearchLineIcon size="25" />
        
      </form>
    
  )}
)