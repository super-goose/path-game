import React, { useState } from "react";
import { Tile } from "../tile";
import { ControlButton } from "./control-button";
import { useSelector } from "react-redux";
import styles from "./next-tile.module.css";
import { TILE_SIZE } from "@/utils/canvas-drawing";
import { rotateCCW, rotateCW } from "@/state/slices/hand";

const getHand = ({ hand }) => hand;

const TileSpace = ({ tile, sprites, index, rotateCCW, rotateCW, playTile }) => (
  <div className={`tile-space ${styles.tileSpace}`}>
    {/* <ControlButton direction="cw" onClick={() => rotateCW(index)} /> */}
    <div
      style={{ width: TILE_SIZE, height: TILE_SIZE, backgroundColor: "white" }}
    >
      <svg viewBox="0, 0, 100, 100">
        <Tile definition={tile} onClick={() => playTile(index)} />
      </svg>
    </div>

    {/* <ControlButton direction="ccw" onClick={() => rotateCCW(index)} /> */}
  </div>
);

export const NextUp = ({ sprites, playTile }) => {
  const [index, setIndex] = useState(0);
  const hand = useSelector(getHand);

  return (
    <section className={`container ${styles.nextTileContainer}`}>
      <ControlButton direction="l" onClick={() => rotateCCW(index)} />
      <ControlButton direction="ccw" onClick={() => rotateCCW(index)} />
      <div className={styles.nextTileTileContainer}>
        {hand.map((tile, i) => (
          <TileSpace
            key={`tilespace-${tile.order.join("-")}`}
            index={i}
            sprites={sprites}
            tile={tile}
            rotateCCW={rotateCCW}
            rotateCW={rotateCW}
            // playTile={playTileq}
          />
        ))}
      </div>
      <ControlButton direction="cw" onClick={() => rotateCCW(index)} />
      <ControlButton direction="r" onClick={() => rotateCCW(index)} />
    </section>
  );
};
