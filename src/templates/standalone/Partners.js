import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import parse from "html-react-parser"
import Hero from "../../common/ui/Hero"
import { useDispatch } from "react-redux"
import { openModal } from "../../common/modals/modalActions"
import PartnerModal from '../../common/modals/PartnerModal'

const PartnersTemplate = ({ data: { page } }) => {
  const dispatch = useDispatch();
  const acf = page.acfTemplatePartners
  const hero = {
    heroHeading: page.title
  }
  return (
    <>
      <Hero hero={hero} />
      {acf.partners && acf.partners.map(
        partnerSection =>
          <>
            <section>
              <div className="container">
                <div className="row">
                  <div className="col-lg-8">
                    {partnerSection.title && (
                      <h2 className="text-uppercase">{partnerSection.title}</h2>
                    )}
                    {partnerSection.content && (
                      parse(partnerSection.content)
                    )}
                  </div>
                  <div className="col-lg-4">
                    {partnerSection.image && (
                      <div className="border-bracket py-3 ml-lg-auto w-75">
                        <div
                          style={{ backgroundImage: `url(${partnerSection?.image?.localFile?.publicURL})` }}
                          className="bg-image aspect-3x1 bg-contain" />
                      </div>
                    )}
                  </div>
                </div>
                <div className="row row-cols-1 row-cols-md-4 mt-5">
                  {partnerSection.companies && partnerSection.companies.map(partner =>
                    <div className="col" key={partner.id}>
                      <div className="card border border-primary" onClick={() => dispatch(openModal("PartnerModal", { partner: partner.acfPostTypePartner }))}>
                        <div className="bg-image aspect-1x1">
                          <div className="bg-fill bg-transparent p-3">
                            <div className="w-100">
                              {partner.acfPostTypePartner.partnerLogo && (
                                <img src={partner?.acfPostTypePartner?.partnerLogo?.localFile?.publicURL} className="img-fluid" alt={partner?.acfPostTypePartner?.partnerLogo?.altText} />
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer bg-transparent px-0">
                        <h6 className="text-primary mb-0">{partner.title}</h6>
                        {/* {partner.acfPostTypePartner.partnerDescription} */}
                        <a href="#modal" className="h6 text-uppercase">Read More</a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>
          </>
      )}

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
  query PartnersTemplateQuery($id: String!) {
    # selecting the current page by id
    page: wpPage(id: { eq: $id }) {
      ...PageDetails
      acfTemplatePartners {
        partners {
          companies {
            ... on WpPartner {
              id
              title
              acfPostTypePartner {
                partnerActions {
                  actionType
                  external
                  modalText
                  title
                  videoDescription
                  videoEmbed
                  linkDownload {
                    localFile {
                      publicURL
                      url
                    }
                  }
                  linkPage {
                    ... on WpPost {
                      slug
                    }
                    ... on WpPage {
                      slug
                    }
                    ... on WpProduct {
                      slug
                    }
                    ... on WpSolution {
                      uri
                      slug
                    }
                  }
                }
                partnerDescription
                partnerLogo {
                  altText
                  localFile {
                    publicURL
                  }
                }
              }
            }
          }
          content
          image {
            altText
            localFile {
              publicURL
            }
          }
          title
        }
      }
    }
  }
`

export default PartnersTemplate