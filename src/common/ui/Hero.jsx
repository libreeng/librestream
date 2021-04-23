import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import parse from "html-react-parser"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { BgImage } from 'gbimage-bridge'
import CarouselHero from "../../common/ui/carousel/CarouselHero"
import { getHeroParseOptions } from '../../common/utils/helpers'

const Hero = ({ hero, nav, className }) => {
  const { heroHeading, heroDescription, heroCta, heroFeaturedImage, heroBackgroundImage, heroGallery } = hero
  const featuredImage = heroFeaturedImage ? getImage(heroFeaturedImage.localFile) : false
  let heroImages = []
  if (heroGallery) {
    heroImages = heroGallery.map(image => getImage(image?.galleryImage?.localFile))
  }
  const bgImage = heroBackgroundImage ? getImage(heroBackgroundImage.localFile) : `linear-gradient(rgba(220, 15, 15, 0.73), rgba(4, 243, 67, 0.73))`

  const parseOptions = getHeroParseOptions(heroHeading)
  const content = (
    <div className="bg-content">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-9 col-xl-8 col-xxl-7">
            <div className="text-white pb-4">
              {heroHeading && <h1>{parse(heroHeading, parseOptions)}</h1>}
              {heroDescription && <div className="lead">{parse(heroDescription)}</div>}
              {heroCta && <a href={heroCta.url} className="btn btn-lg btn-secondary text-dark my-5" target={heroCta.target}>{heroCta.title}</a>}
            </div>
            {nav && (
              <ul className="nav mt-4 pb-3">
                {nav.map(item => (
                  <li key={item?.path} className="nav-item">
                    <Link to={item?.path} className="nav-link" activeClassName="active">{item?.label || item?.title}</Link>
                  </li>
                )
                )}
              </ul>
            )}
          </div>
          <div className="col-6 col-lg-3 col-xl-4">
            <div className="p-lg-5 p-xl-5">
              {featuredImage && (
                <GatsbyImage image={featuredImage} className="img-fluid" alt={heroFeaturedImage.alt} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )


  return (
    <div className="hero">

      {heroGallery ? (
        <>
          <CarouselHero images={heroImages} content={content} />
        </>
      ):(
        <BgImage image={bgImage}>
          <div className="bg-image aspect-auto">
            {content}
          </div>
        </BgImage>
      )}
    </div>
  )
}
Hero.propTypes = {
  hero: PropTypes.instanceOf(Object),
  nav: PropTypes.instanceOf(Array),
  className: PropTypes.string
}
Hero.defaultProps = {
  hero: {},
  className: '',
  nav: []
}

export default Hero