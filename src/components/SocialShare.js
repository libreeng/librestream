import React from 'react'
import PropTypes from 'prop-types'
import FacebookFillIcon from 'remixicon-react/FacebookFillIcon';
import TwitterFillIcon from 'remixicon-react/TwitterFillIcon';
import LinkedinFillIcon from 'remixicon-react/LinkedinFillIcon';
import MailFillIcon from 'remixicon-react/MailFillIcon';
const SocialShare = props => {
  return (
    <>
      <div className="border-bracket">
        <p className="mt-3 mb-0">Share this story.</p>
        <div className="d-flex">
          <div className="icon-circle-bg bg-light mr-3">
            <TwitterFillIcon size="14"/>
          </div>
          <div className="icon-circle-bg bg-light mr-3">
            <FacebookFillIcon size="14"/>
          </div>
          <div className="icon-circle-bg bg-light mr-3">
            <LinkedinFillIcon size="14"/>
          </div>
          <div className="icon-circle-bg bg-light mr-3">
            <MailFillIcon size="14"/>
          </div>
        </div>
      </div> 
    </>
  )
}

SocialShare.propTypes = {

}

export default SocialShare
