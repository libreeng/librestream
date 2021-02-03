import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import HeroDefault from '../components/HeroDefault'
import CardSlider from '../components/CardSlider'
import FooterCards from '../components/FooterCards'

const contact = () => {
  return (
    <Layout>
      <HeroDefault title="Contact"></HeroDefault>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h2>For general questions and comments or if you would like our team to follow up with you, please fill out the form below with any questions or comments:</h2>
              <div className="bg-image aspect-5x7">
                <div className="bg-fill">
                  Add form
                </div>
              </div>
              
            </div>
            <div className="col-lg-4">
              <div className="border-bracket">
              <p>If you are a customer and have a support request, please fill out the support request form:</p>
              </div>
              
              <a href="" className="btn btn-primary">Support Request Form</a>
              <div className="border-bracket">
                <h6 className="mt-5">Head Office</h6>
                <address>
                  895 Waverley St., Suite 110<br/> Winnipeg, Manitoba<br/>Canada, R3T 5P4
                </address>
              </div>
              <a href="#" className="btn btn-bordered">View Map</a>
              <div className="border-bracket">
                <h6>Phone</h6>
                <p>1-xxx-xxx-xxxx</p>
                <h6>North America Toll Free</h6>
                <p>1-xxx-xxx-xxxx</p>
                <h6>Fax</h6>
                <p>1-xxx-xxx-xxxx</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="hr-styled"/>
      <CardSlider title="Case Studies"></CardSlider>
      <FooterCards></FooterCards>
    </Layout>
  )
}

contact.propTypes = {

}

export default contact

