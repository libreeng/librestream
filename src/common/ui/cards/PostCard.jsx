import React from 'react'
import PropTypes from 'prop-types'
import BackgroundImage from 'gatsby-background-image'

const PostCard = ({ post, showBracket, className }) => {
  const primaryImage = post.acfPostTypeNews.summaryImage ? post.acfPostTypeNews.summaryImage : post.acfPostTypeNews.mainImage

  const featuredImage = {
    fluid: primaryImage?.localFile?.childImageSharp?.fluid,
    alt: primaryImage?.altText
  }

  return (
    <div className="card p-2">
      {featuredImage.fluid ? (
        <BackgroundImage
          Tag="div"
          className={`card-img-top bg-image aspect-1x1 grayscale ${className}`}
          fluid={featuredImage.fluid}
        />
      ):(
        <div className={`card-img-top bg-image bg-black aspect-1x1 grayscale ${className}`} />
      )}

      {showBracket ? (
        <div className="card-footer bg-transparent text-dark text-center text-uppercase">
          <h6 className="mt-4 text-dark"><strong>{post.title}</strong></h6>
          <div className="border-bracket-bottom" />
        </div>
      ) : (
        <div className="card-footer bg-transparent text-dark text-uppercase px-0">
          {post.title}
        </div>
      )}
    </div>
  )
}

PostCard.propTypes = {
  post: PropTypes.instanceOf(Object),
  showBracket: PropTypes.bool
}

export default PostCard
