import React from 'react'
import PropTypes from 'prop-types'

import { slugify } from '../../common/utils/helpers'
import LearningLink from '../../components/learningMaterials/LearningLink'


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
          <div className="list-group">
            {section && section.map((sectionInstance, i) => {
              return <div>
                <h4 className=" mt-5">{sectionInstance.sectionTitle}</h4>
                <div className="row">
                  {sectionInstance.items.acfPostLearningMaterial.links && sectionInstance.items.acfPostLearningMaterial.links.map((link, i) => {
                    return <div className="col-12 col-lg-6">
                        <LearningLink link={link} />
                      </div>
                  })}
                </div>
              </div>
            })}
          </div>
        </div>
      </div>
    
    </>
  )
}

learningSection.propTypes = {

}

export default learningSection
