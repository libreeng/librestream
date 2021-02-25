import React from 'react'
import PropTypes from 'prop-types'
import Carousel from 'react-bootstrap/Carousel'
import BackgroundImage from 'gatsby-background-image'

const CarouselBootstrap = ({ slides }) => {
  return (
    <Carousel className="carousel-fade carousel-indicators-left carousel-two-column overlap-top" interval={100000}>
      {slides && slides.map( (slide, i) => (
        <Carousel.Item key={i}>
          <div className="row align-items-center">
            <div className="carousel-slide-number">0{i}</div>
            <div className="col-lg-6">
              {slide.carouselSlideFeaturedImage && (
                <BackgroundImage
                  Tag="div"
                  className="bg-image aspect-4x3"
                  fluid={slide.carouselSlideFeaturedImage.localFile.childImageSharp.fluid}
                />
              )}
            </div>
            <div className="col-lg-6">
              <h2>{slide.carouselSlideTitle && slide.carouselSlideTitle}</h2>
              <hr className="hr-xs border-green ml-0" />
              <p>{slide.carouselSlideDescription && slide.carouselSlideDescription}</p>
              {slide.carouselSlideLink && (
                <a href={slide.carouselSlideLink} className="btn btn-gradient-green-cyan">Learn More</a>
              )}
            </div>
          </div>
        </Carousel.Item>
        )
      )}
    </Carousel>
  )
}

CarouselBootstrap.propTypes = {

}

export default CarouselBootstrap
