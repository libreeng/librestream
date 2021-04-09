import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { Modal } from 'react-bootstrap'
import { closeModal } from './modalActions'


const VideoModal = ({embed, video, title}) => {
  const dispatch = useDispatch()
  const src = embed || video
  console.log('embed',embed, 'video', video)
  return (
    <>
      <Modal show onHide={() => dispatch(closeModal())} size="lg">
        <div className="bg-gradient-blue triangle-corner" />
        <Modal.Header className="border-0 py-0" closeButton />
        <Modal.Body>
          <div className="row align-items-center">
            
            <div className="col-12">
              <div className="responsive-iframe aspect-16x9">
                <iframe src={src} title={title} />
              </div>
              
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

VideoModal.propTypes = {
  
}

export default VideoModal
