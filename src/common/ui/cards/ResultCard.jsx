import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

const ResultCard = ({ result }) => {
  const { mainImage, title, url} = result

  return (
    <div className="col-6 col-md-3 col-lg-4">
      <Link to={url}>
        <div className="card p-2">
          <div
            className="card-img-top bg-image aspect-1x1 grayscale"
            style={{ backgroundImage: `url(${mainImage && mainImage.localFile.publicURL || 'https://via.placeholder.com/400/000/000'})` }}
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
