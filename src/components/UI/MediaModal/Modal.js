import React, { useEffect } from 'react'
import Modal from 'react-modal-video'
import './Modal.scss'
const ModalComponent = props => {
  useEffect(() => {
    if (props.modalShow) {
      document.body.style.top = `-${window.scrollY}px`
      document.body.className = 'body-scroll-hide'
    } else {
      document.body.className = ''
      const scrollY = document.body.style.top
      document.body.style.top = ''
      window.scrollTo(0, parseInt(scrollY || '0') * -1)
    }
  }, [props.modalShow])
  return (
    <Modal
      channel={props.channelType}
      allowFullScreen
      isOpen={props.modalShow}
      videoId={props.videoId}
      onClose={() => props.closeModal()}
    />
  )
}
export default ModalComponent
