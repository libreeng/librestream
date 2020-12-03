import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout'
import axios from 'axios';

import CarouselExample from '../../sections/carousel_example'
import ModalExample from '../../sections/modal_example'
import ParallaxExample from '../../sections/parallax_example'


const GET_DATA_QUERY  = `
  query postQuery {
    page(id: "about", idType: URI) {
      title
      uri
      status
      slug
      acfTemplateAboutTimeline {
        aboutTitle
        about
      }
    } 
  }
`

const SandboxPage = () => {

  
  //const [data, setData] = useState({ hits: [] });
 
  useEffect(() => {
    console.log("USE EFFECT")
    const fetchData  = async() => {
      
      const queryResult = await axios.post (
          process.env.CMS_URL, {        
          query: GET_DATA_QUERY
        }
      )
      console.log("result",queryResult)
    }
    fetchData();
  }, []); // Or [] if effect doesn't need props or state

  return (
  <Layout>
    <div className="container mt-5">
      <div className="row">
        <div className="col-12">
          <h1>Paul's Sandbox</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
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

  </Layout>
  )
}

export default SandboxPage
