import React from 'react'
import vectorshape from '../assets/vectorshape.svg'

const VectorShape = () => {
  return (
    <div className="container vectorshape-container" data-depth="0.7">
      <img className="vectorshape position-absolute" src={vectorshape} alt="Vector Shape" />
    </div>
  )
}

export default VectorShape
