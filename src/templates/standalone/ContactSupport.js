import React from "react"
import { graphql } from "gatsby"
import parse from "html-react-parser"
import { useSiteFooter } from '../../common/hooks/useSiteFooter'
import Hero from "../../common/ui/Hero"

const ContactSupportTemplate = ({ data: { page } }) => {
  const acf = page.acfTemplateContactSupport
  const {options} = useSiteFooter()
  const hero = {
    heroHeading: page.title
  }

  return (
    <>
      <Hero hero={hero} />
      <section className="pb-0">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              {acf.accessSupportTitle && (
                <div className="border-bracket text-center p-3">
                  <h2 className="h4 mb-0"><strong>{acf.accessSupportTitle}</strong></h2>
                </div>
              )}
              {acf.accessSupportLink && (
                <div className="text-center mt-2">
                  <a href={acf.accessSupportLink.url} className="btn btn-primary btn-lg text-white my-5" target={acf.accessSupportLink.target}>{acf.accessSupportLink.title}</a>
                </div>
              )}
              <hr className="hr-styled" />
            </div>
          </div>
        </div>
      </section>
      <section className="pt-0">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              {!!page.content && (
                parse(page.content)
              )}
            </div>
          </div>
        </div>
      </section>
      
      <section className="pt-0">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              <div className="row">
                <div className="col-12">
                  <hr className="hr-styled" />
                  {acf.contactSalesTitle && (
                    <h3 className="text-center pt-3 mb-3">{acf.contactSalesTitle}</h3>
                  )}
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-lg-7">
                  {acf.contactSalesDescription && (
                    parse(acf.contactSalesDescription)
                  )}
                </div>
                <div className="col-12 col-lg-5">
                  <div className="border-bracket"> 
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
          </div>
        </div>
      </section>
    </>
  )
}

export const pageQuery = graphql`
  query ContactSupportTemplateQuery($id: String!) {
    # selecting the current page by id
    page: wpPage(id: { eq: $id }) {
      ...PageDetails
      acfTemplateContactSupport {
        accessSupportLink {
          target
          title
          url
        }
        accessSupportTitle
        contactSalesDescription
        contactSalesLink {
          target
          title
          url
        }
        contactSalesTitle
        phoneNumbers {
          phoneNumber
          phoneNumberLabel
        }
      }
    }
  }
`

export default ContactSupportTemplate