"use client";

import Head from "next/head";
import { Provider } from "react-redux";
import store from "@/state/store";
import NoSSR from "@/components/no-ssr/no-ssr";
import { Game } from "@/components/game";

export default function Home() {
  return (
    <Provider store={store}>
      <Head>
        <title>Longest Path</title>
        <meta name="description" content="Path game" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/globals.css" />
      </Head>
      <NoSSR>
        <Game />
      </NoSSR>
    </Provider>
  );
}
