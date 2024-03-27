import React, { useState } from "react";
import { changeSize, getOtherSize } from "../../utils/canvas-drawing";
import style from "./header.module.css";

export const Header = ({ score }) => {
  const [menuExpanded, setMenuExpanded] = useState(false);

  return (
    <header className={style.headerContainer}>
      <div className={[style.element, style.instruction]}>Make a long path</div>
      <div className={[style.element, style.score]}>
        <span>score: </span>
        <span>{score}</span>
      </div>
      <div>
        <div
          className={[style.element, style.menuButton]}
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
