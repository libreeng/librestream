import React from 'react'
import PropTypes from 'prop-types'

const RelatedContent = ({ items }) => {
  return (
    <section className="bg-light folder-border folder-top border-light">
      <div className="container">
        <div className="row">
          {items && items.map(item => {
            // TODO: Add Gatsby background image component
            return (
              <div className="col-12 col-lg-4" key={item.id}>
                <div
                  className="bg-image aspect-1x1"
                  style={{
                    backgroundImage: `url(https://via.placeholder.com/500.png/09f/fff)`}}
                >
                  <div className="bg-fill align-items-end justify-content-end p-4">
                    <div className="icon-play icon-play-lg bg-gradient-green border-0" />
                  </div>
                  <h5 className="mb-0">{item.title}</h5>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

RelatedContent.propTypes = {
  items: PropTypes.instanceOf(Array)
}

export default RelatedContent
