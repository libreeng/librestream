import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import HeroCaseStudy from '../components/HeroCaseStudy'
import UseCaseSlider from '../components/UseCaseSlider'
import FooterCards from '../components/FooterCards'

const singleCaseStudy = () => {
  return (
    <>
      <Layout>
        <HeroCaseStudy></HeroCaseStudy>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2>Customer Use Case</h2>
                <h2 className="lead text-primary">Title Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, aperiam?</h2>
              </div>
            </div>
          </div>
        </section>
        <div className="container">
          <hr/>
        </div>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="bg-orange p-2">
                  <h6 className="mb-0 text-white">Situation</h6>
                </div>
                <div className="border-left border-dark p-3">
                  
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias libero unde natus, reprehenderit harum ipsam commodi nesciunt! Distinctio, quos! Consectetur delectus neque reprehenderit error eligendi numquam eius, ab veniam tempore.</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="bg-orange p-2">
                  <h6 className="mb-0 text-white">Solution</h6>
                </div>
                <div className="border-left border-dark p-3">
                  
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias libero unde natus, reprehenderit harum ipsam commodi nesciunt! Distinctio, quos! Consectetur delectus neque reprehenderit error eligendi numquam eius, ab veniam tempore.</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="bg-orange p-2">
                  <h6 className="mb-0 text-white">Results</h6>
                </div>
                <div className="border-left border-dark p-3">
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias libero unde natus, reprehenderit harum ipsam commodi nesciunt! Distinctio, quos! Consectetur delectus neque reprehenderit error eligendi numquam eius, ab veniam tempore.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="bg-primary text-white bg-offset-right mt-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <p className="lead">“30,000 inspections have now been conducted by SGS QiiQ, the remote inspections tool which was fully deployed during the year. This digital tool has established a new standard in the industry.”</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus inventore magnam, voluptatem ullam facilis ratione recusandae illo voluptatibus cumque nisi corporis aspernatur officiis. Praesentium culpa minus enim corrupti sapiente quam.</p>
                <a href="#" class="btn btn-primary">Full Article?</a>
                {/* It looks like on the current site this is a link to a blog post */}
              </div>
              <div className="col-lg-5">
                <img src="https://via.placeholder.com/768" className="img-fluid img-offset-top" alt=""/>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="d-flex justify-content-between align-items-center">
                  <a href="#">Previous Item</a>
                  <a href="#">Next Item</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <FooterCards></FooterCards>
      </Layout>
     
    </>
  )
}

singleCaseStudy.propTypes = {

}

export default singleCaseStudy
