import React, { Fragment, useEffect, useRef, useState } from 'react';
import Primarynav from './Primarynav'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"
// import PropTypes from 'prop-types'

const Header = () => {

  const data = useStaticQuery(graphql`
    query HeaderQuery2 {
      wpcontent {
        generalSettings {
          title
        }
      }
      logo: file(relativePath: {eq: "logo.png"}) {
        publicURL
        absolutePath
        childImageSharp {
          fixed {
           srcWebp
          }
        }
      }      
    }
  `)

 console.log("data.logo.childImageSharp.fixed.srcWebp",data.logo.childImageSharp.fixed.srcWebp)
  const [isSticky, setSticky] = useState(false);
  const [arrowPos, setArrowPos] = useState(false);
  const scrollPositionRef = useRef(null);

  
  const handleScroll = () => {
    if (scrollPositionRef.current) {
      if(scrollPositionRef.current.getBoundingClientRect().top < 0){
        document.body.classList.add('has-scrolled');
        setSticky(true);
      } else {
        document.body.classList.remove('has-scrolled');
        setSticky(false);
      }      
    }
  };

  const handleArrowMove = (leftPosition) => {
    setArrowPos(leftPosition)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  return (
    <Fragment>
      <div ref={scrollPositionRef}></div>
      <header id="pageHeader" className={`header sticky-wrapper ${isSticky ? 'sticky' : ''}`} >
        <Primarynav onHighlightChange={handleArrowMove} />
        <div className="nav-pointer">
          <svg version="1.1"  x="0px" y="0px" viewBox="0 0 6000 241" style={{marginLeft:arrowPos}}>
            <g id="background">
              <polygon points="6000.5,240.5 3007,240.5 3000.5,232.5 2993.81,240.5 -0.5,240.5 -0.5,0.5 6000.5,0.5 	"/>
            </g>
            <g id="outline">
              <polyline style={{fill:'transparent',stroke:'#FFFFFF'}} points="6000.5,240.5 3007,240.5 3000.5,232.5 2993.81,240.5 -0.5,240.5 	"/>
            </g>
          </svg>
        </div>
      </header>

    </Fragment>
  )
}

Header.propTypes = {

}

export default Header