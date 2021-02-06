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
                <a href="#" className="text-light d-flex align-items-center h4"><i className="icon-play icon-play-left mr-4" /> Previous Item</a>
                <a href="#" className="text-light d-flex align-items-center h4">Next Item <i className="icon-play ml-4" /></a>
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
