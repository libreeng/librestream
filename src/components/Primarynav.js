// TB: Leaving this file in place for reference.
// It does not currently get imported, but we will need something similar to handle the allWordpressPage query.
import React, { useEffect, useRef, useState } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby'
import {Navbar, Nav, NavDropdown } from 'react-bootstrap'
import Img from "gatsby-image"
import logo from '../img/logo.svg'
import logo2 from '../img/logo-bg.png'





const Primarynav = ({ children, onHighlightChange }) => {

  const highlightedNavRef = useRef(null);
  // TODO: the "ActiveKey" variable on Nav needs work to incorporate sub-pages
  
  const activeKey = null; //window.location.pathname ! Window is not defined when doing a build.

  useEffect(() => {   
    if(highlightedNavRef.current){
      moveHighlightToElement(highlightedNavRef.current) 
    }
  }, []);
  
  const isHighlightedNav = (path) => {
    if(activeKey == path) return highlightedNavRef
  }
 
  const handleNavMouseEnter = (e) => {
    moveHighlightToElement(e.target)
    //console.log("MOUSE ENTER",e.target.getBoundingClientRect());
  }
  const handleNavMouseLeave = (e) => {
    if(highlightedNavRef.current){
      moveHighlightToElement(highlightedNavRef.current)
    }
    //console.log("MOUSE LEAVE",highlightedNavRef.current.getBoundingClientRect());
  }



  const moveHighlightToElement = (elem) => {
    const centerPos = elem.getBoundingClientRect().left + (elem.getBoundingClientRect().width / 2)
    onHighlightChange( centerPos )

  }

  const data = useStaticQuery(graphql`
    query NavQuery {
      wpcontent {
        generalSettings {
          title
        }
        menuItems(where: {location: PRIMARY_MENU, parentDatabaseId: 0}, first: 999) {
          edges {
            node {
              label
              path
              id
              childItems(first: 999) {
                edges {
                  node {
                    label
                    path
                    id
                  }
                }
              }
            }
          }
        }
      }
      logo: file(relativePath: {eq: "logo.png"}) {
        publicURL
        absolutePath
        childImageSharp {
          fixed {
           srcWebp
          }
        }
      }
    }
  `)


  return (
    <Navbar collapseOnSelect expand="lg" variant="light">
      <Link to="/" className='navbar-brand'>
        <img src={data.logo.publicURL} className="img-fluid" alt={data.wpcontent.generalSettings.title} />
      </Link>
      <Navbar.Toggle aria-controls="mainnav" className="ml-auto text-white">
        <div className="navbar-toggler-icon">
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </div>
      </Navbar.Toggle>
      <Navbar.Collapse id="mainnav" >
        <Nav id="usernav" className="nav flex-row justify-content-center justify-content-lg-end">
          <li className="nav-item">
            <a href="#" className="nav-link">Search</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Login</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Contact</a>
          </li>
          {/* <NavDropdown title="Language">                
            <NavDropdown.Item href="#">EN</NavDropdown.Item>
            <NavDropdown.Item href="#">FR</NavDropdown.Item>
            <NavDropdown.Item href="#">DE</NavDropdown.Item>
            <NavDropdown.Item href="#">ZH</NavDropdown.Item>
            <NavDropdown.Item href="#">JA</NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
        <Nav id="primarynav" className="ml-auto" activeKey={activeKey}>
          {/* <NavDropdown className="megamenu" onMouseEnter={handleNavMouseEnter} onMouseLeave={handleNavMouseLeave} title="Platform">                
            <NavDropdown.Item href="#">Our Platform</NavDropdown.Item>
            <NavDropdown.Item href="#">Customer Success</NavDropdown.Item>             
            <NavDropdown.Item href="#">Ecosystem Partners</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown className="megamenu" onMouseEnter={handleNavMouseEnter} onMouseLeave={handleNavMouseLeave} title="Use Cases">                
            <NavDropdown.Item href="#">Use Cases</NavDropdown.Item>
            <NavDropdown.Item href="#">Industry Applications</NavDropdown.Item>             
          </NavDropdown>
          <NavDropdown className="megamenu" onMouseEnter={handleNavMouseEnter} onMouseLeave={handleNavMouseLeave} title="Resources">                
            <NavDropdown.Item href="#">Blog</NavDropdown.Item>
            <NavDropdown.Item href="#">Guides &amp; Whitepapers</NavDropdown.Item>             
            <NavDropdown.Item href="#">Videos</NavDropdown.Item>
            <NavDropdown.Item href="#">Webinars</NavDropdown.Item>
            <NavDropdown.Item href="#">ROI Calculator</NavDropdown.Item>
            <NavDropdown.Item href="#">FAQs</NavDropdown.Item>
            <NavDropdown.Item href="#">Support &amp; Training</NavDropdown.Item>
          </NavDropdown>
          <Nav.Item>
            <Nav.Link onMouseEnter={handleNavMouseEnter} onMouseLeave={handleNavMouseLeave} href="#">News</Nav.Link>  
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onMouseEnter={handleNavMouseEnter} onMouseLeave={handleNavMouseLeave} href="#">About</Nav.Link>  
          </Nav.Item>
          <Nav.Item className="text-center">
            <a href="#" className="btn btn-primary" onMouseEnter={handleNavMouseEnter} onMouseLeave={handleNavMouseLeave} href="#">Request Demo</a>  
          </Nav.Item> */}
        {data.wpcontent.menuItems.edges.map(edge =>             
          <>
            { edge.node.childItems.edges.length > 0 ?
              <NavDropdown ref={isHighlightedNav(edge.node.path)} onMouseEnter={handleNavMouseEnter} onMouseLeave={handleNavMouseLeave} title={edge.node.label} key={edge.node.id} className="megamenu">                
                {edge.node.childItems.edges.map(child => 
                  <NavDropdown.Item key={child.node.id} href={child.node.path}>{child.node.label}</NavDropdown.Item>
                )}                
              </NavDropdown>
            : 
              <Nav.Item key={edge.node.id}>
                <Nav.Link ref={isHighlightedNav(edge.node.path)} onMouseEnter={handleNavMouseEnter} onMouseLeave={handleNavMouseLeave} href={edge.node.path}>{edge.node.label}</Nav.Link>  
              </Nav.Item>
                        
            }
          </>
        )}
        </Nav>    
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Primarynav

