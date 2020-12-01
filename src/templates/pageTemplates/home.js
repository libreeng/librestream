import React from 'react'
import Layout from '../../components/Layout'

import CarouselExample from '../../sections/carousel_example'
import ModalExample from '../../sections/modal_example'
import ParallaxExample from '../../sections/parallax_example'

const templateHome = ({ data }) => {
  //const { title,content } = data.wpcontent.page
  const { title,description,linkType,linkText,internal,videoMp4,videoEmbed,videoDescription,slider } = data.wpcontent.page.acfTemplateHome

  
  return (
    <Layout>
      <section>

        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              
              <div
                className="content mb-4"
                dangerouslySetInnerHTML={{ __html: description }}
              />
              
              <a href={internal.uri} class="btn btn-large btn-primary">{linkText}</a>
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
    </Layout>



  )
}

/*
templateDefault.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
}
*/

export default templateHome


export const pageQuery = graphql`
  query HomeById($id: ID!) {
    wpcontent{
      page(id: $id) {
        title
        content    
        acfTemplateHome {
          title
          description
          linkType
          linkText
          internal {
            ... on WPGraphQL_Product {
              id
              title(format: RAW)
              uri
            }
            ... on WPGraphQL_Solution {
              id
              title(format: RAW)
              uri
            }
            ... on WPGraphQL_Post {
              id
              title(format: RAW)
              uri
            }
            ... on WPGraphQL_Page {
              id
              uri
              title(format: RAW)
            }
          }
          videoMp4 {
            sourceUrl(size: LARGE)
          }
          videoEmbed
          videoDescription
          
        }
      }
    }
  }
`
