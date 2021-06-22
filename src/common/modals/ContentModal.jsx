import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import parse from "html-react-parser"
import { closeModal } from './modalActions'

const ContentModal = ({ heading, content, size="", showCloseBtn=true }) => {
  const dispatch = useDispatch()

  return (
    <>
      <Modal show onHide={() => dispatch(closeModal())} size={size}>
        <div className="bg-gradient-blue triangle-corner" />
        <Modal.Header className="border-0 py-0" closeButton />
        <Modal.Body>
          { heading && <Modal.Title><h2>{heading}</h2></Modal.Title> }
          <div className="row align-items-center">            
            <div className="col-12">
              {parse(content)}
            </div>
          </div>
        </Modal.Body>
        {showCloseBtn && 
          <Modal.Footer>
            <Button variant="primary" onClick={() => dispatch(closeModal())}>Close</Button>
          </Modal.Footer>
        }
      </Modal>
    </>
  )
}

ContentModal.propTypes = {
  heading: PropTypes.instanceOf(Object),
  content: PropTypes.string
}

export default ContentModal
