import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { Modal } from 'react-bootstrap'
import { closeModal } from './modalActions'




const HighlightModal = ({highlight}) => {
  const dispatch = useDispatch()

  return (
    <>
      <Modal show onHide={() => dispatch(closeModal())} size="lg">
        <div className="bg-gradient-blue triangle-corner" />
        <Modal.Header className="border-0 py-0" closeButton />
        <Modal.Body>
          <div className="row align-items-center">
            <div className="col-12">
              <div className="p-4 text-center">
                {highlight.highlightIcon?.localFile && (
                  <img src={highlight.highlightIcon?.localFile?.publicURL} className="img-fluid w-50" alt={highlight.highlightIcon.altText} />
                )}
                {highlight.highlightTitle && (
                  <>
                    <h5 className="text-center mt-3">{highlight.highlightTitle}</h5>
                    {highlight.highlightDescription && (
                      <p className="d-block text-center">
                        {highlight.highlightDescription}
                      </p>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

HighlightModal.propTypes = {
  board: PropTypes.instanceOf(Object),
}

export default HighlightModal