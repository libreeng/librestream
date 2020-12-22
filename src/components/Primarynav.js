// TB: Leaving this file in place for reference.
// It does not currently get imported, but we will need something similar to handle the allWordpressPage query.
import React, { useEffect, useRef } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby'
import {Navbar, Nav, NavDropdown } from 'react-bootstrap'
import Img from "gatsby-image"
import logo from '../img/logo.svg'





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

  const linkClass = "font-weight-light text-uppercase"
  return (
    <Navbar collapseOnSelect expand="lg" variant="light">
      <Link to="/" className='navbar-brand text-white font-weight-bold'>
        <img src={data.logo.publicURL} className="img-fluid" alt={data.wpcontent.generalSettings.title} />
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" className=" ml-auto text-white" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto" activeKey={activeKey}>

        {data.wpcontent.menuItems.edges.map(edge =>             
          <>
            { edge.node.childItems.edges.length > 0 ?
              <NavDropdown className={`${linkClass}`} ref={isHighlightedNav(edge.node.path)} onMouseEnter={handleNavMouseEnter} onMouseLeave={handleNavMouseLeave} title={edge.node.label} key={edge.node.id}>                
                {edge.node.childItems.edges.map(child => 
                  <NavDropdown.Item key={child.node.id} href={child.node.path}>{child.node.label}</NavDropdown.Item>
                )}                
              </NavDropdown>
            : 
              <Nav.Item key={edge.node.id}>
                <Nav.Link className={linkClass} ref={isHighlightedNav(edge.node.path)} onMouseEnter={handleNavMouseEnter} onMouseLeave={handleNavMouseLeave} href={edge.node.path}>{edge.node.label}</Nav.Link>  
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

