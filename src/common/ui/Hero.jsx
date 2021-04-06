import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import parse from "html-react-parser"
import CarouselHero from "../../common/ui/carousel/CarouselHero"

const Hero = ({ hero, nav }) => {
  const { heroHeading, heroDescription, heroCta, heroFeaturedImage, heroBackgroundImage, heroGallery } = hero
  const featuredImage = heroFeaturedImage ? heroFeaturedImage.localFile.publicURL : false
  let heroImages = []
  if(heroGallery){
    heroImages = heroGallery.map(image => image?.galleryImage?.localFile?.childImageSharp?.fluid)
  }
  const backgroundImage = heroBackgroundImage?.localFile?.publicURL
  const content = (
    <div className="bg-content">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-9 col-xl-8 col-xxl-7">
            <div className="text-white pb-4">
              {heroHeading && <div className="h1">{parse(heroHeading)}</div>}
              {heroDescription && <div className="lead">{parse(heroDescription)}</div>}
              {heroCta && <a href={heroCta.url} type="button" className="btn btn-lg btn-secondary text-dark my-5" target={heroCta.target}>{heroCta.title}</a>}
            </div>
            {nav && (
              <ul className="nav mt-4 pb-3">
                {nav.map(item => (
                  <li key={item?.url} className="nav-item">
                    <Link to={item?.url} className="nav-link">{item?.label || item?.title}</Link>
                  </li>
                )
                )}
              </ul>
            )}
          </div>
          <div className="col-6 col-lg-3 col-xl-4">
            <div className="p-lg-5 p-xl-5">
              {featuredImage && (
                <img src={featuredImage} className="img-fluid" alt={heroFeaturedImage.alt} />
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
        <div className="bg-image aspect-auto" style={{ backgroundImage: `url(${backgroundImage})`}}>
          {content}
        </div>
      )}
    </div>
  )
}
Hero.propTypes = {
  hero: PropTypes.instanceOf(Object),
  nav: PropTypes.instanceOf(Array),
  className: PropTypes.string
}

export default Hero