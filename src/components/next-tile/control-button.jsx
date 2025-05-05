import React from "react";
import style from "./control-button.module.css";

const SYMBOL = {
  cw: "↻",
  ccw: "↺",
  prev: "↑",
  next: "↓",
};

export const ControlButton = ({ direction, onClick }) => (
  <button
    type="button"
    className={[`rotate-icon ${direction} ${style.controlButton}`]}
    onClick={onClick}
  >
    {SYMBOL[direction]}
  </button>
);
