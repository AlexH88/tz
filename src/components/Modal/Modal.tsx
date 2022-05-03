import React from 'react'
import './Modal.css'

interface ModalProps {
  handleClose: () => void
  show: boolean
  children: any
}

export const Modal = ({ handleClose, show, children } : ModalProps) => {
  const showHideClassName = show ? "modal show" : "modal none";

  return (
    <div className={showHideClassName}>
      <div className='modal-header'>
        <span className="close" onClick={handleClose}> &times; </span>
      </div>
      <div className="modal-container">
        {children}
      </div>
    </div>
  )
}