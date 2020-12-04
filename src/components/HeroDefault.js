import React from 'react'
import Img from "gatsby-image"
import vectorshape from '../img/vectorshape.svg'

const HeroDefault = ({ title }) => {
  

  return (
    <div className="hero--default">

      <div className="content d-flex" data-depth="0.1">
        <div className="container">
          <h2 className="title mt-5 mb-5 text-white" >{title}</h2>
        </div>
      </div>

      <div className="container vectorshape--container"  data-depth="0.7">
        <img className="vectorshape position-absolute" src={vectorshape} alt="Vector Shape"/>
      </div>

    </div>
  )
}

export default HeroDefault