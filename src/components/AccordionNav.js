import React from 'react'
import PropTypes from 'prop-types'

import { Accordion, Card, Button } from 'react-bootstrap'

const AccordionNav = () => {
  return (
    <Accordion className="accordion-nav">
      {[...Array(8)].map((x, i) =>
       
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey={i}>
              Accordion Item
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey={i}>
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
