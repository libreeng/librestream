import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../../components/Layout'
import HeroDefault from '../../components/HeroDefault'
import CardSlider from '../../components/CardSlider'
import FooterCards from '../../components/FooterCards'

const careers = () => {
  return (
    <Layout>
      <HeroDefault title="Career Opportunities" />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h2>We are always seeking high energy and talented people to continue expanding our products and services in the global enterprise collaborative video market.</h2>
              <p>If you are interested in working at a fast-paced, high growth entrepreneurial company, Librestream may be the place for you. Please forward your resume by email to Librestream Careers.</p>
            </div>
            <div className="col-lg-3 ml-lg-auto">
              <img src="https://via.placeholder.com/350x150" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            {[...Array(6)].map((x, i) => (
              <div className="col-12 col-lg-6 mb-4">
                <hr className="hr-styled"/>
                <h4 className="mt-4">Career Name</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed explicabo hic in! Distinctio libero pariatur inventore voluptates mollitia ipsam molestias debitis. Accusantium quos culpa nisi provident ad, veritatis reprehenderit officia?</p>
                <a href="#" className="btn btn-border border-primary mt-3">Continue Reading</a>
                
              </div>
              )
            )}  
          </div>
        </div>
      </section>
      
      <hr className="hr-styled" />
      <CardSlider title="Customer Use Cases" />
      <FooterCards />
    </Layout>
  )
}

careers.PropTypes = {

}

export default careers