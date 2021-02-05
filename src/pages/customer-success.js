import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import HeroDefault from '../components/HeroDefault'
import CardSlider from '../components/CardSlider'
import FooterCards from '../components/FooterCards'

const customerSuccess = () => {
  return (
    <>
      <Layout>
        <HeroDefault title="Customer Success" />
        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <h2>Transform your workforce with us by your side every step of the way.</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate repellendus consectetur perferendis, eos quae incidunt ad provident nam facilis magnam alias aspernatur consequatur asperiores, a sequi aliquam. Sequi, voluptates hic.</p>
              </div>
              <div className="col-lg-4">
                <img src="https://via.placeholder.com/768x500" className="img-fluid" alt="" />
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
              <div className="col-lg-6">
                <h2 className="text-uppercase">Training</h2>
                <p>The Training Team is keen to understand your ‘organizational learning’ culture in order to meet your learning needs. In turn, we develop tailored training plans to ensure learning retention results in Onsight adoption.</p>
                <h6 className="text-primary">Our training program includes a variety of training options to explore:</h6>
                <ul className="font-weight-light pl-3">
                  <li>Self-Directed Micro-Learning Resources</li>
                  <li>In-Person and Virtual Training</li>
                  <li>E-Learning Courses for Anytime, Anywhere Online Global Training</li>
                  <li>Blended Learning Approach</li>
                  <li>Train-The-Trainer Series</li>
                  <li>Training Certification</li>
                </ul>
              </div>
              <div className="col-lg-6">
                <div className="row">
                  {[...Array(3)].map((x, i) => (
                    <div className="col-12 col-lg-4 mb-3">
                      <img src="https://via.placeholder.com/500" className="img-fluid" alt="award badge" />
                      <h6 className="text-center mt-3">AI Computer Vision</h6>
                      <div className="border-bracket-bottom" />
                    </div>
                  )
                  )}
                </div>
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
              <div className="col-lg-6">
                <h2 className="text-uppercase">Deployment</h2>
                <p>The Training Team is keen to understand your ‘organizational learning’ culture in order to meet your learning needs. In turn, we develop tailored training plans to ensure learning retention results in Onsight adoption. Our training program includes a variety of training options to explore: - Self-Directed Micro-Learning Resources - In-Person and Virtual Training - E-Learning Courses for Anytime, Anywhere Online Global Training - Blended Learning Approach - Train-The-Trainer Series - Training Certification</p>
                <h6 className="text-primary">Our training program includes a variety of training options to explore:</h6>
                <ul className="font-weight-light pl-3">
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                </ul>
              </div>
              <div className="col-lg-6">
                <div className="row">
                  {[...Array(3)].map((x, i) => (
                      <div className="col-12 col-lg-4 mb-3">
                        <img src="https://via.placeholder.com/500" className="img-fluid" alt="award badge" />
                        <h6 className="text-center mt-3">AI Computer Vision</h6>
                        <div className="border-bracket-bottom" />
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container">
          <hr className="hr-styled" />
        </div>
        <section>
          <div className="container">
            <div className="row mb-5">
              <div className="col-12">
                <h2 className="text-uppercase">Customer Success Highlights</h2>
              </div>
            </div>
            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5">
              {[...Array(10)].map((x, i) => (
                <div className="col">
                  <h6>AI Computer Vision</h6>
                </div>
              )
              )}
            </div>
          </div>
        </section>
        <CardSlider title="Customer Use Cases" />
        <FooterCards />
      </Layout> 
    </>
  )
}

customerSuccess.propTypes = {

}

export default customerSuccess
