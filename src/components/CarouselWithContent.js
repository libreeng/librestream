import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import Carousel, { Dots, slidesToShowPlugin, slidesToScrollPlugin, arrowsPlugin } from '@brainhubeu/react-carousel';
import CardWithLogo from '../components/CardWithLogo'

const CarouselWithContent = () => {
  return (
    <>
    <Carousel
      plugins={[
        'infinite',
        'arrows',
        'centered',
        {
          resolve: slidesToShowPlugin,
          options: {
           numberOfSlides: 4,
          }
        },
      ]}
      breakpoints={{
        640: {
          plugins: [
           {
             resolve: slidesToShowPlugin,
             options: {
              numberOfSlides: 1
             }
           },
         ]
        },
        900: {
          plugins: [
           {
             resolve: slidesToShowPlugin,
             options: {
              numberOfSlides: 2
             }
           },
         ]
        }
      }}
    >

      
      <img src='https://picsum.photos/id/237/1000' className="img-fluid"/>
      <img src='https://picsum.photos/id/238/1000' className="img-fluid"/>
      <img src='https://picsum.photos/id/239/1000' className="img-fluid"/>
      <img src='https://picsum.photos/id/237/1000' className="img-fluid"/>
      <img src='https://picsum.photos/id/238/1000' className="img-fluid"/>
      <img src='https://picsum.photos/id/239/1000' className="img-fluid"/>
    </Carousel>
    <Dots></Dots>
    </>
  )
}

CarouselWithContent.propTypes = {

}

export default CarouselWithContent

