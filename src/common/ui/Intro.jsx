import React from 'react'
import PropTypes from 'prop-types'
import parse from "html-react-parser"
import Image from "gatsby-image"
const Intro = ({intro, bracket}) => {
  return (
    <>
     <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {intro.introDescription && parse(intro.introDescription)}
            </div>
            <div className="col-lg-4">
              {bracket ? 
                (
                  <div className="border-bracket py-3 ml-lg-auto w-75">
                    <div 
                      style={{ backgroundImage: `url(${ intro.introFeaturedImage.localFile?.publicURL })`}}
                      className="bg-image aspect-3x1 bg-contain" />
                  </div>
                )
              : 
                (<img src={intro.introFeaturedImage?.localFile?.publicURL} className="img-fluid" alt={intro.introFeaturedImage?.altText} />)
              }
              {/* {intro.introFeaturedImage && (
                <>
                  <img src={intro.introFeaturedImage?.localFile?.publicURL} className="img-fluid" alt={intro.introFeaturedImage?.altText} />
                  <div className="border-bracket py-3 ml-lg-5">
                    <div 
                    style={{ backgroundImage: `url(${ intro.introFeaturedImage.localFile?.publicURL })`}}
                    className="bg-image aspect-2x1 bg-contain" />
                  </div>
                </>
              )} */}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

Intro.propTypes = {
  intro: PropTypes.instanceOf(Object),
}

export default Intro
