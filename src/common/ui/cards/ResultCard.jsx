import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'gatsby'
// import BackgroundImage from 'gatsby-background-image'

const ResultCard = ({ result }) => {
  const { mainImage, title } = result
  const url = result.externalLink
    ? result.externalLink
    : result.url
  const featuredImage = mainImage?.localFile?.publicURL
    ? mainImage.localFile.publicURL
    : 'https://via.placeholder.com/400/000/000'

  return (
    <div className="col-12 col-sm-6 col-md-3 col-lg-4">
      <Link to={url} target={result.externalLink ? '_blank' : '_self'}>
        <div className="card p-2">
          <div
            className="card-img-top bg-image aspect-1x1 grayscale"
            style={{ backgroundImage: `url(${featuredImage})` }}
          />
          <div className="card-footer bg-transparent text-dark text-uppercase px-0">
            {title}
          </div>
        </div>
      </Link>
    </div>
  )
}

ResultCard.propTypes = {
  result: PropTypes.instanceOf(Object)
}

export default ResultCard
