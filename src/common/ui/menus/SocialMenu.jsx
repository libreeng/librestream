import React from 'react'
// import PropTypes from 'prop-types'
import FacebookFillIcon from 'remixicon-react/FacebookFillIcon';
import TwitterFillIcon from 'remixicon-react/TwitterFillIcon';
import LinkedinFillIcon from 'remixicon-react/LinkedinFillIcon';
import MailFillIcon from 'remixicon-react/MailFillIcon';

const SocialMenu = () => {
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
      {/* <div className="socialnav">
        {
          options.socialLinks.map(({ site,url,svgCode },index) => (
            <a href={url} title={site} className="mr-3" key={`social-${index}`} dangerouslySetInnerHTML={{ __html: svgCode }}></a>
          ))
        }
      </div> */}
    </>
  )
}

SocialMenu.propTypes = {

}

export default SocialMenu
