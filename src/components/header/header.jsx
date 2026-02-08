import React, { useCallback, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getScore, changeDimensions } from "@/state/slices/board";
import { setGameOver } from "@/state/slices/settings";

import {
  Hamburger,
  HeaderContainer,
  Instruction,
  MenuButton,
  MenuContainer,
  MenuItem,
  MenuOverlay,
  Score,
} from "./wrappers";

export const Header = ({}) => {
  const [menuExpanded, setMenuExpanded] = useState(false);
  const dispatch = useDispatch();

  const score = useSelector(getScore);

  const changeSize = useCallback(
    (dimension) => {
      const newSize = {
        width: dimension,
        height: dimension,
      };

      dispatch(changeDimensions(newSize));
      setMenuExpanded(false);
    },
    [dispatch],
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
    <HeaderContainer>
      <Instruction>Make a long path</Instruction>
      <Score>
        <span>score: </span>
        <span style={{ marginLeft: ".5rem" }}>{score}</span>
      </Score>
      <div>
        <MenuButton onClick={() => setMenuExpanded(!menuExpanded)}>
          <Hamburger />
          <Hamburger />
          <Hamburger />
        </MenuButton>
        {menuExpanded && (
          <MenuOverlay onClick={() => setMenuExpanded(false)}>
            <MenuContainer>
              {menuOptions.map(({ display, onClick }) => (
                <MenuItem key={`menu-item-${display}`} onClick={onClick}>
                  {display}
                </MenuItem>
              ))}
            </MenuContainer>
          </MenuOverlay>
        )}
      </div>
    </HeaderContainer>
  );
};
