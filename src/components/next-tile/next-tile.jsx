"use client";

import React, { useCallback, useMemo, useState } from "react";
import { ControlButton } from "./control-button";
import { useDispatch, useSelector } from "react-redux";
import {
  getHand,
  removeTileFromHand,
  rotateCCW,
  rotateCW,
} from "@/state/slices/hand";
import { TileSpace } from "./tile-space";
import { placeTileOnBoard } from "@/state/slices/board";
import { NextTileOption, NextTileSection } from "./wrappers";

export const NextUp = ({}) => {
  const [rotatingCW, setRotatingCW] = useState(-1);
  const [rotatingCCW, setRotatingCCW] = useState(-1);
  const hand = useSelector(getHand);
  const dispatch = useDispatch();

  const rotateCurrentCCW = useCallback(
    (index) => {
      // TODO: you need this link here to prevent the flash:
      // https://developer.mozilla.org/en-US/docs/Web/API/Element/animationend_event
      if (rotatingCCW !== -1) {
        return;
      }
      console.log("set rotating on");
      setRotatingCCW(index);
      setTimeout(() => {
        dispatch(rotateCCW(index));
        console.log("set rotating off");
        setRotatingCCW(-1);
      }, 498);
    },
    [dispatch, rotatingCCW],
  );

  const rotateCurrentCW = useCallback(
    (index) => {
      if (rotatingCW !== -1) {
        return;
      }
      console.log("set rotating on");
      setRotatingCW(index);
      setTimeout(() => {
        dispatch(rotateCW(index));
        console.log("set rotating off");
        setRotatingCW(-1);
      }, 498);
    },
    [dispatch, rotatingCW],
  );

  const playTile = useCallback(
    (index) => {
      const tileToPlay = JSON.parse(JSON.stringify(hand[index]));

      dispatch(removeTileFromHand(index));
      dispatch(placeTileOnBoard(tileToPlay));
    },
    [dispatch, hand],
  );

  return (
    <NextTileSection>
      {hand.map((tile, i) => (
        <NextTileOption key={`tile-option-${JSON.stringify(tile)}-${i}`}>
          <div>
            <ControlButton
              direction="ccw"
              onClick={() => rotateCurrentCCW(i)}
            />
          </div>
          <TileSpace
            key={`tilespace-${tile.order.join("-")}-${i}`}
            index={i}
            isRotatingCCW={rotatingCCW === i}
            isRotatingCW={rotatingCW === i}
            tile={tile}
            playTile={playTile}
          />
          <div>
            <ControlButton direction="cw" onClick={() => rotateCurrentCW(i)} />
          </div>
        </NextTileOption>
      ))}
    </NextTileSection>
  );
};
