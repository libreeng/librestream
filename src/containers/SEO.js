import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useSiteMetadata } from '../common/hooks/useSiteMetadata'

const SEO = ({ pageSEO, className }) => {
  const { defaultSEO } = useSiteMetadata()
  const seo = {
    ...defaultSEO,
    ...pageSEO,
  }

  return (
    <Helmet titleTemplate={`%s | ${seo.title} - Librestream`} defaultTitle={seo.title}>
      <html lang={seo.inLanguage} />
      <body className={className} />
      <meta name="description" content={seo.description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seo.opengraphTitle} />
      <meta property="og:description" content={seo.metaDesc || seo.description} />
      <meta property="og:url" content={seo.opengraphUrl ? seo.opengraphUrl.replace('https://librestream.gatsbyjs.io', 'https://librestream.com') : 'https://librestream.com'} />
      <meta property="og:site_name" content={seo.opengraphSiteName} />
      <meta property="article:publisher" content={seo.facebook.url} />
      <meta property="article:modified_time" content={seo.opengraphModifiedTime} />
      <meta property="og:image" content={seo.opengraphImage?.sourceUrl || seo.shareImage} />
      <meta property="og:image:width" content={`1200px`} />
      <meta property="og:image:height" content={`1200px`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={`@${seo.twitter.username}`} />
      <meta name="twitter:site" content={`@${seo.twitter.username}`} />
    </Helmet>
  )
}

SEO.propTypes = {
  pageSEO: PropTypes.instanceOf(Object),
  className: PropTypes.string,
}
SEO.defaultProps = {
  pageSEO: null,
  className: '',
}


export default SEO

