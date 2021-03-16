import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import parse from "html-react-parser"
import Hero from "../../common/ui/Hero"
import Intro from "../../common/ui/Intro"

const MediaKitTemplate = ({ data: { page } }) => {

  const acf = page.acfTemplateMediaKit
  const hero = {
    heroHeading: page.title
  }
  const intro = page.acfIntro
  return (
    <>
      <Hero hero={hero} />
      <Intro intro={intro} />
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
            {acf.mediaKitDownload && acf.mediaKitDownload.map(download => (
              <div className="col-lg-4 mb-4 text-center">
                <a href={download?.mediaKitDownloadFile?.mediaItemUrl} className="btn btn-gradient-dark-blue text-white">{download.mediaKitDownloadLabel}</a>
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

    </>
  )
}

export const pageQuery = graphql`
  query MediaKitTemplateQuery($id: String!) {
    # selecting the current page by id
    page: wpPage(id: { eq: $id }) {
      ...PageDetails
      ...PageIntro
      acfTemplateMediaKit {
        mediaContacts {
          contactEmail
          contactName
          contactRole
        }
        mediaKitDownload {
          mediaKitDownloadFile {
            mediaItemUrl
          }
          mediaKitDownloadLabel
        }
      }
    }
  }
`

export default MediaKitTemplate