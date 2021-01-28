import React, {useEffect, useRef } from 'react'
import Img from "gatsby-image"
import vectorshape from '../img/vectorshape.svg'
 

const HeroCaseStudy = ({ data }) => {

  return (
    <section className="hero bg-gradient-blue">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-md-6">
            <h1 className="text-white">SGS Complete 30,000 Inspections</h1>
            <p className="lead text-white">Powered By Librestream.</p>
          </div>
          <div className="col-md-6 text-lg-right">
            <img src="https://via.placeholder.com/150" alt=""/>
          </div>
        </div>
      </div>
      <div className="container vectorshape-container"  data-depth="0.7">
        <img className="vectorshape position-absolute" src={vectorshape} alt="Vector Shape"/>
      </div>
    </section>
  )
}

export default HeroCaseStudy