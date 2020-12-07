import React from 'react';
import Layout from '../../components/Layout'
import HeroDefault from '../../components/HeroDefault'



const SandboxPage = () => {
 

  return (
  <Layout>
  <HeroDefault title="Styles" />
    <div className="container mt-5">
      <div className="row">
        <div className="col-12">
          <h1>Styles</h1>
        </div>
      </div>
    </div>

    
    <div className="container mt-5 mb-3 border-top border-primary pt-3">
      <h3>Parallax-js Example</h3>  
    </div>

  </Layout>
  )
}

export default SandboxPage
