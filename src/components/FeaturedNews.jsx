/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql, Link } from "gatsby"
import Slider from "react-slick"
import PostCard from '../common/ui/cards/PostCard'

const FeaturedNews = ({ heading }) => {
  const { allWpPost: { nodes: news } } = useStaticQuery(graphql`
    query FeaturedNews {
      allWpPost(filter: {
        categories: {nodes: {elemMatch: {name: {eq: "Blog"}}}}},
        sort: {order: DESC, fields: date},
        limit: 10
        ) {
        nodes {
          id
          title
          uri
          date(formatString: "MMM, Y")
          acfPostTypeNews {
            mainImage {
              altText
              srcSet
              sourceUrl
              localFile {
                childImageSharp {
                  fluid(maxWidth: 500, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    centerMode: false,
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
      <div className="container">
        <div className="row mb-4">
          <div className="col-12">
            <h3>{heading}</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Slider {...settings}>
              {news && news.map(post => (
                <Link to={post.uri} key={post.id}>
                  <PostCard post={post} />
                </Link>
              ))}
            </Slider>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-12">
            <div className="text-center">
              <a href="/news" className="btn btn-outline-secondary text-dark">View All News</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

FeaturedNews.propTypes = {
  heading: PropTypes.string
}

export default FeaturedNews
