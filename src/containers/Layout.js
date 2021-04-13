import React from 'react'
import PropTypes from 'prop-types'
import SEO from "./SEO"
import Header from '../common/ui/Header'
import Footer from '../common/ui/Footer'


const Layout = ({ children }) => {

  return (
    <>
      <SEO />
      <Header />
      <main id="pageContent">
        {children}
      </main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout