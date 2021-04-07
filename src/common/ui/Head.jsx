import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useSiteMetadata } from '../hooks/useSiteMetadata'

const HEAD = ({ pageDescription, pageTitle, pageUrl, className }) => {
  const { title, description, lang, url, social } = useSiteMetadata()

  const metaTitle = pageTitle || title
  const metaDescription = pageDescription || description
  const metaUrl = pageUrl || url
  // TODO: refactor to pull date from graphQL query
  // const updatedAt = "2020-10-30T21:24:23+00:00"
  const shareImage = social.facebook.defaultImage

  return (
    <Helmet titleTemplate={`%s | ${metaTitle} - Librestream`} defaultTitle={title} defer={false}>
      <html lang={lang} />
      <body className={className} />
      <meta name="description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={metaTitle}/>
      <meta property="og:description" content={metaDescription}/>
      <meta property="og:url" content={metaUrl} />
      <meta property="og:site_name" content={metaTitle} />
      <meta property="article:publisher" content={social.facebook.url} />
      {/* <meta property="article:modified_time" content={updatedAt} /> */}
      <meta property="og:image" content={shareImage.sourceUrl} />
      <meta property="og:image:width" content={shareImage.mediaDetails.width} />
      <meta property="og:image:height" content={shareImage.mediaDetails.height} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={`@${social.twitter.username}`} />
      <meta name="twitter:site" content={`@${social.twitter.username}`} />
    </Helmet>
  )
}

HEAD.propTypes = {
  pageDescription: PropTypes.string,
  pageTitle: PropTypes.string
}

export default HEAD
