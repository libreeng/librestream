import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { BgImage } from 'gbimage-bridge'

const ResultCard = ({ result }) => {

  console.log(result)
  const { mainImage, title } = result
  const url = result.externalLink
    ? result.externalLink
    : result.url

  const primaryImage = result.summaryImage ? result.summaryImage : result.mainImage
  const featuredImage = primaryImage?.localFile?.childImageSharp?.gatsbyImageData
  const testData = result.summaryImage ? "summary ": "main "
  console.log(testData , primaryImage)

  return (
    <div className="col-12 col-sm-6 col-md-3 col-lg-4">
      <Link
        to={url}
        target={result.externalLink ? '_blank' : '_self'}
        rel={result.externalLink ? 'noopener' : ''}>
        <div className="card p-2">
          <BgImage
            className="card-img-top bg-image aspect-1x1 grayscale"
            image={featuredImage}
          />
          <div className="card-footer bg-transparent text-dark text-uppercase px-0">
            {testData} {title}
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
