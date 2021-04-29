import React from 'react'
// import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import TestModal from './TestModal'
import PartnerModal from './PartnerModal'
import BoardModal from './BoardModal'
import HighlightModal from './HighlightModal'
import SupportModal from './SupportModal'
import VideoModal from './VideoModal'
import ContentModal from './ContentModal'

const modalLookup = {
  TestModal,
  PartnerModal,
  BoardModal,
  HighlightModal,
  SupportModal,
  VideoModal,
  ContentModal
}

const ModalWrapper = () => {
  const currentModal = useSelector(state => state.modals)

  if (currentModal) {
    const { modalType, modalProps } = currentModal
    const ModalComponent = modalLookup[modalType]
    return <ModalComponent {...modalProps} />
  }
  return <></>
}

ModalWrapper.propTypes = {

}

export default ModalWrapper
