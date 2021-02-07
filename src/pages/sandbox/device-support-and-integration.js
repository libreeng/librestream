import React from 'react'
// import PropTypes from 'prop-types'
import HeroDefault from '../../components/HeroDefault'
import CardSlider from '../../components/CardSlider'
import FooterCards from '../../components/FooterCards'

const deviceSupportandIntegration = () => {
  return (
    <>
      <HeroDefault title="Device Support &amp; Integration" />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h2>Find an Ecosystem Integration Partner or a Hardware Partner.</h2>
              <p>We have an extensive customer success program in place to take you all the way from Training your first Onsight user to a fully scaled and deployed solution within your organization.</p>
            </div>
            <div className="col-lg-3 ml-lg-auto">
              <img src="https://via.placeholder.com/768x375" className="img-fluid" alt="" />
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
            <div className="col-lg-8">
              <h2 className="text-uppercase">Hardware Partners</h2>
              <p>The Onsight OptimizedTM program certifies specific mobile devices and wearables to work seamlessly with Librestream’s Onsight AR platform. Optimized devices are thoroughly tested, to ensure compatibility with all features and capabilities. In some cases, specific software and firmware modifications are made, enabling advanced features that take advantage of unique hardware and software combination. Librestream and its optimized hardware partners perform ongoing solutions testing, roadmap alignment, and cross-train their support and sales teams on the joint solution.</p>
              <a href="#" className="btn btn-gradient-dark-blue btn-lg text-white mt-4">More about hardware partners</a>
            </div>
            <div className="col-lg-4">
              <img src="https://via.placeholder.com/768" className="img-fluid" alt="" />
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
            <div className="col-lg-8">
              <h2 className="text-uppercase">Ecosystem Partners</h2>
              <p>Implement a streamlined digital transformation strategy by integrating Onsight to back-office systems, IoT data sources, and content repositories for cohesive end-to-end system visibility, metadata augmentation, and enhanced business intelligence.</p>
              <p>The Onsight REST APIs provide integration across your digital ecosystem. Simply start a Connect call or initiate a Flow job from your ERP or CRM system. As part of your workflow, access IoT data in the field and automatically tag content with relevant metadata for advanced search and analysis.</p>
              <a href="#" className="btn btn-gradient-dark-blue btn-lg text-white mt-4">More about Ecosystem partners</a>
            </div>
            <div className="col-lg-4">
              <img src="https://via.placeholder.com/768" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
      <hr className="hr-styled" />
      <CardSlider title="Customer Use Cases" />
      <FooterCards />
    </>
  )
}

deviceSupportandIntegration.PropTypes = {

}

export default deviceSupportandIntegration
