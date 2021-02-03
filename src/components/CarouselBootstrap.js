import React from 'react'
import PropTypes from 'prop-types'
import Carousel from 'react-bootstrap/Carousel'

const CarouselBootstrap = () => {
  return (
    <Carousel className="carousel-fade carousel-indicators-left carousel-two-column overlap-top" interval={100000}>
      {[...Array(3)].map((x, i) =>
        <Carousel.Item>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img
                className="d-block w-100"
                src="https://placeimg.com/640/500/animals"
                alt="First slide"
              />
            </div>
            <div className="col-lg-6">
              <h2>Lorem Slide Title {i}</h2>
              <hr className="hr-xs border-green ml-0"/>
              <p>lorem description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quidem odio aliquam, iste laborum ad obcaecati vitae necessitatibus blanditiis maiores voluptate sunt sit suscipit quo quis nam. Obcaecati, adipisci numquam.</p>
              <a href="#" className="btn btn-gradient-green-cyan">Learn More</a>
            </div>
          </div>
        </Carousel.Item>
      )}
    </Carousel>
  )
}

CarouselBootstrap.propTypes = {

}

export default CarouselBootstrap
