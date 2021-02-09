import React from 'react'
// import PropTypes from 'prop-types'
import CarouselCards from '../common/ui/CarouselCards'

const CustomerUseCases = () => {
  return (
    <section className="bg-white">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12">
            <h2 className="text-uppercase">Customer use cases</h2>
          </div>
        </div>
      </div>
      <CarouselCards />
    </section>
  )
}

// TODO: Write a query for all Case Studies

CustomerUseCases.propTypes = {

}

export default CustomerUseCases
