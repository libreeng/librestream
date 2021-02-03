import React from 'react'
import PropTypes from 'prop-types'
import { Accordion, Card, Button } from 'react-bootstrap'
import AddLineIcon from 'remixicon-react/AddLineIcon';
const AccordionItems = ({ className }) => {
  return (
    <Accordion className={className}>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            <div>
              <AddLineIcon size="20"/>Accordion Item Title
            </div>
            
            <i class="icon-arrow arrow-down"></i>
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>Hello! I'm the body</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="1">
            <div>
              <AddLineIcon size="20"/>Accordion Item Title
            </div>
            <i class="icon-arrow arrow-down"></i>
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>Hello! I'm the body</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="2">
            <div>
              <AddLineIcon size="20"/>Accordion Item Title
            </div>
            <i class="icon-arrow arrow-down"></i>
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="2">
          <Card.Body>Hello! I'm the body</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  )
}

AccordionItems.propTypes = {

}

export default AccordionItems
