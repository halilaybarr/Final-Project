import React from "react";

const ModalWithForm = ({ children }) => (
  <div className="modal">
    <form>{children}</form>
  </div>
);

export default ModalWithForm;
