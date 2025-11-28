import React from 'react';
import ModalText from './ModalText';

//TODO
const Modal = ({ title, contentKey, onClose }) => {
  const ModalContent = ModalText[contentKey];

  if (!ModalContent) return null;

  return (
    <div className="Modal" onClick={onClose}>
      <div className="Modal-wrap" onClick={(e) => e.stopPropagation()}>
        <div className="top">
          <span>{title}</span>
          <button onClick={onClose}></button>
        </div>
        <div className="info">
          <ModalContent />
        </div>
      </div>
    </div>
  );
};

export default Modal;
