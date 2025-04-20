"use client";

import React from "react";
import { Tile } from "../tile";
import { TILE_SIZE } from "@/utils/canvas-drawing";

import styles from "./next-tile.module.css";

export const TileSpace = ({
  tile,
  index,
  playTile,
  isRotatingCCW,
  isRotatingCW,
}) => (
  <div
    className={`tile-space ${styles.tileSpace} ${
      isRotatingCW ? styles.rotatingCW : isRotatingCCW ? styles.rotatingCCW : ""
    }`}
  >
    <div
      style={{ width: TILE_SIZE, height: TILE_SIZE, backgroundColor: "white" }}
    >
      <svg viewBox="0, 0, 100, 100">
        <Tile definition={tile} onClick={() => playTile(index)} />
      </svg>
    </div>
  </div>
);
