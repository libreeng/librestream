import React from 'react'
// import PropTypes from 'prop-types'
import FacebookFillIcon from 'remixicon-react/FacebookFillIcon';
import TwitterFillIcon from 'remixicon-react/TwitterFillIcon';
import LinkedinFillIcon from 'remixicon-react/LinkedinFillIcon';
import MailFillIcon from 'remixicon-react/MailFillIcon';

const SocialNav = () => {
  return (
    <>
      <div className="socialnav d-flex">
        <div className="icon-circle-bg mr-3">
          <TwitterFillIcon size="14" />
        </div>
        <div className="icon-circle-bg mr-3">
          <FacebookFillIcon size="14" />
        </div>
        <div className="icon-circle-bg mr-3">
          <LinkedinFillIcon size="14" />
        </div>
        <div className="icon-circle-bg mr-3">
          <MailFillIcon size="14" />
        </div>
      </div>
    </>
  )
}

SocialNav.propTypes = {

}

export default SocialNav
