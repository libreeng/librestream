import React from 'react'
import Hero from "../common/ui/Hero"

const NotFoundPage = () => {
  const hero = {
    heroHeading: "Page Not Found"
  }
  return (
    <>
      <Hero hero={hero} />
      <section>
        <div className="container mt-5">
          <div className="row">
            <div className="col-12">
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
