import React, { useRef }  from "react"
import SearchLineIcon from 'remixicon-react/SearchLineIcon'
import { connectSearchBox } from "react-instantsearch-dom"


export default connectSearchBox( ({ refine, currentRefinement, className, onFocus, onBlur }) => {
  const searchInput = useRef(null);

  const onFormSubmit = (e) => {
    searchInput.current.blur()
   
    // Disable form submitting. All updates happen onChange. We do not want the page to refresh when the enter key is hit. 
    e.preventDefault()
  }

  const clickSearchSubmit = (e) => {
    searchInput.current.blur()
  }


  // TODO: if you update the search box with a new searh term, and then update the search box in the top navigation, this search box does not update. This is an active but. I suspect it might happen because the "onChange" event is not being fired when the value is dynamically updated.  
  
  return (
    <form className={className} onSubmit={onFormSubmit}>
      <input
        ref={searchInput}
        className="SearchInput border-0 text-primary"
        type="text"
        placeholder="Search"
        aria-label="Search"
        onChange={e => refine(e.target.value)}
        value={currentRefinement}
        onFocus={onFocus}
        onBlur={onBlur} 
      />
      <SearchLineIcon size="25" onClick={clickSearchSubmit}/>        
    </form>
  )
})