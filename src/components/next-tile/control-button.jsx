import React from "react";
import style from "./control-button.module.css";

const ARC_PATH = "M 65,35 A 25,25 0,1,1 35,35";
const ROTATE_ARROW_PATH = "M 33,35 L 36,34 L 35,37 Z";
const ROTATE_ARROW_PATH_SHADOW = "M 30,35 L 36,34 L 35,40 Z";
const RotateArrow = ({ direction }) => (
  <svg
    style={
      direction === "CCW"
        ? {
            transform: "scaleX(-1)",
          }
        : {}
    }
    viewBox="0, 0, 100, 100"
  >
    <g>
      <path
        id={"idShadow"}
        d={ARC_PATH}
        fill="none"
        strokeWidth={15}
        stroke="#ccc"
        // stroke="#90ba9d"
        strokeOpacity={1}
      />
      <path
        id={"idShadow3"}
        d={ROTATE_ARROW_PATH_SHADOW}
        fill="none"
        strokeWidth={20}
        stroke="#ccc"
        // stroke="#90ba9d"
        strokeOpacity={1}
        transform="rotate(-15deg)"
      />
      {/* <path
        id={"idMain"}
        d={ARC_PATH}
        fill="none"
        strokeWidth={10}
        stroke="#ccc"
        // stroke="#d1a97f"
        strokeOpacity={1}
      />
      <path
        id={"idMain3"}
        d={ROTATE_ARROW_PATH}
        fill="none"
        strokeWidth={15}
        stroke="#ccc"
        // stroke="#d1a97f"
        strokeOpacity={1}
        transform="rotate(-15deg)"
      /> */}
    </g>
  </svg>
);

const LINE_PATH = "M 50,90 L 50,25";
const LINE_ARROW_PATH = "M 50,10 L 75,40 L 25,40 Z";

const SwitchArrow = ({ direction }) => (
  <svg
    style={
      direction === "DOWN"
        ? {
            transform: "scaleY(-1)",
          }
        : {}
    }
    viewBox="0, 0, 100, 100"
  >
    <g>
      <path
        id={"idShadow"}
        d={LINE_PATH}
        fill="none"
        strokeWidth={15}
        stroke="#ccc"
        // stroke="#90ba9d"
        strokeOpacity={1}
      />
      <path
        id={"idShadow3"}
        d={LINE_ARROW_PATH}
        // fill="none"
        fill="#ccc"
        strokeWidth={1}
        stroke="#ccc"
        // stroke="#90ba9d"
        strokeOpacity={1}
        // transform="rotate(-15deg)"
      />
    </g>
  </svg>
);

const SYMBOL = {
  // cw: "↻",
  cw: <RotateArrow direction="CW" />,
  ccw: <RotateArrow direction="CCW" />,
  prev: <SwitchArrow direction="UP" />,
  next: <SwitchArrow direction="DOWN" />,
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
