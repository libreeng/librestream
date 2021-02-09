import React from 'react'
// import PropTypes from 'prop-types'
import Carousel, {
  Dots,
  slidesToShowPlugin,
  // slidesToScrollPlugin,
  // arrowsPlugin,
  autoplayPlugin
} from '@brainhubeu/react-carousel';

import Card from './Card'

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
          },
          {
            resolve: autoplayPlugin,
            options: {
              interval: 4000,
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
        {[...Array(20)].map((x, i) => <Card key={i} />)}

      </Carousel>
      <Dots />
    </>
  )
}

CarouselCards.propTypes = {

}

export default CarouselCards

