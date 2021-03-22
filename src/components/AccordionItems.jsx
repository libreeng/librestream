import React from 'react'
import PropTypes from 'prop-types'
import { Accordion, Card, Button } from 'react-bootstrap'
import parse from "html-react-parser"
import AddLineIcon from 'remixicon-react/AddLineIcon'
import { slugify } from '../common/utils/helpers'

const AccordionItems = ({ className, items }) => {

  return (
    <>
      <Accordion className={className}>
        {items && items.map((item) => {
          const { sectionTitle, sectionContent } = item
          const slug = slugify(sectionTitle)

          return (
            <Card key={slug}>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey={slug}>
                  <div>
                    <AddLineIcon size="20" />{sectionTitle}
                  </div>
                  <i className="icon-arrow arrow-down" />
                </Accordion.Toggle>
              </Card.Header>
              {item.sectionContent && (
                <Accordion.Collapse eventKey={slug}>
                  <Card.Body>{parse(sectionContent)}</Card.Body>
                </Accordion.Collapse>
              )}
            </Card>
          )
        })}
      </Accordion>
    </>
  )
}

AccordionItems.propTypes = {
  items: PropTypes.instanceOf(Array),
  className: PropTypes.string
}

export default AccordionItems
