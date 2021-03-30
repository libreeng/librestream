import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { Modal } from 'react-bootstrap'
import { closeModal } from './modalActions'
import parse from "html-react-parser"


const SupportModal = ({ content }) => {
  const dispatch = useDispatch()

  return (
    <>
      <Modal show onHide={() => dispatch(closeModal())} size="lg">
        <div className="bg-gradient-blue triangle-corner" />
        <Modal.Header className="border-0 py-0" closeButton />
        <Modal.Body>
          <div className="row align-items-center">
            <div className="col-12">
              <div className="p-4">
                {content && parse(content)}
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

SupportModal.propTypes = {
  content: PropTypes.instanceOf(Object),
}

export default SupportModal
