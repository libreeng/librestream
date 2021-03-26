import React from 'react'
import PropTypes from 'prop-types'
import parse from "html-react-parser"

const CTA = ({ cta }) => {

  return (
    <section className="bg-primary text-white">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-8 mx-lg-auto text-center">
            {cta.ctaDescription && (
              <div className="mb-4">
                { parse(cta.ctaDescription)}
              </div>
            )}
            {cta.link && (
              <a href={cta.link.url} target={cta.target} className="btn btn-secondary text-dark">{cta.link.title ? cta.link.title : 'Learn More'}</a>
            )}

          </div>
        </div>
      </div>
    </section>
  )
}

CTA.propTypes = {
  cta: PropTypes.instanceOf(Object),
}

export default CTA
