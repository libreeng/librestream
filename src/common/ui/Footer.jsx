import React from 'react'
// import PropTypes from 'prop-types'
import { useSiteFooter } from '../hooks/useSiteFooter'
import SocialMenu from './menus/SocialMenu'

const Footer = () => {
  const {options, footerbar} = useSiteFooter()

  return (
    <>
      <footer id="pageFooter" className="bg-light">
        <hr className="border-white my-0" />
        <div className="prefooter py-5">
          <div className="d-flex align-items-center justify-content-between">
            {[...Array(10)].map((x, i) =>
              <img key={i} src="https://via.placeholder.com/75x50" className="img-fluid" alt="" />
            )}
          </div>
        </div>
        <hr className="border-white my-0" />
        <div className="container">
          <div className="row py-5">
            <div className="col-12 col-md-4 col-lg">
              <h6>Sales &amp; Customer Support</h6>
              {/* <h3>{options.title}</h3> */}
            </div>
            <div className="col-12 col-md-4 col-lg">
              <h6>
                <small>
                  {options.footerPhoneTitle}
                </small>
              </h6>
              <p className="font-weight-bold">{options.footerPhone}</p>
            </div>
            <div className="col-12 col-md-4 col-lg">
              <h6>
                <small>
                  {options.footerTollFreePhoneTitle}
                </small>
              </h6>
              <p className="font-weight-bold">{options.footerTollFreePhone}</p>
            </div>
            <div className="col-12 col-md-6 col-lg my-4 my-md-0">
              <a href={`'mailto:' options.footerEmail`} className="btn btn-white btn-block">{options.footerEmailTitle}</a>
            </div>
            <div className="col-12 col-md-6 col-lg">
              <SocialMenu />
            </div>
          </div>
        </div>
        <hr className="border-white" />
        <div className="container">
          <div className="row py-5">
            <div className="col-12 col-md-4 col-lg-2 mb-3 mb-md-0">
              <h6>Platform</h6>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a href="#" className="nav-link">Platform Overview</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">Artificial Intelligence</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">Remote Expert</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">Digital Work</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">Knowledge Base</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">Specialized</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">Customer Success</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">Ecosystem Partners</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">IT &amp; Security</a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-4 col-lg-2 mb-3 mb-md-0">
              <h6>Use Cases</h6>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a href="#" className="nav-link">Use Cases</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">Industry Applications</a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-4 col-lg-2 mb-3 mb-md-0">
              <h6>Resources</h6>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a href="#" className="nav-link">Blog</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">Guides &amp; Whitepapers</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">Videos</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">Webinars</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">ROI Calculator</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">FAQs</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">Support &amp; Training</a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-4 col-lg-2 mb-3 mb-md-0">
              <h6>News</h6>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a href="#" className="nav-link">Press Releases</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">In the News</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">Events</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">Media Kit</a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-4 col-lg-2 mb-3 mb-md-0">
              <h6>About</h6>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a href="#" className="nav-link">Company Profile</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">Careers</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">Partners</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">Product Recycling</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">Privacy Notice</a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-4 col-lg-2 mb-3 mb-md-0">
              <h6>Contact</h6>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a href="#" className="nav-link">Request Demo</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">Contact Sales</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">Customer Support</a>
                </li>
              </ul>
            </div>
          </div>

        </div>
        <hr className="border-white" />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p className="font-weight-light">
                <small>
                  Copyright 2020 All Rights Reserved Librestream Technologies
                </small>
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row mt-5">
            <div className="col-12">
              <img src={footerbar.publicURL} className="img-fluid" alt="Librestream logo" />
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

Footer.propTypes = {

}

export default Footer
