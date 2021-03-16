import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import parse from "html-react-parser"
import Image from "gatsby-image"
// import BackgroundImage from 'gatsby-background-image'

const Hero = ({ hero, nav, className }) => {
  const { heroHeading, heroDescription, heroCta, heroFeaturedImage, heroBackgroundImage } = hero
  const backgroundImage = heroBackgroundImage ? heroBackgroundImage.localFile.childImageSharp.fluid : false
  const featuredImage = heroFeaturedImage ? heroFeaturedImage.localFile.childImageSharp.fluid : false

  return (
    <div className={`hero ${className}`}>
      {backgroundImage && (
        <img src={heroBackgroundImage.sourceUrl} alt={heroBackgroundImage.alt} className="img-cover" />
        // <BackgroundImage
        //   Tag="div"
        //   className="bg-image"
        //   fluid={backgroundImage}
        // />
        // <Image fluid={backgroundImage} alt={hero.backgroundImage.alt} className="img-cover" />
      )}

      <div className="bg-content">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-9 col-xl-8 col-xxl-7">
              <div className="text-white">
                {heroHeading && <h1 className="display-2">{parse(heroHeading)}</h1>}
                {heroDescription && <div className="lead">{parse(heroDescription)}</div>}
                {heroCta && <a href={heroCta.url} type="button" className="btn btn-lg btn-secondary text-dark my-5" target={heroCta.target}>{heroCta.title}</a>}
              </div>
              {nav && (
                <ul className="nav mt-4">
                  {nav.map(item => (
                    <li className="nav-item" key={item.id}>
                      <Link to={item.url} className="nav-link">{item.label}</Link>
                    </li>
                  )
                  )}
                </ul>
              )}
            </div>
            <div className="col-12 col-lg-3 col-xl-4 col-xxl-5">
              <div className="p-5">
                {featuredImage && (
                  <Image
                    fluid={featuredImage}
                    alt={heroFeaturedImage.alt}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
Hero.propTypes = {
  hero: PropTypes.instanceOf(Object),
  nav: PropTypes.instanceOf(Array),
  className: PropTypes.string
}

export default Hero