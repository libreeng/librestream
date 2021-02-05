import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import HeroDefault from '../components/HeroDefault'
import CardSlider from '../components/CardSlider'
import FooterCards from '../components/FooterCards'

const productRecycling = () => {
  return (
    <Layout>
      <HeroDefault title="Product Recycling" />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8">
              <h2>Librestream understands the importance of properly recycling materials that are negative to health and the environment.</h2>
              <p>As a producer of electronic equipment, Librestream is committed to the collection, treatment, recycling, and environmentally safe disposal of its devices at proper electronic waste disposal sites. As part of Librestream’s Onsight Product Recycling Program, clients that do not have local access to electronic waste disposal can simply send their end-of-life equipment back to Librestream for recycling.</p>
            </div>
            <div className="col-12 col-lg-3 ml-lg-auto">
              <img src="https://via.placeholder.com/350x150" className="img-fluid" alt="" />
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
              <h3 className="text-uppercase">Shipping</h3>
              <p className="text-primary">Please ship end-of-life equipment to:</p>
              <div className="border-bracket d-inline-block">
                <address>
                  895 Waverley St., Suite 110<br />Winnipeg, Manitoba<br />Canada, R3T 5P4
                </address>
              </div>
              
            </div>
          </div>
        </div>
      </section>
   
      <hr className="hr-styled" />
      <CardSlider title="Customer Use Cases" />
      <FooterCards />
    </Layout>
  )
}

productRecycling.propTypes = {

}

export default productRecycling
