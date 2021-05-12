import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import parse from "html-react-parser"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { BgImage } from 'gbimage-bridge'
import CarouselHero from "../../common/ui/carousel/CarouselHero"
import { getHeroParseOptions } from '../../common/utils/helpers'
import { useDispatch } from 'react-redux'
import { openModal } from "../../common/modals/modalActions"

const Hero = ({ hero, nav, className }) => {
  let dispatch = () => { }
  if (typeof window !== 'undefined') {
    dispatch = useDispatch()
  }
  
  const { heroHeading, heroDescription, heroCta, heroFeaturedImage, heroBackgroundImage, heroGallery } = hero
  const featuredImage = heroFeaturedImage ? getImage(heroFeaturedImage.localFile) : false
  const modalData = hero.modalData
  let heroImages = []
  if (heroGallery) {
    heroImages = heroGallery.map(image => getImage(image?.galleryImage?.localFile))
  }
  const bgImage = heroBackgroundImage ? getImage(heroBackgroundImage.localFile) : `linear-gradient(rgba(220, 15, 15, 0.73), rgba(4, 243, 67, 0.73))`



  const getHeroCta = () => {
    if(heroCta && hero.linkTo == 'link'){
      return (
        <a href={heroCta.url} className="btn btn-lg btn-secondary text-dark my-5" target={heroCta.target}>{heroCta.title}</a>
      )
    } else if (modalData && hero.linkTo == "modal" ){
      return (
        <button
          type="button"
          className="btn btn-lg btn-secondary text-dark my-5"  
          onClick={() => dispatch(openModal("ContentModal", {  heading:modalData.modalHeader, content:modalData.modalContent, size:'lg', showCloseBtn: modalData.modalShowCloseButton } )) } // size = sm, null, lg
        >{modalData.ctaLabel}</button>
      )
    }
    return null;
  }
  

  const parseOptions = getHeroParseOptions(heroHeading)
  const content = (
    <div className="bg-content">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-9 col-xl-8 col-xxl-7">
            <div className="text-white pb-4">
              {heroHeading && <h1>{parse(heroHeading, parseOptions)}</h1>}
              {heroDescription && <div className="lead">{parse(heroDescription)}</div>}
              {getHeroCta()}
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
          
        </div>
      </div>
    </div>
  )


  return (
    <div className="hero">

{content}
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
