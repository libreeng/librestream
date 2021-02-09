import React from 'react'
import PropTypes from 'prop-types'

const FooterMenu = () => {
  return (
    <div className="container">
      <div className="row py-5">
        <div className="col-12 col-md-4 col-lg-2 mb-3 mb-md-0">
          {/* TODO: Build dynamically */}
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
  )
}

FooterMenu.propTypes = {

}

export default FooterMenu
