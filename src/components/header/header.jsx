import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getScore } from "@/state/slices/board";
import {
  changeDimensions,
  getDimensions,
  setGameOver,
} from "@/state/slices/settings";
import style from "./header.module.css";

export const Header = ({}) => {
  const [menuExpanded, setMenuExpanded] = useState(false);
  const dispatch = useDispatch();

  const score = useSelector(getScore);
  const size = useSelector(getDimensions);

  const changeSize = useCallback(() => {
    const newSize = {};
    if (size[0] === 4) {
      newSize.width = 8;
      newSize.height = 8;
    } else {
      newSize.width = 4;
      newSize.height = 4;
    }

    dispatch(changeDimensions(newSize));
  }, [dispatch, size]);

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
              onClick={changeSize}
            >{`change to ${size[0] === 4 ? "8x8" : "4x4"}`}</div>
            <div
              className={[style.menuItem]}
              onClick={() => {
                dispatch(setGameOver(true));
                setMenuExpanded(false);
              }}
            >
              game over state on
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
