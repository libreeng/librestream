import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import Carousel, { Dots, slidesToShowPlugin, slidesToScrollPlugin, arrowsPlugin } from '@brainhubeu/react-carousel';
import CardWithLogo from './CardWithLogo'

const CarouselCards = () => {
  return (
    <>
    <Carousel
      plugins={[
        'infinite',
        'centered',
        'infinite',
        {
          resolve: slidesToShowPlugin,
          options: {
           numberOfSlides: 4,
          }
        }
        // {
        //   resolve: autoplayPlugin,
        //   options: {
        //     interval: 4000,
        //   }
        // },
      ]}
      // breakpoints={{
      //   640: {
      //     plugins: [
      //      {
      //        resolve: slidesToShowPlugin,
      //        options: {
      //         numberOfSlides: 1
      //        }
      //      },
      //    ]
      //   },
      //   900: {
      //     plugins: [
      //      {
      //        resolve: slidesToShowPlugin,
      //        options: {
      //         numberOfSlides: 2
      //        }
      //      },
      //    ]
      //   }
      // }}
    >
      <div className="p-2">
        <CardWithLogo></CardWithLogo>
      </div>
      <div className="p-2">
        <CardWithLogo></CardWithLogo>
      </div>
      <div className="p-2">
        <CardWithLogo></CardWithLogo>
      </div>
      <div className="p-2">
        <CardWithLogo></CardWithLogo>
      </div>
    </Carousel>
    <Dots></Dots>
    </>
  )
}

CarouselCards.propTypes = {

}

export default CarouselCards

