import React, {useEffect, useRef } from 'react'
import Img from "gatsby-image"
import Layout from '../../components/Layout'
import Parallax from 'parallax-js' 
import vectorshape from '../../img/vectorshape.svg'

const templateHome = ({ data }) => {
  const heroParallax = useRef(null);
 
  useEffect(() => {
    const parallaxInstance = new Parallax(heroParallax.current, {
      relativeInput: false,
      clipRelativeInput: true,
      hoverOnly: false
    })

    parallaxInstance.enable();

    return () => parallaxInstance.disable();
  }, [])
  

  //const { title,content } = data.wpcontent.page
  const { title,description,linkType,linkText,internal,videoMp4,videoEmbed,videoDescription,slider } = data.wpcontent.page.acfTemplateHome

  
  return (
    <Layout>
      <div className="hero--home" ref={heroParallax}>

        <div className="bkg" data-depth="0.2">
          <Img className="w-100" fluid={data.homeHeroBkg.childImageSharp.fluid} alt="Background" />
        </div>
        <div className="worker position-absolute" data-depth="0.4">
          <Img className="" fluid={data.homeHeroWorker.childImageSharp.fluid} alt="Worker" />
        </div>
        
      
        <div className="content d-flex position-absolute" data-depth="0.1">
          <div className="container">
            <div className="row">
              <div className="col-6">
            
                <div className="content mb-4" >
                  <h2 className="title is-size-3 has-text-weight-bold is-bold-light text-white" style={{fontSize:'5vw'}}>Empowering the Workforce <span style={{color:'#49EBEA'}}>through Industrial AR, AI and IoT.</span></h2>
                  <p className="text-white"  style={{fontSize:'2vw',lineHeight:'1.3'}}>Empowering the Workforce through Industrial AR, AI and IoT.</p>
                  <button type="button" class="btn btn-lg btn-primary">Call To Action »</button>
                </div>

              </div>
            </div>
          </div>

         
        </div>
        
        <img className="vectorshape position-absolute" src={vectorshape} alt="Vector Shape" data-depth="0.7"/>
      </div>



      
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
    homeHeroBkg: file(name: {eq: "home_hero_bkg"}) {
      publicURL
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
   
    homeHeroWorker: file(name: { eq: "home_hero_worker" }) {
      publicURL
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }

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
