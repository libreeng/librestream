import React from 'react'
import PropTypes from 'prop-types'
import { Accordion, Card, Button } from 'react-bootstrap'
import { slugify } from '../../common/utils/helpers'

const LearningNav = ({sections}) => {
  // console.log('sections in nav', sections)
  
  return (
    <Accordion className="accordion-nav">
      {sections && sections.map((section, index) => {
        const { materialsTitle } = section
        const subSections = section.section
        // const subSections = section
        return (
          <Card key={slugify(materialsTitle)} data-index={index}>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey={slugify(materialsTitle)} data-index={index}>
                {materialsTitle}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={slugify(materialsTitle)} data-index={index}>
              <ul className="nav flex-column mb-0">
                {subSections && subSections.map((subSection, i) => {
                  // const { knowledgebasePost:{id}, kbTitle } = section
                  return (
                    <li className="nav-item text-primary" key={`subsection-${i}`}>
                      <a href={`#${slugify(subSection.sectionTitle)}`}>
                        {subSection.sectionTitle}
                      </a>
                      
                    </li>
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

LearningNav.propTypes = {
  sections: PropTypes.instanceOf(Array)
}

export default LearningNav
