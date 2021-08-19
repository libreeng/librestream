/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "gatsby"
//import Slider from "react-slick"
import PostCard from '../cards/PostCard'
import UseCaseCard from '../cards/UseCaseCard'

import TinySlider from "tiny-slider-react";

const Carousel = ({ posts, config }) => {

  const tsSettings = {
    lazyload: false,
    nav: true,
    mouseDrag: true,
    loop: false,
    items: 1,
    gutter: 8,
    responsive: {
      480: {
        items: 2
      },
      768: {
        items: 3
      },
    }
  };

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
  const clickEvent = slide => {
    console.log("clickEvent",slide);
  };
  return (
    <>
    

    <div className="row">
      <div className="col-12">
      <div className="overflow-hidden">
    <div className="row">
      <div className="col-12">
        <TinySlider settings={tsSettings} onInit={clickEvent}>
          {posts && posts.map(post => {
            const externalLink = post.nodeType === 'Post'
              ? post.acfPostTypeNews?.externalSource?.externalLink
              : post.acfPostTypeUseCase?.externalSource?.externalLink

            const url = externalLink
              ? externalLink.url
              : post.uri

            return (
              <div className=''>
                <Link
                  key={post.id}
                  to={url}
                  target={externalLink ? '_blank' : ''}
                  rel={externalLink ? 'noopener' : ''}
                >
                  {post.nodeType === 'Post'
                    ? <PostCard post={post} showBracket={settings.showBracket} />
                    : <UseCaseCard post={post} />}
                </Link>
              </div>
            )
          })}
      </TinySlider>
      </div>
    </div>
    </div>
      </div>
    </div>
    
    </>
  )
}

Carousel.propTypes = {
  config: PropTypes.instanceOf(Object),
  posts: PropTypes.instanceOf(Array)
}

export default Carousel


/*






    <Slider {...settings}>
          {posts && posts.map(post => {
            const externalLink = post.nodeType === 'Post'
              ? post.acfPostTypeNews?.externalSource?.externalLink
              : post.acfPostTypeUseCase?.externalSource?.externalLink

            const url = externalLink
              ? externalLink.url
              : post.uri

            return (
              <Link
                key={post.id}
                to={url}
                target={externalLink ? '_blank' : ''}
                rel={externalLink ? 'noopener' : ''}
              >
                {post.nodeType === 'Post'
                  ? <PostCard post={post} showBracket={settings.showBracket} />
                  : <UseCaseCard post={post} />}
              </Link>
            )
          })}
        </Slider>
    */




/**
 * PLACE THIS CSS IN src/styles/_carousel.scss
 */

        
/* TINY SLIDER */
/*
.tns-slider{
  overflow:hidden;
}
.tns-item{
  border:1px solid green !important;
}
.tns-item .card{
  padding:0 !important;
  border:1px solid red !important;
}
*/
/* END: TINY SLIDER */
