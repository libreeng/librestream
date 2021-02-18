import React from 'react'
// import PropTypes from 'prop-types'
import Card from '../../components/Card'

const collectionView = () => {
  return (
    <>
      <div className="container">
        <hr className="hr-styled" />
      </div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="bg-dark p-3">
                <div className="bg-fill text-white">
                  filtering
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            {[...Array(16)].map((x, i) => (
              <div className="col-12 col-lg-3 mb-4">
                <Card />
              </div>
            )
            )}
          </div>
        </div>
      </section>
      <hr className="hr-styled" />
    </>
  )
}

collectionView.propTypes = {

}

export default collectionView
