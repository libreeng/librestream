import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { Modal } from 'react-bootstrap'
import { closeModal } from './modalActions'
import parse from "html-react-parser"


const PartnerModal = ({partner}) => {
  const dispatch = useDispatch()

  return (
    <>
      <Modal show onHide={() => dispatch(closeModal())} size="lg">
        <div className="bg-gradient-blue triangle-corner" />
        <Modal.Header className="border-0 py-0" closeButton />
        <Modal.Body>
          <div className="row align-items-center">
            {partner.partnerLogo && (
              <div className="col-12 col-lg-6">
                <img src={partner.partnerLogo?.localFile?.publicURL} className="img-fluid" alt={partner.title} />
              </div>
            )}
            <div className="col-12 col-lg-6">
              {partner.partnerDescription && (
                parse(partner.partnerDescription)
              )}
              {partner.partnerActions && partner.partnerActions.map((action, i) =>
                <div>
                  {(action.actionType === 'External Link' &&
                      <a href={action.external} className="btn btn-outline-primary text-dark mb-3 btn-block" target="_blank" rel="noreferrer">{action.title}</a>
                    )
                  || (action.actionType === 'Internal Link' &&
                      <a href={action?.linkPage?.slug} className="btn btn-outline-primary text-dark mb-3 btn-block">{action.title}</a>
                    )
                  }
                </div>
              )}
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

PartnerModal.propTypes = {
  partner: PropTypes.instanceOf(Object),
}

export default PartnerModal
