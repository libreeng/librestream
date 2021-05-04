import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from "react-redux"
import { BgImage } from 'gbimage-bridge'
import { openModal } from "../../common/modals/modalActions"

const LearningLink = ({ link }) => {
  let dispatch = () => { }
  if (typeof window !== 'undefined') {
    dispatch = useDispatch()
  }
  const bgImage = link.linkImage?.localFile?.childImageSharp?.gatsbyImageData

  return (
    <>
      {{
        'Content': (
          link.content
            ? (<button
                onClick={() => dispatch(openModal("SupportModal", { content: link.content }))}
                type="button" className="border-0 bg-transparent p-0 text-primary w-100">
                <div className="row align-items-center mb-3">
                  <div className="col-12 col-lg-4">
                    <BgImage
                      className="bg-image aspect-4x3"
                      image={bgImage}
                    />
                  </div>
                  <div className="col-12 col-lg-8">
                    <p>{link.linkText}&nbsp;(Modal)</p>
                  </div>
                </div>
              </button>)
            : (<div className="row align-items-center">
            <div className="col-12 col-lg-4">
              <BgImage
                className="bg-image aspect-4x3"
                image={bgImage}
              />
            </div>
            <div className="col-12 col-lg-8">
              <p>{link.linkText}</p>
            </div>
          </div>)
        ),
        'External URL': (
          <a href={link.url} target="_blank" rel="noopener">
            <div className="row align-items-center mb-3">
              <div className="col-12 col-lg-4">
                <BgImage
                  className="bg-image aspect-4x3"
                  image={bgImage}
                />
              </div>
              <div className="col-12 col-lg-8">
                <p>{link.linkText} (Link)</p>
              </div>
            </div>
          </a>
        ),
        'Video': (
          <button
          onClick={() => dispatch(openModal("VideoModal", { embed: link?.videoEmbed, video: link?.videoMp4?.mediaItemUrl, title: link.linkText }))}
          type="button"
          className="border-0 bg-transparent p-0 text-primary text-left text-underline w-100"
          >
            <div className="row align-items-center mb-3">
              <div className="col-12 col-lg-4">
                <BgImage
                  className="bg-image aspect-4x3"
                  image={bgImage}
                />
              </div>
              <div className="col-12 col-lg-8">
                <p>{link.linkText}&nbsp;(Video)</p>
              </div>
            </div>
          </button>
        ),
        'Page': (
          <a href={link.page?.link}>
            <div className="row align-items-center mb-3">
              <div className="col-12 col-lg-4">
                <BgImage
                  className="bg-image aspect-4x3"
                  image={bgImage}
                />
              </div>
              <div className="col-12 col-lg-8">
                <p>{link.linkText}</p>
              </div>
            </div>
          </a>
        ),
        'PDF': (
          <a href={link.pdf?.localFile?.publicURL} target="_blank" rel="noopener" className="text-underline">
            <div className="row align-items-center mb-3">
              <div className="col-12 col-lg-4">
                <BgImage
                  className="bg-image aspect-4x3"
                  image={bgImage}
                />
              </div>
              <div className="col-12 col-lg-8">
                <p>{link.linkText} (PDF)</p>
              </div>
            </div>
          </a>
        )
      }[link.linkType]}
    </>
  )
}

LearningLink.propTypes = {
  link: PropTypes.instanceOf(Object),
}

export default LearningLink
