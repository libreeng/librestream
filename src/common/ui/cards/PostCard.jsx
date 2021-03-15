import React from 'react'
import PropTypes from 'prop-types'
import BackgroundImage from 'gatsby-background-image'

const PostCard = ({ post }) => {
  const { title, acfPostTypeNews: { mainImage }} = post
  return (
    <div className="card p-2">
      <BackgroundImage
        Tag="div"
        className="card-img-top bg-image aspect-1x1 grayscale"
        fluid={mainImage.localFile.childImageSharp.fluid || 'https://via.placeholder.com/500/000/000'}
      />
      <div className="card-footer bg-transparent text-dark text-uppercase">
        {title}
      </div>
    </div>
  )
}

PostCard.propTypes = {
  post: PropTypes.instanceOf(Object)
}

export default PostCard
