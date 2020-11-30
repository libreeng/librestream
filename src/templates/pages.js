import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

import CarouselExample from '../sections/carousel_example'
import ModalExample from '../sections/modal_example'
import ParallaxExample from '../sections/parallax_example'



let flkty = null;

export const PageTemplate = ({ title, content }) => {
  


  

  return (
    <section>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
              {title}
            </h2>
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
        </div>
      </div>

       
      <div className="container mt-5 mb-3 border-top border-primary pt-3">
        <h3>Carousel Example</h3>            
        <CarouselExample />
      </div>
       
       <div className="container mt-5 mb-3 border-top border-primary pt-3">
         <h3>Modal Example</h3>            
         <ModalExample />
       </div>
       
       <div className="container mt-5 mb-3 border-top border-primary pt-3">
         <h3>Parallax-js Example</h3>            
         <ParallaxExample />
       </div>
       


    </section>



  )
}

PageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
}

const Page = ({ data }) => {
  const { wpcontent  } = data
  return (
    <Layout>
      <PageTemplate title={wpcontent.page.title} content={wpcontent.page.content} />
    </Layout>
  )
}

Page.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Page

export const pageQuery = graphql`
  query PageById($id: ID!) {
    wpcontent{
      page(id: $id) {
        title
        content
      }
    }
  }
`

