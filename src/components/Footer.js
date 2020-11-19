import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
// import PropTypes from 'prop-types'
const Flickity = typeof window !== "undefined" ? require("react-flickity-component") : () => null
require('flickity-imagesloaded');

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
    }
  `)
  const options = data.wpcontent.options.acfSiteOptions;
  return (
    <>
      <div className="bg-info py-3">
        {Flickity && (
                  <Flickity   
                    options={{ // https://flickity.metafizzy.co/options.html
                      lazyLoad: true,
                      groupCells: '100%',
                      //autoPlay: 3000,
                      wrapAround: true,
                      imagesLoaded: true,
                      prevNextButtons: false,
                      pageDots: false,
                      cellAlign: 'left'
                    }} 
                    >
                      {
                        options.partners.map(({ url,logo }) => (
                          <div className="">
                            <a href={url}>
                              <img src={logo.sourceUrl} className="my-2 d-inline-block" style={{height:'80px',width:'auto'}}/>
                            </a>
                          </div>
                        ))
                      }

                  </Flickity>
        )}
      </div>


      <div className="bg-primary py-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <h3>{options.title}</h3>
              <dl>
                <dt>{options.footerPhoneTitle}</dt>
                <dd> {options.footerPhone}</dd>
                <dt>{options.footerTollFreePhoneTitle}</dt>
                <dd>{options.footerTollFreePhone}</dd>
                <dt>{options.footerEmailTitle}</dt>
                <dd>{options.footerEmail}</dd>
              </dl>
              {
                options.socialLinks.map(({ site,url,svgCode }) => (
                  <a href={url} title={site} className="mr-3" dangerouslySetInnerHTML={{ __html: svgCode }}></a>
                ))
              }

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

Footer.propTypes = {

}

export default Footer
