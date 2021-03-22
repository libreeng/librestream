import React from 'react'
import { useSiteFooter } from '../hooks/useSiteFooter'
import FeaturedCTAs from './FeaturedCTAs'
import LogoTicker from './LogoTicker'
import FooterMenu from './menus/FooterMenu'
import SocialMenu from './menus/SocialMenu'


const Footer = () => {
  const { options } = useSiteFooter()
  const { partners, ctas } = options

  return (
    <>
      <FeaturedCTAs featured={ctas} />
      <footer id="pageFooter" className="text-white">
        <hr className="border-white mt-0 mb-4" />
        <LogoTicker items={partners} />
        <hr className="border-white mt-4 mb-4" />
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4 col-lg">
              <h6>{options.title}</h6>
            </div>
            <div className="col-12 col-md-4 col-lg">
              <h6>
                <small>
                  {options.footerPhoneTitle}
                </small>
              </h6>
              <p className="font-weight-bold mb-0">{options.footerPhone}</p>
            </div>
            <div className="col-12 col-md-4 col-lg">
              <h6>
                <small>
                  {options.footerTollFreePhoneTitle}
                </small>
              </h6>
              <p className="font-weight-bold mb-0">{options.footerTollFreePhone}</p>
            </div>
            <div className="col-12 col-md-6 col-lg my-4 my-md-0">
              <a href={`mailto: ${options.footerEmail}`} className="btn btn-white btn-block">{options.footerEmailTitle}</a>
            </div>
            <div className="col-12 col-md-6 col-lg">
              <SocialMenu />
            </div>
          </div>
        </div>
        <hr className="border-white" />
        <FooterMenu />
        <hr className="border-white" />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p className="font-weight-light">
                <small>
                  © {new Date().getFullYear()} All Rights Reserved Librestream Technologies
                </small>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}


export default Footer
