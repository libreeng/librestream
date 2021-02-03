import React from 'react'
import PropTypes from 'prop-types'

const NextPrevNav = () => {
  return (
    <>
     <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="d-flex justify-content-between align-items-center">
                <a href="#">Previous Item</a>
                <a href="#">Next Item</a>
              </div>
            </div>
          </div>
        </div>
      </section> 
    </>
  )
}

NextPrevNav.propTypes = {

}

export default NextPrevNav
