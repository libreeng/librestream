import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useSiteMetadata } from '../hooks/useSiteMetadata'

const HEAD = ({ pageDescription, pageTitle, className }) => {
  const { title, description, lang } = useSiteMetadata()

  const metaTitle = pageTitle || title
  const metaDescription = pageDescription || description

  return (
    <Helmet titleTemplate={`%s | ${metaTitle} - Librestream`} defaultTitle={title} defer={false}>
      <html lang={lang} />
      <body className={className} />
      <meta name="description" content={metaDescription} />
      {/* TODO - Add default metaData and logic for page overrides */}
    </Helmet>
  )
}

HEAD.propTypes = {
  pageDescription: PropTypes.string,
  // meta: PropTypes.arrayOf(PropTypes.object),
  pageTitle: PropTypes.string
}

export default HEAD
