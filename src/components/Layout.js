import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import HEAD from "./Head"
import Header from './Header'
import Footer from './Footer'
import '../styles/main.scss'


function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <HEAD />
      {/* {props.location.pathname === '/' ? '' : ''} */}
      <Header siteTitle={data.site.siteMetadata.title} />

      <main id="pageContent">
        {children}
      </main>

      <Footer siteTitle={data.site.siteMetadata.title} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  // location: PropTypes.object.isRequired,
}

export default Layout
