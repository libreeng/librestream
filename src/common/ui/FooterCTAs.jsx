import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import { useSiteFooter } from '../hooks/useSiteFooter'

const FooterCTAs = ({ featured }) => {
  const { options: { ctas } } = useSiteFooter()
  let featuredCTAs = ctas

  if(featured) {
    featuredCTAs = [...featured].splice(0, 3)
  }

  return (
    <section id="footerCTAs" className="bg-primary folder-border folder-top border-primary text-white">
      <div className="container">
        <div className="row">
          {featuredCTAs && featuredCTAs.map((cta, i) => {
            const { ctaTitle, ctaLink, ctaFeaturedImage } = cta
            const featuredImage = ctaFeaturedImage?.localFile?.childImageSharp?.fluid

            return (
              <div key={`cta_${i}`} className="col-12 col-lg-4">
                <Link to={ctaLink.url}>
                  <div className="card p-2 bg-transparent">
                    {featuredImage ? (
                      <BackgroundImage Tag="div" className="card-img-top bg-image aspect-1x1 grayscale" fluid={featuredImage} />
                    ):(
                      <div className="card-img-top bg-image aspect-1x1 grayscale" style={{ backgroundImage: `url('https://via.placeholder.com/400/000/000')` }} />
                    )}
                    <div className="card-footer bg-transparent text-white text-uppercase pl-0">
                      {ctaTitle}
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

FooterCTAs.propTypes = {
  featured: PropTypes.instanceOf(Array)
}

export default FooterCTAs
