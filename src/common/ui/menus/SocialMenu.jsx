import React from 'react'
// import PropTypes from 'prop-types'
import parse from "html-react-parser"
import { useSiteFooter } from '../../hooks/useSiteFooter'


const SocialMenu = ({id}) => {
  const { options } = useSiteFooter()
  return (
    <>
      <div id={id} className="socialnav d-flex">
        {
          options.socialLinks.map(({ site,url,svgCode }, index) => (
            <a href={url} title={site} target="_blank" rel="noreferrer" className="mr-3 icon-circle-bg" key={`social-${index}`}>
              {parse(svgCode)}
            </a>
          ))
        }
      </div>
    </>
  )
}

SocialMenu.propTypes = {

}

export default SocialMenu
