import React from 'react'
import PropTypes from 'prop-types'
import Carousel from 'react-bootstrap/Carousel'
import { BgImage } from 'gbimage-bridge'

const CarouselOffset = ({ slides, interval = 10000 }) => {
  return (
    <section className="carousel-offset">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Carousel className="carousel-fade" interval={interval}>
              {slides && slides.map((slide, i) => {
                const bgImage = slide.carouselSlideFeaturedImage?.localFile?.childImageSharp?.gatsbyImageData
                return (
                  <Carousel.Item key={i}>
                    <div className="row">
                      <div className="col-12 col-lg-5 col-xl-6">
                        {slide.carouselSlideFeaturedImage && (
                          <BgImage
                            className="bg-image"
                            image={bgImage}
                          />
                        )}
                      </div>
                      <div className="col-12 col-lg-7 col-xl-6">
                        <div className="p-1">
                          <h2 className="h1 mt-3">{slide.carouselSlideTitle && slide.carouselSlideTitle}</h2>
                          <hr className="hr-xs border-green ml-0" />
                          <p>{slide.carouselSlideDescription && slide.carouselSlideDescription}</p>
                          {slide.carouselSlideLink && (
                            <a href={slide.carouselSlideLink.url} target={slide.carouselSlideLink.target} className="btn btn-secondary btn-lg mt-4">{slide.carouselSlideLink.title}</a>
                          )}
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}

CarouselOffset.propTypes = {
  slides: PropTypes.instanceOf(Array)
}

export default CarouselOffset
