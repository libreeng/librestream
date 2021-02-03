import React, {useEffect, useRef } from 'react'
import Img from "gatsby-image"
import vectorshape from '../img/vectorshape.svg'

const HeroHome = ({ data }) => {
  console.log(data.homeHeroBkg.childImageSharp.fluid)
  return (
    <div className="hero hero-home"
      style={{
        backgroundImage: `url(https://via.placeholder.com/1900x1000)`
      }}
    >
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-xl-5">
              <h1 className="text-white">Scale Knowledge Across Your Workforce Like Never Before.</h1>
              <p className="lead text-white">Librestream powers the most innovative and proven AR &amp; AI solutions for leading industrial organizations to improve efficiency, performance and safety, shaping a more resilient workforce for the future ahead.</p>
              <button type="button" className="btn btn-lg btn-gradient-green-cyan">Call To Action</button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container vectorshape-container"  data-depth="0.7">
        <img className="vectorshape position-absolute" src={vectorshape} alt="Vector Shape"/>
      </div> */}
    </div>
  )
}

export default HeroHome