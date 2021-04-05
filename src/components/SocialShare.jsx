import React from 'react'
// import PropTypes from 'prop-types'
import SocialNav from './SocialNav'
import SocialMenu from '../common/ui/menus/SocialMenu'

const SocialShare = () => {
  return (
    <>
      <div className="border-bracket">
        <p className="mt-3 mb-0">Share this story.</p>
        {/* <SocialNav /> */}
        <SocialMenu id="socialshare-page" />
      </div>
    </>
  )
}

SocialShare.propTypes = {

}

export default SocialShare
