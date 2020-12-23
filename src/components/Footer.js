import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
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
      <div className="bg-info py-3">
       
                {
                  /*
                  options.partners.map(({ url,logo },index) => (
                    <div className=""  key={`slide-${index}`}>
                      <a href={url} >
                        <img src={logo.sourceUrl} className="my-2 d-inline-block" style={{height:'80px',width:'auto'}}/>
                      </a>
                    </div>
                  ))
                  */
                }
      </div>

      <footer id="pageFooter" className="bg-light pt-3">
        <div className="container">
          <div className="row py-5">
            <div className="col">
              <h3>Sales &amp; Customer Support</h3>
              {/* <h3>{options.title}</h3> */}
            </div>
            <div className="col">
              <h5>{options.footerPhoneTitle}</h5>
              <p>{options.footerPhone}</p>
            </div>  
            <div className="col">
              <h5>{options.footerTollFreePhoneTitle}</h5>
              {options.footerTollFreePhone}
            </div>
            <div className="col">
              <a href={"mailto:" + options.footerEmail} class="btn btn-white btn-block">{options.footerEmailTitle}</a>
            </div>
            <div className="col">
              <div className="socialnav">
                {
                  options.socialLinks.map(({ site,url,svgCode },index) => (
                    <a href={url} title={site} className="mr-3" key={`social-${index}`} dangerouslySetInnerHTML={{ __html: svgCode }}></a>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
        <hr class="border-white"/>
        <div className="container">
          <div class="row py-5">
            <div className="col-12 col-md-4 col-lg-2">
              <h3>Platform</h3>
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
            <div className="col-12 col-md-4 col-lg-2">
              <h3>Use Cases</h3>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a href="#" className="nav-link">Use Cases</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">Industry Applications</a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-4 col-lg-2">
              <h3>Resources</h3>
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
            <div className="col-12 col-md-4 col-lg-2">
              <h3>News</h3>
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
            <div className="col-12 col-md-4 col-lg-2">
              <h3>About</h3>
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
            <div className="col-12 col-md-4 col-lg-2">
              <h3>Contact</h3>
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
        <hr class="border-white"/>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p>Copyright 2020 All Rights Reserved Librestream Technologies</p>
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
