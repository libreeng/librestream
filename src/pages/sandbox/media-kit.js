import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../../components/Layout'
import HeroDefault from '../../components/HeroDefault'
import CardSlider from '../../components/CardSlider'
import FooterCards from '../../components/FooterCards'

const mediaKit = () => {
  return (
    <Layout>
      <HeroDefault title="Media Kit" />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h2>Librestream is the pioneer of augmented remote expert technology, a core capability within the Onsight augmented reality platform.</h2>
              <p>Onsight, deployed in over 120 countries, is built for workers to collaborate virtually and access content from the world’s toughest environments and for the most demanding enterprises. Onsight delivers measurable business outcomes including worker safety and productivity, cost savings, reduced emissions, asset uptime gains, and improved customer service delivery. The company has been honored with recognition including ranking as the #1 AR remote assistance solution provider by independent research firm, Verdantix, as an IDC Innovator, and with a Field Service WBR Innovation Award.</p>
            </div>
            <div className="col-lg-3 ml-lg-auto">
              <img src="https://via.placeholder.com/300x100" className="img-fluid" alt="" />
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
            <div className="col-lg-4">
              <div className="border-bracket">
                <h6 className="mb-0">Firstname Lastname</h6>
                <p className="text-primary">Rolename Lorem, ipsum dolor.</p>
                <a href="#" className="text-dark">email@email.com</a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="border-bracket">
                <h6 className="mb-0">Firstname Lastname</h6>
                <p className="text-primary">Rolename Lorem, ipsum dolor.</p>
                <a href="#" className="text-dark">email@email.com</a>
              </div>
            </div>
            <div className="col-lg-4 text-lg-right">
              <a href="#" className="btn btn-gradient-dark-blue text-white">Download Media Kit</a>
            </div>
          </div>
        </div>
      </section>
      <hr className="hr-styled"/>
      <CardSlider title="Customer Use Cases" />
      <FooterCards />
    </Layout>
  )
}

mediaKit.propTypes = {

}

export default mediaKit
