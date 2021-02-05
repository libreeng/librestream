import React from 'react'
import PropTypes from 'prop-types'

const FooterCards = () => {
  return (
    <section className="bg-light folder-border folder-top border-light">
      <div className="container">
        <div className="row">
          {[...Array(3)].map((x, i) => (
            <div className="col-12 col-lg-4 mb-4" key={i}>
              <div 
                className="bg-image aspect-1x1"
                style={{
                backgroundImage: `url(https://picsum.photos/500)`
                }}
              >
                <div className="bg-fill align-items-end justify-content-end p-4">
                  <div className="icon-play icon-play-lg bg-gradient-green border-0" />
                </div>
                <h5 className="mb-0">Title Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, harum.</h5>
              </div>
            </div>
          )
          )}
        </div>
      </div>
    </section>
  )
}

FooterCards.propTypes = {

}

export default FooterCards
