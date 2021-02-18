import React from 'react'
import playButton from '../img/play-button.svg'
import Modal from './Modal'

const HeroHome = ({ data }) => {
  console.log(data.homeHeroBkg.childImageSharp.fluid)
  return (
    <div
      className="hero hero-home"
      style={{
        backgroundImage: `url(https://via.placeholder.com/1900x1000)`
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-5">
            <h1 className="text-white">Scale Knowledge Across Your Workforce Like Never Before.</h1>
            <p className="lead text-white">Librestream powers the most innovative and proven AR &amp; AI solutions for leading industrial organizations to improve efficiency, performance and safety, shaping a more resilient workforce for the future ahead.</p>
            <button type="button" className="btn btn-lg btn-gradient-green-cyan shadow-white">Call To Action</button>
          </div>
          <div className="col-lg-3 mt-5 mt-lg-0 d-none d-md-block">
            <div className="text-center">
              <Modal image={playButton} title="Sample Modal" content="Sample description content lorem" />
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