import React from 'react'
import PropTypes from 'prop-types'

const HeroDetailed = ({ hero }) => {

  return (
    <section className="hero bg-gradient-blue">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            {hero.title && <h1 className="text-white">{hero.title}</h1>}
            {hero.decription && <p className="lead text-white">{hero.description}</p>}
            {hero.cta && (
              <>
                <hr className="hr-xs ml-0 border-green" />
                <a href={hero.cta.url} className="btn btn-lg btn-secondary">{hero.cta.label} »</a>
              </>
            )}
          </div>
          <div className="col-lg-6">
            {hero.image && (
              <div className="text-center">
                <img src={hero.image || 'https://via.placeholder.com/400'} className="img-fluid" alt={hero.title} />
              </div>
            )}
          </div>
        </div>
      </div>
      {/* <div className="container vectorshape-container" data-depth="0.7">
        <img className="vectorshape position-absolute" src={vectorshape} alt="Vector Shape" />
      </div> */}
    </section>
  )
}

HeroDetailed.propTypes = {
  hero: PropTypes.instanceOf(Object)
}

export default HeroDetailed
