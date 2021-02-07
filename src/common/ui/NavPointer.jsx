import React from 'react'
import PropTypes from 'prop-types'

const NavPointer = ({ arrowPos }) => {
  return (
    <div className="nav-pointer">
      <svg version="1.1" x="0px" y="0px" viewBox="0 0 6000 241" style={{ marginLeft: arrowPos }}>
        <g id="background">
          <polygon points="6000.5,240.5 3007,240.5 3000.5,232.5 2993.81,240.5 -0.5,240.5 -0.5,0.5 6000.5,0.5 	" />
        </g>
        <g id="outline">
          <polyline style={{ fill: 'transparent', stroke: '#FFFFFF' }} points="6000.5,240.5 3007,240.5 3000.5,232.5 2993.81,240.5 -0.5,240.5 	" />
        </g>
      </svg>
    </div>
  )
}

NavPointer.propTypes = {
  arrowPos: PropTypes.number
}

export default NavPointer
