import React from 'react'
import PropTypes from 'prop-types'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { BgImage } from 'gbimage-bridge'

const UseCaseCard = ({ post }) => {
  const { title, acfPostTypeUseCase: { caption, featuredImage, logoImage }} = post
  const logoImageData = getImage(logoImage?.localFile)
  const featuredImageData = getImage(featuredImage?.localFile)

  return (
    <div className='card p-2'>
      <BgImage
        className="card-img-top bg-image aspect-1x1 grayscale"
        image={featuredImageData}
      >
        <div className="bg-fill">
          <div className="card-logo-overlay text-white">
            <div className="row">
              <div className="col-lg-6">
                {logoImage && (
                  <GatsbyImage image={logoImageData} className="img-fluid" alt={title} />
                )}
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8 ml-lg-auto">
                <p className="text-uppercase lead">
                  {caption}
                </p>
              </div>
            </div>
          </div>
        </div>
      </BgImage>
    </div>
  )
}

UseCaseCard.propTypes = {
  post: PropTypes.instanceOf(Object)
}

export default UseCaseCard
