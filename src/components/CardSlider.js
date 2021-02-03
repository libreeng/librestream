import React from 'react'
import PropTypes from 'prop-types'
import CardWithLogo from './CardWithLogo'

const CardSlider = ({title}) => {
  return (
    <section className="bg-white">
      <div className="container">
        {title && (
          <div className="row mb-5">
            <div className="col-12">
              <h2>{title}</h2>
            </div>
          </div>
          )
        }
        
      </div>
      <div className="scrolling-wrapper">
        <div className="row flex-nowrap row-cols-1 row-cols-md-2 row-cols-lg-4">
          {[...Array(6)].map((x, i) =>
            <div className="col mb-4">
              <CardWithLogo></CardWithLogo>
              {/* // <div className="col-12 col-md-6 col-lg-3" key={useCase.useCase.id}>
              //   <div>{useCase.useCase.title}</div>
              // </div> */}
            </div>  
          )}         
        </div>
      </div>
    </section>
  )
}

CardSlider.propTypes = {

}

export default CardSlider
