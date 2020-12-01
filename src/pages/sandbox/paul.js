import React from 'react'
import Layout from '../../components/Layout'

import CarouselExample from '../../sections/carousel_example'
import ModalExample from '../../sections/modal_example'
import ParallaxExample from '../../sections/parallax_example'

const SandboxPage = () => (
  <Layout>
    <div className="container mt-5">
      <div class="row">
        <div class="col-12">
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

export default SandboxPage
