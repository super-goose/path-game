"use client";

import { Inter } from "next/font/google";
import { Header } from "@/components/header";
import { Board } from "@/components/board";
import { NextUp } from "@/components/next-tile";
import styles from "@/styles/home.module.css";

const inter = Inter({ subsets: ["latin"] });

export const Game = () => {
  return (
    <main className={`${styles.main} ${inter.className}`}>
      <Header />
      <Board />
      <NextUp />
    </main>
  );
};
