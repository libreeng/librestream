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
    slidesToShow: 3,
    slidesToScroll: 3,
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
            const externalLink = post.nodeType === 'Post'
              ? post.acfPostTypeNews?.externalSource?.externalLink
              : post.acfPostTypeUseCase?.externalSource?.externalLink

            const output = externalLink ? 
              <a
                key={post.id}
                href={externalLink.url}
                target={'_blank'}
                rel={'noopener'}
              >
                {post.nodeType === 'Post'
                  ? <PostCard post={post} showBracket={settings.showBracket} />
                  : <UseCaseCard post={post} />}
              </a>
            :
              <Link
                key={post.id}
                to={post.uri}
                rel={''}
              >
                {post.nodeType === 'Post'
                  ? <PostCard post={post} showBracket={settings.showBracket} />
                  : <UseCaseCard post={post} />}
              </Link>

            return output
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
