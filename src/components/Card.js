import React from 'react'
import PropTypes from 'prop-types'

const Card = () => {
  return (
    <>
      <div className="card border-0">
        <div className="bg-image aspect-1x1"
          style={{
            backgroundImage: `url(https://picsum.photos/500)`
          }}
        >
        </div>
        <div className="card-footer bg-transparent text-uppercase px-0">
          Title lorem
        </div>
      </div>
    </>
  )
}

Card.propTypes = {

}

export default Card

