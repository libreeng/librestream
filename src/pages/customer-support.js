import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import HeroDefault from '../components/HeroDefault'
import UseCaseSlider from '../components/UseCaseSlider'
import FooterCards from '../components/FooterCards'

const customerSupport = () => {
  return (
    <Layout>
      <HeroDefault title="Customer Support"></HeroDefault>
      <section>
        <div className="container">
          <div className="row justify-content-lg-center">
            <div className="col-lg-8">
              <div className="border-bracket text-center">
                <h2>Access Support &amp; Training Docs</h2>
              </div>
              <div className="text-center mb-5">
                <a href="#" className="btn btn-primary">Access</a>
              </div>
              <hr className="hr-styled"/>
              <h2 className="text-center mt-3">Submit a case</h2>
              <div className="bg-image aspect-5x7">
                <div className="bg-fill">
                  Add Case form
                </div>
              </div>
              <hr className="hr-styled"/>
              <div className="col-12">
                <h2 className="text-center">Contact Sales</h2>
              </div>
              <div className="row">
                <div className="col-lg-8">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero non iure dolor, id ad et autem, sint deleniti molestiae voluptas ipsam! Earum soluta incidunt temporibus cum officiis dolor accusantium omnis.</p>
                  <a href="#" className="btn btn-primary">Contact Sales Directly</a>
                </div>
                <div className="col-lg-4">
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
          </div>
        </div>
      </section>
      <hr className="hr-styled"/>
      <UseCaseSlider></UseCaseSlider>
      <FooterCards></FooterCards>
    </Layout>
  )
}

customerSupport.propTypes = {

}

export default customerSupport
