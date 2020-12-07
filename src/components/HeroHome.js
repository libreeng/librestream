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
    <div className="hero hero--home" ref={heroParallax}>

        <div className="bkg" data-depth="0.2">
          <Img className="w-100" fluid={data.homeHeroBkg.childImageSharp.fluid} alt="Background" />
        </div>

        <div className="worker position-absolute" data-depth="0.4">
          <Img className="" fluid={data.homeHeroWorker.childImageSharp.fluid} alt="Worker" />
        </div>
      
        <div className="content d-flex position-absolute" data-depth="0.1">
          <div className="container">
            <div className="row">
              <div className="col-5 col-xl-5">
            
                  <h2 className="title is-size-3 has-text-weight-bold is-bold-light text-white" >Empowering the Workforce <div style={{color:'#49EBEA'}}>through Industrial AR, AI and IoT.</div></h2>
                  <p className="subtitle text-white">Onsight captures, correlates and presents information, providing 'just in time' training and enhancing safety for the AI Connected Expert of the future.</p>
                  <button type="button" className="btn btn-lg btn-primary">Call To Action »</button>
                
              </div>
            </div>
          </div>
        </div>

        <div className="container vectorshape--container"  data-depth="0.7">
          <img className="vectorshape position-absolute" src={vectorshape} alt="Vector Shape"/>
        </div>

        
        <div class="corner-triangle container"></div>

      </div>
  )
}

export default HeroHome