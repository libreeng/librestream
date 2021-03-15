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
  const {allWpCaseStudy: { edges: caseStudies }} = useStaticQuery(graphql`
    query FeaturedCaseStudies {
      allWpCaseStudy(sort: { fields: [date], order: DESC }) {
        edges {
          post: node {
            id
            title
            uri
            acfPostTypeUseCase {
              caption
              description
              logoImage {
                srcSet
                sourceUrl
              }
              featuredImage {
                srcSet
                sourceUrl
              }
            }
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
                  numberOfSlides: 3
                }
              },
            ]
          }
        }}
      >
        {caseStudies && caseStudies.map(({post}) => <Card key={post.id} post={post} className="p-2" />)}

      </Carousel>
      <Dots />
    </section>
  )
}

CaseStudies.propTypes = {
  heading: PropTypes.string
}


export default CaseStudies
