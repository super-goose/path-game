"use client";

import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getDimensions, getNext } from "@/state/slices/board";
import { keyToCoords } from "@/utils/transformers";
import { setGameOver } from "@/state/slices/settings";
import { Header } from "@/components/header";
import { Board } from "@/components/board";
import { NextUp } from "@/components/next-tile";
import { Modal } from "@/components/modal";

import styles from "@/components/game/game.module.css";

/**
 * COLORS??
  light="green" dark="darkgreen"
  light="red" dark="darkred"
  light="blue" dark="darkblue"
  light="yellow" dark="#aaaa00"
  light="#00ffff" dark="#00aaaa"
  light="#ffaa00" dark="#aa6600"
  light="#ff00ff" dark="#aa00aa"





  "--light-background": "#a9d17f",
          "--blackish": "#222222",
          "--highlight-color": "#ba909d",
          "--accent-color": "#7e3b94",
          "--whitish": "#eeeeff",
Second conversion (swap red and blue channels):

"--light-background": "#7fa9d1",
          "--blackish": "#222222",
          "--highlight-color": "#9dba90",
          "--accent-color": "#943b7e",
          "--whitish": "#ffeeed",
 */
export const Game = () => {
  const dispatch = useDispatch();
  const next = useSelector(getNext);
  const size = useSelector(getDimensions);

  const nextCoords = useMemo(() => {
    return keyToCoords(next);
  }, [next]);

  useEffect(() => {
    const { x, y } = nextCoords;
    if (x < 0 || x >= size[0] || y < 0 || y >= size[1]) {
      const t = setTimeout(() => {
        dispatch(setGameOver(true));
      }, 1000);

      return () => clearTimeout(t);
    }
  }, [dispatch, nextCoords, size]);

  return (
    <>
      <main
        style={{
          "--light-background": "#d1a97f",
          "--blackish": "#222222",
          "--highlight-color": "#90ba9d",
          "--accent-color": "#3b7e94",
          "--whitish": "#eeeeff",

          // "--light-background": "#a9d17f",
          // "--blackish": "#222222",
          // "--highlight-color": "#ba909d",
          // "--accent-color": "#7e3b94",
          // "--whitish": "#eeeeff",
        }}
        className={styles.main}
      >
        <Header />
        <div className={styles.gameBoardContainer}>
          <Board nextCoords={nextCoords} />
          <NextUp />
        </div>
        <Modal />
      </main>
    </>
  );
};
