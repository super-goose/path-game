import React from "react";

export const RotateButton = ({ direction, onClick }) => (
  <button
    type="button"
    className={`rotate-icon ${direction}`}
    onClick={onClick}
  >
    {" "}
  </button>
);
