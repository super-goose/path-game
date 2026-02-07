"use client";

import React, { useCallback } from "react";
import { Tile } from "../tile";

import { TileSpaceContainer, TileSvgContainer } from "./wrappers";

export const TileSpace = ({
  tile,
  index,
  playTile,
  isRotatingCCW,
  isRotatingCW,
}) => {
  const onClickTile = useCallback(() => {
    playTile(index);
  }, [playTile, index]);

  return (
    <TileSpaceContainer
      onClick={onClickTile}
      $rotatingCW={isRotatingCW}
      $rotatingCCW={isRotatingCCW}
    >
      <TileSvgContainer>
        <svg viewBox="0, 0, 100, 100">
          <Tile definition={tile} />
        </svg>
      </TileSvgContainer>
    </TileSpaceContainer>
  );
};
