"use client";

import React, { useEffect, useMemo } from "react";
// import { Inter } from "next/font/google";
import { useDispatch, useSelector } from "react-redux";

import { getNext } from "@/state/slices/board";
import { keyToCoords } from "@/utils/transformers";
import { getDimensions, setGameOver } from "@/state/slices/settings";
import { Header } from "@/components/header";
import { Board } from "@/components/board";
import { NextUp } from "@/components/next-tile";

import styles from "@/styles/home.module.css";
import { Modal } from "../modal";

// const inter = Inter({ subsets: ["latin"] });

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
      dispatch(setGameOver(true));
      console.log("these are off the board:", nextCoords);
    }
  }, [nextCoords, size]);

  return (
    <>
      <main className={styles.main}>
        <Header />
        <Board nextCoords={nextCoords} />
        <NextUp />
        <Modal />
      </main>
    </>
  );
};
