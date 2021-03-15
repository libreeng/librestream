import React from 'react'
import PropTypes from 'prop-types'
import Image from "gatsby-image"

const Hero = ({
  heroTitle,
  heroSubtitle,
  heroSubnav,
  heroFeaturedImage,
  heroDescription,
  heroBackground,
  heroCta
}) => {
  return (
    <div className="hero">
      <img src={heroBackground} alt={heroTitle} className="img-cover" />
      <div className="bg-content">
        <div className="container">
          <div className="row align-items-end text-white">
            <div className="col-12 col-lg-6">
              {heroTitle && <h1 className="display-4">{heroTitle}</h1>}
              {heroSubtitle && (<h2>{heroSubtitle}</h2>)}
              {heroDescription && (
                <>
                  <hr className="hr-xs ml-0 border-green" />
                  <p className="lead">{heroDescription}</p>
                </>
              )}

              {heroSubnav && (
                <>
                  <ul className="nav mt-4">
                    {heroSubnav.map(item => (
                      <li className="nav-item" key={item.subnavItemLink.url}>
                        <a href={item.subnavItemLink.url} className="nav-link">{item.subnavItemLink.title}</a>
                      </li>
                    )
                    )}
                  </ul>
                </>
              )}
            </div>
            <div className="col-lg-2 ml-lg-auto">
              {heroFeaturedImage && (
                <Image
                  fluid={heroFeaturedImage}
                  alt={heroFeaturedImage.alt}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero.propTypes = {
  heroTitle: PropTypes.string
}

export default Hero
