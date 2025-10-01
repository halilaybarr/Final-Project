import React, { useEffect, useRef, useState } from "react";
import "./SaveTooltip.css";

const SaveTooltip = ({ isVisible, onSignInClick }) => {
  const tooltipRef = useRef(null);
  const [position, setPosition] = useState({ left: 0, top: 0 });

  useEffect(() => {
    if (isVisible && tooltipRef.current) {
      const container = tooltipRef.current.parentElement;
      if (container) {
        const rect = container.getBoundingClientRect();
        const tooltipWidth = 170; // Approximate tooltip width

        setPosition({
          left: rect.left - tooltipWidth - 12, // 12px gap from button
          top: rect.top + rect.height / 2 - 20, // Center vertically, adjust for tooltip height
        });
      }
    }
  }, [isVisible]);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      ref={tooltipRef}
      className="save-tooltip"
      style={{
        left: `${position.left}px`,
        top: `${position.top}px`,
      }}
    >
      <div className="save-tooltip__content" onClick={onSignInClick}>
        Sign in to save articles
      </div>
    </div>
  );
};

export default SaveTooltip;
