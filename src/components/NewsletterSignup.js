import React from 'react'
import { useSiteFooter } from '../common/hooks/useSiteFooter'
import parse from "html-react-parser"
// import PropTypes from 'prop-types'



const NewsletterSignup = () => {
  const { options } = useSiteFooter()
  return (
    <>
     {parse(options.mailingListFormShortcode)}
    </>
  )
}

// NewsletterSignup.propTypes = {

// }

export default NewsletterSignup
