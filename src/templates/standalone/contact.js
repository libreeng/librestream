import React from 'react'
// import PropTypes from 'prop-types'
import HeroDefault from '../../components/HeroDefault'

const contact = () => {
  return (
    <>
      <HeroDefault title="Contact" />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8">
              <h2>For general questions and comments or if you would like our team to follow up with you, please fill out the form below with any questions or comments:</h2>
              <iframe src="https://1.librestream.com/l/859043/2020-04-27/bylx" width="100%" height="1000" frameBorder="0" title="Contact Form" />

            </div>
            <div className="col-12 col-lg-4 ml-lg-auto">
              <div className="border-bracket">
                <p>If you are a customer and have a support request, please fill out the support request form:</p>
              </div>
              <div className="text-center p-2">
                <i className="icon-arrow arrow-down arrow-dark" />
              </div>
              <a href="#" className="btn btn-gradient-dark-blue text-white btn-block">Support Request Form</a>
              <div className="border-bracket mt-5">
                <h6 className="mt-5">Head Office</h6>
                <address className="text-primary">
                  895 Waverley St., Suite 110<br /> Winnipeg, Manitoba<br />Canada, R3T 5P4
                </address>
              </div>
              <div className="text-center p-2">
                <i className="icon-arrow arrow-down arrow-dark" />
              </div>
              <a href="#" className="btn btn-border btn-block border-primary">View Map</a>
              <div className="border-bracket mt-5">
                <h6 className="mb-0">Phone</h6>
                <p className="text-primary">1-xxx-xxx-xxxx</p>
                <h6 className="mb-0">North America Toll Free</h6>
                <p className="text-primary">1-xxx-xxx-xxxx</p>
                <h6 className="mb-0">Fax</h6>
                <p className="text-primary">1-xxx-xxx-xxxx</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="hr-styled" />
    </>
  )
}

contact.propTypes = {

}

export default contact

