import React from 'react'
import PropTypes from 'prop-types'
import parse from "html-react-parser"
// import Image from "gatsby-image"

const Intro = ({intro, bracket }) => {
  const featuredImage = intro.introFeaturedImage ? intro.introFeaturedImage.localFile.publicURL : false
  const altText = intro.introFeaturedImage ? intro.introFeaturedImage.altText : false

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {intro.introDescription && parse(intro.introDescription)}
            </div>
            <div className="col-lg-4 text-center">
              {intro.callToAction ? (
                <a href={intro.callToAction.url} target={intro.callToAction.target} className="btn btn-secondary ms-lg-auto">{intro.callToAction.title}</a>
                ) : (
                featuredImage && (
                  <>
                    {bracket ? (
                      <div className="border-bracket py-3 ml-lg-auto w-75">
                        <div 
                          style={{ backgroundImage: `url(${ featuredImage })`}}
                          className="bg-image aspect-3x1 bg-contain" 
                        />
                      </div>
                      ):(
                        <img src={featuredImage} className="img-fluid" alt={altText} />
                      )}
                  </>
                ))}
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
