"use client";

import React, { useCallback, useMemo, useState } from "react";
import { ControlButton } from "./control-button";
import { useDispatch, useSelector } from "react-redux";
import styles from "./next-tile.module.css";
import {
  getHand,
  removeTileFromHand,
  rotateCCW,
  rotateCW,
} from "@/state/slices/hand";
import { TileSpace } from "./tile-space";
import { placeTileOnBoard } from "@/state/slices/board";
import { NextTileOption, NextTileSection } from "./wrappers";

const calculateDisplayIndex = (index, handLength, i) => {
  return (handLength + index + 1 + i) % handLength;
};

export const NextUp = ({}) => {
  const [index, setIndex] = useState(0);
  const [slidingUp, setSlidingUp] = useState(false);
  const [slidingDown, setSlidingDown] = useState(false);
  const [rotatingCW, setRotatingCW] = useState(false);
  const [rotatingCCW, setRotatingCCW] = useState(false);
  const hand = useSelector(getHand);
  const dispatch = useDispatch();

  const rotateCurrentCCW = useCallback(() => {
    // TODO: you need this link here to prevent the flash:
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/animationend_event
    if (rotatingCCW) {
      return;
    }
    setRotatingCCW(true);
    setTimeout(() => {
      dispatch(rotateCCW(index));
      setRotatingCCW(false);
    }, 500);
  }, [dispatch, index, rotatingCCW]);

  const rotateCurrentCW = useCallback(() => {
    if (rotatingCW) {
      return;
    }
    setRotatingCW(true);
    setTimeout(() => {
      dispatch(rotateCW(index));
      setRotatingCW(false);
    }, 500);
  }, [dispatch, index, rotatingCW]);

  const slideUp = useCallback(() => {
    if (slidingUp || slidingDown) {
      return;
    }
    setSlidingUp(true);
    setTimeout(() => {
      setSlidingUp(false);
      setIndex((index + hand.length + 1) % hand.length);
    }, 500);
  }, [hand.length, index, slidingDown, slidingUp]);

  const slideDown = useCallback(() => {
    if (slidingUp || slidingDown) {
      return;
    }
    setSlidingDown(true);
    setTimeout(() => {
      setSlidingDown(false);
      setIndex((index + hand.length - 1) % hand.length);
    }, 500);
  }, [hand.length, index, slidingDown, slidingUp]);

  const playTile = useCallback(() => {
    const tileToPlay = JSON.parse(JSON.stringify(hand[index]));

    dispatch(removeTileFromHand(index));
    dispatch(placeTileOnBoard(tileToPlay));
  }, [dispatch, hand, index]);

  const displayHandCarousel = useMemo(() => {
    const displayHand = [];
    for (let i = 0, l = 5; i < l; i++) {
      const currentIndex = calculateDisplayIndex(index, hand.length, i);
      displayHand.push(hand[currentIndex]);
    }
    return displayHand;
  }, [hand, index]);

  return (
    <>
      <section className={`container ${styles.nextTileContainer}`}>
        <ControlButton direction="prev" onClick={slideUp} />
        <ControlButton direction="ccw" onClick={rotateCurrentCCW} />
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
                isFocused={i === 2}
                isRotatingCCW={rotatingCCW && i === 2}
                isRotatingCW={rotatingCW && i === 2}
                tile={tile}
                playTile={playTile}
              />
            ))}
          </div>
        </div>
        <ControlButton direction="cw" onClick={rotateCurrentCW} />
        <ControlButton direction="next" onClick={slideDown} />
      </section>
      <NextTileSection>
        {hand.map((tile, i) => (
          <NextTileOption key={`tile-option-${JSON.stringify(tile)}-${index}`}>
            <div>
              <ControlButton direction="ccw" onClick={rotateCurrentCCW} />
            </div>
            <TileSpace
              key={`tilespace-${tile.order.join("-")}-${i}`}
              index={i}
              isFocused={i === 2}
              isRotatingCCW={rotatingCCW && i === 2}
              isRotatingCW={rotatingCW && i === 2}
              tile={tile}
              playTile={playTile}
            />
            <div>
              <ControlButton direction="cw" onClick={rotateCurrentCW} />
            </div>
          </NextTileOption>
        ))}
      </NextTileSection>
    </>
  );
};
