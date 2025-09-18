import React from "react";
import "./SuccessModal.css";

const SuccessModal = ({ isOpen, onClose }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal modal_success">
        <button
          className="modal__close"
          onClick={onClose}
          aria-label="Close modal"
        >
          ×
        </button>

        <div className="success-modal__content">
          <div className="success-modal__icon">✓</div>
          <h2 className="success-modal__title">
            Registration successfully completed!
          </h2>
          <button className="success-modal__button" onClick={onClose}>
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
