import React from 'react'
import { Link } from 'gatsby'

const Pagination = ({ pageContext, pathPrefix }) => {
  //const { previousPagePath, nextPagePath } = pageContext

  const {hasNextPage, pageNumber} = pageContext
  let previousLink = null
  let nextLink = null



  if (!pageNumber) {
    previousLink = null
  } else if (2 === pageNumber) {
    previousLink = `${pathPrefix}`
  } else if (2 < pageNumber) {
    previousLink = `${pathPrefix}/${pageNumber - 1}`
  }

  if (hasNextPage) {
    nextLink = `${pathPrefix}/${pageNumber + 1}`
  }

  return (
    <nav className="pagination my-3" role="navigation">
      <div className="container">
        <div className="row">
          
          <div className="col-6 navbar-item text-left">
            {previousLink && (
              <Link to={previousLink} rel="prev">
                Previous
              </Link>
            )}
          </div>

          <div className="col-6 navbar-item text-right">
            {nextLink && (
              <Link to={nextLink} rel="next">
                Next
              </Link>
            )}
          </div>

        </div>
      </div>
    </nav>
  )
}

export default Pagination
