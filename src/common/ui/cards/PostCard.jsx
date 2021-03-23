import React from 'react'
import PropTypes from 'prop-types'
// import BackgroundImage from 'gatsby-background-image'

const PostCard = ({ post, showBracket, className }) => {
  const { title, acfPostTypeNews: { mainImage }} = post

  return (
    <div className="card p-2">
      <div
        className={`card-img-top bg-image aspect-1x1 grayscale ${className}`}
        style={{ backgroundImage: `url(${mainImage && mainImage.sourceUrl || 'https://via.placeholder.com/400/000/000'})` }}
      />
      {/* <BackgroundImage
        Tag="div"
        className="card-img-top bg-image aspect-1x1 grayscale"
        fluid={mainImage.localFile.childImageSharp.fluid || 'https://via.placeholder.com/500/000/000'}
      /> */}
      {showBracket ? (
        <div className="card-footer bg-transparent text-dark text-center text-uppercase">
          <h6 className="mt-4 text-dark">{title}</h6>
          <div className="border-bracket-bottom" />
        </div>
      ) : (
        <div className="card-footer bg-transparent text-dark text-uppercase px-0">
          {title}
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
