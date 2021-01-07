import React from 'react'
import PropTypes from 'prop-types'

const Card = () => {
  return (
    <>
      <div 
        className="card bg-image aspect-1x1"
        style={{
          backgroundImage: `url(https://picsum.photos/500)`
        }}>
        This is a card
      </div>
    </>
  )
}

Card.propTypes = {

}

export default Card

