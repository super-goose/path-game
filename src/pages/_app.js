"use client";
import "@/styles/globals.css";

import { Comfortaa } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const comfortaa = Comfortaa({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <div className={comfortaa.className} suppressHydrationWarning>
      <Component {...pageProps} />
    </div>
  );
}
