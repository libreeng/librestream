import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import parse from "html-react-parser"
import Hero from "../../common/ui/Hero"

const PartnersTemplate = ({ data: { page } }) => {

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
                          style={{ backgroundImage: `url(${ partnerSection?.image?.localFile?.publicURL })`}}
                          className="bg-image aspect-3x1 bg-contain" />
                      </div>
                    )}
                  </div>
                </div>
                <div className="row row-cols-1 row-cols-md-4 mt-5">
                  {partnerSection.companies && partnerSection.companies.map(company =>
                    <div className="col" key={company.id}>
                      <div className="card border border-primary">
                        <div className="bg-image aspect-1x1">
                          <div className="bg-fill bg-transparent p-3">
                            <div className="w-100">
                              {company.acfPostTypePartner.partnerLogo && (
                                <img src={company?.acfPostTypePartner?.partnerLogo?.localFile?.publicURL} className="img-fluid" alt={company?.acfPostTypePartner?.partnerLogo?.altText} />
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer bg-transparent px-0">
                        <h6 className="text-primary mb-0">{company.title}</h6>
                        {/* {company.acfPostTypePartner.partnerDescription} */}
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
                partnerDescription
                partnerLogo {
                  altText
                  localFile {
                    url
                    childImageSharp {
                      fluid(maxWidth: 1000, quality: 100){
                        ...GatsbyImageSharpFluid
                      }
                    }
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
              childImageSharp {
                fluid(maxWidth: 1000, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
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