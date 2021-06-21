import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import Modal from 'react-bootstrap/Modal'
import parse from "html-react-parser"
import { closeModal } from './modalActions'


const BoardModal = ({board}) => {
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
                {board.name && (
                  <h2>{board.name}</h2>
                )}
                {board.bio && (
                  parse(board.bio)
                )}
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

BoardModal.propTypes = {
  board: PropTypes.instanceOf(Object),
}

export default BoardModal