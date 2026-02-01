"use client";
// import "@/styles/globals.css";

// import { Comfortaa } from "next/font/google";

// // If loading a variable font, you don't need to specify the font weight
// const comfortaa = Comfortaa({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  // Remove next/font/google import and use a local font via CSS instead.
  // The font file should be referenced in your global CSS.
  /* In your globals.css file, add: */

  return (
    <div suppressHydrationWarning>
      <Component {...pageProps} />
    </div>
  );
}
