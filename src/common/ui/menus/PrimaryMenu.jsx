import React, {useState, useEffect, useRef} from 'react'
// import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import SearchLineIcon from 'remixicon-react/SearchLineIcon'
import { useSiteMetadata } from '../../hooks/useSiteMetadata'
import { useSiteHeader } from '../../hooks/useSiteHeader'
import NavPointer from '../NavPointer'

const PrimaryMenu = () => {
  const { menuItems, logo } = useSiteHeader()
  const { title } = useSiteMetadata()
  const [arrowPos, setArrowPos] = useState(-10)
  const menu = menuItems.filter(node => !node.parentId)

  const handleArrowMove = (leftPosition) => {
    setArrowPos(leftPosition)
  }
  const moveHighlightToElement = (elem) => {
    const centerPos = elem.getBoundingClientRect().left + (elem.getBoundingClientRect().width / 2)
    handleArrowMove(centerPos)
  }
  const highlightedNavRef = useRef(null)
  // TODO: the "ActiveKey" variable on Nav needs work to incorporate sub-pages
  const activeKey = null // window.location.pathname ! Window is not defined when doing a build.

  useEffect(() => {
    if (highlightedNavRef.current) {
      moveHighlightToElement(highlightedNavRef.current)
    }
  }, [])

  function isHighlightedNav(path) {
    return activeKey === path ? highlightedNavRef : null
  }

  const handleNavMouseEnter = (e) => {
    moveHighlightToElement(e.target)
    // console.log("MOUSE ENTER",e.target.getBoundingClientRect());
  }
  const handleNavMouseLeave = () => {
    if (highlightedNavRef.current) {
      moveHighlightToElement(highlightedNavRef.current)
    }
    // console.log("MOUSE LEAVE",highlightedNavRef.current.getBoundingClientRect());
  }

  return (
    <>
      <Navbar collapseOnSelect expand="lg" variant="light">
        <Link to="/" className='navbar-brand'>
          <img src={logo.publicURL} className="img-fluid" alt={title} />
        </Link>
        <Navbar.Toggle aria-controls="mainnav" className="ml-auto text-white">
          <div className="navbar-toggler-icon">
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </div>
        </Navbar.Toggle>
        <Navbar.Collapse id="mainnav" >
          <Nav id="usernav" className="nav flex-row justify-content-center justify-content-lg-end">
            {/* TODO: Add logic for CMS */}
            <li className="nav-item">
              <a href="#" className="nav-link">
                <SearchLineIcon size="14" />
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Login</a>
            </li>
            <li className="nav-item">
              <a href="/contact-us" className="nav-link">Contact</a>
            </li>
          </Nav>
          <Nav id="primarynav" className="ml-auto" activeKey={activeKey}>
            {menu && menu.map(item => {
              const submenu = menuItems.filter(node => node.parentId === item.id)

              return submenu.length > 0 ? (
                <NavDropdown
                  key={item.id}
                  ref={isHighlightedNav(item.path)}
                  onMouseEnter={handleNavMouseEnter}
                  onMouseLeave={handleNavMouseLeave}
                  title={item.label}
                  className="megamenu"
                >
                  {submenu.map(child =>
                    <NavDropdown.Item key={child.id} href={child.path}>{child.label}</NavDropdown.Item>
                  )}
                </NavDropdown>
              ) : (
                <Nav.Item key={item.id}>
                  <Nav.Link ref={isHighlightedNav(item.path)} onMouseEnter={handleNavMouseEnter} onMouseLeave={handleNavMouseLeave} href={item.path}>{item.label}</Nav.Link>
                </Nav.Item>
              )
            })}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <NavPointer arrowPos={arrowPos} />
    </>
  )
}

PrimaryMenu.propTypes = {

}

export default PrimaryMenu
