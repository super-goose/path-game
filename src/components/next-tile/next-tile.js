import React, { useCallback, useMemo, useState } from "react";
import { Tile } from "../tile";
import { ControlButton } from "./control-button";
import { useSelector } from "react-redux";
import styles from "./next-tile.module.css";
import { TILE_SIZE } from "@/utils/canvas-drawing";
import { rotateCCW, rotateCW } from "@/state/slices/hand";
import { getHand } from "@/state/reducer/hand";

const TileSpace = ({ tile, index, playTile }) => (
  <div className={`tile-space ${styles.tileSpace}`}>
    <div
      style={{ width: TILE_SIZE, height: TILE_SIZE, backgroundColor: "white" }}
    >
      <svg viewBox="0, 0, 100, 100">
        <Tile definition={tile} onClick={() => playTile(index)} />
      </svg>
    </div>
  </div>
);

const calculateDisplayIndex = (index, handLength, i) => {
  return (handLength + index + 1 + i) % handLength;
};

export const NextUp = ({ sprites, playTile }) => {
  const [index, setIndex] = useState(0);
  const hand = useSelector(getHand);
  const [slidingUp, setSlidingUp] = useState(false);
  const [slidingDown, setSlidingDown] = useState(false);

  const slideUp = useCallback(() => {
    if (slidingUp || slidingDown) {
      return;
    }
    setSlidingUp(true);
    setTimeout(() => {
      setSlidingUp(false);
      setIndex((index + 1) % hand.length);
    }, 500);
  }, [hand.length, index, slidingDown, slidingUp]);

  const slideDown = useCallback(() => {
    if (slidingUp || slidingDown) {
      return;
    }
    setSlidingDown(true);
    setTimeout(() => {
      setSlidingDown(false);
      setIndex((index - 1) % hand.length);
    }, 500);
  }, [hand.length, index, slidingDown, slidingUp]);

  const displayHandCarousel = useMemo(() => {
    const displayHand = [];
    for (let i = 0, l = 5; i < l; i++) {
      const currentIndex = calculateDisplayIndex(index, hand.length, i);
      displayHand.push(hand[currentIndex]);
    }
    return displayHand;
  }, [hand, index]);

  return (
    <section className={`container ${styles.nextTileContainer}`}>
      <ControlButton direction="prev" onClick={slideUp} />
      <ControlButton direction="ccw" onClick={() => rotateCCW(index)} />
      <div className={styles.nextTileTileContainer}>
        <div
          className={
            slidingUp
              ? styles.slidingUp
              : slidingDown
              ? styles.slidingDown
              : undefined
          }
        >
          {displayHandCarousel.map((tile, i) => (
            <TileSpace
              key={`tilespace-${tile.order.join("-")}-${i}`}
              index={i}
              sprites={sprites}
              tile={tile}
              rotateCCW={rotateCCW}
              rotateCW={rotateCW}
              // playTile={playTileq}
            />
          ))}
        </div>
      </div>
      <ControlButton direction="cw" onClick={() => rotateCCW(index)} />
      <ControlButton direction="next" onClick={slideDown} />
    </section>
  );
};
