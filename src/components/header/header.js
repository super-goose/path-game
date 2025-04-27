import React, { useState } from "react";
import { changeSize, getOtherSize } from "../../utils/canvas-drawing";
import style from "./header.module.css";
import { useSelector } from "react-redux";
import { getScore } from "@/state/slices/board";
import { getDimensions } from "@/state/slices/settings";

export const Header = ({}) => {
  const [menuExpanded, setMenuExpanded] = useState(false);
  const score = useSelector(getScore);
  const size = useSelector(getDimensions);

  return (
    <header className={style.headerContainer}>
      <div className={[style.headerElement, style.instruction].join(" ")}>
        Make a long path
      </div>
      <div className={[style.headerElement, style.score].join(" ")}>
        <span>score: </span>
        <span style={{ marginLeft: ".5rem" }}>{score}</span>
      </div>
      <div>
        <div
          className={[style.headerElement, style.menuButton].join(" ")}
          onClick={() => setMenuExpanded(!menuExpanded)}
        >
          <div className={[style.hamburger]} />
          <div className={[style.hamburger]} />
          <div className={[style.hamburger]} />
        </div>
        {menuExpanded && (
          <div className={[style.menuContainer]}>
            <div
              className={[style.menuItem]}
              onClick={() => window.location.reload()}
            >
              new game
            </div>
            <div
              className={[style.menuItem]}
              onClick={() => changeSize()}
            >{`change to ${getOtherSize()}`}</div>
          </div>
        )}
      </div>
    </header>
  );
};
