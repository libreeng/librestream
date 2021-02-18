import React from 'react'
import PropTypes from 'prop-types'

const NextPrevMenu = ({ next, previous }) => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-between align-items-center">
              {previous && (
                <a href={previous.url} className="text-light d-flex align-items-center h4"><i className="icon-play icon-play-left mr-4" /> Previous Item</a>
              )}

              {next && (
                <a href={next.url} className="text-light d-flex align-items-center h4">Next Item <i className="icon-play ml-4" /></a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

NextPrevMenu.propTypes = {
  next: PropTypes.instanceOf(Object),
  previous: PropTypes.instanceOf(Object)
}

export default NextPrevMenu
