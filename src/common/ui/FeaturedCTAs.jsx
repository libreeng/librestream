import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "gatsby"
import BackgroundImage from 'gatsby-background-image'

const FeaturedCTAs = ({ featured }) => {

  return (
    <section className="bg-light folder-border folder-top border-light">
      <div className="container">
        <div className="row">
          {featured && featured.map(cta => {

            return (
              <div key={cta.link.url} className="col-12 col-lg-4">
                <Link to={cta.link.url}>
                  <div className="card p-2 bg-transparent">
                    {cta.image ? (
                      <BackgroundImage Tag="div" className="card-img-top bg-image aspect-1x1 grayscale" fluid={cta.image.localFile.childImageSharp.fluid} />
                    ):(
                      <div className="card-img-top bg-image aspect-1x1 grayscale" style={{ backgroundImage: `url('https://via.placeholder.com/400/000/000')` }} />
                    )}
                    <div className="card-footer bg-transparent text-dark text-uppercase">
                      {cta.label}
                    </div>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

FeaturedCTAs.propTypes = {
  featured: PropTypes.instanceOf(Array)
}

export default FeaturedCTAs
