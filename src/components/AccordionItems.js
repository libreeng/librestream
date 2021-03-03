import React from 'react'
import PropTypes from 'prop-types'
import { Accordion, Card, Button } from 'react-bootstrap'
import parse from "html-react-parser"
import AddLineIcon from 'remixicon-react/AddLineIcon';
const AccordionItems = ({ className, items }) => {
  console.log('accordionitems',items)
  return (
    <>
      <Accordion className={className}>
        {items && items.map( (item, index) => (
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey={index}>
                <div>
                  <AddLineIcon size="20" />{item.sectionTitle}
                </div>
                <i className="icon-arrow arrow-down" />
              </Accordion.Toggle>
            </Card.Header>
            {item.sectionContent && (
              <Accordion.Collapse eventKey={index}>
                <Card.Body>{parse(item.sectionContent)}</Card.Body>
              </Accordion.Collapse>
            )}
          </Card>
       ))}
      </Accordion>
    </>
  )
}

AccordionItems.propTypes = {

}

export default AccordionItems
