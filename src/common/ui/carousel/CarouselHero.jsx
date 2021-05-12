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
      <div></div>
    </>
  )
}

CarouselHero.propTypes = {
  images: PropTypes.instanceOf(Array)
}

export default CarouselHero
