import React from 'react'
// import PropTypes from 'prop-types'

const Filters = () => {
  return (
    <div className="d-flex align-items-start my-5">
      <h5 className="text-uppercase">Filter news by:</h5>
      <div className="col pb-2 border-left border-primary ml-3">
        <h5 className="text-primary text-uppercase">Press Releases</h5>
      </div>
      <div className="col pb-2 border-left border-primary ml-3">
        <h5 className="text-primary text-uppercase">In The News</h5>
      </div>
      <div className="col pb-2 border-left border-primary ml-3">
        <h5 className="text-primary text-uppercase">Events</h5>
      </div>
    </div>
  )
}

Filters.propTypes = {

}

export default Filters
