import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import parse from "html-react-parser"
import SEO from "../../containers/SEO"
import Hero from "../../common/ui/Hero"
import Intro from "../../common/ui/Intro"
import FooterCTAs from '../../common/ui/FooterCTAs'

const MediaKitTemplate = ({ data: { page } }) => {
  const acf = page.acfTemplateMediaKit
  const hero = {
    heroHeading: page.title
  }
  const intro = page.acfIntro
  const { cta } = page.acfFooterCTAs

  return (
    <>
      <SEO pageSEO={page.seo} />
      <Hero hero={hero} />
      <Intro intro={intro} bracket="true" />
      <section className="py-0">
        <div className="container">
          <div className="row">
            {acf.mediaKitLinks && acf.mediaKitLinks.map((link, i) => (
              <div className="col-lg-4 mb-4 text-center">
                <a href={link.mediaKitLink.url} className="btn btn-primary btn-lg text-white" target={link.mediaKitLink.target}>{link.mediaKitLink.title ? link.mediaKitLink.title : 'Download'}</a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="container">
        <hr className="hr-styled" />
      </div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Media Contacts</h2>
            </div>
          </div>

          <div className="row mt-4">
            {acf.mediaContacts && acf.mediaContacts.map(contact => (
              <div className="col-lg-4 mb-4">
                <div className="border-bracket">
                  {contact.contactName && (
                    <h6 className="mb-0">{contact.contactName}</h6>
                  )}
                  {contact.contactRole && (
                    <p className="text-primary">{contact.contactRole}</p>
                  )}
                  {contact.contactEmail && (
                    <a href={contact.contactEmial} className="text-dark">{contact.contactEmail}</a>
                  )}

                </div>
              </div>
            ))}


          </div>
        </div>
      </section>
      {!!page.content && (
        <section itemProp="articleBody">
          <div className="container">
            <div className="row">
              <div className="col-12">
                {parse(page.content)}
              </div>
            </div>
          </div>
        </section>
      )}

      <FooterCTAs featured={cta} />
    </>
  )
}

export const pageQuery = graphql`
  query MediaKitTemplateQuery($id: String!) {
    # selecting the current page by id
    page: wpPage(id: { eq: $id }) {
      ...PageDetails
      ...PageIntro
      ...FooterCTAs
      acfTemplateMediaKit {
        mediaContacts {
          contactEmail
          contactName
          contactRole
        }
        mediaKitLinks {
          mediaKitLink {
            title
            target
            url
          }
        }
      }
    }
  }
`

export default MediaKitTemplate