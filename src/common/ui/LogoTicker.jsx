/* eslint-disable react/no-array-index-key */
import React from 'react'
import PropTypes from 'prop-types'

const LogoTicker = ({ items }) => {
  // TODO: Add ticker motion
  return (
    <div className="d-flex align-items-center justify-content-between">
      {items && items.map((item, index) => (
        <img key={`${item.id}_${index}`} src={item.logo.localFile.publicURL} className="img-fluid m-3" alt={item.logo.altText} />
      ))}
    </div>
  )
}

LogoTicker.propTypes = {
  items: PropTypes.instanceOf(Array)
}

export default LogoTicker
