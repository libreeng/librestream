import React from 'react'
import Primarynav from './Primarynav'
import { Link } from 'gatsby'
// import PropTypes from 'prop-types'

const Header = () => {
  return (
    <header id="pageHeader" className="bg-primary py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
          <h1><Link to="/" className='text-white font-weight-bold'>LIBRESTREAM</Link></h1>
            
          </div>
          <div className="col-12 col-md-6">
           
           <Primarynav/>

          </div>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {

}

export default Header