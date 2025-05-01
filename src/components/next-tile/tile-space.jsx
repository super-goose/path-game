"use client";

import React from "react";
import { Tile } from "../tile";

import styles from "./next-tile.module.css";

const TILE_SIZE = 64; // move this elsewhere??

export const TileSpace = ({
  tile,
  index,
  playTile,
  isRotatingCCW,
  isRotatingCW,
}) => (
  <div
    onClick={() => playTile(index)}
    className={`tile-space ${styles.tileSpace} ${
      isRotatingCW ? styles.rotatingCW : isRotatingCCW ? styles.rotatingCCW : ""
    }`}
  >
    <div
      style={{
        width: TILE_SIZE,
        height: TILE_SIZE,
        backgroundColor: "#d1a97f",
      }}
    >
      <svg viewBox="0, 0, 100, 100">
        <Tile definition={tile} />
      </svg>
    </div>
  </div>
);
