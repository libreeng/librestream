import React, {useState, useEffect, useRef} from 'react'
// import PropTypes from 'prop-types'
import { Link, navigate } from 'gatsby'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import SearchLineIcon from 'remixicon-react/SearchLineIcon'
import { useSiteMetadata } from '../../hooks/useSiteMetadata'
import { useSiteHeader } from '../../hooks/useSiteHeader'

const PrimaryMenu = () => {
  const { menuItems, logo } = useSiteHeader()
  const { defaultSEO: {title} } = useSiteMetadata()
  const [arrowPos, setArrowPos] = useState(-10)
  const [searchOpen, setSearchOpen] = useState(false)
  const menu = menuItems.filter(node => !node.parentId)

  const highlightedNavRef = useRef(null)
  // TODO: the "ActiveKey" variable on Nav needs work to incorporate sub-pages
  const activeKey = null // window.location.pathname ! Window is not defined when doing a build.


  function isHighlightedNav(path) {
    return activeKey === path ? highlightedNavRef : null
  }
  const searchClassname = searchOpen ? 'search-open' : 'search-closed';
  const doSearch = () => {
    console.log("Do Search");
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
          <div class={`searchbar position-absolute d-flex overflow-hidden ${searchClassname}`}>
            <div className="searchInputWrapper">
              <input
                className="border-0 text-gray"
                name="query"
                placeholder="Search"
                onChange={(event) => setQuery(event.target.value)}
              />
              <SearchLineIcon size="18" onClick={() => navigate('/search')} />
            </div>
            <div class="navbar-toggler d-block " onClick={() => setSearchOpen(false)}><div class="navbar-toggler-icon"><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></div></div>
          </div>

          <Nav as="ul" id="usernav" className="nav flex-row justify-content-center justify-content-lg-end">
            {/* TODO: Add logic for CMS */}
            <li className="nav-item">
              <a className="nav-link" onClick={() => setSearchOpen(true)}>
                <SearchLineIcon size="14"  />
              </a>
            </li>
            <li className="nav-item">
              <a href="https://onsight.librestream.com/OamAdministrator/Login.aspx" target="_blank" className="nav-link" rel="noreferrer">Login</a>
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
                  title={item.label}
                  className="megamenu"
                >
                  {submenu.map(child =>
                    <NavDropdown.Item key={child.id} href={child.path}>{child.label}</NavDropdown.Item>
                  )}
                </NavDropdown>
              ) : (
                <Nav.Item key={item.id}>
                  <Nav.Link ref={isHighlightedNav(item.path)} href={item.path}>{item.label}</Nav.Link>
                </Nav.Item>
              )
            })}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
    </>
  )
}
PrimaryMenu.propTypes = {

}

export default PrimaryMenu
