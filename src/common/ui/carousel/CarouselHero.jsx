/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import PropTypes from 'prop-types'
import Image from "gatsby-image"
import Slider from "react-slick"

const CarouselHero = ({ images, config }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    ...config
  }

  return (

    <Slider {...settings}>
      {images && images.map(image => {
        return (
          <Image fluid={image.fluid} alt={image.altText} className="img-cover" />
        )
      })}
    </Slider>
  )
}

CarouselHero.propTypes = {
  config: PropTypes.instanceOf(Object),
  images: PropTypes.instanceOf(Array)
}

export default CarouselHero
