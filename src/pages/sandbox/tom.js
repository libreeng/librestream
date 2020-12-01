import React from 'react'
import Layout from '../../components/Layout'

import CarouselExample from '../../sections/carousel_example'

const SandboxPage = () => (
  <Layout>
    <div className="container mt-5">
      <div class="row">
        <div class="col-12">
          <h1>Tom's Sandbox</h1>
          <p>Play around on this page.</p>
        </div>
      </div>
    </div>

    <div className="container mt-5 mb-3 border-top border-primary pt-3">
      <h3>Carousel Example</h3>            
      <CarouselExample />
    </div>

  </Layout>
)

export default SandboxPage
