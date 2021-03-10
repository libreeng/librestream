import React from 'react'
// import PropTypes from 'prop-types'
import parse from "html-react-parser"

const Stat = ({ number, descriptor, title }) => {
  return (
    <div className="col">
      <div className="stat">
        <div className="stat-number">
          {number && number }
          {descriptor && (
            <span className="stat-descriptor">{descriptor}</span>
          )}

        </div>
        {title && (
          <h6 className="stat-description text-uppercase">{title && parse(title)}</h6>
        )}

      </div>
    </div>
  )
}

Stat.propTypes = {

}

export default Stat
