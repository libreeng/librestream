import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import HeroDetailed from '../components/HeroDetailed'

import CarouselBootstrap from '../components/CarouselBootstrap'
import CardSlider from '../components/CardSlider'
import Stat from '../components/Stat'

const platform = () => {
  return (
    <Layout>
      <>
        <HeroDetailed title="Platform"></HeroDetailed>
        <section>
          <div className="container">
            <div className="row">
            {[...Array(3)].map((x, i) =>
              <Stat></Stat>
            )}
            </div>
          </div>
        </section>
        <div className="container">
          <hr className="hr-styled"/>
        </div>
        
        <section>
          <div className="container">
            <div className="row mb-4">
              <div className="col-lg-6">
                <p className="text-primary h3">Our Onsight platform transforms workforces for a more resilient future through advanced augmented reality and artificial intelligence solutions that power connected networks of knowledge across operations to enhance efficiency, performance, and safety.</p>
              </div>
              <div className="col-lg-6">
                <div className="responsive-iframe aspect-16x9">
                  <iframe src="https://www.youtube.com/embed/rxQzgNh2ANY" frameborder="0"></iframe>
                </div>
              </div>
            </div>
            <hr className="hr-styled"/>
            <div className="row mt-4">
              <div className="col-12">
                <h2 className="text-uppercase">Platform Capabilities</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla tenetur possimus, at quidem labore minus dolore quisquam maxime fugit, natus est mollitia. Iusto itaque aut debitis consectetur maxime? Accusantium, voluptates.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gradient-blue text-white">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <CarouselBootstrap></CarouselBootstrap>
              </div>
            </div>
            <hr className="hr-white"/>
            <div className="row">
              <div className="col-lg-4 border-left border-green">
                <h3>Onsight is the one tool to guide your Digital Transformation.</h3>
              </div>
              <div className="col-lg-4 border-left border-blue">
                <p>Our Onsight augmented reality knowledge platform powers the AI Connected Experts of the future with built-in advanced artificial intelligence, IoT data visualization, and augmented reality capabilities. These innovative features reduce the cognitive load on workers, create effective communication environments and streamline data across operations.</p>
              </div>
              <div className="col-lg-4 border-left border-blue">
                <ul className="checklist">
                  <li>lorem Item</li>
                  <li>lorem Item</li>
                  <li>lorem Item</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <CardSlider title="Case Studies"></CardSlider>
      </>
    </Layout>
    
  )
}

platform.propTypes = {

}

export default platform
