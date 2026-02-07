import React from "react";
import style from "./control-button.module.css";
import { ControlButtonButton } from "./wrappers";

const ARC_PATH = "M 65,35 A 25,25 0,1,1 35,35";
const ARC_PATH_SHADOW_ENDCAP = "M 57.5,42.5 L 70.3,25.7";
const ROTATE_ARROW_PATH = "M 15,25 L 55,15 L 45,55 Z";
const RotateArrow = ({ direction }) => (
  <svg
    style={
      direction === "CCW"
        ? {
            transform: "scaleY(-1)",
          }
        : {}
    }
    viewBox="0, 0, 100, 100"
  >
    <g>
      <path
        d={ARC_PATH_SHADOW_ENDCAP}
        fill="none"
        strokeWidth={3}
        stroke="var(--accent-color)"
        strokeOpacity={1}
      />
      <path
        d={ARC_PATH}
        fill="none"
        strokeWidth={21}
        stroke="var(--accent-color)"
        strokeOpacity={1}
      />
      <path
        d={ARC_PATH}
        fill="none"
        strokeWidth={15}
        stroke="var(--light-background)"
        strokeOpacity={1}
      />
      <path
        d={ROTATE_ARROW_PATH}
        fill="var(--light-background)"
        strokeWidth={3}
        stroke="var(--accent-color)"
        strokeOpacity={1}
        transform="rotate(-15deg)"
      />
    </g>
  </svg>
);

const SYMBOL = {
  cw: <RotateArrow direction="CW" />,
  ccw: <RotateArrow direction="CCW" />,
};

export const ControlButton = ({ direction, onClick }) => (
  <ControlButtonButton
    type="button"
    className={[`rotate-icon ${direction} ${style.controlButton}`]}
    onClick={onClick}
  >
    {SYMBOL[direction]}
  </ControlButtonButton>
);
