import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import parse from "html-react-parser"
import Hero from "../../common/ui/hero/HeroDefault"

const MediaKitTemplate = ({ data: { page } }) => {

  const acf = page.acfTemplateMediaKit

  return (
    <>
      <Hero heroTitle={page.title} />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {acf.intro && parse(acf.intro)}
            </div>
            <div className="col-lg-4">
              <Image
                fluid={acf?.introImage?.localFile?.childImageSharp?.fluid}
                alt={acf?.introImage?.altText}
              />
            </div>
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
      acfTemplateMediaKit {
        intro
        introImage {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
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