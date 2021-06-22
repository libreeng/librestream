/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "gatsby"
//import Slider from "react-slick"
import PostCard from '../cards/PostCard'
import UseCaseCard from '../cards/UseCaseCard'
import { Helmet } from "react-helmet"
import {default as BootstrapCarousel} from 'react-bootstrap/Carousel'

const uniqueID = Math.floor(Math.random() * 100);

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

  
  const showPost = (post) => {
    const externalLink = post.nodeType === 'Post'
      ? post.acfPostTypeNews?.externalSource?.externalLink
      : post.acfPostTypeUseCase?.externalSource?.externalLink

    if(externalLink){
      return (
        <a key={post.id} href={externalLink.url} target='_blank' rel='noopener'>
          {post.nodeType === 'Post'
            ? <PostCard post={post} showBracket={settings.showBracket} />
            : <UseCaseCard post={post} />}
        </a>
      )
    } else {
      return (
        <Link key={post.id} to={post.uri}>
          {post.nodeType === 'Post'
            ? <PostCard post={post} showBracket={settings.showBracket} />
            : <UseCaseCard post={post} />}
        </Link>
        )
    }
    
  }


  const getBootstrapCarouselPosts = (posts,index) => {    
    const minPerSlide = 2;
    var currentIndex = index
    let indexes = [currentIndex];
    for (i = 0; i < minPerSlide; ++i) {
      currentIndex++
      if(currentIndex >= posts.length){
        currentIndex = 0
      }
      indexes.push(currentIndex);
    }
    return (
      <BootstrapCarousel.Item key={`item-${index}`} className={`item-${index}`} >
        {indexes.map((thisIndex) => {   
          return (
            <div class="col-md-4">
              {showPost(posts[thisIndex])}
            </div>
          )
        })}
      </BootstrapCarousel.Item>
    )
  }



  return (  
    <div className="row">
      <div className="col-12">        
        <BootstrapCarousel interval={999999} className={`carousel-card cards-3 slide carousel-${uniqueID}`} id={`carousel-${uniqueID}`}>
          {posts && posts.map((post, i) => {           
              return getBootstrapCarouselPosts(posts,i)  
          })}
        </BootstrapCarousel>
      </div>
    </div>
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

/* USED FOR BOOTSTRAP CAROUSEL */
/*
.carousel-card.cards-3{
    .col-md-4{
        padding:0;
    }
    @media (max-width: 768px) {
        .carousel-inner .carousel-item > div {
            display: none;
        }
        .carousel-inner .carousel-item > div:first-child {
            display: block;
        }
    }

    .carousel-inner .carousel-item.active,
    .carousel-inner .carousel-item-next,
    .carousel-inner .carousel-item-prev {
        display: flex;
    }


    
    @media (min-width: 768px) {
        
        .carousel-inner .carousel-item-right.active,
        .carousel-inner .carousel-item-next {
        transform: translateX(33.333%);
        }
        
        .carousel-inner .carousel-item-left.active, 
        .carousel-inner .carousel-item-prev {
        transform: translateX(-33.333%);
        }
    }
    

    .carousel-inner .carousel-item-right,
    .carousel-inner .carousel-item-left{ 
        transform: translateX(0);
    }
}
*/
/* END: USED FOR BOOTSTRAP CAROUSEL */