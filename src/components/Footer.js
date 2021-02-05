import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import SocialNav from '../components/SocialNav'
 //const Flickity = require("react-flickity-component")
//require('flickity-imagesloaded');

const Footer = () => {

  const data = useStaticQuery(graphql`
    query FooterQuery {
      wpcontent {
        options {
          acfSiteOptions {
            title
            footerPhoneTitle
            footerPhone
            footerTollFreePhoneTitle
            footerTollFreePhone
            footerEmailTitle
            footerEmail
            phoneTitle
            footerMailingListTitle
            socialLinks {
              site
              svgCode
              url
            }
            partners {
              url
              logo {
                sourceUrl
                altText
              }
            }
          }
        }
      }
      footerbar: file(relativePath: {eq: "footer-bar.svg"}) {
        publicURL
        absolutePath
        childImageSharp {
          fixed {
           srcWebp
          }
        }
      }
    }
  `)
  const options = data.wpcontent.options.acfSiteOptions;

  return (
    <>
      {/* <div className="bg-info py-3">
       
        {
        
          options.partners.map(({ url,logo },index) => (
            <div className=""  key={`slide-${index}`}>
              <a href={url} >
                <img src={logo.sourceUrl} className="my-2 d-inline-block" style={{height:'80px',width:'auto'}}/>
              </a>
            </div>
          ))
        
        }
      </div> */}
        
      <footer id="pageFooter" className="bg-light">
        <hr className="border-white my-0"/>
        <div className="prefooter py-5">
          <div className="d-flex align-items-center justify-content-between">
            {[...Array(10)].map((x, i) =>
              <img key={i} src="https://via.placeholder.com/75x50" className="img-fluid" alt=""/>
            )}
          </div>
        </div>
        <hr className="border-white my-0"/>  
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
              <SocialNav />
              {/* <div className="socialnav">
                {
                  options.socialLinks.map(({ site,url,svgCode },index) => (
                    <a href={url} title={site} className="mr-3" key={`social-${index}`} dangerouslySetInnerHTML={{ __html: svgCode }}></a>
                  ))
                }
              </div> */}
            </div>
          </div>
        </div>
        <hr className="border-white"/>
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
        <hr className="border-white"/>
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
              <img src={data.footerbar.publicURL} className="img-fluid" alt="Librestream logo" />
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
