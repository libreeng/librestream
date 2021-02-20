import React from 'react'
import PropTypes from 'prop-types'
import BackgroundImage from 'gatsby-background-image'

const Card = ({ title, image, url }) => {
  return (
    <>
      <a href={url} className="card border-0">
        {/* <div 
          className="bg-image aspect-1x1"
          style={{
            backgroundImage: `url(${image})`
          }}
        /> */}
        <BackgroundImage
          Tag="div"
          className="bg-image aspect-1x1"
          fluid={image}
        />
        <div className="card-footer bg-transparent text-uppercase px-0">
          {title && title}
        </div>
      </a>
    </>
  )
}

Card.propTypes = {

}

export default Card

