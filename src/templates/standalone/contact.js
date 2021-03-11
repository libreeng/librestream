import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import parse from "html-react-parser"
import Hero from "../../common/ui/hero/HeroDefault"

const ContactTemplate = ({ data: { page } }) => {
  const acf = page.acfTemplateContact
  return (
    <>
      <Hero heroTitle={page.title} />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8">
              {acf.intro && parse(acf.intro)}
              {acf.contactForm && (
                <iframe src={acf.contactForm} width="100%" height="750" frameBorder="0" title="Contact Form" />
              )}
            </div>
            <div className="col-12 col-lg-4 ml-lg-auto">
              <div className="border-bracket">
                {acf.supportRequestDescription && (
                  <p>{acf.supportRequestDescription}</p>
                )}

              </div>
              <div className="text-center p-2">
                <i className="icon-arrow arrow-down arrow-dark" />
              </div>
              {acf.supportRequestLink && (
                <a href={acf.supportRequestLink} className="btn btn-gradient-dark-blue text-white btn-block">{acf.supportRequestLink.title}</a>
              )}

              <div className="border-bracket mt-5">
                {acf.addressTitle && (
                  <h6 className="mt-5">{acf.addressTitle}</h6>
                )}
                {acf.address && (
                  <address className="text-primary">
                    {parse(acf.address)}
                  </address>
                )}

              </div>
              <div className="text-center p-2">
                <i className="icon-arrow arrow-down arrow-dark" />
              </div>
              {acf.mapLink && (
                <a href={acf.mapLink.url} target={acf.mapLink.target} className="btn btn-border btn-block border-primary">{acf.mapLink.title}</a>
              )}

              <div className="border-bracket mt-5">
                {acf.phoneNumbers && acf.phoneNumbers.map(phone => (
                  <>
                    <h6 className="mb-0">{phone.phoneNumberLabel && phone.phoneNumberLabel}</h6>
                    <p className="text-primary">{phone.phoneNumber && phone.phoneNumber}</p>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="hr-styled" />
    </>
  )
}

ContactTemplate.propTypes = {

}

export const pageQuery = graphql`
  query contactTemplateQuery($id: String!) {
    # selecting the current page by id
    page: wpPage(id: { eq: $id }) {
      ...PageDetails
      acfTemplateContact {
        address
        addressTitle
        contactForm
        intro
        phoneNumbers {
          phoneNumber
          phoneNumberLabel
        }
        supportRequestDescription
        supportRequestLink {
          title
          target
          url
        }
        mapLink {
          target
          title
          url
        }
      }
    }
  }
`

export default ContactTemplate

