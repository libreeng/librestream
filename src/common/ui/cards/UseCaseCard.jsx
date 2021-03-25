/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
import PropTypes from 'prop-types'

const UseCaseCard = ({ post }) => {
  const { title, acfPostTypeUseCase: { caption, summaryDescription, featuredImage, logoImage }} = post

  return (
    <div className='card p-2'>
      <div
        className="card-img-top bg-image aspect-1x1 grayscale"
        style={{ backgroundImage: `url(${featuredImage && featuredImage.sourceUrl || 'https://via.placeholder.com/400/000/000'})`}}
      >
        <div className="bg-fill">
          <div className="card-logo-overlay text-white">
            <div className="row">
              <div className="col-lg-6">
                {logoImage && (
                  <img src={logoImage.sourceUrl} className="img-fluid" alt={title} />
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
      </div>
      <div className="card-footer bg-transparent text-primary text-center text-uppercase">
        <h6 className="mt-5 text-dark">{summaryDescription}</h6>
        <div className="border-bracket-bottom" />
      </div>
    </div>
  )
}

UseCaseCard.propTypes = {
  post: PropTypes.instanceOf(Object)
}

export default UseCaseCard
