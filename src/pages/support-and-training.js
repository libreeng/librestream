import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import HeroDefault from '../components/HeroDefault'
import AccordionNav from '../components/AccordionNav'

const supportAndTraining = () => {
  return (
    <Layout>
      <HeroDefault title="Support & Training"></HeroDefault>
      <section>
        <div className="container">
          <div className="row">
          <div className="col-lg-3">
            <AccordionNav></AccordionNav>
          </div>
          <div className="col-lg-9">

          </div>
          </div>
        </div>
      </section>
      
    </Layout>
  )
}

supportAndTraining.propTypes = {

}

export default supportAndTraining
