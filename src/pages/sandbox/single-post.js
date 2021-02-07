import React from 'react'
// import PropTypes from 'prop-types'
import HeroDefault from '../../components/HeroDefault'
import Card from '../../components/Card'
import NewsletterSignup from '../../components/NewsletterSignup'
import SocialShare from '../../components/SocialShare'
import CardSlider from '../../components/CardSlider'
import FooterCards from '../../components/FooterCards'

const singlePost = () => {
  return (
    <>
      <HeroDefault title="News" subtitle="" subnav="" logo="" />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h1>Post Title</h1>
              <hr />
              <p className="text-light">Posted Dec. 8, 2020</p>
              <img src="https://via.placeholder.com/1000x768" className="img-fluid mb-4" alt="" />
              <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero quis recusandae, officiis ad provident dolores soluta ea ut, suscipit maiores tenetur facere. Voluptate ad, praesentium cum exercitationem in quo est!</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nemo, distinctio dolorem id, assumenda dolore deserunt illum laudantium tempora aperiam quam iure doloribus illo quaerat quae fugit dolor cum quidem.</p>
              <a href="#" className="btn btn-secondary">Button Text</a>
            </div>
            <div className="col-lg-3 ml-lg-auto">
              <a href="#" className="d-flex align-items-center">Next <i className="icon-play ml-2"></i></a>
              <hr />
              <h6>Related Posts</h6>
              {[...Array(3)].map((x, i) =>
                <Card key={i} />
              )}
              <div className="border-bracket">
                <p>Want more news? Sign up here for the latest industry news and events.</p>
              </div>
              <NewsletterSignup />
              <SocialShare />
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

singlePost.propTypes = {

}

export default singlePost
