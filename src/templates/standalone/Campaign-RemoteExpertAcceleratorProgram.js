import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import parse from "html-react-parser"
import Hero from "../../common/ui/Hero"
import AccordionItems from "../../components/AccordionItems"

const CampaignRemoteExpertAcceleratorProgramTemplate = ({ data: { page } }) => {
  
  
  return (
    <>
      <Hero heroTitle={page.title} />
      <section>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-9">
              <h3>Try the world’s #1 Remote Expert Solution FREE for 30 days.</h3>
            </div>
            <div className="col-lg-3 ml-lg-auto">
              <div className="border-bracket text-center">
                <img src="https://via.placeholder.com/150" className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gradient-blue">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="bg-image aspect-1x1 img-offset-top img-offset-bottom offset-bottom-lg bg-dark" />
            </div>
            <div className="col-lg-6">
              <AccordionItems className="accordion-icons" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-5 ml-lg-auto">
              <p>We are providing FREE access to the world’s leading remote expert software: Onsight</p>
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
              <h2>Register for your free 30-day trial</h2>
              <p>If you are a current Librestream customer please do not fill out the form, please reach out to your account manager. Please note (*) is a required Field.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <iframe src="https://1.librestream.com/l/859043/2020-09-14/8912w" title="Campaign Form" width="100%" height="900" type="text/html" frameBorder="0" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="hr-styled" />
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
  query CampaignRemoteExpertAcceleratorProgramTemplateQuery($id: String!) {
    # selecting the current page by id
    page: wpPage(id: { eq: $id }) {
      ...PageDetails
    }
  }
`

export default CampaignRemoteExpertAcceleratorProgramTemplate