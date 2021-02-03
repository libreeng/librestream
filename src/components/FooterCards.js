import React from 'react'
import PropTypes from 'prop-types'

const FooterCards = props => {
  return (
    <section className="bg-light folder-border folder-top border-light">
      <div className="container">
        <div className="row">
          {[...Array(3)].map((x, i) =>
            <div className="col-12 col-lg-4 mb-4" key={i}>
              <img src="https://via.placeholder.com/500" className="img-fluid mb-3" alt="award badge image"/>
              <h5 className="mb-0">Title Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, harum.</h5>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

FooterCards.propTypes = {

}

export default FooterCards
