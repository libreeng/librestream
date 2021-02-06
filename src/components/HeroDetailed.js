import React, {useEffect, useRef } from 'react'
import Img from "gatsby-image"
import vectorshape from '../img/vectorshape.svg'
 

const HeroDetailed = ({ data, image }) => {

  return (
    <section className="hero bg-gradient-blue">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 className="text-white">Onsight — The Augmented Reality Knowledge Platform Transforming Your Workforce</h1>
            <p className="lead text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae sed rerum laboriosam architecto quibusdam debitis, quas inventore, reprehenderit, recusandae at minus</p>
            <hr className="hr-xs ml-0 border-green" />
            {/* <button type="button" className="btn btn-lg btn-secondary">Call To Action »</button> */}
          </div>
          <div className="col-lg-6">
            {image && (
              <div className="text-center">
                <img src="https://via.placeholder.com/350" className="img-fluid" alt="" />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="container vectorshape-container" data-depth="0.7">
        <img className="vectorshape position-absolute" src={vectorshape} alt="Vector Shape" />
      </div>
    </section>
  )
}

export default HeroDetailed