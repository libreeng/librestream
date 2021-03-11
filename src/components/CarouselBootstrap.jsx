import React from 'react'
import PropTypes from 'prop-types'
import Carousel from 'react-bootstrap/Carousel'
import BackgroundImage from 'gatsby-background-image'

const CarouselBootstrap = ({ slides, footer, interval = 10000 }) => {
  return (
    <section className="bg-gradient-blue text-white folder-border folder-bottom">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Carousel className="carousel-fade carousel-indicators-left carousel-two-column overlap-top" interval={interval}>
              {slides && slides.map((slide, i) => (
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
          </div>
        </div>
        {footer && (
          <>
            <hr className="hr-white" />
            <div className="row">
              <div className="col-lg-4 border-left border-primary">
                {footer.title && <h3>{footer.title}</h3>}
              </div>
              <div className="col-lg-4 border-left border-primary">
                {footer.description && footer.description}
              </div>
              <div className="col-lg-4 border-left border-primary">
                {footer.checklist && (
                  <ul className="checklist">
                    {footer.checklist.checklistItem.map((item, i) =>
                      <li key={`checklist_${i}`}>{item.checklistItem}</li>
                    )}
                  </ul>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  )
}

CarouselBootstrap.propTypes = {
  slides: PropTypes.instanceOf(Array)
}

export default CarouselBootstrap
