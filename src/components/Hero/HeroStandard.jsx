import React from 'react'
import PropTypes from 'prop-types'
import Image from "gatsby-image"
import parse from "html-react-parser"

const HeroStandard = ({ title, subtitle, description, subnav, backgroundImage }) => {

  // const featuredImage = {
  //   fluid: post.featuredImage?.node?.localFile?.childImageSharp?.fluid,
  //   alt: post.featuredImage?.node?.alt || ``,
  // }

  return (
    <div
      className="hero hero-default"
      style={{ backgroundImage: `url(${backgroundImage})`}}
    >
      <div className="container">
        <div className="row align-items-end">
          <div className="col-lg-6">
            {title && <h1 className="title mt-5 text-white">{title}</h1>}
            {subtitle && <h2 className="text-white">{subtitle}</h2>}
            {subnav && (
              <ul className="nav mt-4">
                {[...Array(3)].map((x, i) => (
                  <li className="nav-item" key={i}>
                    <a href="#" className="nav-link">Link Title</a>
                  </li>
                )
                )}
              </ul>
            )}
          </div>
          <div className="col-lg-6">
            {logo && (
              <div className="text-lg-right">
                {featuredImage?.fluid && (
                  <Image
                    fluid={featuredImage.fluid}
                    alt={featuredImage.alt}
                    className="img-fluid"
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

HeroStandard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  subnav: PropTypes.bool,
  logo: PropTypes.string,
}

export default HeroStandard
