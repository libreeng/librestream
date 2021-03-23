import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import parse from "html-react-parser"
import AddCircleLineIcon from 'remixicon-react/AddCircleLineIcon';
import IndeterminateCircleFillIcon from 'remixicon-react/IndeterminateCircleFillIcon';
import Hero from "../../common/ui/Hero"
import AccordionNav from "../../components/AccordionNav"
// import AccordionItems from "../../components/AccordionItems"



const SupportTemplate = ({ data: { page } }) => {
  const hero = {
    heroHeading: page.title
  }
  return (
    <>
      <Hero hero={hero} />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4">
              <AccordionNav />
              <div className="border-bracket mt-5 mb-3 text-center">
                <h6>Onsight Service Status</h6>
              </div>
              <a href="#link" className="btn btn-primary btn-block">View Onsight Service</a>
            </div>
            <div className="col-12 col-lg-8">
              <h4 className="text-uppercase"><strong>Support Section Title</strong></h4>
              {[...Array(6)].map((x, i) => (
                <div className="row border-bottom border-primary py-3 my-3">
                  <div className="col-lg-6">
                    <h3>Windows VXX.X.X (XXXX)</h3>
                    {/* <AccordionItems /> */}
                    <ul className="list-unstyled">
                      <li>
                        <a href="#link" className="text-uppercase">
                          <AddCircleLineIcon size="24" />
                          <IndeterminateCircleFillIcon size="24" />
                          Downloads and Updates
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-3 ml-lg-auto">
                    <img src="https://via.placeholder.com/500" className="img-fluid" alt="" />
                  </div>
                </div>
              )
              )}
            </div>
          </div>
        </div>
      </section>
      {!!page.content && (
        <section>
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
  query SupportTemplateQuery($id: String!) {
    # selecting the current page by id
    page: wpPage(id: { eq: $id }) {
      ...PageDetails
      ...PageHero
      acfSupportSections {
        supportSection {
          supportSectionTitle
          documentation {
            documentationTitle
            documentationKnowledgebase {
              ... on WpSupport {
                id
              }
            }
          }
        }
      }
    }
  }
`

export default SupportTemplate