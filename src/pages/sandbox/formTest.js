import React from 'react'
import PropTypes from 'prop-types'

const formTest = props => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Test Form</h1>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <form action="post" className="form">
                <p className="form-field">
                  <label htmlFor="">Label</label>
                  <input type="text" />
                </p>
                <p className="form-field">
                  <label htmlFor="">Label</label>
                  <input type="text" />
                </p>
                <p className="form-field">
                  <label htmlFor="">Label</label>
                  <input type="text" />
                </p>
              </form>
            </div>
          </div>
        </div>
        
      </section>
    </>
  )
}

formTest.propTypes = {

}

export default formTest
