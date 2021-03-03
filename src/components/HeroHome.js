import React from 'react'
import parse from "html-react-parser"
// import playButton from '../img/play-button.svg'
// import Modal from './Modal'

const HeroHome = ({ heroTitle, heroDescription, heroBackground, heroLink }) => {
  return (
    <div
      className="hero hero-home"
      style={heroBackground && { backgroundImage: `url(${heroBackground})`}}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-5">
            {heroTitle && (
              <h1 className="text-white">Scale Knowledge Across Your Workforce Like Never Before.</h1>
            )}
            {heroDescription && (
              <div className="lead text-white">
                {parse(heroDescription)}
              </div>
            )}
            {heroLink && (
              <a href={heroLink.url} type="button" className="btn btn-lg btn-gradient-green-cyan shadow-white mt-5">{heroLink.title}</a>
            )}
            
          </div>
          {/* <div className="col-lg-3 mt-5 mt-lg-0 d-none d-md-block">
            <div className="text-center">
              <Modal image={playButton} title="Sample Modal" content="Sample description content lorem" />
            </div>

          </div> */}
        </div>
      </div>

      {/* <div className="container vectorshape-container"  data-depth="0.7">
        <img className="vectorshape position-absolute" src={vectorshape} alt="Vector Shape"/>
      </div> */}
    </div>
  )
}

export default HeroHome