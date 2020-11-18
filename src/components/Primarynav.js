// TB: Leaving this file in place for reference.
// It does not currently get imported, but we will need something similar to handle the allWordpressPage query.

import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {Navbar, Nav, NavDropdown } from 'react-bootstrap'
import logo from '../img/logo.svg'





function Primarynav({ children }) {
  const data = useStaticQuery(graphql`
    query NavQuery {
      wpcontent {
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
    }
  `)
  return (
    <Navbar collapseOnSelect expand="lg" variant="light">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">

        {data.wpcontent.menuItems.edges.map(edge =>             
          <span key={edge.node.id}>
          { edge.node.childItems.edges.length > 0 ?
            <NavDropdown  title={edge.node.label} id="collasible-nav-dropdown">                
              {edge.node.childItems.edges.map(child => 
                <NavDropdown.Item key={child.node.id} href={child.node.path}>{child.node.label}</NavDropdown.Item>
              )}                
            </NavDropdown>
          : 
            <Nav.Link className="" href={edge.node.path}  >{edge.node.label}</Nav.Link>
          }
          </span>
        )}
        </Nav>          
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Primarynav


