import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
const Flickity = typeof window !== "undefined" ? require("react-flickity-component") : () => null
require('flickity-imagesloaded');

export const PageTemplate = ({ title, content }) => {
  console.log("Running page template")
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
      </div>

      {Flickity && (
                <Flickity   
                  options={{ // https://flickity.metafizzy.co/options.html
                    //initialIndex: 1,
                    lazyLoad: true,
                    wrapAround: true,
                    imagesLoaded: true
                  }} 
                  >
                  <div className="col-4"><img src="https://placeimg.com/640/480/animals" className="w-100"/> </div>
                  <div className="col-4"><img src="https://placeimg.com/640/580/nature" className="w-100"/> </div>
                  <div className="col-4"><img src="https://placeimg.com/640/480/architecture" className="w-100"/> </div>
                  <div className="col-4"><img src="https://placeimg.com/640/480/people" className="w-100"/> </div>
                  <div className="col-4"><img src="https://placeimg.com/640/480/tech" className="w-100"/> </div>
                </Flickity>
            )}
    </section>



  )
}

PageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
}

const Page = ({ data }) => {
  const { wpcontent  } = data
  console.log("PAEG",wpcontent)
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
