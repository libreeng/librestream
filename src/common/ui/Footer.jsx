import React from 'react'
import { useSiteFooter } from '../hooks/useSiteFooter'
import LogoTicker from './LogoTicker'
import FooterMenu from './menus/FooterMenu'
import SocialMenu from './menus/SocialMenu'


const Footer = () => {
  const { options } = useSiteFooter()
  const { partners } = options

  return (
    <>
      <footer id="pageFooter">
        <LogoTicker items={partners} />
        <hr className="border-white mt-0 mb-4" />
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
            <div className="col-12 col-md-6 col-lg my-4 my-lg-0">
              <a href={`mailto: ${options.footerEmail}`} className="btn btn-outline-dark btn-block">{options.footerEmailTitle}</a>
            </div>
            <div className="col-12 col-md-6 col-lg my-4 my-lg-0">
              <SocialMenu />
            </div>
          </div>
        </div>
        <hr />
        <FooterMenu />
        <hr />
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
