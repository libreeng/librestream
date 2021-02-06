import React, {useState, useEffect} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


export const ModalComponent = ({modalTriggerLabel, title, content, image}) => {
    
  const [showModal, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {image ? (
        <Button variant="unstyled" onClick={handleShow}>
          <img src={image} className="img-fluid" alt="Play button" />
        </Button>
      ): (
        <Button variant="btn-primary">
          {modalTriggerLabel}
        </Button>  
      )}

      <Modal
        show={showModal}
        onHide={handleClose}
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {content}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="gradient-green-cyan" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
  
}

export default ModalComponent