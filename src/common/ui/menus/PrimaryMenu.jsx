import React, {useState, useEffect, useRef} from 'react'
// import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import SearchLineIcon from 'remixicon-react/SearchLineIcon'
import SelectInput from '../../fields/SelectInput'
import { useSiteMetadata } from '../../hooks/useSiteMetadata'
import { useSiteHeader } from '../../hooks/useSiteHeader'

const PrimaryMenu = () => {
  const { menuItems, logo, languages } = useSiteHeader()
  const { defaultSEO: {title} } = useSiteMetadata()
  const [arrowPos, setArrowPos] = useState(-10)
  const menu = menuItems.filter(node => !node.parentId)
  
  const highlightedNavRef = useRef(null)
  // TODO: the "ActiveKey" variable on Nav needs work to incorporate sub-pages
  const activeKey = null // window.location.pathname ! Window is not defined when doing a build.


  function isHighlightedNav(path) {
    return activeKey === path ? highlightedNavRef : null
  }

  const languageDropdownStyles = {
    container: (provided, state) => ({
      ...provided,
      padding:0,
    }),
    valueContainer: (provided, state) => ({
      ...provided,
      padding:0
    }),
    option: (provided, state) => ({
      ...provided,
      borderBottom: '1px solid #e5e7e7',
      color: state.isSelected ? '#13aae2' : state.isFocused ? '#767676 ' : '#babcbe',
      backgroundColor: state.isSelected ? '#FFF' : '#FFF',
      padding: '5px 20px',
      fontSize:'16px',
      cursor: 'pointer', 
    }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
      color:'#FFFFFF',
      width:'65px',
      fontSize:'16px',
      display:'inline-block',
      backgroundColor: 'transparent',
      cursor: 'default', 
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      outline: '0 !important',
      '&:hover': {
        borderColor: 'red'
      }
    }),
    singleValue: (provided, state) => ({
      ...provided,
      opacity: state.isDisabled ? 0.5 : 1, 
      transition : 'opacity 300ms'
    }),
    placeholder: () => ({
      color:'#FFFFFF',  
    }),
    clearIndicator: () => ({
      display:'none',  
    }),
    indicatorSeparator: () => ({
      display:'none',  
    }),
    dropdownIndicator: () => ({
      padding:0,  
    }),
    menu: (provided, state) => ({
      ...provided,
      padding:0,  
      width:'100px',
    }),
 
    /*
    
    container
    dropdownIndicator
    group
    groupHeading
    indicatorsContainer
    indicatorSeparator
    input
    loadingIndicator
    loadingMessage
    menu
    menuList
    menuPortal
    multiValue
    multiValueLabel
    multiValueRemove
    noOptionsMessage
    valueContainer
    */
  }




  return (
    <>
      <Navbar collapseOnSelect expand="lg" variant="light">
        <Link to="/" className='navbar-brand'>
          <img src={logo.publicURL} className="img-fluid" alt={title} width="200" height="23" />
        </Link>
        <Navbar.Toggle aria-controls="mainnav" className="ml-auto text-white">
          <div className="navbar-toggler-icon">
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </div>
        </Navbar.Toggle>
        <Navbar.Collapse id="mainnav" >
          <Nav as="ul" id="usernav" className="nav flex-row justify-content-center justify-content-lg-end">
            {/* TODO: Add logic for CMS */}
            <li className="nav-item d-none">
              <a href="#" className="nav-link">
                <SearchLineIcon size="14" />
              </a>
            </li>
            <li className="nav-item">
              <a href="https://onsight.librestream.com/OamAdministrator/Login.aspx" target="_blank" className="nav-link" rel="noreferrer">Login</a>
            </li>
            <li className="nav-item">
              <a href="/contact-us" className="nav-link">Contact</a>
            </li>
            <li className="nav-item">
              <SelectInput 
                className='language-select nav-link'
                placeholder='Language'
                defaultValue='english'
                isMulti={false}
                isSearchable={false}
                onChange={(e) => window.location.href = e.value }
                customStyles={languageDropdownStyles}
                options={languages} 
                defaultValue = {
                  languages.filter(lang => lang.languageIsDefault)
                }
                
              />
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
