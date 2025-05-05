"use client";

import React, { useEffect, useMemo } from "react";
// import { Inter } from "next/font/google";
import { useDispatch, useSelector } from "react-redux";

import { getNext } from "@/state/slices/board";
import { keyToCoords } from "@/utils/transformers";
import {
  getDimensions,
  getGameOver,
  setGameOver,
} from "@/state/slices/settings";
import { Header } from "@/components/header";
import { Board } from "@/components/board";
import { NextUp } from "@/components/next-tile";
import { Modal } from "../modal";

import styles from "@/styles/home.module.css";

export const Game = () => {
  const dispatch = useDispatch();
  const next = useSelector(getNext);
  const size = useSelector(getDimensions);
  const gameOver = useSelector(getGameOver);

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
      <main className={styles.main}>
        <Header />
        <div className={styles.gameBoardContainer}>
          <Board nextCoords={nextCoords} />
          <NextUp />
        </div>
        {gameOver && <Modal />}
      </main>
    </>
  );
};
