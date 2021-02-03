import React from 'react'
import PropTypes from 'prop-types'

const Stat = () => {
  return (
    <div className="col">
      <div className="stat">
        <div className="stat-number">
          120
          <span className="stat-descriptor">%</span>
        </div>
        <h6 className="stat-description text-uppercase">lorem stat description </h6>
      </div>
    </div>
  )
}

Stat.propTypes = {

}

export default Stat
