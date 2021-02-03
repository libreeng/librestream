import React from 'react'
import PropTypes from 'prop-types'

import { Accordion, Card, Button } from 'react-bootstrap'

const AccordionNav = () => {
  return (
    <Accordion className="accordion-nav">
      {[...Array(8)].map((x, index) =>
       
        <Card key={index} data-index={index}>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey={index} data-index={index}>
              Accordion Item
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey={index} data-index={index}>
            <ul className="nav flex-column mb-0">
              {[...Array(8)].map((x, i) => 
                <li className="nav-item" key={i}>
                  <a href="">Link Label</a>
                </li>
              )}
            </ul>
          </Accordion.Collapse>
        </Card>
      )}
    </Accordion>
  )
}

AccordionNav.propTypes = {

}

export default AccordionNav
