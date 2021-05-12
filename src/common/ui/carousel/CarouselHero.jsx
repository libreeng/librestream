import React from 'react'
import PropTypes from 'prop-types'
import { Fade } from "react-slideshow-image"
import { BgImage } from 'gbimage-bridge'

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
          <BgImage
            key={`carouselHero_${i}`}
            className="bg-image aspect-hero text-shadow"
            image={image}
            style={{
              backgroundPosition: 'bottom right'
            }}>
            {content}
          </BgImage>
        ))}
      </Fade>
    </>
  )
}

CarouselHero.propTypes = {
  images: PropTypes.instanceOf(Array)
}

export default CarouselHero
