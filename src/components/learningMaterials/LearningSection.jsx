import React from 'react'
import PropTypes from 'prop-types'
import { slugify } from '../../common/utils/helpers'
import LearningLink from './LearningLink'


const learningSection = ({ instance }) => 

{
  const { materialsTitle, section } = instance
  const slug = slugify(materialsTitle)
  return (
    <>
      <div key={slug} className="row">
        <div className="col-12">
          <h3 className="mb-3 mt-5">{materialsTitle}</h3>
          <hr />
          {section && section.map(sectionInstance => {
            return <div id={slugify(sectionInstance.sectionTitle)} key={slugify(sectionInstance.sectionTitle)}>
              <h4 className=" mt-5">{sectionInstance.sectionTitle}</h4>
              <div className="row">
                {sectionInstance.items.acfPostLearningMaterial.links && sectionInstance.items.acfPostLearningMaterial.links.map((link, i) => {
                  return <div className="col-12 col-lg-6" key={`learning-link-${i}`}>
                      <LearningLink link={link} />
                    </div>
                })}
              </div>
            </div>
          })}
        </div>
      </div>
    </>
  )
}

learningSection.propTypes = {

}

export default learningSection
