import React, { useEffect, useRef, useState } from 'react';
// import PropTypes from 'prop-types'
import PrimaryMenu from './menus/PrimaryMenu'

const Header = () => {
  const [isSticky, setSticky] = useState(false)
  const scrollPositionRef = useRef(null)

  const handleScroll = () => {
    if (scrollPositionRef.current) {
      if (scrollPositionRef.current.getBoundingClientRect().top < 0) {
        document.body.classList.add('has-scrolled')
        setSticky(true)
      } else {
        document.body.classList.remove('has-scrolled')
        setSticky(false)
      }
    }
  }

  useEffect(() => {
    // TODO: Needs Throttling
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', () => handleScroll)
    }
  }, [])

  return (
    <>
      <div ref={scrollPositionRef} />
      <header id="pageHeader" className={`header sticky-wrapper ${isSticky ? 'sticky' : ''} `}>
        <PrimaryMenu />
      </header>
    </>
  )
}

Header.propTypes = {

}

export default Header