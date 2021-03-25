import React from 'react'
import PropTypes from 'prop-types'
import { Accordion, Card, Button } from 'react-bootstrap'
import { slugify } from '../../common/utils/helpers'

const SupportNav = ({sections}) => {
  return (
    <Accordion className="accordion-nav">
      {sections && sections.map((section, index) => {
        const { supportSectionTitle, sectionKnowledgebases } = section
        return (
          <Card key={slugify(supportSectionTitle)} data-index={index}>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey={slugify(supportSectionTitle)} data-index={index}>
                {supportSectionTitle}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={slugify(supportSectionTitle)} data-index={index}>
              <ul className="nav flex-column mb-0">
                {sectionKnowledgebases && sectionKnowledgebases.map((kb, i) => {
                  const { knowledgebasePost:{id}, kbTitle } = kb
                  return (
                    <li className="nav-item text-primary" key={id}>{kbTitle}</li>
                  )
                })}
              </ul>
            </Accordion.Collapse>
          </Card>
        )
      })}
      {/* TODO: Add Release Notes link */}
    </Accordion>
  )
}

SupportNav.propTypes = {
  sections: PropTypes.instanceOf(Array)
}

export default SupportNav
