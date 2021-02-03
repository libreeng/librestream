import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import HeroDefault from '../components/HeroDefault'
import CardSlider from '../components/CardSlider'
import FooterCards from '../components/FooterCards'

const productRecycling = () => {
  return (
    <Layout>
      <HeroDefault title="Product Recycling"></HeroDefault>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h2>Librestream understands the importance of properly recycling materials that are negative to health and the environment.</h2>
              <p>As a producer of electronic equipment, Librestream is committed to the collection, treatment, recycling, and environmentally safe disposal of its devices at proper electronic waste disposal sites. As part of Librestream’s Onsight Product Recycling Program, clients that do not have local access to electronic waste disposal can simply send their end-of-life equipment back to Librestream for recycling.</p>
            </div>
            <div className="col-lg-4">
              <img src="https://via.placeholder.com/768" className="img-fluid" alt=""/>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <hr className="hr-styled"/>
      </div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Shipping</h2>
              <p className="text-primary">Please ship end-of-life equipment to:</p>
              <address>
                895 Waverley St., Suite 110<br/>Winnipeg, Manitoba<br/>Canada, R3T 5P4
              </address>
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

productRecycling.propTypes = {

}

export default productRecycling
