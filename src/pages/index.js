"use client";

import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/home.module.css";
import { Header } from "@/components/header";
import { Board } from "@/components/board";
import { NextUp } from "@/components/next-tile";
import { Provider } from "react-redux";
import store from "@/state/store";
import NoSSR from "@/components/no-ssr/no-ssr";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Provider store={store}>
      <Head>
        <title>Longest Path</title>
        <meta name="description" content="Path game" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NoSSR>
        <main className={`${styles.main} ${inter.className}`}>
          <Header />
          <Board />
          <NextUp />
        </main>
      </NoSSR>
    </Provider>
  );
}
