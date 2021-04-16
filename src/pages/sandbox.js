import React from 'react'
import PropTypes from 'prop-types'
import SEO from '../containers/SEO'

const sandbox = () => {
  return (
    <div>
      <SEO pageSEO={{ title: 'Toms Mom' }} />
      <h1>SANDBOX</h1>
    </div>
  )
}

sandbox.propTypes = {

}

export default sandbox
