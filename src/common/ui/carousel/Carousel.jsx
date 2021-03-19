/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "gatsby"
import Slider from "react-slick"
import PostCard from '../cards/PostCard'
import UseCaseCard from '../cards/UseCaseCard'

const Carousel = ({ posts, config }) => {
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
    ],
    showBracket: false,
    ...config
  }

  return (
    <div className="row">
      <div className="col-12">
        <Slider {...settings}>
          {posts && posts.map(post => {

            return (
              <Link to={post.uri} key={post.id}>
                {post.nodeType === 'Post'
                  ? <PostCard post={post} showBracket={settings.showBracket} />
                  : <UseCaseCard post={post} />}
              </Link>
            )
          })}
        </Slider>
      </div>
    </div>
  )
}

Carousel.propTypes = {
  config: PropTypes.instanceOf(Object),
  posts: PropTypes.instanceOf(Array)
}

export default Carousel
