import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "gatsby"
import { BgImage } from 'gbimage-bridge'
import { useSiteFooter } from '../hooks/useSiteFooter'

const FooterCTAs = ({ featured }) => {
  const { options: { ctas } } = useSiteFooter()
  let featuredCTAs = ctas

  if(featured) {
    featuredCTAs = [...featured].splice(0, 3)
  }

  return (
    <section id="footerCTAs" className="bg-light text-dark">
      <div className="container">
        <div className="row">
          {featuredCTAs && featuredCTAs.map((cta, i) => {
            const { ctaTitle, ctaLink, ctaFeaturedImage } = cta
            const featuredImage = ctaFeaturedImage?.localFile?.childImageSharp?.gatsbyImageData

            return (
              <div key={`cta_${i}`} className="col-12 col-lg-4">
                <Link to={ctaLink?.url || '#footerCTAs'}>
                  <div className="card p-2 bg-transparent">
                    {featuredImage ? (
                      <BgImage image={featuredImage} className="card-img-top bg-image aspect-1x1 grayscale" />
                    ):(
                      <div className="card-img-top bg-image aspect-1x1 grayscale" style={{ backgroundImage: `url('https://via.placeholder.com/400/000/000')` }} />
                    )}
                    <div className="card-footer bg-white text-dark text-uppercase py-4 text-center">
                      <button className="btn btn-secondary px-0 btn-block px-4">{ctaTitle}</button>
                    </div>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}

FooterCTAs.propTypes = {
  featured: PropTypes.instanceOf(Array)
}

export default FooterCTAs
