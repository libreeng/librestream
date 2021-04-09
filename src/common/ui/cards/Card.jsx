import React from 'react'
import PropTypes from 'prop-types'
import BackgroundImage from 'gatsby-background-image'

const Card = ({ post }) => {
  const { title, acfPostTypeNews: { mainImage } } = post
  return (
    <div className="card p-2">
      <BackgroundImage
        Tag="div"
        className="card-img-top bg-image aspect-1x1 grayscale"
        fluid={mainImage?.localFile?.childImageSharp?.fluid || 'https://via.placeholder.com/500/000/000'}
      >
        <div className="bg-fill">
          <div className="card-logo-overlay text-white">
            <div className="row">
              <div className="col-lg-6">
                {/* {logoImage && (
                  <img src={logoImage.sourceUrl} className="img-fluid" alt={title} />
                )} */}
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8 ml-lg-auto">
                <p className="text-uppercase lead">
                  {/* {caption} */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </BackgroundImage>

      <div className="card-footer bg-transparent text-dark text-uppercase">
        {title}
      </div>

      {/* <div className="card-footer bg-transparent text-primary text-center text-uppercase">
        <h6 className="mt-5 text-dark">{description}</h6>
        <div className="border-bracket-bottom" />
      </div> */}
    </div>
  )
}

Card.propTypes = {
  post: PropTypes.instanceOf(Object)
}

export default Card
