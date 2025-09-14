import React from "react";
import "./SaveTooltip.css";

const SaveTooltip = ({ isVisible, onSignInClick }) => {
  if (!isVisible) return null;

  return (
    <div className="save-tooltip">
      <div className="save-tooltip__content">
        <button className="save-tooltip__button" onClick={onSignInClick}>
          Sign in to save articles
        </button>
      </div>
    </div>
  );
};

export default SaveTooltip;
