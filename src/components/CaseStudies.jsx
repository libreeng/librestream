/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import Slider from "react-slick"
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <section className="bg-white">
      <Slider {...settings}>
        {caseStudies && caseStudies.map(({ post }) => <Card key={post.id} post={post} className="p-2" />)}
      </Slider>
    </section>
  )
}

CaseStudies.propTypes = {
  heading: PropTypes.string
}


export default CaseStudies
