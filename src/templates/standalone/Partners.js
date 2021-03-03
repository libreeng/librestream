import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import parse from "html-react-parser"
import Hero from "../../common/ui/Hero"

const PartnersTemplate = ({ data: { page } }) => {
  const featuredImage = {
    fluid: page.featuredImage?.node?.localFile?.childImageSharp?.fluid,
    alt: page.featuredImage?.node?.alt || ``,
  }

  const acf = page.acfTemplatePartners

  console.log(acf)
  return (
    <>
      <Hero heroTitle="Partners" />
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
                    <Image
                      fluid={partnerSection.image.localFile.childImageSharp.fluid}
                      alt={company.acfPostTypePartner.partnerLogo.altText}
                    />
                  )}
                </div>
              </div>
              <div class="row row-cols-1 row-cols-md-4 mt-5">
                {partnerSection.companies && partnerSection.companies.map(company => 
                  <div className="col" key={company.id}>
                    <div className="card border border-primary">
                      <div className="bg-image aspect-1x1">
                        <div className="bg-fill bg-transparent p-3"> 
                          <div className="w-100">
                          {company.acfPostTypePartner.partnerLogo && (
                            <Image
                              fluid={company.acfPostTypePartner?.partnerLogo?.localFile?.childImageSharp?.fluid}
                              alt={company.acfPostTypePartner?.partnerLogo?.altText}
                            />
                          )}
                          </div>
                          {/* <img src={company.acfPostTypePartner.partnerLogo.localFile.url} class="img-fluid" alt=""/> */}
                        </div>
                      </div>
                      
                    </div>
                    <div className="card-footer bg-transparent px-0">
                      <h6 className="text-primary mb-0">{company.title}</h6>
                      {/* {company.acfPostTypePartner.partnerDescription} */}
                      <a href="#modal" class="h6 text-uppercase">Read More</a>
                    </div>
                  </div>  
                )}
              </div>
            </div>
          </section>
          {/* <div className="container">
            <hr className="hr-styled" />
          </div> */}
        </>
      )}
      
      <hr className="hr-styled" />

      {!!page.content && (
        <section itemProp="articleBody">{parse(page.content)}</section>
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
            }
          }
          title
        }
      }
    }
  }
`

export default PartnersTemplate