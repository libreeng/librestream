import React from 'react'
import PropTypes from 'prop-types'
import parse from "html-react-parser"
import Image from "gatsby-image"
// import BackgroundImage from 'gatsby-background-image'

const HeroLarge = ({ hero }) => {
  const { heading, description, link } = hero
  const backgroundImage = hero.backgroundImage ? hero.backgroundImage.localFile.childImageSharp.fluid : false
  const featuredImage = hero.featuredImage ? hero.featuredImage.localFile.childImageSharp.fluid : false

  return (
    <div className="hero hero-lg">
      {backgroundImage && (
        <img src={hero.backgroundImage.sourceUrl} alt={hero.backgroundImage.alt} className="img-cover" />
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
                {heading && <h1 className="display-2">{parse(heading)}</h1>}
                {description && <div className="lead">{parse(description)}</div>}
                {link && <a href={link.url} type="button" className="btn btn-lg btn-secondary text-dark my-5" target={link.target}>{link.title}</a>}
              </div>
            </div>
            <div className="col-12 col-lg-3 col-xl-4 col-xxl-5">
              <div className="p-5">
                {featuredImage && (
                  <Image
                    fluid={featuredImage}
                    alt={hero.featuredImage.alt}
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