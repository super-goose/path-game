import React, { useCallback, useMemo, useState } from "react";
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

  const changeSize = useCallback(
    (dimension) => {
      const newSize = {
        width: dimension,
        height: dimension,
      };

      dispatch(changeDimensions(newSize));
      setMenuExpanded(false);
    },
    [dispatch]
  );

  const menuOptions = useMemo(() => {
    return [
      {
        display: "new game",
        onClick: () => {
          dispatch({ type: "newgame" });
          setMenuExpanded(false);
        },
      },
      {
        display: "game over state on",
        onClick: () => {
          dispatch(setGameOver(true));
          setMenuExpanded(false);
        },
      },
      { display: "change to 4x4", onClick: () => changeSize(4) },
      { display: "change to 5x5", onClick: () => changeSize(5) },
      { display: "change to 8x8", onClick: () => changeSize(8) },
      { display: "change to 9x9", onClick: () => changeSize(9) },
    ];
  }, [changeSize, dispatch]);

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
            {menuOptions.map(({ display, onClick }) => (
              <div
                key={`menu-item-${display}`}
                className={[style.menuItem]}
                onClick={onClick}
              >
                {display}
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};
