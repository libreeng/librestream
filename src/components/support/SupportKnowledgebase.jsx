import React from 'react'
import PropTypes from 'prop-types'
import Image from "gatsby-image"
import { Accordion, Card, Button } from 'react-bootstrap'
import AddLineIcon from 'remixicon-react/AddLineIcon'
import { slugify } from '../../common/utils/helpers'


const SupportKnowledgeBase = ({ title, post }) => {
  const {acfKnowledgebase:{section}} = post
  const featuredImage = {
    fluid: post.acfKnowledgebase?.kbImage?.localFile?.childImageSharp?.fluid,
    alt: post.acfKnowledgebase?.kbImage?.altText || ``
  }

  return (
    <div className="list-group-item border-0 px-0">
      <div className="row no-gutters align-items-start">
        <div className="col-lg-8">
          <h4>{title}</h4>
          <Accordion>
            {section && section.map(section => {
              const { sectionTitle, sectionType, links, faq } = section
              const slug = slugify(sectionTitle)

              return (
                <Card key={slug}>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey={slug}>
                      <div>
                        <AddLineIcon size="20" />
                        {sectionTitle}
                      </div>
                      {/* <i className="icon-arrow arrow-down" /> */}
                    </Accordion.Toggle>
                  </Card.Header>
                  {sectionType && (
                    <Accordion.Collapse eventKey={slug}>
                      <Card.Body>
                        {sectionType}
                      </Card.Body>
                    </Accordion.Collapse>
                  )}
                </Card>
              )
            })}
          </Accordion>
        </div>
        <div className="col-lg-3 ml-lg-auto">
          <Image
            fluid={featuredImage.fluid}
            alt={featuredImage.alt}
            style={{ marginBottom: 50 }}
          />

        </div>

      </div>
    </div>
  )
}

SupportKnowledgeBase.propTypes = {
  post: PropTypes.instanceOf(Object),
  title: PropTypes.string
}

export default SupportKnowledgeBase
