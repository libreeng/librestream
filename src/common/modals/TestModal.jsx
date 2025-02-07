import React from 'react'
// import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { closeModal } from './modalActions'


const TestModal = ({heading}) => {
  const dispatch = useDispatch()

  return (
    <>
      <Modal show onHide={() => dispatch(closeModal())}>
        <Modal.Header closeButton>
          <Modal.Title>Modal {heading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => dispatch(closeModal())}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

// TestModal.propTypes = {

// }

export default TestModal
