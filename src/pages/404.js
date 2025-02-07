import React from 'react'
import Hero from "../common/ui/Hero"
import Helmet from 'react-helmet'

const NotFoundPage = () => {
  const hero = {
    heroHeading: "Page Not Found"
  }
  return (
    <>
      <Helmet 
         title="Librestream | Page not found"
      />
      <Hero hero={hero} />
      <section>
        <div className="container mt-5">
          <div className="row">
            <div className="col-12 text-center">
              <p>You just hit a route that doesn&#39;t exist...</p>
              <a href="/" className="btn btn-primary">Return to Home</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
  
}

export default NotFoundPage
