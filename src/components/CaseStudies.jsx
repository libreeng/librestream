import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import Carousel, {
  Dots,
  slidesToShowPlugin,
  // slidesToScrollPlugin,
  // arrowsPlugin,
  autoplayPlugin
} from '@brainhubeu/react-carousel'
import Card from '../common/ui/Card'

const CaseStudies = ({heading = 'Customer Use Cases'}) => {
  const data = useStaticQuery(graphql`
    query FeaturedCaseStudies {
      allWpCaseStudy(sort: { fields: [date], order: DESC }) {
        edges {
          post: node {
            id
            uri
            nodeType
          }
          next {
            id
          }
          previous {
            id
          }
        }
      }
    }
  `)

  console.log(data)


  return (
    <section className="bg-white">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12">
            <h2 className="text-uppercase">{heading}</h2>
          </div>
        </div>
      </div>
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
        {[...Array(20)].map((x, i) => <Card key={i} className="p-2" />)}

      </Carousel>
      <Dots />
    </section>
  )
}

CaseStudies.propTypes = {
  heading: PropTypes.string
}


export default CaseStudies
