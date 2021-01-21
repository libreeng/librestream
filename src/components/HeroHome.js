import React, {useEffect, useRef } from 'react'
import Img from "gatsby-image"
import vectorshape from '../img/vectorshape.svg'
import Parallax from 'parallax-js' 

const HeroHome = ({ data }) => {
  const heroParallax = useRef(null);

  useEffect(() => {
    const parallaxInstance = new Parallax(heroParallax.current, {
      relativeInput: false,
      clipRelativeInput: true,
      hoverOnly: false,
      pointerEvents: true
    })

    //parallaxInstance.enable();

    return () => parallaxInstance.disable();
  }, [])

  return (
    <div className="hero hero-home" ref={heroParallax}>
      <div className="bkg" data-depth="0.2">
        <Img className="w-100" fluid={data.homeHeroBkg.childImageSharp.fluid} alt="Background" />
      </div>
      <div className="worker position-absolute" data-depth="0.4">
        <Img className="" fluid={data.homeHeroWorker.childImageSharp.fluid} alt="Worker" />
      </div>
      <div className="content d-flex position-absolute" data-depth="0.1">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-xl-5">
              <h1 className="text-white">Scale Knowledge Across Your Workforce Like Never Before.</h1>
              <p className="lead text-white">Librestream powers the most innovative and proven AR & AI solutions for leading industrial organizations to improve efficiency, performance and safety, shaping a more resilient workforce for the future ahead.</p>
              <button type="button" className="btn btn-lg btn-primary">Call To Action »</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container vectorshape-container"  data-depth="0.7">
        <img className="vectorshape position-absolute" src={vectorshape} alt="Vector Shape"/>
      </div>
    </div>
  )
}

export default HeroHome