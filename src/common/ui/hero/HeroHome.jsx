import React from 'react'
import parse from "html-react-parser"

const HeroHome = ({ heroTitle, heroDescription, heroBackground, heroCta }) => {
  return (
    <div className="hero hero-home">
      <img src={heroBackground} alt={heroTitle} className="img-cover" />
      <div className="bg-content">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-7">
              <div className="text-white">
                {heroTitle && <h1 className="display-2">{heroTitle}</h1>}
                {heroDescription && <div className="lead">{parse(heroDescription)}</div>}
                {heroCta && <a href={heroCta.url} type="button" className="btn btn-lg btn-secondary text-dark my-5">{heroCta.title}</a>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroHome