import React from 'react'
import PropTypes from 'prop-types'
import { Fade } from "react-slideshow-image"
import BackgroundImage from 'gatsby-background-image'

const CarouselHero = ({ images, config, content }) => {
  const settings = {
    duration: 5000,
    autoplay: true,
    transitionDuration: 1000,
    arrows: false,
    infinite: true,
    easing: "ease",
    ...config
  }

  return (
    <>
      <Fade {...settings}>
        {images && images.map((image, i) => (
          <BackgroundImage
            key={`carouselHero_${i}`}
            Tag="div"
            className="bg-image aspect-auto text-shadow"
            fluid={image}
            style={{
              backgroundPosition: 'bottom right'
            }}>
            {content}
          </BackgroundImage>
        ))}
      </Fade>
    </>
  )
}

CarouselHero.propTypes = {
  images: PropTypes.instanceOf(Array)
}

export default CarouselHero
