import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { Modal, Button } from 'react-bootstrap'
import parse from "html-react-parser"
import { closeModal } from './modalActions'


const ContentModal = ({ heading, content }) => {
  const dispatch = useDispatch()

  return (
    <>
      <Modal show onHide={() => dispatch(closeModal())}>
        <Modal.Header closeButton>
          <Modal.Title>Modal {heading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {parse(content)}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => dispatch(closeModal())}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

ContentModal.propTypes = {
  heading: PropTypes.instanceOf(Object),
  content: PropTypes.string
}

export default ContentModal
