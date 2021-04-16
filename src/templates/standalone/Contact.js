import React from 'react'
// import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import parse from "html-react-parser"
import SEO from "../../containers/SEO"
import { useSiteFooter } from '../../common/hooks/useSiteFooter'
import Hero from "../../common/ui/Hero"
import FooterCTAs from '../../common/ui/FooterCTAs'
import Layout from '../../containers/Layout'

const ContactTemplate = ({ data: { page } }) => {
  const { options } = useSiteFooter()
  const acf = page.acfTemplateContact
  const hero = {
    heroHeading: page.title
  }
  const { cta } = page.acfFooterCTAs

  return (
    <Layout>
      <SEO pageSEO={page.seo} />
      <Hero hero={hero} />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8">
              {acf.intro && parse(acf.intro)}
              {acf.contactForm && (
                <iframe src={acf.contactForm} width="100%" height="750" frameBorder="0" title="Contact Form" />
              )}
            </div>
            <div className="col-12 col-lg-3 ml-lg-auto">
              <div className="border-bracket">
                {acf.supportRequestDescription && (
                  <p>{acf.supportRequestDescription}</p>
                )}

              </div>
              <div className="text-center p-2">
                <i className="icon-arrow arrow-down arrow-dark" />
              </div>
              {acf.supportRequestLink && (
                <a href={acf.supportRequestLink.url} className="btn btn-primary btn-block">{acf.supportRequestLink.title}</a>
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
                <a href={acf.mapLink.url} target={acf.mapLink.target} className="btn btn-outline-primary text-dark btn-block">{acf.mapLink.title}</a>
              )}

              <div className="border-bracket mt-5">
                <h6 className="mb-0">{options.phoneTitle}</h6>
                <p className="text-primary">{options.phoneNumber}</p>
                <h6 className="mb-0">{options.tollFreeTitle}</h6>
                <p className="text-primary">{options.tollFree}</p>
                <h6 className="mb-0">{options.faxTitle}</h6>
                <p className="text-primary">{options.faxNumber}</p>

              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterCTAs featured={cta} />
    </Layout>
  )
}

ContactTemplate.propTypes = {

}

export const pageQuery = graphql`
  query contactTemplateQuery($id: String!) {
    # selecting the current page by id
    page: wpPage(id: { eq: $id }) {
      ...PageDetails
      ...FooterCTAs
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

