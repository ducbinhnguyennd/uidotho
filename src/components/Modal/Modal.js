import React from 'react'
import ReactDOM from 'react-dom'
import './Modal.scss'

const Modal = ({ isOpen, onClose, children }) => {
 
  if (!isOpen) return null

  return ReactDOM.createPortal(
    <div className='modal-overlay'>
      <div className='modal-content' onClick={e => e.stopPropagation()}>
        <div className='modal-header'>
          <button className='modal-close' onClick={onClose}>Hủy
          </button>
        </div>
        {children}
      </div>
    </div>,
    document.body
  )
}

export default Modal
