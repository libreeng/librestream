import React, {useEffect, useRef } from 'react'
import Img from "gatsby-image"
import vectorshape from '../img/vectorshape.svg'
 

const HeroDetailed = ({ data }) => {

  return (
    <section className="hero bg-gradient-blue">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-white">Onsight — The Augmented Reality Knowledge Platform Transforming Your Workforce</h1>
            <p className="lead text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae sed rerum laboriosam architecto quibusdam debitis, quas inventore, reprehenderit, recusandae at minus</p>
            <button type="button" className="btn btn-lg btn-secondary">Call To Action »</button>
          </div>
        </div>
      </div>
      <div className="container vectorshape-container"  data-depth="0.7">
        <img className="vectorshape position-absolute" src={vectorshape} alt="Vector Shape"/>
      </div>
    </section>
  )
}

export default HeroDetailed