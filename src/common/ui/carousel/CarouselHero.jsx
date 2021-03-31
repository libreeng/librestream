/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import PropTypes from 'prop-types'
import Image from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'
import Slider from "react-slick"

const CarouselHero = ({ images, config }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1400,
    autoplay: true,
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    fade: true,
    ...config
  }

  return (

    <Slider {...settings}>
      {images && images.map(image => {
        return (
          image && (
            <BackgroundImage Tag="div" className="bg-image aspect-16x9" fluid={image} />
            // <Image fluid={image} alt="" className="img-cover" />
          )
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
