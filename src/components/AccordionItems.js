import React from 'react'
import PropTypes from 'prop-types'
import { Accordion, Card, Button } from 'react-bootstrap'
import AddLineIcon from 'remixicon-react/AddLineIcon';
const AccordionItems = ({ className }) => {
  return (
    <Accordion className={className}>
      {[...Array(3)].map((x, i) =>
      <Card key={i}>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey={i}>
            <div>
              <AddLineIcon size="20"/>Accordion Item Title
            </div>
            <i className="icon-arrow arrow-down"></i>
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey={i}>
          <Card.Body>Hello! I'm the body</Card.Body>
        </Accordion.Collapse>
      </Card>
      )}
    </Accordion>
  )
}

AccordionItems.propTypes = {

}

export default AccordionItems
