import React from 'react'
import { Link } from 'gatsby'
// import PropTypes from 'prop-types'

const Filters = () => {
  return (
    <div className="d-flex align-items-start my-5">
      <h5 className="text-uppercase">Filter news by:</h5>
      <div className="col pb-2 border-left border-primary ml-3">
        <Link to="/press-releases" className="h5 text-primary text-uppercase">Press Releases</Link>
      </div>
      <div className="col pb-2 border-left border-primary ml-3">
        <Link to="/in-the-news" className="h5 text-primary text-uppercase">In The News</Link>
      </div>
      <div className="col pb-2 border-left border-primary ml-3">
        <Link to="/events" className="h5 text-primary text-uppercase">Events</Link>
      </div>
    </div>
  )
}

Filters.propTypes = {

}

export default Filters
