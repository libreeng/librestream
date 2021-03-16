import React from 'react'
import PropTypes from 'prop-types'
import parse from "html-react-parser"
import Image from "gatsby-image"
// import BackgroundImage from 'gatsby-background-image'

const HeroLarge = ({ hero }) => {
  const { heroHeading, heroDescription, heroCta, heroFeaturedImage, heroBackgroundImage } = hero
  const backgroundImage = heroBackgroundImage ? heroBackgroundImage.localFile.childImageSharp.fluid : false
  const featuredImage = heroFeaturedImage ? heroFeaturedImage.localFile.childImageSharp.fluid : false

  return (
    <div className="hero hero-lg">
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
          <div className="row">
            <div className="col-12 col-lg-9 col-xl-8 col-xxl-7">
              <div className="text-white">
                {heroHeading && <h1 className="display-2">{parse(heroHeading)}</h1>}
                {heroDescription && <div className="lead">{parse(heroDescription)}</div>}
                {heroCta && <a href={heroCta.url} type="button" className="btn btn-lg btn-secondary text-dark my-5" target={heroCta.target}>{heroCta.title}</a>}
              </div>
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
HeroLarge.propTypes = {
  hero: PropTypes.instanceOf(Object)
}

export default HeroLarge