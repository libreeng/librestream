import React from 'react'
import Img from "gatsby-image"
import vectorshape from '../img/vectorshape.svg'

const HeroDefault = ({ title, subtitle, subnav, logo }) => {
  

  return (
    <div className="hero hero-default">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-lg-6">
            <h1 className="title mt-5 text-white">{title}</h1>
            {subtitle && (<h2 className="text-white">{subtitle}</h2>)}
            {subnav && (
              <ul className="nav mt-4">
                {[...Array(3)].map((x, i) => (
                  <li className="nav-item" key={i}>
                    <a href="#" className="nav-link">Link Title</a>
                  </li>
                )
                )}
              </ul>
            )}
          </div>
          <div className="col-lg-6">
            {logo && (
            <div className="text-lg-right">
              <img src="https://via.placeholder.com/150" className="img-fluid" alt="" />
            </div>
            )}
          </div>
        </div>
      </div>
  
      {/* <div className="container vectorshape-container"  data-depth="0.7">
        <img className="vectorshape position-absolute" src={vectorshape} alt="Vector Shape"/>
      </div> */}
    </div>
  )
}

export default HeroDefault