import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import HeroDefault from '../components/HeroDefault'
import CardSlider from '../components/CardSlider'
import FooterCards from '../components/FooterCards'

const singleProduct = () => {
  return (
    <>
      <Layout>
        <HeroDefault title="Remote Expert" subtitle="" subnav="true"></HeroDefault>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="border-bracket text-center">
                  <h3>The most widely deployed and device agnostic industrial remote expert solution.</h3>
                </div>
                <div className="text-center mt-4">
                  <a href="#" className="btn btn-secondary">Register for 30-day trial</a>
                </div>
                
              </div>
            </div>
          </div>
        </section>
        <section className="bg-dark text-white bg-offset-right mt-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti soluta repudiandae incidunt. Dolor suscipit atque dolorem fugit porro itaque, perferendis nostrum soluta deleniti fuga omnis incidunt, nobis, dicta voluptate facilis?</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus inventore magnam, voluptatem ullam facilis ratione recusandae illo voluptatibus cumque nisi corporis aspernatur officiis. Praesentium culpa minus enim corrupti sapiente quam.</p>
                <hr className="hr-sm border-green"/>
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
              {[...Array(3)].map((x, i) =>
                <div className="col-lg-4" key={i}>
                  <a href="#" className="btn btn-border">Download Name</a>
                </div>
              )}
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="bg-image aspect-1x1" style={{
                  backgroundImage: `url(https://picsum.photos/768)`
                }}></div>
              </div>
              <div className="col-lg-6">
                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, et nemo dolor amet officia itaque explicabo, voluptates labore repudiandae praesentium molestias illum pariatur in inventore voluptatum eum dignissimos, debitis blanditiis!</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed accusamus nostrum architecto temporibus tempore, nobis, quos, aperiam porro distinctio officia doloribus. Repellat necessitatibus libero sit alias ex sed, laborum quod.</p>
                <hr className="hr-sm ml-0"/>
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
                <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis voluptate, accusantium eius ab in pariatur autem odit! Blanditiis quia cumque quod nostrum vel debitis ex. Sequi delectus incidunt quos amet.</h3>
              </div>
              <div className="col-lg-8">
                <div className="row">
                  {[...Array(5)].map((x, i) =>
                    <div className="col-lg-6 mb-4" key={i}>
                      <div className="px-2 border-left border-dark">
                        <h6 class="text-uppercase text-primary">Sub-Heading</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eligendi voluptatem rem aut illum! Nulla eaque nam reiciendis laboriosam id praesentium impedit, dolores mollitia consequatur. Sunt dolores delectus nemo nobis!</p>
                      </div>
                    </div>
                  )}
                </div>
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
                <h2>Product Highlights</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="bg-image aspect-5x7">
                  <div className="bg-fill">
                    product highlights section
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <img src="https://via.placeholder.com/1000" className="img-fluid" alt=""/>
              </div>
            </div>
          </div>
        </section>
        <CardSlider title="Customer Use Cases" />
        <FooterCards />
      </Layout>       
    </>
  )
}

singleProduct.propTypes = {

}

export default singleProduct
