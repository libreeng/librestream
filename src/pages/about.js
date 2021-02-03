import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import HeroDefault from '../components/HeroDefault'
import CardSlider from '../components/CardSlider'
import FooterCards from '../components/FooterCards'

const about = () => {
  return (
    <Layout>
      <HeroDefault title="Company Profile"></HeroDefault>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h2>Our Story</h2>
              <p className="lead">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem nemo aperiam fugit sed accusantium sequi tempore consequuntur doloribus soluta porro magni, assumenda aliquid quasi esse placeat praesentium id delectus quis?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quasi quod quas? Vero corporis illo aut mollitia optio error, quidem, tempore quasi porro quae necessitatibus fugit magni. Distinctio, asperiores ab!</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae atque consequuntur, maxime natus laudantium hic facilis similique debitis molestias earum neque qui, possimus accusamus inventore laborum aperiam! Minus, ipsa suscipit?</p>
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
              <h2>Awards</h2>
            </div>
          </div>
          <div className="row">
            {[...Array(12)].map((x, i) =>
              <div className="col-12 col-lg-2 mb-4">
                <img src="https://via.placeholder.com/500" className="img-fluid" alt="award badge image"/>
              </div>
            )}
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
              <h2>Our Timeline</h2>
            </div>
          </div>
        </div>
      </section>
      <div className="responsive-iframe aspect-2x1">
        <div className="bg-fill">
          <h1>Timeline video</h1>
        </div>
        
        {/* <iframe src="" frameborder="0">timeline video</iframe> */}
      </div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Board of Directors</h2>
            </div>
          </div>
          <div className="row">
            {[...Array(12)].map((x, i) =>
              <div className="col-12 col-lg-3 mb-4">
                <img src="https://via.placeholder.com/500" className="img-fluid mb-3" alt="award badge image"/>
                <h4 className="mb-0">Firstname Lastname</h4>
                <p className="text-primary">Tile / rolename</p>
              </div>
            )}
          </div>
          <hr className="hr-styled"/>
          <div className="row">
            <div className="col-12">
              <h2>Management</h2>
            </div>
          </div>
          <div className="row">
            {[...Array(12)].map((x, i) =>
              <div className="col-12 col-lg-3 mb-4">
                <img src="https://via.placeholder.com/500" className="img-fluid mb-3" alt="award badge image"/>
                <h4 className="mb-0">Firstname Lastname</h4>
                <p className="text-primary">Tile / rolename</p>
              </div>
            )}
          </div>
        </div>
      </section>
      <hr className="hr-styled"/>
      <CardSlider title="Case Studies"></CardSlider>
      <FooterCards></FooterCards>
    </Layout>
  )
}

about.propTypes = {

}

export default about
