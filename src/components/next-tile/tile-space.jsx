"use client";

import React, { useCallback } from "react";
import { Tile } from "../tile";

import styles from "./next-tile.module.css";
import classNames from "classnames";

export const TileSpace = ({
  tile,
  index,
  playTile,
  isRotatingCCW,
  isRotatingCW,
  isFocused,
}) => {
  const onClickTile = useCallback(() => {
    if (!isFocused) {
      return;
    }
    playTile(index);
  }, [isFocused, playTile, index]);

  return (
    <div
      onClick={onClickTile}
      className={`${styles.tileSpace} ${
        isRotatingCW
          ? styles.rotatingCW
          : isRotatingCCW
            ? styles.rotatingCCW
            : ""
      }`}
    >
      <div
        className={classNames(
          styles.tileSvgContainer,
          isFocused ? styles.focusedTile : undefined,
        )}
      >
        <svg viewBox="0, 0, 100, 100">
          <Tile definition={tile} />
        </svg>
      </div>
    </div>
  );
};
