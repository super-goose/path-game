import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/home.module.css";
import { Header } from "@/components/header";
import { Board } from "@/components/board";
import { NextUp } from "@/components/next-tile";
import { Provider, useSelector } from "react-redux";
import { getHand, rotateCCW, rotateCW } from "@/state/reducer/hand";
import store from "@/state/store";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const hand = useSelector(getHand);
  return (
    <Provider store={store}>
      <Head>
        <title>Longest Path</title>
        <meta name="description" content="Path game" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Header score={666} />
        <Board />
        <NextUp
          hand={hand}
          rotateCCW={rotateCCW}
          rotateCW={rotateCW}
          playTile={console.log}
        />
      </main>
    </Provider>
  );
}
